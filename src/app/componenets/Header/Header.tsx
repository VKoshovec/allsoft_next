import React from 'react';
import Logo from '../Logo/Logo';

export interface HeaderProps {
    children: any;
};

export default function Header({ children }:HeaderProps) {
    return (
        <header className="border-b-2 border-blue-500">
           <Logo/>
           { children } 
        </header>
    );
};