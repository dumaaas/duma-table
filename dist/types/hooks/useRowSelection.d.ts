export declare const useRowSelection: <TData>(data: TData[], localSelectedRows: TData[], setLocalSelectedRows: (rows: TData[]) => void, onRowSelectionChange?: (selectedRows: TData[]) => void) => {
    handleSelectAllRows: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleRowSelection: (e: React.ChangeEvent<HTMLInputElement>, rowIndex: number) => void;
    isAllRowsSelectedOnPage: boolean;
};
