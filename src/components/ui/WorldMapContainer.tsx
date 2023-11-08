import React from "react";
import { WorldMap } from "../ui/WorldMap";
import { Tooltip } from "react-tooltip";

export const WorldMapContainer = () => {
  const [content, setContent] = React.useState<React.ReactNode>();
  const [style, setStyle] = React.useState<React.CSSProperties>({});
  return (
    <div>
      <WorldMap setTooltipContent={setContent} setTooltipStyle={setStyle} />
      <Tooltip id="my-tooltip" style={style}>
        {content}
      </Tooltip>
    </div>
  );
};
