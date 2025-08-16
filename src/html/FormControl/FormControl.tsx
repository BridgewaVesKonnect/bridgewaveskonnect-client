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
   FormControl as MuiFormControl,
   FormControlProps as MuiFormControlProps,
} from "@mui/material";

interface FormControlProps extends MuiFormControlProps {
   style?: React.CSSProperties;
   system?: SystemProps;
   aliases?: AliasesCSSProperties;
   allSystem?: AllSystemCSSProperties;
   sx?: SxProps<Theme>;
   ref?: React.Ref<HTMLDivElement>;
   muiProps?: MuiFormControlProps;
}
const CustomFormControl = styled(MuiFormControl, {})<{}>(({ theme }) => ({}));

const FormControl = forwardRef<HTMLDivElement, FormControlProps>((props, ref) => {
   return <CustomFormControl ref={ref} {...props} />;
});

FormControl.displayName = "FormControl";
export default FormControl;
