import { Toolbar as MuiToolbar, ToolbarProps as MuiToolbarProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
   AliasesCSSProperties,
   AllSystemCSSProperties,
   SxProps,
   SystemProps,
   Theme,
} from "@mui/system";
import { forwardRef } from "react";

interface ToolbarProps extends MuiToolbarProps {
   style?: React.CSSProperties;
   system?: SystemProps;
   aliases?: AliasesCSSProperties;
   allSystem?: AllSystemCSSProperties;
   sx?: SxProps<Theme>;
   ref?: React.Ref<HTMLDivElement>;
   muiProps?: MuiToolbarProps;
}

const CustomToolbar = styled(MuiToolbar, {})<{}>(({ theme }) => ({}));

const Toolbar = forwardRef<HTMLDivElement, ToolbarProps>((props, ref) => {
   return <CustomToolbar ref={ref} {...props} />;
});

Toolbar.displayName = "Toolbar";
export default Toolbar;
