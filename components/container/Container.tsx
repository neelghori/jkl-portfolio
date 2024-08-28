import { ReactNode } from "react";
import classes from "./style.module.scss";

const Container: React.FC<{
  children: ReactNode;
  classname?: string;
  hidden?: boolean;
}> = ({ children, classname, hidden = false }) => (
  <>
    {hidden ? (
      <>{children}</>
    ) : (
      <div
        className={`${classes.Container} ${classname ? classname : undefined}`}
      >
        {children}
      </div>
    )}
  </>
);

export default Container;
