import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import { useEffect } from 'react';

interface ServicesMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ServicesMenu({ isOpen, onClose }: ServicesMenuProps) {
    const { t } = useTranslation();

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 z-[998] backdrop-blur-sm"
                    />

                    {/* Modal Container - Centered with margins */}
                    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.8 }}
                            className="w-full max-w-lg max-h-[90vh] bg-background dark:bg-brand-dark border border-neutral/10 dark:border-white/10 shadow-2xl rounded-[32px] overflow-hidden flex flex-col pointer-events-auto"
                        >
                            <div className="p-6 md:p-8 h-full flex flex-col relative overflow-y-auto">
                                {/* Close Button - Absolute Top Right */}
                                <motion.button
                                    onClick={onClose}
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="absolute top-6 right-6 p-2 text-neutral/50 dark:text-white/50 hover:text-primary transition-colors"
                                    aria-label="Close menu"
                                >
                                    <X size={24} strokeWidth={2.5} />
                                </motion.button>

                                {/* Header */}
                                <div className="mb-8">
                                    <h2 className="text-3xl font-heading font-bold text-neutral dark:text-brand-pink">
                                        {t('nav.services')}
                                    </h2>
                                    <div className="h-1 w-12 bg-primary rounded-full mt-2" />
                                </div>

                                {/* Content Placeholder */}
                                <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4 opacity-60">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
                                    </div>
                                    <h3 className="text-xl font-bold">{t('hero.buttons.services')} & {t('hero.badges.rating')}</h3>
                                    <p className="text-sm">
                                        Tez orada bu yerda barcha xizmatlarimiz va narxlarimiz bo'ladi.
                                    </p>
                                </div>

                                {/* Footer hint */}
                                <div className="mt-auto pt-8 border-t border-neutral/5 dark:border-white/5 text-center text-xs text-neutral/40 dark:text-white/30">
                                    Stupenki Kids &copy; {new Date().getFullYear()}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
