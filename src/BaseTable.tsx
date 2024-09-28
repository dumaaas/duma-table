import React, { useState } from "react";
import { CaretDown, CaretUp, CaretUpDown } from "@phosphor-icons/react";
import {
  ExtractKeys,
  SortOrder,
  SortString,
  TableColumnProps,
} from "./TableColumn";
import { Table } from "./Table";
import { TableHead } from "./TableHead";
import { TableRow } from "./TableRow";
import { TableHeaderCell } from "./TableHeaderCell";
import { TableBody } from "./TableBody";
import { TableDataCell } from "./TableDataCell";
import { useRowSelection } from "./hooks/useRowSelection";
import { useTableSorting } from "./hooks/useTableSortings";
import { useExpandableRows } from "./hooks/useExpandableRows";
import { useTableColumns } from "./hooks/useTableColumns";
import { castToString } from "./utils/helpers";
import "./styles.css";
import { useContextMenu } from "./hooks/useContextMenu";

type Props<TData> = {
  children:
    | React.ReactElement<TableColumnProps<TData, unknown>>
    | React.ReactElement<TableColumnProps<TData, unknown>>[];
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
  contextComponent?: (
    rowData: TData,
    position: { x: number; y: number }
  ) => React.ReactNode;
};

const BaseTable = <TData,>({
  children,
  data,
  sort,
  hasIndexColumn,
  tableClassName,
  tableHeadClassName,
  tableHeadRowClassName,
  tableBodyClassName,
  tableBodyRowClassName,
  tableExpandableClassName,
  tableIconWrapperClassName,
  onSortChange,
  onRowClick,
  selectedRows = [],
  onRowSelectionChange,
  expandableContent,
  rowActions,
  contextComponent,
}: Props<TData>) => {
  const [localSelectedRows, setLocalSelectedRows] =
    useState<TData[]>(selectedRows);

  const { handleSortChange, sortedBy } = useTableSorting(sort, onSortChange);

  const { handleSelectAllRows, handleRowSelection } = useRowSelection(
    data,
    localSelectedRows,
    setLocalSelectedRows,
    onRowSelectionChange
  );

  const { expandedRows, toggleExpandRow } = useExpandableRows();

  const columns = useTableColumns({
    children,
    hasIndexColumn,
    data,
    localSelectedRows,
    handleSelectAllRows,
    handleRowSelection,
    onRowSelectionChange,
  });

  const { contextMenu, openContextMenu, closeContextMenu, menuRef } =
    useContextMenu<TData>();

  return (
    <>
      <Table className={`duma-table__table ${tableClassName}`}>
        <TableHead className={tableHeadClassName}>
          <TableRow className={tableHeadRowClassName}>
            {expandableContent && (
              <TableHeaderCell style={{ width: 50 }}></TableHeaderCell>
            )}
            {columns.map((column, index) => (
              <TableHeaderCell
                key={index}
                style={{
                  textAlign: column.props.justify || "left",
                  width:
                    typeof column.props.width === "number"
                      ? `${column.props.width}px`
                      : "auto",
                }}
              >
                <div
                  onClick={() =>
                    column.props.sortable
                      ? handleSortChange(column.props.name)
                      : undefined
                  }
                  className={`duma-table__head-title ${
                    column.props.sortable
                      ? "duma-table__head-title--sortable"
                      : ""
                  }`}
                >
                  {column.props.label || column.props.name}
                  {column.props.sortable && (
                    <BaseTable.SortButton
                      sorting={
                        (sortedBy === column.props.name
                          ? (castToString(sort).split(
                              " "
                            )[1] as ExtractKeys<TData>)
                          : "unset") as SortOrder
                      }
                      tableIconWrapperClassName={tableIconWrapperClassName}
                    />
                  )}
                </div>
              </TableHeaderCell>
            ))}
            {rowActions && <TableHeaderCell style={{ textAlign: "right" }} />}
          </TableRow>
        </TableHead>
        <TableBody className={tableBodyClassName}>
          {data.map((rowData, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <TableRow
                className={`duma-table__body-row ${
                  onRowClick ? "duma-table__body-row--clickable" : ""
                } ${tableBodyRowClassName}`}
                onClick={() => {
                  onRowClick?.(rowData);
                  if (expandableContent) toggleExpandRow(rowIndex);
                }}
                onContextMenu={(e) => openContextMenu(e, rowData)}
              >
                {expandableContent && (
                  <TableDataCell>
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpandRow(rowIndex);
                      }}
                    >
                      {expandedRows.has(rowIndex) ? <CaretUp /> : <CaretDown />}{" "}
                    </span>
                  </TableDataCell>
                )}
                {columns.map((column, colIndex) => (
                  <TableDataCell
                    key={colIndex}
                    style={{
                      textAlign: column.props.justify || "left",
                      width:
                        typeof column.props.width === "number"
                          ? `${column.props.width}px`
                          : "auto",
                    }}
                  >
                    {column.props.render(
                      column.props.name === "index" ||
                        column.props.name === "checkbox"
                        ? rowIndex
                        : column.props.valueSelector(rowData)
                    )}
                  </TableDataCell>
                ))}
                {rowActions && (
                  <TableDataCell style={{ textAlign: "right" }}>
                    {rowActions(rowData)}
                  </TableDataCell>
                )}
              </TableRow>
              {expandedRows.has(rowIndex) && (
                <TableRow>
                  <TableDataCell
                    className={`duma-table__expandable ${tableExpandableClassName}`}
                    colSpan={columns.length + 2}
                  >
                    {expandableContent?.(rowData)}{" "}
                  </TableDataCell>
                </TableRow>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
      {contextMenu.position &&
        contextComponent &&
        contextMenu.data && ( // Proveravamo da li postoji data pre prikaza
          <div
            ref={menuRef} // Koristimo ref za kontekst meni
            style={{
              position: "fixed",
              top: contextMenu.position?.y,
              left: contextMenu.position?.x,
              zIndex: 1000,
              whiteSpace: "nowrap",
            }}
            onClick={closeContextMenu}
          >
            {contextComponent(contextMenu.data, contextMenu.position)}
          </div>
        )}
    </>
  );
};

export default BaseTable;

const sortingIcons = {
  asc: <CaretDown />,
  desc: <CaretUp />,
  unset: <CaretUpDown />,
};

type SortButtonProps = {
  sorting: "asc" | "desc" | "unset";
  tableIconWrapperClassName?: string;
};

BaseTable.SortButton = ({
  sorting,
  tableIconWrapperClassName,
}: SortButtonProps) => (
  <div
    className={`duma-table__sort-icon--wrapper ${tableIconWrapperClassName}`}
  >
    {sortingIcons[sorting]}
  </div>
);
