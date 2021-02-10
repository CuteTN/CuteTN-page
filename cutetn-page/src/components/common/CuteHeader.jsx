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
import { CuteHeaderNavButtons } from './CuteHeaderNavButtons';
import { createStyleGetter } from '../../utils/getStyle';

const CuteHeader = (props) => {
    let getStyle = createStyleGetter(props, cuteHeaderStyle);

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
                    <CuteHeaderNavButtons />
                </div>

                <div className="d-flex align-items-stretch">
                    <CuteHeaderSearchBar />
                </div>

            </nav>
        </div>
    );
}
    
export default CuteHeader;

