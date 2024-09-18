import React from 'react';
import {  Navbar, NavbarContent, NavbarItem, NavbarBrand } from "@nextui-org/navbar";
import { Link } from '@nextui-org/react';
import {GitHubIcon} from "./Icons/GitHubIcon";
import ThemeSwitch from "./ThemeSwitch";
import {LinkedInIcon} from "./Icons/LinkedInIcon";
import EIcon from "./Icons/EIcon";


// from https://github.com/mui/material-ui/tree/v5.15.16/docs/data/material/getting-started/templates/landing-page
export const scrollToSection = (sectionId) => {
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

function HomeBar({toggle, mode}) {
    return (
        <div>
            <Navbar isBordered maxWidth='xl' className="fixed">
                <NavbarContent justify="start">
                    <NavbarBrand as="li" className="gap-2 max-w-fit" onClick={() => scrollToSection('home')}>
                        <EIcon mode={mode} />
                        <p className="text-primary bold barItem">EDEN</p>
                    </NavbarBrand>
                    <NavbarItem onClick={() => scrollToSection('about')}>
                        <p className="text-primary barItem">About</p>
                    </NavbarItem>
                    <NavbarItem onClick={() => scrollToSection('projects')}>
                        <p className="text-primary barItem">Projects</p>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem className="flex">
                        <Link isExternal href="https://github.com/edeneunkim">
                            <GitHubIcon width={26} height={26} className="text-default-500"/>
                        </Link>
                    </NavbarItem>
                    <NavbarItem className="flex">
                        <Link isExternal href="https://linkedin.com/in/eden-kim-cs">
                            <LinkedInIcon width={24} height={24}/>
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