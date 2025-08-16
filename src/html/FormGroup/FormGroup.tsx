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
   FormGroup as MuiFormGroup,
   FormGroupProps as MuiFormGroupProps,
} from "@mui/material";

interface FormGroupProps extends MuiFormGroupProps {
   style?: React.CSSProperties;
   system?: SystemProps;
   aliases?: AliasesCSSProperties;
   allSystem?: AllSystemCSSProperties;
   sx?: SxProps<Theme>;
   ref?: React.Ref<HTMLDivElement>;
   muiProps?: MuiFormGroupProps;
}

const CustomFormGroup = styled(MuiFormGroup, {})<{}>(({ theme }) => ({}));

const FormGroup = forwardRef<HTMLDivElement, FormGroupProps>((props, ref) => {
   return <CustomFormGroup ref={ref} {...props} />;
});

FormGroup.displayName = "FormGroup";
export default FormGroup;
