import {
   DialogContent as MuiDialogContent,
   DialogContentProps as MuiDialogContentProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { SxProps, Theme } from "@mui/system";
import React, { forwardRef } from "react";

interface DialogContentProps extends MuiDialogContentProps {
   sx?: SxProps<Theme>;
   ref?: React.Ref<HTMLDivElement>;
}

const CustomDialogContent = styled(
   MuiDialogContent,
   {},
)<{ theme?: Theme }>(({ theme }) => ({}));

const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>((props, ref) => {
   return <CustomDialogContent ref={ref} {...props} />;
});

DialogContent.displayName = "DialogContent";

export default DialogContent;
