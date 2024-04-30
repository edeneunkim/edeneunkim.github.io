import React from 'react';
import {  Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu,
    NavbarMenuItem } from "@nextui-org/navbar";
import { Link } from '@nextui-org/react';
import {GitHubIcon} from "./GitHubIcon";

function HomeBar() {
    return (
        <Navbar isBordered>
            <NavbarContent>
                <NavbarItem>
                    Home
                </NavbarItem>
                <NavbarItem>
                    Projects
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
                <NavbarItem>
                    <Link href="https://github.com/edeneunkim" rel="noopener noreferrer" target="_blank"
                          color="foreground">
                        <GitHubIcon />
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}

export default HomeBar;