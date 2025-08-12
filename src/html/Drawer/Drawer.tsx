import { Drawer as MuiDrawer, DrawerProps as MuiDrawerProps } from "@mui/material";
import { styled, SxProps, Theme } from "@mui/material/styles";
import { forwardRef } from "react";
interface DrawerProps extends MuiDrawerProps {
   style?: React.CSSProperties;
   system?: React.CSSProperties;
   aliases?: React.CSSProperties;
   allSystem?: React.CSSProperties;
   sx?: SxProps<Theme>;
   ref?: React.Ref<HTMLDivElement>;
   muiProps?: MuiDrawerProps;
}

const CustomDrawer = styled(MuiDrawer, {})<{}>(({ theme }) => ({}));

const Drawer = forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
   return <CustomDrawer ref={ref} {...props} />;
});

Drawer.displayName = "Drawer";
export default Drawer;
