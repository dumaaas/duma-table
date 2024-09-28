import React from "react";
import { SortString, TableColumnProps } from "./TableColumn";
import "./styles.css";
type Props<TData> = {
    children: React.ReactElement<TableColumnProps<TData, unknown>> | React.ReactElement<TableColumnProps<TData, unknown>>[];
    data: TData[];
    sort: SortString<TData>;
    hasIndexColumn?: boolean;
    tableClassName?: string;
    tableHeadClassName?: string;
    tableHeadRowClassName?: string;
    tableBodyClassName?: string;
    tableBodyRowClassName?: string;
    tableExpandableClassName?: string;
    tableIconWrapperClassName?: string;
    onRowClick?: (data: TData) => void;
    onSortChange?: (sort: SortString<TData>) => void;
    selectedRows?: TData[];
    onRowSelectionChange?: (selectedRows: TData[]) => void;
    expandableContent?: (rowData: TData) => React.ReactNode;
    rowActions?: (rowData: TData) => React.ReactNode;
    contextComponent?: (rowData: TData, position: {
        x: number;
        y: number;
    }) => React.ReactNode;
};
declare const BaseTable: {
    <TData>({ children, data, sort, hasIndexColumn, tableClassName, tableHeadClassName, tableHeadRowClassName, tableBodyClassName, tableBodyRowClassName, tableExpandableClassName, tableIconWrapperClassName, onSortChange, onRowClick, selectedRows, onRowSelectionChange, expandableContent, rowActions, contextComponent, }: Props<TData>): React.JSX.Element;
    SortButton({ sorting, tableIconWrapperClassName, }: SortButtonProps): React.JSX.Element;
};
export default BaseTable;
type SortButtonProps = {
    sorting: "asc" | "desc" | "unset";
    tableIconWrapperClassName?: string;
};
