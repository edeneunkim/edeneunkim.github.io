import React from 'react';
import {  Navbar, NavbarContent, NavbarItem, NavbarBrand } from "@nextui-org/navbar";
import { Link } from '@nextui-org/react';
import {GitHubIcon} from "./GitHubIcon";
import ThemeSwitch from "./ThemeSwitch";
import {LinkedInIcon} from "./LinkedInIcon";
import EIcon from "./EIcon";

function HomeBar({toggle, mode}) {
    // from https://github.com/mui/material-ui/tree/v5.15.16/docs/data/material/getting-started/templates/landing-page
    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            const targetScroll = sectionElement.offsetTop;
            sectionElement.scrollIntoView({ behavior: 'smooth' });
            window.scrollTo({
                top: targetScroll,
                behavior: 'smooth',
            });
        }
    };
    return (
        <div>
            <Navbar maxWidth='xl' className="bg-background fixed">
                <NavbarContent justify="start">
                    <NavbarBrand as="li" className="gap-2 max-w-fit" onClick={() => scrollToSection('home')}>
                        <EIcon mode={mode}/>
                        <pbold className="text-primary">EDEN</pbold>
                    </NavbarBrand>
                    <NavbarItem onClick={() => scrollToSection('projects')}>
                        <p className="text-primary">Projects</p>
                    </NavbarItem>
                    <NavbarItem onClick={() => scrollToSection('experience')}>
                        <p className="text-primary">Experience</p>
                    </NavbarItem>
                    <NavbarItem onClick={() => scrollToSection('resume')}>
                        <p className="text-primary">Resume</p>
                    </NavbarItem>
                    <NavbarItem onClick={() => scrollToSection('contacts')}>
                        <p className="text-primary">Contacts</p>
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