import { Button } from '../ui/Button';

export function AboutPreview() {
    return (
        <section id="about" className="py-20 bg-secondary/10 dark:bg-brand-dark relative overflow-hidden">
            {/* Decorative Blob */}
            <div className="absolute -left-20 top-20 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 md:px-6 relative">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Image/Visual */}
                    <div className="flex-1 w-full max-w-lg">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary rounded-[3rem] rotate-3 opacity-20"></div>
                            <div className="relative bg-white dark:bg-neutral-800 rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] border-4 border-white dark:border-neutral-700">
                                {/* Placeholder for Doctor Photo */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 flex items-center justify-center">
                                    <div className="text-6xl font-bold text-primary/20 dark:text-primary/30">SK</div>
                                </div>
                                {/* Badge */}
                                <div className="absolute bottom-6 right-6 bg-white dark:bg-brand-dark p-4 rounded-2xl shadow-lg animate-bounce-slow">
                                    <p className="font-bold text-neutral dark:text-brand-pink">15+ Years</p>
                                    <p className="text-xs text-neutral/50 dark:text-brand-pink/70">Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text */}
                    <div className="flex-1 space-y-6">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-white dark:bg-neutral-800 border border-neutral/10 dark:border-white/10 text-sm font-semibold text-neutral/70 dark:text-brand-pink/80 shadow-sm">
                            Bizning Jamoa
                        </div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral dark:text-brand-pink">
                            Tajribali va G'amxo'r <span className="text-primary">Mutaxassislar</span>
                        </h2>
                        <p className="text-lg text-neutral/70 dark:text-brand-pink/80 leading-relaxed">
                            "Toza, qulay muhit, xodimlar muloyim, mutaxassislar tibbiy ta'limga ega va chet elda malaka oshirgan." — Bu bizning mijozlarimizning samimiy fikrlari.
                        </p>
                        <div className="space-y-3 pt-2">
                            <p className="text-neutral/70 dark:text-brand-pink/70">• Chet elda o'qigan shifokorlar</p>
                            <p className="text-neutral/70 dark:text-brand-pink/70">• Zamonaviy tekshiruv va davolash uskunalari</p>
                            <p className="text-neutral/70 dark:text-brand-pink/70">• 20+ mashg'ulotda ko'zga ko'rinarli natijalar</p>
                        </div>
                        <div className="pt-6">
                            <Button className="gap-2">Jamoa bilan tanishish →</Button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
