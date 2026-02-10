export function TrustBar() {
    const partners = [
        "Formthotics (Individual Stelkalari)",
        "2GIS (4.9 Reyting)",
        "Yandex Maps (4.9 Reyting)",
        "DCP Markazi",
        "Gimnastika Federatsiyasi"
    ];

    return (
        <section className="py-10 border-y border-neutral/5 dark:border-white/5 bg-neutral/[0.02] dark:bg-brand-dark">
            <div className="container mx-auto px-4 md:px-6">
                <p className="text-center text-sm font-semibold text-neutral/40 dark:text-brand-pink/60 uppercase tracking-wider mb-8">
                    Bizning Hamkorlar va Natijalar
                </p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {partners.map((partner, i) => (
                        <span key={i} className="text-lg md:text-xl font-bold font-heading text-neutral/60 dark:text-brand-pink/70">
                            {partner}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
