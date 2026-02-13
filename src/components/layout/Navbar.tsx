import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    return (
        <nav className="sticky top-0 z-50 w-full bg-background/80 dark:bg-brand-dark/90 backdrop-blur-md border-b border-neutral/5 dark:border-white/10">
            <div className="container mx-auto px-4 md:px-6 h-14 md:h-20 flex items-center justify-between">

                {/* Logo */}
                <a href="#" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                        SK
                    </div>
                    <span className="text-xl font-heading font-bold text-neutral dark:text-brand-pink">
                        Stupenki Kids
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#about" className="text-neutral dark:text-brand-pink hover:text-primary font-medium transition-colors">{t('nav.about')}</a>
                    <a href="#services" className="text-neutral dark:text-brand-pink hover:text-primary font-medium transition-colors">{t('nav.services')}</a>
                    <a href="#contact" className="text-neutral dark:text-brand-pink hover:text-primary font-medium transition-colors">{t('nav.contact')}</a>
                </div>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <LanguageSwitcher />
                    <ThemeToggle />
                    <Button variant="primary" size="sm" asChild>
                        <a href="#contact">{t('nav.book')}</a>
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-primary hover:text-primary/80 transition-colors flex flex-col gap-[5px] justify-center items-center w-10 h-10"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <X className="w-8 h-8" />
                    ) : (
                        <>
                            <span className="w-6 h-0.5 bg-current rounded-full" />
                            <span className="w-6 h-0.5 bg-current rounded-full" />
                            <span className="w-6 h-0.5 bg-current rounded-full" />
                        </>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-background dark:bg-brand-dark border-b border-neutral/5 dark:border-white/10 p-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-5">
                    <a href="#about" className="text-lg font-medium py-2 border-b border-neutral/5 dark:border-white/10 dark:text-brand-pink" onClick={() => setIsOpen(false)}>{t('nav.about')}</a>
                    <a href="#services" className="text-lg font-medium py-2 border-b border-neutral/5 dark:border-white/10 dark:text-brand-pink" onClick={() => setIsOpen(false)}>{t('nav.services')}</a>
                    <a href="#contact" className="text-lg font-medium py-2 border-b border-neutral/5 dark:border-white/10 dark:text-brand-pink" onClick={() => setIsOpen(false)}>{t('nav.contact')}</a>
                    <div className="flex flex-col gap-4 mt-2">
                        <div className="flex justify-between items-center">
                            <ThemeToggle />
                            <LanguageSwitcher />
                        </div>
                        <Button className="w-full" asChild>
                            <a href="#contact" onClick={() => setIsOpen(false)}>{t('nav.book')}</a>
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
}
