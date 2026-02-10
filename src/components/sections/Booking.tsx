import { Button } from '../ui/Button';

export function Booking() {
    return (
        <section className="py-20 bg-primary/5 dark:bg-primary/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-white dark:bg-neutral-800 rounded-[3rem] p-8 md:p-16 text-center shadow-xl border border-neutral/5 dark:border-white/5 relative overflow-hidden">
                    {/* Decorative circles */}
                    <div className="absolute top-0 left-0 w-32 h-32 bg-secondary/20 dark:bg-primary/20 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/10 dark:bg-primary/20 rounded-full blur-2xl translate-x-1/2 translate-y-1/2" />

                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-neutral dark:text-brand-pink mb-6 relative z-10">
                        Sog'lom kelajak sari ilk qadamni qo'ying!
                    </h2>
                    <p className="text-lg md:text-xl text-neutral/60 dark:text-brand-pink/70 max-w-2xl mx-auto mb-10 relative z-10">
                        Farzandingizda o'zgarish sezdingizmi? Bizning mutaxassislarimiz tashxis qo'yish va yordam berishga tayyor. Hoziroq ro'yxatdan o'ting.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                        <Button size="lg" className="shadow-xl shadow-primary/20">Qabulga Yozilish</Button>
                        <Button size="lg" variant="outline" className="bg-white dark:bg-brand-dark border-neutral/10 dark:border-white/10 dark:text-brand-pink dark:hover:bg-neutral-800" onClick={() => window.open('tel:+998773183070')}>
                            Qo'ng'iroq Qilish: 77 318-30-70
                        </Button>
                    </div>
                </div>
            </div>
        </section >
    );
}
