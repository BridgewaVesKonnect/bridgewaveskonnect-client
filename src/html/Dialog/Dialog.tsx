import { Dialog as MuiDialog, DialogProps as MuiDialogProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
   AliasesCSSProperties,
   AllSystemCSSProperties,
   SxProps,
   SystemProps,
   Theme,
} from "@mui/system";
import React, { forwardRef } from "react";

interface DialogProps extends MuiDialogProps {
   style?: React.CSSProperties;
   system?: SystemProps;
   aliases?: AliasesCSSProperties;
   allSystem?: AllSystemCSSProperties;
   sx?: SxProps<Theme>;
   ref?: React.Ref<HTMLDivElement>;
   muiProps?: MuiDialogProps;
}

const CustomDialog = styled(MuiDialog, {})<{ theme?: Theme }>(({ theme }) => ({}));

const Dialog = forwardRef<HTMLDivElement, DialogProps>((props, ref) => {
   return <CustomDialog ref={ref} {...props} />;
});

Dialog.displayName = "Dialog";

export default Dialog;
