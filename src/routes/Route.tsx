import { ComponentType } from "react";
import { Redirect, Route as ReactRoute, RouteProps } from "react-router-dom";

interface Props extends RouteProps {
  component: ComponentType;
  isPrivate?: boolean;
}

export const Route = ({
  isPrivate = false,
  component: Component,
  ...rest
}: Props) => {
  return (
    <ReactRoute
      {...rest}
      render={() =>
        isPrivate === !!localStorage.getItem("toke:kuchack") ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/" : "/dashboard"} />
        )
      }
    />
  );
};
