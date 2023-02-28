import { useEffect } from "react";
import grapesjs from "grapesjs";
import editorSettings from "../helper/editor";

export default function Home() {
  useEffect(() => {
    // @ts-ignore
    const editor = grapesjs.init(editorSettings);

    // destroy on exit
    return () => {
      editor.destroy();
    };
  });
  return (
    <div className="row" style={{ minHeight: "100svh" }}>
      <div id="layers" className="column" style={{ flexBasis: "500px" }}>
        Layers
        <div id="layers-container"></div>
      </div>

      <div className="column editor-clm">
        <div id="blocks"></div>
        <div id="gjs2" style={{ overflow: "hidden" }}></div>
      </div>

      <div id="style-manager" className="column" style={{ flexBasis: "500px" }}>
        Style Manager
        <br />
        <div id="selectors-container"></div>
        <div id="traits-container"></div>
        <div id="style-manager-container"></div>
      </div>
    </div>
  );
}
