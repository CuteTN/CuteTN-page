import React, { Component, useState } from 'react';
import {cuteHeaderStyle} from '../../styles/components/CuteHeaderStyle'

import {
    useHistory,
    useRouteMatch
} from "react-router-dom"

import { palletes } from '../../styles/pallete/allPalletes';
import { CuteHeaderLogo } from './CuteHeaderLogo';
import { CuteHeaderTitle } from './CuteHeaderTitle';
import { CuteHeaderButton } from './CuteHeaderButton';
import { CuteHeaderSearchBar } from './CuteHeaderSearchBar';

const CuteHeader = (props) => {
    let history = useHistory();
    let { url } = useRouteMatch();
    console.log(url);

    let routeToHandler = (url) => {
        return () => history.push(url);
    }

    let handleHomeButtonClicked = routeToHandler(`/`);
    let handleBlogsButtonClicked = routeToHandler(`/blogs`);
    let handlePlaygroundsButtonClicked = routeToHandler(`/playgrounds`);

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
                        <CuteHeaderTitle/>
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
                    <CuteHeaderSearchBar />
                </div>

            </nav>
        </div>
    );
}
    
export default CuteHeader;

