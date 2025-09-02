'use client';

import { ReactNode } from 'react';
import { useTheme } from '@/context/theme-context';
import ThemeToggle from './ThemeToggle';

export default function ThemeWrapper({children}: {children: ReactNode}) {
    const {theme} = useTheme();

    return (
        <div className={theme === 'dark' ? 'dark' : ''}>
            <div className='relative'>
                <ThemeToggle />
                {children}
            </div>
        </div>
    );
}