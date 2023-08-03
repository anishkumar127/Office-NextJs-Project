'use client';
import * as React from "react";
import {
  TableBody,
  TableCell,
  TableRow,
  Table,
  TableHeader,
  TableHeaderCell,
} from "@fluentui/react-components";

interface TablesProps {
  values: {
    tableRowData: any;
    tableColumnData: any[];
  }
}
const Tables = (props: TablesProps) => {
  const { tableRowData, tableColumnData } = props.values;
  return (
    <Table arial-label="Default table">
      <TableHeader>
        <TableRow>
          {tableColumnData?.map((column) => (
            <TableHeaderCell key={column.columnKey}>
              {column.label}
            </TableHeaderCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableRowData?.map((item: any[], idx: number) => {
          const entries = Object.entries(item);
          return (
            <TableRow key={idx}>
              {entries.map(([key, value]: any) => (
                <TableCell key={key}>
                  {value.label}
                </TableCell>
              ))}

            </TableRow>
          )
        })}
      </TableBody>
    </Table>

  );
};

export { Tables };