type ContextMenuState<TData> = {
    data: TData | null;
    position: {
        x: number;
        y: number;
    } | null;
};
export declare const useContextMenu: <TData>() => {
    contextMenu: ContextMenuState<TData>;
    openContextMenu: (e: React.MouseEvent, rowData: TData) => void;
    closeContextMenu: () => void;
    menuRef: import("react").MutableRefObject<HTMLDivElement | null>;
};
export {};
