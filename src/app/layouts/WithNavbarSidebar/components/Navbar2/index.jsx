"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./index.module.css";
import { menuData } from "./assets/data/menu";
import Image from "next/image";
import Button from "@/components/form/components/FieldTemplates/ButtonField";

const Navbar = () => {
    const router = useRouter();
    const [isAtTop, setIsAtTop] = useState(true);
    const dropDownRef = useRef(null);
    const [showMobileViewMenu, setShowMobileViewMenu] = useState(false);

    const hasMachPath = (path, sidebarData) => {
        // if (sidebarData.child) {
        //     for (const item of sidebarData.child) {
        //         if (item.url === path) {
        //             return true;
        //         }
        //     }
        // }
        return false;
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY === 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
                setShowMobileViewMenu(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [dropDownRef]);

    return (
        <header className={`${styles.container_wrapper} ${isAtTop ? styles.transparent : styles.scrolledDown}`}>
            <div ref={dropDownRef} className={styles.container}>
                <div onClick={() => router.push("/")} className={styles.logo}>
                    <Image width={100} height={30} src={require("./assets/svg/logo.svg")} />
                </div>
                <nav className={showMobileViewMenu ? styles.mobile_view_menu : ""}>
                    <ul>
                        {menuData.map((menuItem) => (
                            <li
                                key={menuItem.url}
                                className={
                                    (typeof window !== "undefined" && window.location.pathname === menuItem.url) || hasMachPath(typeof window !== "undefined" ? window.location.pathname : "", menuItem)
                                        ? styles.active
                                        : ""
                                }
                            >
                                {menuItem.child ? (
                                    <>
                                        <Link onClick={() => setShowMobileViewMenu(false)} href={menuItem.url}>
                                            {menuItem.name}{" "}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 48 48">
                                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M36 18L24 30L12 18" />
                                            </svg>
                                        </Link>
                                        <ul>
                                            <div className={styles.submenu_container}>
                                                {menuItem.child.map((subMenuItem) => (
                                                    <li key={subMenuItem.url}>
                                                        <Link href={`${menuItem.parentUrl}${subMenuItem.url}`}>{subMenuItem.name}</Link>
                                                    </li>
                                                ))}
                                            </div>
                                        </ul>
                                    </>
                                ) : (
                                    <Link onClick={() => setShowMobileViewMenu(false)} href={menuItem.url}>
                                        {menuItem.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                        <div>
                            <Button flat={true} variant={"dark"} className={styles.get_in_touch} rounded={true}>
                                {"Get in Touch"}
                            </Button>
                        </div>
                    </ul>
                </nav>

                <div onClick={() => setShowMobileViewMenu(!showMobileViewMenu)} className={styles.menu_bar}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                        <path fill="black" fillRule="evenodd" d="M3 16h18v2H3zm0-5h18v2H3zm0-5h18v2H3z" />
                    </svg>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
