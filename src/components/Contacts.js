import * as React from 'react';
import {GitHubIcon} from "./Icons/GitHubIcon";
import {GmailIcon} from "./Icons/GmailIcon";
import {Link} from "@nextui-org/react";
import {LinkedInColorIcon} from "./Icons/LinkedInColorIcon";

function Contacts() {
    return (
        <div id='contacts' className="">
            <div className="contactsContainer">
                <Link isExternal href="https://github.com/edeneunkim">
                    <GitHubIcon width={100} height={100}/>
                </Link>
                <Link isExternal href="https://linkedin.com/in/eden-kim-cs">
                    <LinkedInColorIcon width={100} height={100} />
                </Link>
                <Link onClick={(e) => {
                    window.location.href = "mailto:edeneunkim@gmail.com";
                    e.preventDefault();
                }}>
                    <GmailIcon width={100} height={100}/>
                </Link>
            </div>
        </div>
    );
}

export default Contacts;