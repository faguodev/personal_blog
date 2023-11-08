import * as React from "react";

export const CenteredContent = (props: {
  children?: React.ReactNode;
  id?: string;
}) => (
  <div
    style={{
      padding: 10,
    }}
    id={props.id}
  >
    <div
      style={{
        padding: "60px 50px 70px",
        maxWidth: 1200,
        margin: "auto",
        display: "block",
      }}
    >
      {props.children}
    </div>
  </div>
);
