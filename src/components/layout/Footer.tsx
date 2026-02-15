



import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export function Footer() {
    const { t } = useTranslation();

    return (
        <footer id="contact" className="bg-brand-bg dark:bg-brand-dark border-t border-neutral/10 dark:border-white/10 pt-16 pb-8 scroll-mt-20">
            <div className="container mx-auto px-4 md:px-6">
                {/* Contact Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                                SK
                            </div>
                            <span className="text-lg md:text-xl font-heading font-bold text-neutral dark:text-brand-pink">
                                Stupenki Kids
                            </span>
                        </div>
                        <p className="text-sm md:text-base text-neutral/70 dark:text-brand-pink/70 leading-relaxed">
                            {t('hero.description')}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading font-bold text-base md:text-lg mb-4 md:mb-6 text-neutral dark:text-brand-pink">{t('footer.links_title')}</h4>
                        <ul className="space-y-2 md:space-y-3">
                            <li><a href="#about" className="text-sm md:text-base text-neutral/70 dark:text-brand-pink/70 hover:text-primary transition-colors">{t('nav.about')}</a></li>
                            <li><a href="#services" className="text-sm md:text-base text-neutral/70 dark:text-brand-pink/70 hover:text-primary transition-colors">{t('nav.services')}</a></li>
                            <li><a href="#contact" className="text-sm md:text-base text-neutral/70 dark:text-brand-pink/70 hover:text-primary transition-colors">{t('nav.contact')}</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6 text-neutral dark:text-brand-pink">{t('footer.contact_title')}</h4>
                        <div className="flex flex-col gap-4">
                            {/* Address */}
                            <motion.div
                                whileHover={{ scale: 1.02, x: 5 }}
                                className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 dark:bg-brand-dark/50 border border-neutral/5 dark:border-white/5 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all group"
                            >
                                <div className="p-2 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                </div>
                                <div>
                                    <div className="font-bold text-sm text-neutral dark:text-brand-pink mb-1">{t('footer.address_label')}</div>
                                    <p className="text-xs md:text-sm text-neutral/70 dark:text-brand-pink/70 leading-relaxed">
                                        Toshkent sh., Yunusobod t.,<br />Amir Temur prospekti, 127-uy
                                    </p>
                                </div>
                            </motion.div>

                            {/* Phone */}
                            <motion.a
                                href="tel:+998773183070"
                                whileHover={{ scale: 1.02, x: 5 }}
                                className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 dark:bg-brand-dark/50 border border-neutral/5 dark:border-white/5 hover:border-green-500/20 hover:shadow-lg hover:shadow-green-500/5 transition-all group cursor-pointer"
                            >
                                <div className="p-2 rounded-xl bg-green-500/10 text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.12 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                </div>
                                <div>
                                    <div className="font-bold text-sm text-neutral dark:text-brand-pink mb-1">{t('footer.phone_label')}</div>
                                    <div className="text-xs md:text-sm text-neutral/70 dark:text-brand-pink/70 font-mono">
                                        +998 77 318-30-70 <br /> +998 93 515-30-76
                                    </div>
                                </div>
                            </motion.a>

                            {/* Socials Row */}
                            <div className="grid grid-cols-2 gap-4">
                                {/* Instagram */}
                                <motion.a
                                    href="https://www.instagram.com/_stupenki_kids_/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/50 dark:bg-brand-dark/50 border border-neutral/5 dark:border-white/5 hover:border-pink-500/20 hover:shadow-lg hover:shadow-pink-500/10 transition-all group"
                                >
                                    <div className="p-3 rounded-full bg-pink-500/10 text-pink-600 group-hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 group-hover:text-white transition-all mb-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                                    </div>
                                    <span className="text-xs font-bold text-neutral/70 dark:text-brand-pink/70 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">Instagram</span>
                                </motion.a>

                                {/* Facebook */}
                                <motion.a
                                    href="https://www.facebook.com/groups/stupenki.kids"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/50 dark:bg-brand-dark/50 border border-neutral/5 dark:border-white/5 hover:border-blue-600/20 hover:shadow-lg hover:shadow-blue-600/10 transition-all group"
                                >
                                    <div className="p-3 rounded-full bg-blue-600/10 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all mb-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                                    </div>
                                    <span className="text-xs font-bold text-neutral/70 dark:text-brand-pink/70 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Facebook</span>
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Full Width Map Section with Creative Styling */}
                <div className="mb-12">
                    <div className="text-center mb-6">
                        <h3 className="text-3xl font-heading font-bold text-neutral dark:text-brand-pink mb-2">{t('footer.map_title')}</h3>
                        <p className="text-neutral/60 dark:text-brand-pink/60">Amir Temur prospekti 127, Yunusobod, Toshkent</p>
                    </div>

                    {/* Map Container with Gradient Accent */}
                    <div className="relative max-w-6xl mx-auto">
                        {/* Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl blur-2xl -z-10 transform scale-105"></div>

                        {/* Map Frame */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/20 dark:border-primary/30 h-64 md:h-[450px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.2937907970583!2d69.28!3d41.33!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE5JzQ4LjAiTiA2OcKwMTYnNDguMCJF!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Stupenki Kids Location"
                                className="grayscale-[20%] contrast-[1.1] saturate-[0.9]"
                            />

                            {/* Custom Open in Yandex Button */}
                            <a
                                href="https://yandex.uz/maps/?text=Amir+Temur+prospekti+127+Toshkent"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute top-2 left-2 bg-white dark:bg-brand-dark text-neutral dark:text-brand-pink px-6 py-3 rounded-full shadow-lg font-bold text-base hover:scale-105 transition-transform z-10 flex items-center gap-2 border border-neutral/10 dark:border-brand-pink/20"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11" /></svg>
                                Yandex Xarita
                            </a>
                        </div>

                        {/* Decorative Corner Accent */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 blur-xl"></div>
                        <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-secondary to-primary rounded-full opacity-20 blur-xl"></div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-neutral/10 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral/50 dark:text-brand-pink/50 text-sm">
                    <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
                </div>
            </div>
        </footer >
    );
}

