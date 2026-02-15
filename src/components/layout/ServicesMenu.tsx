import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

interface Service {
    shortName: string;
    fullName: string;
    price: string;
}

const services: Service[] = [
    {
        shortName: "Kichik yoshli bolalar reabilitatsiyasi",
        fullName: 'Kompleks nevro-reabilitatsiya bolalar "0" dan "5" yoshgacha (Bobat, Voyta, YMT, reflekslarni integratsiya qilish)',
        price: "180 000 so'm",
    },
    {
        shortName: "O'smir yoshli bolalar reabilitatsiyasi",
        fullName: "Kompleks nevro-reabilitatsiya bolalar 5 dan 14 yoshgacha (Voyta, Bobat, YMT, med.nozhi va vakuum metodikalari)",
        price: "220 000 so'm",
    },
    {
        shortName: "Egzarta kineziterapiyasi",
        fullName: "Egzarta tizimida kineziterapiya",
        price: "150 000 so'm",
    },
    {
        shortName: "Kinezoteyping",
        fullName: "Kinezoteiping",
        price: "100 000 so'm",
    },
    {
        shortName: "Manual terapiya va massaj",
        fullName: "Manualka va oyoq massaji",
        price: "120 000 so'm",
    },
    {
        shortName: "Yumeixo terapiyasi",
        fullName: "Yumeixo va YMT metodikasi bo'yicha kineziterapiya",
        price: "300 000 so'm",
    },
];

interface ServicesMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ServicesMenu({ isOpen, onClose }: ServicesMenuProps) {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            setOpenIndex(null);
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const toggleService = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

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

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.8 }}
                            className="w-full max-w-lg max-h-[90vh] bg-background dark:bg-brand-dark border border-neutral/10 dark:border-white/10 shadow-2xl rounded-[32px] overflow-hidden flex flex-col pointer-events-auto"
                            style={{ touchAction: 'pan-y' }}
                        >
                            <div className="p-6 md:p-8 flex flex-col relative overflow-y-auto" style={{ touchAction: 'pan-y' }}>
                                {/* Close Button */}
                                <motion.button
                                    onClick={onClose}
                                    whileHover={{ scale: 1.15, rotate: 90 }}
                                    whileTap={{ scale: 0.85 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                                    className="absolute top-5 right-5 p-1 text-neutral/50 dark:text-white/50 hover:text-primary transition-colors z-10"
                                    aria-label="Close menu"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                    </svg>
                                </motion.button>

                                {/* Header */}
                                <div className="mb-6">
                                    <h2 className="text-2xl sm:text-3xl font-heading font-bold text-neutral dark:text-brand-pink">
                                        {t('nav.services')}
                                    </h2>
                                    <div className="h-1 w-12 bg-primary rounded-full mt-2" />
                                </div>

                                {/* Services Accordion */}
                                <div className="flex flex-col gap-2">
                                    {services.map((service, index) => {
                                        const isExpanded = openIndex === index;
                                        return (
                                            <div
                                                key={index}
                                                className="rounded-2xl border border-neutral/10 dark:border-white/10 overflow-hidden transition-colors"
                                            >
                                                {/* Short Name Row */}
                                                <button
                                                    onClick={() => toggleService(index)}
                                                    className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-primary/5 dark:hover:bg-white/5 transition-colors"
                                                >
                                                    <span className="text-sm font-medium text-neutral dark:text-brand-pink truncate">
                                                        {service.shortName}
                                                    </span>
                                                    <motion.svg
                                                        width="18"
                                                        height="18"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        className="text-primary flex-shrink-0"
                                                        animate={{ rotate: isExpanded ? 180 : 0 }}
                                                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                                                    >
                                                        <polyline points="6 9 12 15 18 9" />
                                                    </motion.svg>
                                                </button>

                                                {/* Expanded Details */}
                                                <AnimatePresence>
                                                    {isExpanded && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="px-4 pb-4 pt-1 space-y-3 border-t border-neutral/5 dark:border-white/5">
                                                                <p className="text-xs sm:text-sm text-neutral/70 dark:text-brand-pink/70 leading-relaxed">
                                                                    {service.fullName}
                                                                </p>
                                                                <div className="flex items-center gap-2">
                                                                    <span className="text-xs text-neutral/40 dark:text-white/40">Narxi:</span>
                                                                    <span className="text-sm font-bold text-primary">
                                                                        {service.price}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Footer */}
                                <div className="mt-auto pt-6 border-t border-neutral/5 dark:border-white/5 text-center text-xs text-neutral/40 dark:text-white/30">
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
