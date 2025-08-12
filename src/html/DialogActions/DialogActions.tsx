import {
   DialogActions as MuiDialogActions,
   DialogActionsProps as MuiDialogActionsProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { SxProps, Theme } from "@mui/system";
import React, { forwardRef } from "react";

interface DialogActionsProps extends MuiDialogActionsProps {
   sx?: SxProps<Theme>;
   ref?: React.Ref<HTMLDivElement>;
}

const CustomDialogActions = styled(
   MuiDialogActions,
   {},
)<{ theme?: Theme }>(({ theme }) => ({}));

const DialogActions = forwardRef<HTMLDivElement, DialogActionsProps>((props, ref) => {
   return <CustomDialogActions ref={ref} {...props} />;
});

DialogActions.displayName = "DialogActions";

export default DialogActions;
