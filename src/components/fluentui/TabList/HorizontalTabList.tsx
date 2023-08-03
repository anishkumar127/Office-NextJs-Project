'use client';
import * as React from "react";
import {
  makeStyles,
  SelectTabData,
  SelectTabEvent,
  shorthands,
  Tab,
  TabList,
  TabValue,
} from "@fluentui/react-components";
import { tab, tabValue } from "../Table/table-static-data/table-static-data";

const useStyles = makeStyles({
  root: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    ...shorthands.padding("50px", "20px"),
    rowGap: "20px",
  },
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
              <Tab key={idx} value={item}>{tabValue[idx]}</Tab>
            )
          })
        }
      </TabList>
    </div>
  );
};

export { HorizontalTabList };