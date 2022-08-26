import React from "react";
import { Body } from "./styles";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <Body>{children}</Body>;
};

export default Container;
