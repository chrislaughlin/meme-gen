import React from "react";
import '98.css';

import Window from "./window";
import MemeImage from "./memeImage";
import MemeText from "./memeText";

const App = () => {
    return (
        <Window>
            <p>Hello Drunk World!</p>
            <MemeText/>
            <MemeImage/>
        </Window>
    );
}

export default App;
