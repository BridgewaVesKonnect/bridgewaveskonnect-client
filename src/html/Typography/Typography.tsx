import {
   Typography as MuiTypography,
   TypographyProps as MuiTypographyProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
   AliasesCSSProperties,
   AllSystemCSSProperties,
   SxProps,
   SystemProps,
   Theme,
} from "@mui/system";
import { forwardRef } from "react";

interface TypographyProps extends MuiTypographyProps {
   style?: React.CSSProperties;
   system?: SystemProps;
   aliases?: AliasesCSSProperties;
   allSystem?: AllSystemCSSProperties;
   sx?: SxProps<Theme>;
   ref?: React.Ref<HTMLDivElement>;
   muiProps?: MuiTypographyProps;
}

const CustomTypography = styled(MuiTypography, {})<{}>(({ theme }) => ({}));

const Typography = forwardRef<HTMLDivElement, TypographyProps>((props, ref) => {
   return <CustomTypography ref={ref} {...props} />;
});

Typography.displayName = "Typography";

export default Typography;
