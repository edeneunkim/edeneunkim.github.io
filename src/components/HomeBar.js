import React from 'react';
import {  Navbar, NavbarContent, NavbarItem, NavbarBrand } from "@nextui-org/navbar";
import { Link } from '@nextui-org/react';
import {GitHubIcon} from "./GitHubIcon";
import ThemeSwitch from "./ThemeSwitch";
import {LinkedInIcon} from "./LinkedInIcon";
import EIcon from "./EIcon";

function HomeBar({toggle, mode}) {
    return (
        <div>
            <Navbar maxWidth='xl' className="bg-background">
                <NavbarContent justify="start">
                    <NavbarBrand as="li" className="gap-3 max-w-fit">
                        <Link className="gap-2">
                            <EIcon mode={mode}/>
                            <pbold className="text-primary">EDEN</pbold>
                        </Link>
                    </NavbarBrand>
                    <NavbarItem>
                        <Link
                            className="text-primary"
                        >Projects</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link
                            className="text-primary"
                        >Experience</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link
                            className="text-primary"
                        >Resume</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link
                            className="text-primary"
                        >Contacts</Link>
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
        </div>
    );
}

export default HomeBar;