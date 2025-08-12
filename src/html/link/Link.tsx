import NextLink from "next/link";
import { forwardRef } from "react";

interface LinkProps {
   href: string;
   children: React.ReactNode;
   className?: string;
   style?: React.CSSProperties;
   onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
   replace?: boolean;
   scroll?: boolean;
   shallow?: boolean;
   passHref?: boolean;
   prefetch?: boolean;
   locale?: string | false;
   as?: string;
   legacyBehavior?: boolean;
   ref?: React.Ref<HTMLAnchorElement>;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
   return <NextLink ref={ref} {...props} />;
});

Link.displayName = "Link";

export default Link;
