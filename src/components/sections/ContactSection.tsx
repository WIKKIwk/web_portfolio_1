
export function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-background dark:bg-neutral-900">
            <div className="container mx-auto px-4 text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral dark:text-cream mb-6">Bog'lanish</h2>
                <p className="text-lg text-neutral/70 dark:text-cream/80 max-w-2xl mx-auto">
                    Biz bilan bog'laning yoki markazimizga tashrif buyuring.
                </p>
            </div>

            <div className="container mx-auto px-4 max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold font-heading text-neutral dark:text-cream">Ma'lumotlar</h3>

                        <div>
                            <h4 className="font-bold text-lg text-neutral dark:text-cream mb-2">Manzil</h4>
                            <p className="text-neutral/70 dark:text-cream/70">Toshkent sh., Yunusobod tumani<br />Amir Temur prospekti, 127-uy</p>
                            <p className="text-sm text-neutral/50 dark:text-cream/50 mt-1">Mo'ljal: Shahriston metro</p>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg text-neutral dark:text-cream mb-2">Telefon</h4>
                            <p className="text-neutral/70 dark:text-cream/70 text-lg">+998 77 318-30-70</p>
                            <p className="text-neutral/70 dark:text-cream/70 text-md">+998 93 515-30-76</p>
                            <p className="text-sm text-neutral/50 dark:text-cream/50 mt-1">Har kuni 09:00 - 18:00</p>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg text-neutral dark:text-cream mb-2">Ijtimoiy Tarmoqlar</h4>
                            <div className="flex gap-4 mt-2">
                                <a href="https://www.instagram.com/_stupenki_kids_/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Instagram</a>
                                <a href="https://www.facebook.com/groups/stupenki.kids" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Facebook</a>
                            </div>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="bg-neutral/5 dark:bg-white/5 rounded-3xl h-80 flex items-center justify-center border border-neutral/10 dark:border-white/10">
                        <p className="text-neutral/40 dark:text-cream/60 font-bold">Xarita bu yerda bo'ladi (Google/Yandex Maps)</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
