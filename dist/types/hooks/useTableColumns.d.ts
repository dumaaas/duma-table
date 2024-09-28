import React from "react";
import { TableColumnProps } from "../TableColumn";
type UseTableColumnsProps<TData> = {
    children: React.ReactElement<TableColumnProps<TData, unknown>> | React.ReactElement<TableColumnProps<TData, unknown>>[];
    hasIndexColumn?: boolean;
    data: TData[];
    localSelectedRows: TData[];
    handleSelectAllRows: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleRowSelection: (e: React.ChangeEvent<HTMLInputElement>, rowIndex: number) => void;
    onRowSelectionChange?: (selectedRows: TData[]) => void;
};
export declare function useTableColumns<TData>({ children, hasIndexColumn, data, localSelectedRows, handleSelectAllRows, handleRowSelection, onRowSelectionChange, }: UseTableColumnsProps<TData>): React.ReactElement<TableColumnProps<TData, unknown>, string | React.JSXElementConstructor<any>>[];
export {};
