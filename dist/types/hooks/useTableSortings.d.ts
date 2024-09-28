import { ExtractKeys, SortOrder, SortString } from "../TableColumn";
export declare const useTableSorting: <TData>(sort: SortString<TData>, onSortChange?: (sort: SortString<TData>) => void) => {
    handleSortChange: (name: string) => void;
    sortedBy: ExtractKeys<TData>;
    sortOrder: SortOrder;
};
