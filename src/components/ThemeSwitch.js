import {LightIcon} from "./LightIcon";
import {DarkIcon} from "./DarkIcon";
import {Switch} from "@nextui-org/react";
import React from "react";

function ThemeSwitch({toggle}) {
    return (
        <Switch
            size="md"
            color="default"
            thumbIcon={({isSelected, className}) =>
                isSelected ? (
                    <DarkIcon className={className} />
                ) : (
                    <LightIcon className={className} />
                )
            }
            onChange={toggle}
        >
        </Switch>
    );
}

export default ThemeSwitch;