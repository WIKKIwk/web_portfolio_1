import { Button } from '../ui/Button';
import { AnimatedHero } from '../icons/AnimatedHero';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface HeroProps {
    onOpenServices?: () => void;
}

export default function Hero({ onOpenServices }: HeroProps) {
    const { t } = useTranslation();

    return (
        <section className="relative z-10 overflow-hidden bg-background dark:bg-brand-dark pt-10 pb-0 lg:pt-4 lg:pb-0">
            {/* Background decoration */}
            {/* Background decoration - Removed as per user request to fix "separation" look */}
            <div className="hidden" />

            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                    <div className="grid grid-cols-2 lg:grid-cols-2 items-center gap-x-4 gap-y-6 lg:gap-12">

                        {/* Left Column Content (Desktop) / Top Grid Items (Mobile) */}

                        {/* 1. Title - Col 1 on Mobile, Col 1 on Desktop */}
                        <motion.div
                            className="col-span-1 lg:col-span-1 lg:max-w-xl text-left relative z-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            style={{ touchAction: 'pan-y' }}
                        >
                            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-neutral dark:text-brand-pink leading-tight">
                                <span className="text-primary block lg:inline">{t('hero.title_highlight')}</span> <span className="hidden lg:inline"><br /></span> <span className="text-lg sm:text-2xl lg:text-6xl">{t('hero.title_main')}</span>
                            </h1>
                        </motion.div>

                        {/* 2. Illustration - Col 2 on Mobile, Col 2 on Desktop (Row Span 3 on Desktop) */}
                        <motion.div
                            className="col-span-1 lg:col-span-1 lg:row-span-3 flex justify-center lg:justify-start relative"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            style={{ touchAction: 'pan-y' }}
                        >
                            <div className="relative w-full origin-center transform scale-[1.5] -translate-y-4 lg:scale-[1.5] lg:-translate-y-16">
                                <AnimatedHero className="w-full h-auto text-neutral dark:text-brand-pink" />
                            </div>
                        </motion.div>

                        {/* 3. Description & Rest - Col Span 2 on Mobile, Col 1 on Desktop */}
                        <div className="col-span-2 lg:col-span-1 lg:max-w-xl text-center lg:text-left space-y-4 lg:space-y-8">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                                className="text-sm sm:text-base md:text-xl text-neutral/70 dark:text-brand-pink/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                                style={{ touchAction: 'pan-y' }}
                            >
                                {t('hero.description')}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                                className="relative z-10 flex flex-row gap-3 justify-center lg:justify-start w-full lg:w-auto"
                                style={{ touchAction: 'pan-y' }}
                            >
                                <Button className="flex-1 sm:flex-none h-10 sm:h-11 md:h-14 text-xs sm:text-sm md:text-lg px-2 sm:px-8" asChild>
                                    <a href="#contact">
                                        {t('hero.buttons.book')}
                                    </a>
                                </Button>
                                <Button
                                    variant="outline"
                                    className="flex-1 sm:flex-none h-10 sm:h-11 md:h-14 text-xs sm:text-sm md:text-lg px-2 sm:px-8"
                                    onClick={onOpenServices}
                                >
                                    {t('hero.buttons.services')}
                                </Button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="hidden lg:flex pt-4 lg:pt-8 flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 text-neutral/60 dark:text-brand-pink/70 text-sm sm:text-base"
                                style={{ touchAction: 'pan-y' }}
                            >
                                <div>
                                    <span className="font-medium">{t('hero.badges.specialists')}</span>
                                </div>
                                <div>
                                    <span className="font-medium">{t('hero.badges.rating')}</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
