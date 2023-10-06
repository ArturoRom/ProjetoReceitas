import React from "react";

type Props = {
  children: React.ReactNode;
};


const Nav = ({ children }: Props) => {
  return (
    <h1 className="basis-3/5 font-montserrat text-1xl font-bold">{children}</h1>
  );
};

export default Nav;