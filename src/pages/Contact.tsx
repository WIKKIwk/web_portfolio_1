

export function Contact() {
    return (
        <div className="min-h-screen bg-background text-neutral font-sans antialiased">
            <main className="pt-20">
                <section className="py-20 bg-background">
                    <div className="container mx-auto px-4 text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-neutral mb-6">Bog'lanish</h1>
                        <p className="text-lg text-neutral/70 max-w-2xl mx-auto">
                            Biz bilan bog'laning yoki markazimizga tashrif buyuring.
                        </p>
                    </div>

                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Contact Info */}
                            <div className="space-y-8">
                                <h2 className="text-2xl font-bold font-heading">Ma'lumotlar</h2>

                                <div>
                                    <h3 className="font-bold text-lg text-neutral mb-2">Manzil</h3>
                                    <p className="text-neutral/70">Toshkent sh., Yunusobod tumani<br />Amir Temur prospekti, 127-uy</p>
                                    <p className="text-sm text-neutral/50 mt-1">Mo'ljal: Shahriston metro</p>
                                </div>

                                <div>
                                    <h3 className="font-bold text-lg text-neutral mb-2">Telefon</h3>
                                    <p className="text-neutral/70">+998 77 318-30-70</p>
                                    <p className="text-neutral/70">+998 93 515-30-76</p>
                                </div>

                                <div>
                                    <h3 className="font-bold text-lg text-neutral mb-2">Ijtimoiy Tarmoqlar</h3>
                                    <div className="flex gap-4 mt-2">
                                        <a href="https://www.instagram.com/_stupenki_kids_/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Instagram</a>
                                        <a href="https://www.facebook.com/groups/stupenki.kids" target="_blank" className="text-primary hover:underline">Facebook Group</a>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="bg-neutral/5 rounded-3xl h-80 flex items-center justify-center border border-neutral/10">
                                <p className="text-neutral/40 font-bold">Xarita bu yerda bo'ladi (Google/Yandex Maps)</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
