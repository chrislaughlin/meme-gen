import React from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';

import photo from './photo.jpg'

const StyledMemeText = styled.span`
    position: absolute;
    left: 16px;
    bottom: ${props => props.offSet}px;
    color: white;
    font-size: 40px;
    font-weight: 700;
    text-shadow: 2px 2px 2px #000;
    text-align: center;
    cursor: move;
`;

const MemeImage = ({ textList }) => {
    return (
        <div className="meme-photo">
            <img src={photo} alt="meme photo"/>
                {
                    textList.map((text, index) => {
                        return (
                            <Draggable>
                                <StyledMemeText
                                    offSet={(index + 45) * textList.length}
                                >
                                    {text.toUpperCase()}
                                </StyledMemeText>
                            </Draggable>
                        )
                    })
                }
        </div>
    );
};


export default MemeImage;

