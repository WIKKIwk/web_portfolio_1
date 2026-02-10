import { useEffect, useState } from 'react';

import { Button } from './Button';
import { useTranslation } from 'react-i18next';

export function ThemeToggle() {
    const { t } = useTranslation();
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const stored = localStorage.getItem('theme');
            if (stored) return stored;
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'light';
    });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    if (!mounted) return null;

    return (
        <Button
            variant="ghost"
            onClick={toggleTheme}
            className="group relative overflow-hidden rounded-full border border-neutral/10 dark:border-white/10 bg-white/50 dark:bg-neutral-800/50 px-5 py-2 text-sm font-medium text-neutral dark:text-cream transition-all hover:bg-white dark:hover:bg-neutral-800 hover:shadow-md active:scale-95"
            aria-label="Toggle theme"
        >
            <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5">
                {theme === 'light' ? t('theme.light') : t('theme.dark')}
            </span>
        </Button>
    );
}
