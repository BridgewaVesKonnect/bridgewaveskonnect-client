import { forwardRef } from "react";

const Img = forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>(
   (props, ref) => {
      return <img ref={ref} {...props} />;
   },
);
Img.displayName = "Img";
export default Img;
