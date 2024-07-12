import React from 'react';
import Logo from '../Logo/Logo';
import Sab from '../SAB/Sab';
import clsx from 'clsx';
import css from './header.module.scss';

export interface HeaderProps {
    children: any;
};

export default function Header({ children }:HeaderProps) {
    return (
        <header className={clsx("border-b-2 border-blue-500 flex", css.header)}>
           <Logo/>
           { children } 
           <Sab/>
        </header>
    );
};