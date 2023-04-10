'use client'
import React, { FC, ReactNode } from "react";
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'
interface ProvidersProps {
    children: ReactNode
}

const Provider: FC<ProvidersProps> = ({ children }) => {
    return (
        <ThemeProvider>
            <SessionProvider>
                {children}
            </SessionProvider>
        </ThemeProvider>

    )
};
export default Provider;
