import {
   TableRow as MuiTableRow,
   TableRowProps as MuiTableRowProps,
} from "@mui/material";
import React, { forwardRef } from "react";

interface TableRowProps extends MuiTableRowProps {
   ref?: React.Ref<HTMLTableRowElement>;
}

const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>((props, ref) => {
   return <MuiTableRow ref={ref} {...props} />;
});

TableRow.displayName = "TableRow";

export default TableRow;
