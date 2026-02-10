import { Button } from '../ui/Button';
import { motion } from 'framer-motion';

const services = [
    {
        icon: "🧠",
        title: "Neyrolog Maslahati",
        description: "Malakali neyrolog ko'rigi va 1 yoshgacha bo'lgan bolalar rivojlanish diagnostikasi."
    },
    {
        icon: "👶",
        title: "Neyrologopediya",
        description: "Nutq va rivojlanishdagi to'siqlarni bartaraf etish uchun maxsus mashg'ulotlar."
    },
    {
        icon: "💪",
        title: "Vojta va Bobat Terapiyasi",
        description: "Harakat buzilishlarini davolash uchun jahon tan olgan samarali reabilitatsiya usullari."
    },
    {
        icon: "❤️",
        title: "Reabilitatsiya (DCP/Insult)",
        description: "DCP, jarohatlar va insultdan keyingi tiklanish uchun kompleks yondashuv."
    },
    {
        icon: "🩺",
        title: "MMT, PNF va Ekzarta",
        description: "Yumshoq manual texnikalar va propriotseptiv gimnastika yordamida harakatni tiklash."
    },
    {
        icon: "🔬",
        title: "UZI va Ortopediya",
        description: "Ultratovush tekshiruvi, Shrot-terapiya (skolioz) va individual stel'kalar (Formthotics)."
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            stiffness: 50
        }
    }
};

export function Services() {
    return (
        <section id="services" className="py-20 bg-background dark:bg-neutral-900">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-heading font-bold text-neutral dark:text-cream mb-4"
                    >
                        Bizning Asosiy <span className="text-primary">Xizmatlarimiz</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-neutral/70 dark:text-cream/80 text-lg"
                    >
                        Biz bolalar salomatligi uchun keng qamrovli tibbiy va reabilitatsiya xizmatlarini taqdim etamiz.
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="group p-8 bg-white dark:bg-neutral-800 rounded-3xl border border-neutral/5 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-14 h-14 bg-secondary/20 dark:bg-primary/20 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-primary transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold font-heading mb-3 text-neutral dark:text-cream">{service.title}</h3>
                            <p className="text-neutral/60 dark:text-cream/70 leading-relaxed mb-6">
                                {service.description}
                            </p>
                            <a href="#" className="font-semibold text-primary hover:text-primary/80 inline-flex items-center gap-2">
                                Batafsil <span className="text-xl leading-none">›</span>
                            </a>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-16 text-center">
                    <Button size="lg" variant="outline">Barcha Xizmatlarni Ko'rish</Button>
                </div>
            </div>
        </section>
    );
}
