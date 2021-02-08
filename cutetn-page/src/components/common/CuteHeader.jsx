import React, { Component, useState } from 'react';
import {cuteHeaderStyle} from '../../styles/components/CuteHeaderStyle'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom"

import cuteTNLogo from '../../assets/images/CuteTNLogo.png'
import { palletes } from '../../styles/pallete/allPalletes';

const CuteHeaderLogo = (props) => {
    return (  
        <img
            className = "mt-1"
            src={cuteTNLogo} 
            style={{
                height : "45px",
            }}
        />
    );
}

const CuteHeaderName = () => {
    return ( 
        <div className="mt-1">
            <div className="row mt-n1 ml-n4">
                <p style={{fontFamily:palletes.fonts.roundHeavy, fontSize:'25px', color:palletes.colors.purple0}}>
                    CuteTN
                </p>
            </div>
            <div className="row mt-n4 ml-n4 mb-n2">
                <p style={{fontFamily:palletes.fonts.code, fontSize:'12px'}}>
                    // The variables namer
                </p>
            </div>
        </div>
     );
}

const CuteHeaderButton = (props) => {
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

const CuteSearchBar = (props) => {
    return ( 
        <form className="form-inline my-2 my-lg-0">
            <input 
                className="form-control mr-sm-2" 
                type="text" 
                placeholder="Search" 
                aria-label="Search"
            />
        </form>
    );
}
 
const CuteHeader = (props) => {
    let history = useHistory();

    function handleHomeButtonClicked() {
      history.push("/home");
    }
    function handleBlogsButtonClicked() {
      history.push("/blogs");
    }
    function handlePlaygroundsButtonClicked() {
      history.push("/playgrounds");
    }

    let getStyle = (field) => {
        let style = cuteHeaderStyle;
        if(props.style)
            style = props.style;

        if(field)
            return style[field];
        else
            return style;
    }

    return (
        <div>
            <nav 
                className = "navbar navbar-expand-sm flex-row pb-0 pt-0 pl-1 d-flex align-items-stretch" 
                style = {{
                    backgroundColor : getStyle("backgroundColor"),
                    borderRadius : getStyle("borderRadius"),
                }}
            >
                <div className="col">
                    <div className="navbar-brand float-left">
                        <CuteHeaderLogo/>
                    </div>
                    
                    <div className="navbar-brand float-left col-8">
                        <CuteHeaderName/>
                    </div>
                </div>

                    
                <div className="d-flex align-items-stretch">
                    <ul className="navbar-nav mr-auto d-flex align-items-stretch">
                        <li className="nav-item active">
                            <CuteHeaderButton onClick={handleHomeButtonClicked}>Home</CuteHeaderButton>
                        </li>
                        <li className="nav-item">
                            <CuteHeaderButton onClick={handleBlogsButtonClicked}>Blogs</CuteHeaderButton>
                        </li>
                        <li className="nav-item">
                            <CuteHeaderButton onClick={handlePlaygroundsButtonClicked}>Playgrounds</CuteHeaderButton>
                        </li>
                    </ul>
                </div>

                <div className="d-flex align-items-stretch">
                    <CuteSearchBar />
                </div>

            </nav>
        </div>
    );
}
    
    export default CuteHeader;

