import React from 'react';
import photo from './photo.jpg'

const MemeImage = () => {
    return (
        <div className="meme-photo">
            <img src={photo} alt="meme photo"/>
        </div>
    );
};


export default MemeImage;

