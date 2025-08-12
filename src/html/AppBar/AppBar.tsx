import { AppBar as MuiAppBar, AppBarProps as MuiAppBarProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { forwardRef } from "react";

interface AppBarProps extends MuiAppBarProps {
   style?: React.CSSProperties;
   system?: React.CSSProperties;
   aliases?: React.CSSProperties;
   allSystem?: React.CSSProperties;
   sx?: React.CSSProperties;
   ref?: React.Ref<HTMLDivElement>;
   muiProps?: MuiAppBarProps;
}

const CustomAppBar = styled(
   MuiAppBar,
   {},
)<{}>(({ theme }) => ({
   background: "transparent",
   boxShadow: "none",
   backdropFilter: "blur(10px)",
}));

const AppBar = forwardRef<HTMLDivElement, AppBarProps>((props, ref) => {
   return <CustomAppBar ref={ref} {...props} />;
});

AppBar.displayName = "AppBar";

export default AppBar;
