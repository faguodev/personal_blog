import React from "react";
import { WorldMap } from "../ui/WorldMap";
import { Tooltip } from "react-tooltip";
import { customColors } from "../util/Theme";

export const WorldMapContainer = () => {
  const [content, setContent] = React.useState<React.ReactNode>();
  const [style, setStyle] = React.useState<React.CSSProperties>({});

  return (
    <div>
      <WorldMap setTooltipContent={setContent} setTooltipStyle={setStyle} />
      <Tooltip
        id="my-tooltip"
        style={style}
        className="opaque tooltip"
        classNameArrow="tooltipArrow"
      >
        {content}
      </Tooltip>
      <p style={{ color: customColors.comment }}>
        Note: The territory divison and labelling was provided by the world map
        library and do not represent or indicate any political believes I might
        hold.
      </p>
    </div>
  );
};
