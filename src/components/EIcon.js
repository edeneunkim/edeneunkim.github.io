import React from 'react';
import {ELightIcon} from "./ELightIcon";
import {EDarkIcon} from "./EDarkIcon";

export function EIcon({mode}) {
    if (mode) {
        return (<EDarkIcon />);
    } else {
        return (<ELightIcon />)
    }
}

export default EIcon;