import {
   TableBody as MuiTableBody,
   TableBodyProps as MuiTableBodyProps,
} from "@mui/material";
import React, { forwardRef } from "react";

interface TableBodyProps extends MuiTableBodyProps {
   ref?: React.Ref<HTMLTableSectionElement>;
}

const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>((props, ref) => {
   return <MuiTableBody ref={ref} {...props} />;
});

TableBody.displayName = "TableBody";

export default TableBody;
