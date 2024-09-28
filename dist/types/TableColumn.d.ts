import { PropsWithChildren, ReactNode } from "react";
export type ExtractKeys<T> = T extends infer G ? `${string & keyof G}` : never;
export type SortOrder = "asc" | "desc";
export type SortString<T> = `${ExtractKeys<T>} ${SortOrder}`;
export type TableColumnJustify = "left" | "center" | "right";
export interface TableColumnProps<TDto, TValue> {
    name: string;
    width: number | "*";
    render: (value?: TValue) => ReactNode;
    label?: React.ReactNode;
    valueSelector: (rowData: TDto) => TValue | undefined;
    sortable?: boolean;
    justify?: TableColumnJustify;
    rowActions?: boolean;
    isFreezed?: boolean;
}
declare const TableColumn: <TDto, TValue>(_props: PropsWithChildren<TableColumnProps<TDto, TValue>>) => null;
export default TableColumn;
