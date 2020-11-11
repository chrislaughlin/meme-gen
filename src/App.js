import React, { useState } from "react";
import '98.css';

import Window from "./window";
import MemeImage from "./memeImage";
import MemeText from "./memeText";

const App = () => {
    const [textList, setTextList] = useState(['Change Me']);

    return (
        <Window>
            <p>Hello Drunk World!</p>
            <MemeText
                textList={textList}
                onChange={(value, index) => {
                    setTextList(curr => {
                        return curr.map((item, i) => {
                            if (i === index){
                                return value;
                            }
                            return item;
                        })
                    })
                }}
                onAddRow={() => {
                    setTextList(curr => {
                        return [...curr, 'new'];
                    })
                }}
            />
            <MemeImage
                textList={textList}
            />
        </Window>
    );
}

export default App;
