import { Tooltip as MuiTooltip, TooltipProps as MuiTooltipProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
   AliasesCSSProperties,
   AllSystemCSSProperties,
   SxProps,
   SystemProps,
   Theme,
} from "@mui/system";
import React, { forwardRef } from "react";

interface TooltipProps extends MuiTooltipProps {
   style?: React.CSSProperties;
   system?: SystemProps;
   aliases?: AliasesCSSProperties;
   allSystem?: AllSystemCSSProperties;
   sx?: SxProps<Theme>;
   ref?: React.Ref<HTMLElement>;
   muiProps?: MuiTooltipProps;
}

const CustomTooltip = styled(MuiTooltip, {})<{ theme?: Theme }>(({ theme }) => ({}));

const Tooltip = forwardRef<HTMLElement, TooltipProps>((props, ref) => {
   return <CustomTooltip ref={ref} {...props} />;
});

Tooltip.displayName = "Tooltip";

export default Tooltip;
