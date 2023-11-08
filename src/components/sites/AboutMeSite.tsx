import React from "react";
import { WorldMapContainer } from "../ui/WorldMapContainer";
import { CenteredContent } from "../ui/CenteredContent";

export const AboutMeSite = () => {
  return (
    <CenteredContent>
      <div style={{ display: "flex", gap: 16, flexDirection: "column" }}>
        <h1>About Me</h1>
        <p style={{ marginBottom: 16 }}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <h2>Where I've been</h2>
        I love to travel and have been to many places around the world. To keep
        track I created this map with some notes for special places and special
        memories. I really enjoyed my extended stays in Asia, getting to eat all
        kinds of interesting foods (sometimes maybe a bit too interesting),
        meeting family, studying Chinese and making international friends. I
        also love to travel in Europe, especially via train. Mostly taking night
        trains I've cheaped out on the tickets more times than I can count and
        spent the night awkwardly trying to sleep in a much too straight
        position. But somehow I keep making the same mistake...
        <WorldMapContainer />
      </div>
    </CenteredContent>
  );
};
