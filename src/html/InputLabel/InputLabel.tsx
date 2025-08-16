import {
   AliasesCSSProperties,
   AllSystemCSSProperties,
   styled,
   SxProps,
   SystemProps,
   Theme,
} from "@mui/system";
import { forwardRef } from "react";

import {
   InputLabel as MuiInputLabel,
   InputLabelProps as MuiInputLabelProps,
} from "@mui/material";

interface InputLabelProps extends MuiInputLabelProps {
   style?: React.CSSProperties;
   system?: SystemProps;
   aliases?: AliasesCSSProperties;
   allSystem?: AllSystemCSSProperties;
   sx?: SxProps<Theme>;
   ref?: React.Ref<HTMLLabelElement>;
   muiProps?: MuiInputLabelProps;
}
const CustomInputLabel = styled(MuiInputLabel, {})<{}>(({ theme }) => ({}));

const InputLabel = forwardRef<HTMLLabelElement, InputLabelProps>((props, ref) => {
   return <CustomInputLabel ref={ref} {...props} />;
});

InputLabel.displayName = "InputLabel";
export default InputLabel;
