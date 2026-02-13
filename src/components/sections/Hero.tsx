import { Button } from '../ui/Button';
import { AnimatedHero } from '../icons/AnimatedHero';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function Hero() {
    const { t } = useTranslation();

    return (
        <section className="relative overflow-hidden bg-background dark:bg-brand-dark pt-10 pb-0 lg:pt-20 lg:pb-0">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-secondary/20 dark:bg-secondary/5 rounded-bl-[100px] hidden lg:block" />

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
                        >
                            <div className="relative w-full origin-center transform scale-[1.5] -translate-y-4 lg:scale-100 lg:translate-y-0">
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
                            >
                                {t('hero.description')}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                                className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            >
                                <Button size="lg">
                                    {t('hero.buttons.book')}
                                </Button>
                                <Button variant="outline" size="lg" asChild>
                                    <a href="#services">
                                        {t('hero.buttons.services')}
                                    </a>
                                </Button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="pt-4 lg:pt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 text-neutral/60 dark:text-brand-pink/70 text-sm sm:text-base"
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
