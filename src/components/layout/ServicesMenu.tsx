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

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-background dark:bg-brand-dark border-l border-neutral/10 dark:border-white/10 shadow-2xl z-[999] overflow-y-auto"
                    >
                        <div className="p-6 h-full flex flex-col">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-heading font-bold text-neutral dark:text-brand-pink">
                                    {t('nav.services')}
                                </h2>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-full hover:bg-neutral/5 dark:hover:bg-white/5 transition-colors text-neutral/70 dark:text-white/70 hover:text-primary"
                                >
                                    <X size={24} />
                                </button>
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
                </>
            )}
        </AnimatePresence>
    );
}
