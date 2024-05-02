import React from 'react';
import {  Navbar, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import { Link } from '@nextui-org/react';
import {GitHubIcon} from "./GitHubIcon";
import ThemeSwitch from "./ThemeSwitch";
import {LinkedInIcon} from "./LinkedInIcon";

function HomeBar({toggle}) {
    return (
        <Navbar>
            <NavbarContent>
                <NavbarItem>
                    Home
                </NavbarItem>
                <NavbarItem>
                    Projects
                </NavbarItem>
                <NavbarItem>
                    Experience
                </NavbarItem>
                <NavbarItem>
                    Resume
                </NavbarItem>
                <NavbarItem>
                    Certificates
                </NavbarItem>
                <NavbarItem>
                    Contacts
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="flex">
                    <Link isExternal href="https://github.com/edeneunkim">
                        <GitHubIcon className="text-default-500"/>
                    </Link>
                </NavbarItem>
                <NavbarItem className="flex">
                    <Link isExternal href="https://linkedin.com/in/eden-kim-cs">
                        <LinkedInIcon />
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <ThemeSwitch toggle={toggle}/>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}

export default HomeBar;