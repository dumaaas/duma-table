
# 🏗️ BaseTable Documentation

This documentation describes how to use the `BaseTable` component, a flexible and highly customizable table component that supports features such as sorting, row selection, expandable rows, and context menus. It is built with React and TypeScript and includes support for dynamic data.

## 📖 Table of Contents
1. [Installation](#installation)
2. [Props Overview](#props-overview)
3. [Features](#features)
    - [Sorting](#sorting)
    - [Row Selection](#row-selection)
    - [Expandable Rows](#expandable-rows)
    - [Context Menu](#context-menu)
    - [Row Actions](#row-actions)
4. [Usage Examples](#usage-examples)
5. [Custom Styling](#custom-styling)

---

## 🚀 Installation

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

## 🧑‍💻 Props Overview

### `BaseTable` Component

| Prop Name               | Type                                                            | Required | Description |
|-------------------------|-----------------------------------------------------------------|----------|-------------|
| `data`                  | `TData[]`                                                       | Yes      | The dataset that the table displays. |
| `sort`                  | `SortString<TData>`                                             | Yes      | The initial sort configuration (`'columnName asc'` or `'columnName desc'`). |
| `children`              | `React.ReactElement<TableColumnProps<TData, unknown>>[]`         | Yes      | Defines the table columns, using `TableColumn`. |
| `hasIndexColumn`        | `boolean`                                                       | No       | Whether to show an index column. |
| `onRowClick`            | `(data: TData) => void`                                         | No       | Callback function when a row is clicked. |
| `onSortChange`          | `(sort: SortString<TData>) => void`                             | No       | Callback function when the sort order changes. |
| `selectedRows`          | `TData[]`                                                       | No       | Tracks selected rows. |
| `onRowSelectionChange`  | `(selectedRows: TData[]) => void`                               | No       | Callback when the selected rows change. |
| `expandableContent`     | `(rowData: TData) => React.ReactNode`                           | No       | Renders expandable row content. |
| `rowActions`            | `(rowData: TData) => React.ReactNode`                           | No       | Renders actions for each row. |

### `TableColumn` Component

| Prop Name     | Type                                                    | Required | Description |
|---------------|---------------------------------------------------------|----------|-------------|
| `name`        | `string`                                                | Yes      | Unique identifier for the column. |
| `width`       | `number or "*" `                                          | Yes      | Specifies the column width. |
| `label`       | `React.ReactNode`                                        | No       | The column header. |
| `render`      | `(value?: TValue) => React.ReactNode`                   | Yes      | Function to render cell content. |
| `valueSelector`| `(rowData: TDto) => TValue or undefined`                | Yes      | Function to extract the column value from a row. |
| `sortable`    | `boolean`                                               | No       | If the column is sortable. |
| `justify`     | `TableColumnJustify`                                    | No       | Justification for the column content. |

---

## 🎛️ Features

### Sorting
Define which columns are sortable by setting the `sortable` prop on the `TableColumn`. You can manage sorting by passing the `sort` and `onSortChange` props to `BaseTable`.

### Row Selection
Enable row selection by providing the `selectedRows` and `onRowSelectionChange` props to `BaseTable`. This will display checkboxes for selecting rows.

### Expandable Rows
To make rows expandable, pass a function to the `expandableContent` prop. This function should return the JSX for the expanded row content.

### Context Menu
Right-clicking on a row can trigger a context menu. Define the menu content using the `contextComponent` prop.

### Row Actions
You can define actions (e.g., edit, delete) for each row using the `rowActions` prop. This will display buttons or other interactive elements.

---

## 💡 Usage Examples

### Table with Sorting and Row Selection

```tsx
<BaseTable<TData>
  data={data}
  sort="name asc"
  onSortChange={(newSort) => setSort(newSort)}
  selectedRows={selectedRows}
  onRowSelectionChange={setSelectedRows}
>
  <TableColumn<TData, string>
    name="name"
    label="Name"
    sortable
    valueSelector={(rowData) => rowData.name}
    render={(value) => <span>{value}</span>}
  />
  <TableColumn<TData, number>
    name="age"
    label="Age"
    valueSelector={(rowData) => rowData.age}
    render={(value) => <span>{value}</span>}
  />
</BaseTable>
```

### Table with Expandable Rows

```tsx
<BaseTable<TData>
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
  <TableColumn<TData, string>
    name="name"
    label="Name"
    valueSelector={(rowData) => rowData.name}
    render={(value) => <span>{value}</span>}
  />
</BaseTable>
```

### Table with Row Actions

```tsx
<BaseTable<TData>
  data={data}
  rowActions={(rowData) => (
    <div>
      <button onClick={() => alert(`Edit ${rowData.name}`)}>Edit</button>
      <button onClick={() => alert(`Delete ${rowData.name}`)}>Delete</button>
    </div>
  )}
>
  <TableColumn<TData, string>
    name="name"
    label="Name"
    valueSelector={(rowData) => rowData.name}
    render={(value) => <span>{value}</span>}
  />
</BaseTable>
```

### Table with Context Menu (No Positioning Props)

```tsx
<BaseTable<TData>
  data={data}
  contextComponent={(rowData) => (
    <div>
      <button onClick={() => alert(`View details for ${rowData.name}`)}>View Details</button>
      <button onClick={() => alert(`Delete ${rowData.name}`)}>Delete</button>
    </div>
  )}
>
  <TableColumn<TData, string>
    name="name"
    label="Name"
    valueSelector={(rowData) => rowData.name}
    render={(value) => <span>{value}</span>}
  />
</BaseTable>
```

---

## 🎨 Custom Styling

You can easily apply custom styles to the table using the `tableClassName` prop on `BaseTable`. Additionally, each component supports `className` props for individual customization. This allows you to create entirely new styles as needed.

For example:

```css
.custom-table {
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.custom-table th {
  color: #333;
}

.custom-table td {
  padding: 12px;
}
```

```tsx
<BaseTable<TData>
  data={data}
  tableClassName="custom-table"
>
  <TableColumn<TData, string>
    name="name"
    label="Name"
    valueSelector={(rowData) => rowData.name}
    render={(value) => <span>{value}</span>}
  />
</BaseTable>
```

Enjoy styling your tables to suit your design! 🎉
