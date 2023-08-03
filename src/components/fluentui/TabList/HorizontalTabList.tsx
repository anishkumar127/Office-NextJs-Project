'use client';
import * as React from "react";
import '../../../styles/styles.css'
import {
  makeStyles,
  SelectTabData,
  SelectTabEvent,
  shorthands,
  Tab,
  TabList,
  TabValue,
  tokens,
} from "@fluentui/react-components";
import { tab, tabValue } from "../Table/table-static-data/table-static-data";

const useStyles = makeStyles({
  root: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    ...shorthands.padding("10px", "4px"),
    rowGap: "20px",
    paddingLeft: '4px',
    paddingTop:"1px"
  },
  TabStyle: {
    backgroundColor: "black",
    '&:hover':{
      backgroundColor:"#e6e6e6"
    },
    marginRight:'2px',
    ...shorthands.border('1px solid black'),
    '& span': {
      color: "#ffffff !important",
    },
    '&:hover span': {
      color: '#333 !important',
    },
  },
  paddingRemove: {
    paddingLeft: '4px',
  }
});
interface HorizontalTabListProps {
  values: {
    selectedValue?: TabValue;
    setSelectedValue?: React.Dispatch<React.SetStateAction<TabValue | undefined>>;
  };
}
const HorizontalTabList = (props: HorizontalTabListProps) => {
  const { selectedValue, setSelectedValue } = props.values;
  const onTabSelect = (event: SelectTabEvent, data: SelectTabData) => {
    if (setSelectedValue) {
      setSelectedValue(data.value);
    }
  };

  const styles = useStyles();
  return (
    <div className={styles.root}>
      <TabList selectedValue={selectedValue} onTabSelect={onTabSelect}>
        {
          tab?.map((item, idx) => {
            return (
              <Tab className={styles.TabStyle} key={idx} value={item}>{tabValue[idx]}</Tab>
            )
          })
        }
      </TabList>
    </div>
  );
};

export { HorizontalTabList };