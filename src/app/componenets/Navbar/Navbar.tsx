'use client'

import React, { useState } from "react";
import css from './navbar.module.scss';
import Image from "next/image";
import clsx from "clsx";

export interface NavbarProps {};

export default function Navbar ({}: NavbarProps) {

    const [show, setShow] = useState(false);

    const handleSandwitchClick=()=> {
      setShow (!show);
    }

    return (
        <>
          <Image 
            className={ clsx(css.sandwich, show && css.sandwichhide) }
            width={28}
            height={28}
            src="sandwich.svg"
            alt="menu"
            onClick={()=>{handleSandwitchClick()}} />
       
        <nav className={ clsx(css.navbar, show && css.navbarshown) }>
            <ul className={ css.navbarlist } onClick={()=>{handleSandwitchClick()}}>
                <li>Програми</li>
                <li>Супровід</li>
                <li>Розробки</li>
                <li>Впровадження</li>
                <li>Про нас</li>
            </ul>
        </nav>
        </>);
}