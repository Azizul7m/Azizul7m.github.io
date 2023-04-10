import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { FC } from 'react'
import { Button } from './ui/Button';

interface ThemeToggleProps {};

const ThemeToggle: FC<ThemeToggleProps> = ({}) => {
    const [setTheme] = useTheme();
    return (
        <>
        </>
    )
};

export default ThemeToggle;
