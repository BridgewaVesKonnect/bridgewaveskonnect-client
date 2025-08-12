import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
   AliasesCSSProperties,
   AllSystemCSSProperties,
   SxProps,
   SystemProps,
   Theme,
} from "@mui/system";
import { forwardRef } from "react";

interface ButtonProps extends MuiButtonProps {
   style?: React.CSSProperties;
   system?: SystemProps;
   aliases?: AliasesCSSProperties;
   allSystem?: AllSystemCSSProperties;
   sx?: SxProps<Theme>;
   ref?: React.Ref<HTMLButtonElement>;
   muiProps?: MuiButtonProps;
}

const CustomButton = styled(
   MuiButton,
   {},
)<{}>(({ theme }) => ({
   "textTransform": "none",
   "&.Mui-disabled": {
      pointerEvents: "auto",
   },
}));

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
   return <CustomButton ref={ref} {...props} />;
});

Button.displayName = "Button";

export default Button;
