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
                <div className="flex flex-col-reverse lg:flex-row items-center gap-0 lg:gap-12">

                    {/* Content */}
                    <div className="w-full lg:w-auto lg:max-w-xl space-y-4 lg:space-y-8 text-center lg:text-left -mt-20 lg:mt-0 relative z-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-neutral dark:text-brand-pink leading-tight"
                        >
                            <span className="text-primary">{t('hero.title_highlight')}</span> <br /> {t('hero.title_main')}
                        </motion.h1>

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
                            className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2 lg:pt-0"
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

                    {/* Illustration - Now on Top on Mobile */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="flex-[2] relative w-full flex justify-center lg:justify-start mb-0 lg:mb-0"
                    >
                        <div className="relative w-full" style={{ transform: 'scale(1.2) translateY(-10%)', transformOrigin: 'center' }}>
                            <AnimatedHero className="w-full h-auto text-neutral dark:text-brand-pink" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
