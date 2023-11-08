import React from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import { customColors } from "../util/Theme";

export const WorldMap = React.memo(
  (props: {
    setTooltipContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
    setTooltipStyle: React.Dispatch<React.SetStateAction<React.CSSProperties>>;
  }) => {
    return (
      <div>
        <ComposableMap>
          <ZoomableGroup>
            <Geographies geography="/features.json">
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    data-tooltip-id="my-tooltip"
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      if (!!geo.properties.note) {
                        props.setTooltipContent(
                          <>
                            <span>{geo.properties.name}</span>
                            <br /> <span>{geo.properties.note}</span>
                          </>
                        );
                      } else {
                        props.setTooltipContent(`${geo.properties.name}`);
                      }
                      if (geo.properties.visited) {
                        props.setTooltipStyle({
                          backgroundColor: customColors.primaryColorDark,
                          color: customColors.white,
                        });
                      } else {
                        props.setTooltipStyle({});
                      }
                    }}
                    onMouseLeave={() => {
                      props.setTooltipContent("");
                    }}
                    style={{
                      default: {
                        fill: geo.properties.visited
                          ? customColors.primaryColor
                          : "#D6D6DA",
                        outline: "none",
                      },
                      hover: {
                        fill: geo.properties.visited
                          ? customColors.primaryColor
                          : "#D6D6DA",
                        outline: "none",
                      },
                      pressed: {
                        fill: geo.properties.visited
                          ? customColors.primaryColor
                          : "#D6D6DA",
                        outline: "none",
                      },
                    }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    );
  }
);
