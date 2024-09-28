
# BaseTable Documentation

This documentation describes how to use the `BaseTable` component, a flexible and highly customizable table component that supports features such as sorting, row selection, expandable rows, and context menus. It is built with React and TypeScript and includes support for dynamic data.

## Table of Contents
1. [Installation](#installation)
2. [Props Overview](#props-overview)
3. [Features](#features)
    - [Sorting](#sorting)
    - [Row Selection](#row-selection)
    - [Expandable Rows](#expandable-rows)
    - [Context Menu](#context-menu)
    - [Row Actions](#row-actions)
4. [Usage Examples](#usage-examples)

---

## Installation

To install and use the `BaseTable` component, first install the necessary dependencies:

```bash
npm install duma-table
```

Import the components you need from `duma-table`:

```tsx
import { BaseTable, TableColumn } from "duma-table";
import 'duma-table/dist/styles.css';
```

---

## Props Overview

### `BaseTable` Component

| Prop Name               | Type                                                            | Required | Description |
|-------------------------|-----------------------------------------------------------------|----------|-------------|
| `data`                  | `TData[]`                                                       | Yes      | The dataset that the table displays. |
| `sort`                  | `SortString<TData>`                                             | Yes      | The initial sort configuration (`'columnName asc'` or `'columnName desc'`). |
| `children`              | `React.ReactElement<TableColumnProps<TData, unknown>>[]`         | Yes      | Defines the table columns, using `TableColumn`. |
| `hasIndexColumn`        | `boolean`                                                       | No       | Whether to show an index column. |
| `onRowClick`            | `(data: TData) => void`                                         | No       | Callback function when a row is clicked. |
| `onSortChange`          | `(sort: SortString<TData>) => void`                             | No       | Callback when sorting is changed. |
| `selectedRows`          | `TData[]`                                                       | No       | Array of currently selected rows. |
| `onRowSelectionChange`  | `(selectedRows: TData[]) => void`                               | No       | Callback when selected rows are changed. |
| `expandableContent`     | `(rowData: TData) => React.ReactNode`                           | No       | Function to render expandable content for a row. |
| `rowActions`            | `(rowData: TData) => React.ReactNode`                           | No       | Function to render action buttons for a row. |
| `contextComponent`      | `(rowData: TData, position: { x: number; y: number }) => React.ReactNode` | No | Custom component that appears on right-click (context menu). |

---

## Features

### Sorting

The `BaseTable` supports column-based sorting. To enable sorting on a column, pass the `sortable` prop in the `TableColumn` definition. Sorting icons (like arrows) are used to display the sorting state.

Example:

```tsx
<TableColumn
  name="name"
  label="Name"
  sortable
  valueSelector={(rowData) => rowData.name}
  render={(value) => <span>{value}</span>}
/>
```

### Row Selection

To allow selecting rows, use the `selectedRows` prop and pass a callback for `onRowSelectionChange`. This will let you manage the selection of rows.

Example:

```tsx
<BaseTable
  data={data}
  selectedRows={selectedRows}
  onRowSelectionChange={setSelectedRows}
>
  {/* Column definitions */}
</BaseTable>
```

### Expandable Rows

You can define expandable rows by passing the `expandableContent` prop to the `BaseTable`. This will allow rows to be expanded or collapsed when clicked.

Example:

```tsx
<BaseTable
  data={data}
  expandableContent={(rowData) => (
    <div>
      <strong>Details for {rowData.name}:</strong> {rowData.details}
    </div>
  )}
>
  {/* Column definitions */}
</BaseTable>
```

### Context Menu

To use a custom context menu that opens when right-clicking on a row, define a `contextComponent`. This component will be rendered at the position where the right-click happened.

Example:

```tsx
<BaseTable
  data={data}
  contextComponent={(rowData, position) => (
    <div style={{ position: 'fixed', top: position.y, left: position.x }}>
      <button onClick={() => alert(`Action for ${rowData.name}`)}>Action</button>
    </div>
  )}
>
  {/* Column definitions */}
</BaseTable>
```

### Row Actions

To define custom row actions (like buttons for editing, deleting, etc.), pass a `rowActions` prop. This will render the provided component in each row.

Example:

```tsx
<BaseTable
  data={data}
  rowActions={(rowData) => (
    <div>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )}
>
  {/* Column definitions */}
</BaseTable>
```

---

## Usage Examples

### Basic Table Example

```tsx
<BaseTable
  data={data}
  sort="name asc"
  onSortChange={(newSort) => setSort(newSort)}
>
  <TableColumn
    name="name"
    label="Name"
    sortable
    valueSelector={(rowData) => rowData.name}
    render={(value) => <span>{value}</span>}
  />
  <TableColumn
    name="age"
    label="Age"
    valueSelector={(rowData) => rowData.age}
    render={(value) => <span>{value}</span>}
  />
</BaseTable>
```

### Table with Expandable Rows

```tsx
<BaseTable
  data={data}
  expandableContent={(rowData) => (
    <div>
      <p>More details for {rowData.name}:</p>
      <ul>
        <li>Age: {rowData.age}</li>
        <li>Email: {rowData.email}</li>
      </ul>
    </div>
  )}
>
  <TableColumn
    name="name"
    label="Name"
    valueSelector={(rowData) => rowData.name}
    render={(value) => <span>{value}</span>}
  />
  <TableColumn
    name="age"
    label="Age"
    valueSelector={(rowData) => rowData.age}
    render={(value) => <span>{value}</span>}
  />
</BaseTable>
```

### Table with Context Menu and Row Actions

```tsx
<BaseTable
  data={data}
  contextComponent={(rowData, position) => (
    <div style={{ position: 'fixed', top: position.y, left: position.x }}>
      <button onClick={() => alert(`View details for ${rowData.name}`)}>View Details</button>
      <button onClick={() => alert(`Delete ${rowData.name}`)}>Delete</button>
    </div>
  )}
  rowActions={(rowData) => (
    <div>
      <button onClick={() => alert(`Edit ${rowData.name}`)}>Edit</button>
    </div>
  )}
>
  <TableColumn
    name="name"
    label="Name"
    valueSelector={(rowData) => rowData.name}
    render={(value) => <span>{value}</span>}
  />
  <TableColumn
    name="age"
    label="Age"
    valueSelector={(rowData) => rowData.age}
    render={(value) => <span>{value}</span>}
  />
</BaseTable>
```

---
