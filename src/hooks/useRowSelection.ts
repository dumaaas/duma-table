import { useCallback, useMemo } from "react";

export const useRowSelection = <TData>(
  data: TData[], // Current data for the page
  localSelectedRows: TData[], // All selected rows across pages
  setLocalSelectedRows: (rows: TData[]) => void,
  onRowSelectionChange?: (selectedRows: TData[]) => void
) => {
  // Memoized to check if all rows on the current page are selected
  const isAllRowsSelectedOnPage = useMemo(() => {
    return data.length > 0 && data.every(row => localSelectedRows.includes(row));
  }, [data, localSelectedRows]);

  // Select or deselect all rows on the current page
  const handleSelectAllRows = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const allSelected = e.target.checked;

      const updatedSelectedRows = allSelected
        ? [...new Set([...localSelectedRows, ...data])] // Select all rows on current page
        : localSelectedRows.filter(selectedRow => !data.includes(selectedRow)); // Deselect all rows on current page

      setLocalSelectedRows(updatedSelectedRows);
      onRowSelectionChange?.(updatedSelectedRows);
    },
    [data, localSelectedRows, setLocalSelectedRows, onRowSelectionChange]
  );

  // Select or deselect individual row
  const handleRowSelection = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, rowIndex: number) => {
      const row = data[rowIndex];
      const updatedSelectedRows = e.target.checked
        ? [...localSelectedRows, row] // Add row to selection
        : localSelectedRows.filter((selectedRow) => selectedRow !== row); // Remove row from selection

      setLocalSelectedRows(updatedSelectedRows);
      onRowSelectionChange?.(updatedSelectedRows);
    },
    [data, localSelectedRows, setLocalSelectedRows, onRowSelectionChange]
  );

  return { 
    handleSelectAllRows, 
    handleRowSelection, 
    isAllRowsSelectedOnPage // This can be used to control the state of the header checkbox
  };
};
