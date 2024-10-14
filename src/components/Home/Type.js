import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "UI Developer",
          "UI Developer Intern",
          "Frontend deveroper",
          "Open Source Contributor",
          "UI Expert",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
