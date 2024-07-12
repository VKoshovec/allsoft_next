import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import css from './sab.module.scss'


export interface SabProps{};

export default function Sab({}:SabProps) {
    return (
        <Link className={css.sabLink} href={'https://unionba.com.ua/'}>
          <Image
            className={css.sab}   
            width={110}
            height={28}
            src="/Sab.png"
            alt="Sab"/>      
        </Link>
    );
};