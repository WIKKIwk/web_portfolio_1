



import { useTranslation } from 'react-i18next';

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
                            <span className="text-xl font-heading font-bold text-neutral dark:text-brand-pink">
                                Stupenki Kids
                            </span>
                        </div>
                        <p className="text-neutral/70 dark:text-brand-pink/70 leading-relaxed">
                            {t('hero.description')}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6 text-neutral dark:text-brand-pink">{t('footer.links_title')}</h4>
                        <ul className="space-y-3">
                            <li><a href="#about" className="text-neutral/70 dark:text-brand-pink/70 hover:text-primary transition-colors">{t('nav.about')}</a></li>
                            <li><a href="#services" className="text-neutral/70 dark:text-brand-pink/70 hover:text-primary transition-colors">{t('nav.services')}</a></li>
                            <li><a href="#contact" className="text-neutral/70 dark:text-brand-pink/70 hover:text-primary transition-colors">{t('nav.contact')}</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6 text-neutral dark:text-brand-pink">{t('footer.contact_title')}</h4>
                        <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                            <div className="text-neutral/70 dark:text-brand-pink/70">
                                <div className="font-semibold text-neutral dark:text-brand-pink mb-1">{t('footer.address_label')}</div>
                                <span className="text-sm">Toshkent sh., Yunusobod t.,<br />Amir Temur prospekti, 127-uy</span>
                            </div>
                            <div className="text-neutral/70 dark:text-brand-pink/70">
                                <div className="font-semibold text-neutral dark:text-brand-pink mb-1">{t('footer.phone_label')}</div>
                                <div className="flex flex-col text-sm">
                                    <span>+998 77 318-30-70</span>
                                    <span>+998 93 515-30-76</span>
                                </div>
                            </div>
                            <div className="text-neutral/70 dark:text-brand-pink/70">
                                <div className="font-semibold text-neutral dark:text-brand-pink mb-1">{t('footer.instagram_label')}</div>
                                <a href="https://www.instagram.com/_stupenki_kids_/" target="_blank" rel="noopener noreferrer" className="hover:text-primary text-sm">@_stupenki_kids_</a>
                            </div>
                            <div className="text-neutral/70 dark:text-brand-pink/70">
                                <div className="font-semibold text-neutral dark:text-brand-pink mb-1">{t('footer.facebook_label')}</div>
                                <a href="https://www.facebook.com/groups/stupenki.kids" target="_blank" rel="noopener noreferrer" className="hover:text-primary text-sm">Facebook guruh</a>
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
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/20 dark:border-primary/30">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.2937907970583!2d69.28!3d41.33!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE5JzQ4LjAiTiA2OcKwMTYnNDguMCJF!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                                width="100%"
                                height="450"
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
                                className="absolute top-2 left-2 bg-white dark:bg-brand-dark text-neutral dark:text-brand-pink px-5 py-2.5 rounded-full shadow-lg font-bold text-sm hover:scale-105 transition-transform z-10 flex items-center gap-2 border border-neutral/10 dark:border-brand-pink/20"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11" /></svg>
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

