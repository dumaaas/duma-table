import a$6, { createContext, forwardRef, useContext, useCallback, useState, useMemo, useRef, useEffect } from 'react';

var TableColumn = function (
// We'll see how to refactor this unused component
// eslint-disable-next-line @typescript-eslint/no-unused-vars
_props) {
    return null;
};

const l$1 = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a$6.createElement(a$6.Fragment, null, /* @__PURE__ */ a$6.createElement("path", { d: "M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a$6.createElement(a$6.Fragment, null, /* @__PURE__ */ a$6.createElement("path", { d: "M208,96l-80,80L48,96Z", opacity: "0.2" }), /* @__PURE__ */ a$6.createElement("path", { d: "M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a$6.createElement(a$6.Fragment, null, /* @__PURE__ */ a$6.createElement("path", { d: "M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a$6.createElement(a$6.Fragment, null, /* @__PURE__ */ a$6.createElement("path", { d: "M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a$6.createElement(a$6.Fragment, null, /* @__PURE__ */ a$6.createElement("path", { d: "M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a$6.createElement(a$6.Fragment, null, /* @__PURE__ */ a$6.createElement("path", { d: "M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z" }))
  ]
]);

const a$5 = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a$6.createElement(a$6.Fragment, null, /* @__PURE__ */ a$6.createElement("path", { d: "M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a$6.createElement(a$6.Fragment, null, /* @__PURE__ */ a$6.createElement("path", { d: "M208,160H48l80-80Z", opacity: "0.2" }), /* @__PURE__ */ a$6.createElement("path", { d: "M213.66,154.34l-80-80a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,48,168H208a8,8,0,0,0,5.66-13.66ZM67.31,152,128,91.31,188.69,152Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a$6.createElement(a$6.Fragment, null, /* @__PURE__ */ a$6.createElement("path", { d: "M215.39,163.06A8,8,0,0,1,208,168H48a8,8,0,0,1-5.66-13.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,215.39,163.06Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a$6.createElement(a$6.Fragment, null, /* @__PURE__ */ a$6.createElement("path", { d: "M212.24,164.24a6,6,0,0,1-8.48,0L128,88.49,52.24,164.24a6,6,0,0,1-8.48-8.48l80-80a6,6,0,0,1,8.48,0l80,80A6,6,0,0,1,212.24,164.24Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a$6.createElement(a$6.Fragment, null, /* @__PURE__ */ a$6.createElement("path", { d: "M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a$6.createElement(a$6.Fragment, null, /* @__PURE__ */ a$6.createElement("path", { d: "M210.83,162.83a4,4,0,0,1-5.66,0L128,85.66,50.83,162.83a4,4,0,0,1-5.66-5.66l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,210.83,162.83Z" }))
  ]
]);

const a$4 = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a$6.createElement(a$6.Fragment, null, /* @__PURE__ */ a$6.createElement("path", { d: "M184.49,167.51a12,12,0,0,1,0,17l-48,48a12,12,0,0,1-17,0l-48-48a12,12,0,0,1,17-17L128,207l39.51-39.52A12,12,0,0,1,184.49,167.51Zm-96-79L128,49l39.51,39.52a12,12,0,0,0,17-17l-48-48a12,12,0,0,0-17,0l-48,48a12,12,0,0,0,17,17Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a$6.createElement(a$6.Fragment, null, /* @__PURE__ */ a$6.createElement("path", { d: "M80,176h96l-48,48ZM128,32,80,80h96Z", opacity: "0.2" }), /* @__PURE__ */ a$6.createElement("path", { d: "M176,168H80a8,8,0,0,0-5.66,13.66l48,48a8,8,0,0,0,11.32,0l48-48A8,8,0,0,0,176,168Zm-48,44.69L99.31,184h57.38ZM80,88h96a8,8,0,0,0,5.66-13.66l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,80,88Zm48-44.69L156.69,72H99.31Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a$6.createElement(a$6.Fragment, null, /* @__PURE__ */ a$6.createElement("path", { d: "M72.61,83.06a8,8,0,0,1,1.73-8.72l48-48a8,8,0,0,1,11.32,0l48,48A8,8,0,0,1,176,88H80A8,8,0,0,1,72.61,83.06ZM176,168H80a8,8,0,0,0-5.66,13.66l48,48a8,8,0,0,0,11.32,0l48-48A8,8,0,0,0,176,168Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a$6.createElement(a$6.Fragment, null, /* @__PURE__ */ a$6.createElement("path", { d: "M180.24,171.76a6,6,0,0,1,0,8.48l-48,48a6,6,0,0,1-8.48,0l-48-48a6,6,0,0,1,8.48-8.48L128,215.51l43.76-43.75A6,6,0,0,1,180.24,171.76Zm-96-87.52L128,40.49l43.76,43.75a6,6,0,0,0,8.48-8.48l-48-48a6,6,0,0,0-8.48,0l-48,48a6,6,0,0,0,8.48,8.48Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a$6.createElement(a$6.Fragment, null, /* @__PURE__ */ a$6.createElement("path", { d: "M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a$6.createElement(a$6.Fragment, null, /* @__PURE__ */ a$6.createElement("path", { d: "M178.83,173.17a4,4,0,0,1,0,5.66l-48,48a4,4,0,0,1-5.66,0l-48-48a4,4,0,0,1,5.66-5.66L128,218.34l45.17-45.17A4,4,0,0,1,178.83,173.17Zm-96-90.34L128,37.66l45.17,45.17a4,4,0,1,0,5.66-5.66l-48-48a4,4,0,0,0-5.66,0l-48,48a4,4,0,0,0,5.66,5.66Z" }))
  ]
]);

const o$1 = createContext({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: !1
});

var y = Object.defineProperty;
var c$3 = Object.getOwnPropertySymbols;
var f$3 = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var d = (t, o, e) => o in t ? y(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, l = (t, o) => {
  for (var e in o || (o = {}))
    f$3.call(o, e) && d(t, e, o[e]);
  if (c$3)
    for (var e of c$3(o))
      g.call(o, e) && d(t, e, o[e]);
  return t;
};
var a$3 = (t, o) => {
  var e = {};
  for (var r in t)
    f$3.call(t, r) && o.indexOf(r) < 0 && (e[r] = t[r]);
  if (t != null && c$3)
    for (var r of c$3(t))
      o.indexOf(r) < 0 && g.call(t, r) && (e[r] = t[r]);
  return e;
};
const h = forwardRef((t, o) => {
  const m = t, {
    alt: e,
    color: r,
    size: n,
    weight: s,
    mirrored: p,
    children: u,
    weights: C
  } = m, v = a$3(m, [
    "alt",
    "color",
    "size",
    "weight",
    "mirrored",
    "children",
    "weights"
  ]), x = useContext(o$1), {
    color: B = "currentColor",
    size: i,
    weight: I = "regular",
    mirrored: E = !1
  } = x, R = a$3(x, [
    "color",
    "size",
    "weight",
    "mirrored"
  ]);
  return /* @__PURE__ */ a$6.createElement(
    "svg",
    l(l({
      ref: o,
      xmlns: "http://www.w3.org/2000/svg",
      width: n != null ? n : i,
      height: n != null ? n : i,
      fill: r != null ? r : B,
      viewBox: "0 0 256 256",
      transform: p || E ? "scale(-1, 1)" : void 0
    }, R), v),
    !!e && /* @__PURE__ */ a$6.createElement("title", null, e),
    u,
    C.get(s != null ? s : I)
  );
});
h.displayName = "IconBase";
const b = h;

var i$2 = Object.defineProperty, n$2 = Object.defineProperties;
var p$2 = Object.getOwnPropertyDescriptors;
var t$1 = Object.getOwnPropertySymbols;
var s$2 = Object.prototype.hasOwnProperty, c$2 = Object.prototype.propertyIsEnumerable;
var a$2 = (o, e, r) => e in o ? i$2(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m$2 = (o, e) => {
  for (var r in e || (e = {}))
    s$2.call(e, r) && a$2(o, r, e[r]);
  if (t$1)
    for (var r of t$1(e))
      c$2.call(e, r) && a$2(o, r, e[r]);
  return o;
}, f$2 = (o, e) => n$2(o, p$2(e));
const D$1 = forwardRef((o, e) => /* @__PURE__ */ a$6.createElement(b, f$2(m$2({ ref: e }, o), { weights: l$1 })));
D$1.displayName = "CaretDown";

var f$1 = Object.defineProperty, i$1 = Object.defineProperties;
var s$1 = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c$1 = Object.prototype.hasOwnProperty, n$1 = Object.prototype.propertyIsEnumerable;
var a$1 = (r, e, t) => e in r ? f$1(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m$1 = (r, e) => {
  for (var t in e || (e = {}))
    c$1.call(e, t) && a$1(r, t, e[t]);
  if (o)
    for (var t of o(e))
      n$1.call(e, t) && a$1(r, t, e[t]);
  return r;
}, p$1 = (r, e) => i$1(r, s$1(e));
const I = forwardRef((r, e) => /* @__PURE__ */ a$6.createElement(b, p$1(m$1({ ref: e }, r), { weights: a$5 })));
I.displayName = "CaretUp";

var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && a(o, r, e[r]);
  if (t)
    for (var r of t(e))
      c.call(e, r) && a(o, r, e[r]);
  return o;
}, p = (o, e) => i(o, n(e));
const D = forwardRef((o, e) => /* @__PURE__ */ a$6.createElement(b, p(m({ ref: e }, o), { weights: a$4 })));
D.displayName = "CaretUpDown";

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var Table = a$6.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (a$6.createElement("div", { className: "duma-table__table-wrapper" },
        a$6.createElement("table", __assign({ ref: ref, className: "duma-table__table ".concat(className) }, props))));
});

var TableHead = a$6.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (a$6.createElement("thead", __assign({ ref: ref, className: "duma-table__head ".concat(className) }, props)));
});

var TableRow = a$6.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (a$6.createElement("tr", __assign({ ref: ref, className: "duma-table__row ".concat(className) }, props)));
});

var TableHeaderCell = a$6.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (a$6.createElement("th", __assign({ ref: ref, className: "duma-table__header-cell ".concat(className) }, props)));
});

var TableBody = a$6.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (a$6.createElement("tbody", __assign({ ref: ref, className: "duma-table__body ".concat(className) }, props)));
});

var TableDataCell = a$6.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (a$6.createElement("td", __assign({ ref: ref, className: "duma-table__data-cell ".concat(className) }, props)));
});

var useRowSelection = function (data, localSelectedRows, setLocalSelectedRows, onRowSelectionChange) {
    var handleSelectAllRows = useCallback(function (e) {
        var allSelected = e.target.checked;
        var updatedSelectedRows = allSelected ? data : [];
        setLocalSelectedRows(updatedSelectedRows);
        onRowSelectionChange === null || onRowSelectionChange === void 0 ? void 0 : onRowSelectionChange(updatedSelectedRows);
    }, [data, setLocalSelectedRows, onRowSelectionChange]);
    var handleRowSelection = useCallback(function (e, rowIndex) {
        var row = data[rowIndex];
        var updatedSelectedRows = e.target.checked
            ? __spreadArray(__spreadArray([], localSelectedRows, true), [row], false) : localSelectedRows.filter(function (selectedRow) { return selectedRow !== row; });
        setLocalSelectedRows(updatedSelectedRows);
        onRowSelectionChange === null || onRowSelectionChange === void 0 ? void 0 : onRowSelectionChange(updatedSelectedRows);
    }, [data, localSelectedRows, setLocalSelectedRows, onRowSelectionChange]);
    return { handleSelectAllRows: handleSelectAllRows, handleRowSelection: handleRowSelection };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function castToString(value) {
    return value;
}

var useTableSorting = function (sort, onSortChange) {
    var handleSortChange = useCallback(function (name) {
        var currentSortField = castToString(sort).split(" ")[0];
        var currentSortOrder = castToString(sort).split(" ")[1];
        var newSortOrder = currentSortField === name && currentSortOrder === "asc"
            ? "desc"
            : "asc";
        onSortChange === null || onSortChange === void 0 ? void 0 : onSortChange("".concat(name, " ").concat(newSortOrder));
    }, [sort, onSortChange]);
    var sortedBy = castToString(sort).split(" ")[0];
    var sortOrder = castToString(sort).split(" ")[1];
    return { handleSortChange: handleSortChange, sortedBy: sortedBy, sortOrder: sortOrder };
};

var useExpandableRows = function () {
    var _a = useState(new Set()), expandedRows = _a[0], setExpandedRows = _a[1];
    var toggleExpandRow = useCallback(function (rowIndex) {
        setExpandedRows(function (prevExpandedRows) {
            var newExpandedRows = new Set(prevExpandedRows);
            if (newExpandedRows.has(rowIndex)) {
                newExpandedRows.delete(rowIndex);
            }
            else {
                newExpandedRows.add(rowIndex);
            }
            return newExpandedRows;
        });
    }, []);
    return { expandedRows: expandedRows, toggleExpandRow: toggleExpandRow };
};

function useTableColumns(_a) {
    var children = _a.children, hasIndexColumn = _a.hasIndexColumn, data = _a.data, localSelectedRows = _a.localSelectedRows, handleSelectAllRows = _a.handleSelectAllRows, handleRowSelection = _a.handleRowSelection, onRowSelectionChange = _a.onRowSelectionChange;
    var childArray = a$6.Children.toArray(children);
    return useMemo(function () {
        var baseColumns = childArray.filter(a$6.isValidElement);
        if (hasIndexColumn) {
            baseColumns = __spreadArray([
                {
                    props: {
                        name: "index",
                        label: "#",
                        width: 50,
                        render: function (index) { return index + 1; },
                        valueSelector: function () { return undefined; },
                    },
                }
            ], baseColumns, true);
        }
        if (onRowSelectionChange) {
            baseColumns = __spreadArray([
                {
                    props: {
                        name: "checkbox",
                        width: 50,
                        label: (a$6.createElement("input", { type: "checkbox", checked: localSelectedRows.length === data.length, onChange: handleSelectAllRows })),
                        render: function (rowIndex) { return (a$6.createElement("input", { type: "checkbox", checked: localSelectedRows.includes(data[rowIndex]), onClick: function (e) { return e.stopPropagation(); }, onChange: function (e) { return handleRowSelection(e, rowIndex); } })); },
                        valueSelector: function () { return undefined; },
                    },
                }
            ], baseColumns, true);
        }
        return baseColumns;
    }, [
        childArray,
        hasIndexColumn,
        onRowSelectionChange,
        data,
        localSelectedRows,
    ]);
}

var useContextMenu = function () {
    var _a = useState({
        data: null,
        position: null,
    }), contextMenu = _a[0], setContextMenu = _a[1];
    var menuRef = useRef(null);
    var openContextMenu = function (e, rowData) {
        e.preventDefault();
        var clickX = e.clientX;
        var clickY = e.clientY;
        var screenWidth = window.innerWidth;
        var screenHeight = window.innerHeight;
        // Prvo postavimo meni na inicijalnu poziciju
        setContextMenu({
            data: rowData,
            position: { x: clickX, y: clickY },
        });
        // Kada se meni renderuje, izračunaj tačnu poziciju
        setTimeout(function () {
            if (menuRef.current) {
                var menuWidth = menuRef.current.offsetWidth;
                var menuHeight = menuRef.current.offsetHeight;
                // Ako nema dovoljno prostora desno, pomeri meni levo
                var positionX = clickX + menuWidth > screenWidth
                    ? clickX - menuWidth
                    : clickX;
                // Ako nema dovoljno prostora dole, pomeri meni gore
                var positionY = clickY + menuHeight > screenHeight
                    ? clickY - menuHeight
                    : clickY;
                // Ažuriraj poziciju menija sa tačnim koordinatama
                setContextMenu({
                    data: rowData,
                    position: { x: positionX, y: positionY },
                });
            }
        }, 0); // Ovo osigurava da ref postane dostupan pre kalkulacija
    };
    var closeContextMenu = function () {
        setContextMenu({ data: null, position: null });
    };
    // Zatvaranje menija kada se klikne van njega
    useEffect(function () {
        var handleClickOutside = function (event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeContextMenu();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function () {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return {
        contextMenu: contextMenu,
        openContextMenu: openContextMenu,
        closeContextMenu: closeContextMenu,
        menuRef: menuRef,
    };
};

var BaseTable = function (_a) {
    var _b, _c;
    var children = _a.children, data = _a.data, sort = _a.sort, hasIndexColumn = _a.hasIndexColumn, tableClassName = _a.tableClassName, tableHeadClassName = _a.tableHeadClassName, tableHeadRowClassName = _a.tableHeadRowClassName, tableBodyClassName = _a.tableBodyClassName, tableBodyRowClassName = _a.tableBodyRowClassName, tableExpandableClassName = _a.tableExpandableClassName, tableIconWrapperClassName = _a.tableIconWrapperClassName, onSortChange = _a.onSortChange, onRowClick = _a.onRowClick, _d = _a.selectedRows, selectedRows = _d === void 0 ? [] : _d, onRowSelectionChange = _a.onRowSelectionChange, expandableContent = _a.expandableContent, rowActions = _a.rowActions, contextComponent = _a.contextComponent;
    var _e = useState(selectedRows), localSelectedRows = _e[0], setLocalSelectedRows = _e[1];
    var _f = useTableSorting(sort, onSortChange), handleSortChange = _f.handleSortChange, sortedBy = _f.sortedBy;
    var _g = useRowSelection(data, localSelectedRows, setLocalSelectedRows, onRowSelectionChange), handleSelectAllRows = _g.handleSelectAllRows, handleRowSelection = _g.handleRowSelection;
    var _h = useExpandableRows(), expandedRows = _h.expandedRows, toggleExpandRow = _h.toggleExpandRow;
    var columns = useTableColumns({
        children: children,
        hasIndexColumn: hasIndexColumn,
        data: data,
        localSelectedRows: localSelectedRows,
        handleSelectAllRows: handleSelectAllRows,
        handleRowSelection: handleRowSelection,
        onRowSelectionChange: onRowSelectionChange,
    });
    var _j = useContextMenu(), contextMenu = _j.contextMenu, openContextMenu = _j.openContextMenu, closeContextMenu = _j.closeContextMenu, menuRef = _j.menuRef;
    return (a$6.createElement(a$6.Fragment, null,
        a$6.createElement(Table, { className: "duma-table__table ".concat(tableClassName) },
            a$6.createElement(TableHead, { className: tableHeadClassName },
                a$6.createElement(TableRow, { className: tableHeadRowClassName },
                    expandableContent && (a$6.createElement(TableHeaderCell, { style: { width: 50 } })),
                    columns.map(function (column, index) { return (a$6.createElement(TableHeaderCell, { key: index, style: {
                            textAlign: column.props.justify || "left",
                            width: typeof column.props.width === "number"
                                ? "".concat(column.props.width, "px")
                                : "auto",
                        } },
                        a$6.createElement("div", { onClick: function () {
                                return column.props.sortable
                                    ? handleSortChange(column.props.name)
                                    : undefined;
                            }, className: "duma-table__head-title ".concat(column.props.sortable
                                ? "duma-table__head-title--sortable"
                                : "") },
                            column.props.label || column.props.name,
                            column.props.sortable && (a$6.createElement(BaseTable.SortButton, { sorting: (sortedBy === column.props.name
                                    ? castToString(sort).split(" ")[1]
                                    : "unset"), tableIconWrapperClassName: tableIconWrapperClassName }))))); }),
                    rowActions && a$6.createElement(TableHeaderCell, { style: { textAlign: "right" } }))),
            a$6.createElement(TableBody, { className: tableBodyClassName }, data.map(function (rowData, rowIndex) { return (a$6.createElement(a$6.Fragment, { key: rowIndex },
                a$6.createElement(TableRow, { className: "duma-table__body-row ".concat(onRowClick ? "duma-table__body-row--clickable" : "", " ").concat(tableBodyRowClassName), onClick: function () {
                        onRowClick === null || onRowClick === void 0 ? void 0 : onRowClick(rowData);
                        if (expandableContent)
                            toggleExpandRow(rowIndex);
                    }, onContextMenu: function (e) { return openContextMenu(e, rowData); } },
                    expandableContent && (a$6.createElement(TableDataCell, null,
                        a$6.createElement("span", { onClick: function (e) {
                                e.stopPropagation();
                                toggleExpandRow(rowIndex);
                            } },
                            expandedRows.has(rowIndex) ? a$6.createElement(I, null) : a$6.createElement(D$1, null),
                            " "))),
                    columns.map(function (column, colIndex) { return (a$6.createElement(TableDataCell, { key: colIndex, style: {
                            textAlign: column.props.justify || "left",
                            width: typeof column.props.width === "number"
                                ? "".concat(column.props.width, "px")
                                : "auto",
                        } }, column.props.render(column.props.name === "index" ||
                        column.props.name === "checkbox"
                        ? rowIndex
                        : column.props.valueSelector(rowData)))); }),
                    rowActions && (a$6.createElement(TableDataCell, { style: { textAlign: "right" } }, rowActions(rowData)))),
                expandedRows.has(rowIndex) && (a$6.createElement(TableRow, null,
                    a$6.createElement(TableDataCell, { className: "duma-table__expandable ".concat(tableExpandableClassName), colSpan: columns.length + 2 }, expandableContent === null || expandableContent === void 0 ? void 0 :
                        expandableContent(rowData),
                        " "))))); }))),
        contextMenu.position &&
            contextComponent &&
            contextMenu.data && ( // Proveravamo da li postoji data pre prikaza
        a$6.createElement("div", { ref: menuRef, style: {
                position: "fixed",
                top: (_b = contextMenu.position) === null || _b === void 0 ? void 0 : _b.y,
                left: (_c = contextMenu.position) === null || _c === void 0 ? void 0 : _c.x,
                zIndex: 1000,
                whiteSpace: "nowrap",
            }, onClick: closeContextMenu }, contextComponent(contextMenu.data, contextMenu.position)))));
};
var sortingIcons = {
    asc: a$6.createElement(D$1, null),
    desc: a$6.createElement(I, null),
    unset: a$6.createElement(D, null),
};
BaseTable.SortButton = function (_a) {
    var sorting = _a.sorting, tableIconWrapperClassName = _a.tableIconWrapperClassName;
    return (a$6.createElement("div", { className: "duma-table__sort-icon--wrapper ".concat(tableIconWrapperClassName) }, sortingIcons[sorting]));
};

export { BaseTable, TableColumn };
//# sourceMappingURL=index.esm.js.map
