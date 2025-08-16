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
   FormHelperText as MuiFormHelperText,
   FormHelperTextProps as MuiFormHelperTextProps,
} from "@mui/material";

interface FormHelperTextProps extends MuiFormHelperTextProps {
   style?: React.CSSProperties;
   system?: SystemProps;
   aliases?: AliasesCSSProperties;
   allSystem?: AllSystemCSSProperties;
   sx?: SxProps<Theme>;
   ref?: React.Ref<HTMLParagraphElement>;
   muiProps?: MuiFormHelperTextProps;
}

const CustomFormHelperText = styled(MuiFormHelperText, {})<{}>(({ theme }) => ({}));

const FormHelperText = forwardRef<HTMLParagraphElement, FormHelperTextProps>(
   (props, ref) => {
      return <CustomFormHelperText ref={ref} {...props} />;
   },
);

FormHelperText.displayName = "FormHelperText";

export default FormHelperText;
