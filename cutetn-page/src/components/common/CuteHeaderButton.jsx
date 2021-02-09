import React, { useState } from 'react';
import { palletes } from '../../styles/pallete/allPalletes';

export const CuteHeaderButton = (props) => {
    let [ isMouseHover, setIsMouseHover ] = useState();

    let highlightOnMouseEnter = () => {
        setIsMouseHover(true);        
    }

    let unHighlightOnMouseLeave = () => {
        setIsMouseHover(false);        
    }

    return ( 
        <button 
            className="btn m-0" 
            onMouseEnter={highlightOnMouseEnter}
            onMouseLeave={unHighlightOnMouseLeave}
            style={{
                height: '100%',
                color: (isMouseHover? palletes.colors.pink3 : palletes.colors.white),
                fontFamily: palletes.fonts.round
            }}
            onClick={props.onClick}
        >
            {props.children}
        </button>
     );
} 