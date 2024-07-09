import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import css from './logo.module.scss'

export interface LogoProrps{};

export default function Logo({}:LogoProrps) {
    return (
        // <Image
        // width={60}
        // height={60}
        // alt='logo'
        // src='/Logo_site.png'
        // >
        // </Image>
        <>
        <p className={clsx('text-cyan-700 m-1 p-0 absolute font-bold text-2xl', css.Logo)}>All</p>
        <p className={clsx('text-red-700 ml-8 m-1 p-0 absolute font-bold text-2xl', css.Logo)}>Soft</p>
        </>
    );
};