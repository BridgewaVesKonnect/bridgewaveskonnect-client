import { TextareaAutosize, TextareaAutosizeProps } from "@mui/material";
import {
   AliasesCSSProperties,
   AllSystemCSSProperties,
   styled,
   SxProps,
   SystemProps,
   Theme,
} from "@mui/system";
import { forwardRef } from "react";

interface TextareaProps extends TextareaAutosizeProps {
   style?: React.CSSProperties;
   system?: SystemProps;
   aliases?: AliasesCSSProperties;
   allSystem?: AllSystemCSSProperties;
   sx?: SxProps<Theme>;
   ref?: React.Ref<HTMLTextAreaElement>;
   muiProps?: TextareaAutosizeProps;
}

const CustomTextarea = styled(TextareaAutosize, {})<{}>(({ theme }) => ({}));

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
   return <CustomTextarea ref={ref} {...props} />;
});
Textarea.displayName = "Textarea";
export default Textarea;
