import {
   TableContainer as MuiTableContainer,
   TableContainerProps as MuiTableContainerProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { SxProps, Theme } from "@mui/system";
import React, { forwardRef } from "react";

interface TableContainerProps extends MuiTableContainerProps {
   sx?: SxProps<Theme>;
   ref?: React.Ref<HTMLDivElement>;
}

const CustomTableContainer = styled(
   MuiTableContainer,
   {},
)<{ theme?: Theme }>(({ theme }) => ({}));

const TableContainer = forwardRef<HTMLDivElement, TableContainerProps>((props, ref) => {
   return <CustomTableContainer ref={ref} {...props} />;
});

TableContainer.displayName = "TableContainer";

export default TableContainer;
