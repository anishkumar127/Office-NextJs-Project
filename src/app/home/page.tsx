'use client';
import { Tables, HorizontalTabList } from '@/components/GlobalProvider/GlobalProvider';
import { TabValue } from '@fluentui/react-components';
import dynamic from 'next/dynamic';
// const DynamicHorizontalTabList = dynamic(() => import('@/components/TabList/HorizontalTabList').then(mod => mod.HorizontalTabList), {ssr: false});
import { useEffect, useState } from "react";

const HomeResuable = () => {
  const [selectedValue, setSelectedValue] = useState<TabValue>('tab2');
  console.log(selectedValue);
  const [tableRowData, setTableRowData] = useState<any[]>([]);
  const [tableColumnData, setTableColumnData] = useState<any[]>([]);

  // <--------------- AllSyncTab - Based on Select Tab Value ----------------->
  const allSyncTab = () => {
    const value = selectedValue;
    switch (value) {
      case 'tab1': {
        return myRequest();
      }
      case 'tab2': {
        return openRequest();
      }
      case 'tab3': {
        return closedRequest();
      }
      default:
        return;
    }
  }

  // < ---------- Trigger UseEffect Based On Selected Tab -------------------->
  useEffect(() => {
    allSyncTab();
  }, [selectedValue]);

  // <-------------- Calling - [ Based on Select Tab  - Table Data ] --------->
  const myRequest = () => {
    console.log("MR");
    // items
    const items = [
      {
        Teams: { label: "Human Resources" },
        'TicketID': { label: "SR#1001" },
        Title: { label: "Anish", timestamp: 1 },
        Status: { label: "Unassigned" },
        Priority: { label: "High" },
        Services: { label: "Address change" },
        'Created Date': { label: "03/08/2023 12:26 " },
        'Created By': { label: "Anish Bishnoi" },
        RequestType: { label: "Question" },
      },
      {
        Teams: { label: "Human Resources" },
        'TicketID': { label: "SR#1001" },
        Title: { label: "Anish", timestamp: 1 },
        Status: { label: "Unassigned" },
        Priority: { label: "High" },
        Services: { label: "Address change" },
        'Created Date': { label: "03/08/2023 12:26 " },
        'Created By': { label: "Anish Bishnoi" },
        RequestType: { label: "Question" },
      }
    ];

    // columns
    const columns = [
      { columnKey: "Teams", label: "Teams" },
      { columnKey: "TicketID", label: "Ticket ID" },
      { columnKey: "Title", label: "Title" },
      { columnKey: "Status", label: "Status" },
      { columnKey: "Priority", label: "Priority" },
      { columnKey: "Services", label: "Services" },
      { columnKey: "Created Date", label: "Created Date" },
      { columnKey: "Created By", label: "Created By" },
      { columnKey: "RequestType", label: "RequestType" },
    ];
    setTableRowData(items);
    setTableColumnData(columns);
  }
  const openRequest = () => {
    console.log("OR");
        // items
        const items = [
          {
            Teams: { label: "Human Resources" },
            'TicketID': { label: "SR#1001" },
            Title: { label: "Anish", timestamp: 1 },
            Status: { label: "Unassigned" },
            Priority: { label: "High" },
            Services: { label: "Address change" },
            'Created Date': { label: "03/08/2023 12:26 " },
            'Created By': { label: "Anish Bishnoi" },
            RequestType: { label: "Question" },
          },
          {
            Teams: { label: "Human Resources" },
            'TicketID': { label: "SR#1001" },
            Title: { label: "Anish", timestamp: 1 },
            Status: { label: "Unassigned" },
            Priority: { label: "High" },
            Services: { label: "Address change" },
            'Created Date': { label: "03/08/2023 12:26 " },
            'Created By': { label: "Anish Bishnoi" },
            RequestType: { label: "Question" },
          }
        ];
    
        // columns
        const columns = [
          { columnKey: "Title", label: "Title" },
          { columnKey: "Teams", label: "Teams" },
          { columnKey: "Status", label: "Status" },
          { columnKey: "TicketID", label: "Ticket ID" },
          { columnKey: "Priority", label: "Priority" },
          { columnKey: "Services", label: "Services" },
          { columnKey: "Created Date", label: "Created Date" },
          { columnKey: "Created By", label: "Created By" },
          { columnKey: "RequestType", label: "RequestType" },
        ];
        setTableRowData(items);
        setTableColumnData(columns);
  }
  const closedRequest = () => {
    console.log("CR");
         // items
        const items = [
          {
            Teams: { label: "Human Resources" },
            'TicketID': { label: "SR#1001" },
            Title: { label: "Anish", timestamp: 1 },
            Status: { label: "Unassigned" },
            Priority: { label: "High" },
            Services: { label: "Address change" },
            'Created Date': { label: "03/08/2023 12:26 " },
            'Created By': { label: "Anish Bishnoi" },
            RequestType: { label: "Question" },
          },
          {
            Teams: { label: "Human Resources" },
            'TicketID': { label: "SR#1001" },
            Title: { label: "Anish", timestamp: 1 },
            Status: { label: "Unassigned" },
            Priority: { label: "High" },
            Services: { label: "Address change" },
            'Created Date': { label: "03/08/2023 12:26 " },
            'Created By': { label: "Anish Bishnoi" },
            RequestType: { label: "Question" },
          }
        ];
    
        // columns
        const columns = [
          { columnKey: "TicketID", label: "Ticket ID" },
          { columnKey: "Title", label: "Title" },
          { columnKey: "Teams", label: "Teams" },
          { columnKey: "Status", label: "Status" },
          { columnKey: "Priority", label: "Priority" },
          { columnKey: "Services", label: "Services" },
          { columnKey: "Created Date", label: "Created Date" },
          { columnKey: "Created By", label: "Created By" },
          { columnKey: "RequestType", label: "RequestType" },
        ];
        setTableRowData(items);
        setTableColumnData(columns);
  }
  return (
    <>
      <HorizontalTabList values={{ selectedValue, setSelectedValue }} />
      <Tables values={{ tableRowData, tableColumnData }} />
    </>
  );
};

export default HomeResuable;