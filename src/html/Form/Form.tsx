import { forwardRef } from "react";

const Form = forwardRef<HTMLFormElement, React.HTMLProps<HTMLFormElement>>(
   (props, ref) => {
      return <form ref={ref} {...props} />;
   },
);
Form.displayName = "Form";

export default Form;
