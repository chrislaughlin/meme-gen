import React from 'react';
import html2canvas from "html2canvas";

const renderTextItem = (onChange, text, index) => {
    return (
        <div className="field-row">
            <label htmlFor="text17">Funny Text: </label>
            <input
                id="text17"
                type="text"
                value={text}
                onChange={event => {
                    onChange(event.target.value, index);
                }}
            />
        </div>
    )
}

const MemeText = ({
    textList,
    onChange,
    onAddRow,
}) => {
    return (
        <div className="meme-text">
            {
                textList.map((text, index) => {
                    return renderTextItem(onChange, text, index);
                })
            }
            <button
                onClick={() => {
                    html2canvas(document.querySelector(".meme-photo")).then(canvas => {
                        window.location.href = canvas
                            .toDataURL("impage/png")
                            .replace("image/png", "image/octet-stream");
                    });
                }}
            >
                Generate
            </button>
            <button
                onClick={onAddRow}
            >
                +
            </button>
        </div>
    );
};


export default MemeText;

