import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    return (
        <>
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
                        className="md:hidden p-2 text-primary hover:text-primary/80 transition-colors flex flex-col gap-[6px] justify-center items-center w-10 h-10 relative z-[1001]"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            className="w-6 h-0.5 bg-current rounded-full origin-center"
                        />
                        <motion.span
                            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-6 h-0.5 bg-current rounded-full"
                        />
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            className="w-6 h-0.5 bg-current rounded-full origin-center"
                        />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu — rendered via portal to escape nav stacking context */}
            {createPortal(
                <AnimatePresence>
                    {isOpen && (
                        <>
                            {/* Backdrop - click anywhere to close */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsOpen(false)}
                                className="md:hidden fixed inset-0 bg-black/40 z-[998]"
                            />
                            {/* Menu Panel */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.25 }}
                                className="md:hidden fixed top-14 left-0 w-full bg-background dark:bg-brand-dark border-b border-neutral/5 dark:border-white/10 shadow-lg z-[999]"
                            >
                                <motion.div
                                    className="p-4 flex flex-col gap-4"
                                    initial="hidden"
                                    animate="show"
                                    variants={{
                                        hidden: { opacity: 0 },
                                        show: {
                                            opacity: 1,
                                            transition: {
                                                staggerChildren: 0.1,
                                                delayChildren: 0.1
                                            }
                                        }
                                    }}
                                >
                                    {[
                                        { href: "#about", label: t('nav.about') },
                                        { href: "#services", label: t('nav.services') },
                                        { href: "#contact", label: t('nav.contact') }
                                    ].map((item, idx) => (
                                        <motion.a
                                            key={idx}
                                            href={item.href}
                                            className="text-lg font-medium py-2 border-b border-neutral/5 dark:border-white/10 dark:text-brand-pink"
                                            onClick={() => setIsOpen(false)}
                                            variants={{
                                                hidden: { x: 50, opacity: 0 },
                                                show: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
                                            }}
                                        >
                                            {item.label}
                                        </motion.a>
                                    ))}

                                    <motion.div
                                        className="flex flex-col gap-4 mt-2"
                                        variants={{
                                            hidden: { x: 50, opacity: 0 },
                                            show: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
                                        }}
                                    >
                                        <div className="flex justify-between items-center">
                                            <ThemeToggle />
                                            <LanguageSwitcher />
                                        </div>
                                        <Button className="w-full" asChild>
                                            <a href="#contact" onClick={() => setIsOpen(false)}>{t('nav.book')}</a>
                                        </Button>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
}

