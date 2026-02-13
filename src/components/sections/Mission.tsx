import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface MissionItem {
    id: number;
    title: string;
    text: string;
    imageSrc: string;
    imageAlt: string;
    reverse?: boolean;
    isIntro?: boolean;
}

const missionItems: MissionItem[] = [
    {
        id: 0,
        title: "Stupenki Kids — Mehr va Bilim Uyg'unligi",
        text: `"Stupenki Kids" bolalar neyroreabilitatsiya markazi — bu shunchaki tibbiy muassasa emas, balki har bir bolajon o'zining yangi imkoniyatlarini kashf etadigan maskandir. Biz bolalar neyrologiyasi va ortopediyasi sohasida xalqaro tajribani O'zbekistonga olib kirdik.

Nima uchun ota-onalar aynan bizni tanlashadi?

Xalqaro darajadagi mutaxassislar: Bizning shifokorlarimiz tibbiy ma'lumotga ega bo'lib, o'z malakalarini xorijiy davlatlarda oshirgan haqiqiy professionallardir.

Yuqori ishonch va e'tirof: 2GIS va Yandex Maps platformalarida ota-onalar bizni 4.9/5 ball bilan baholashgan. Foydalanuvchilar markazimizning tozaligi, xodimlarning xushmuomalaligi va, eng muhimi, davolash natijalaridan mamnun ekanliklarini alohida ta'kidlashadi.

Aniq va tezkor natijalar: Biz vaqtning qadrini bilamiz. Masalan, qomatni tiklash (osanka) yoki nutq rivojlanishi kabi yo'nalishlarda bor-yo'g'i 20 ta mashg'ulotdan so'ng sezilarli ijobiy o'zgarishlarni ko'rishingiz mumkin.

Shinam va xavfsiz muhit: Markazimiz har bir kichik mehmonimiz o'zini uydagidek erkin his qilishi uchun shinam, ozoda va zamonaviy jihozlangan.

Bizning qadriyatlarimiz

Biz reabilitatsiyaga nafaqat jismoniy mashqlar, balki bolaning ruhiy xotirjamligi va rivojlanishidagi har bir kichik "zina" (stupenka) sifatida qaraymiz. Biz bilan har bir qadam ishonchli, har bir natija esa quvonchlidir!`,
        imageSrc: `${import.meta.env.BASE_URL}mission_intro.svg`,
        imageAlt: "Stupenki Kids - Intro",
        isIntro: true
    },
    {
        id: 1,
        title: "Har bir qadamda biz siz bilanmiz.",
        text: "\"Stupenki Kids\" — bu shunchaki reabilitatsiya markazi emas, bu farzandingizning kichik g'alabalaridan katta muvaffaqiyatlar sari qurilgan yo'ldir. Biz har bir bolajonning qobiliyatiga ishonamiz va ularning rivojlanish zinalaridan dadil ko'tarilishiga mehr bilan ko'maklashamiz.",
        imageSrc: `${import.meta.env.BASE_URL}mission_kids.svg`,
        imageAlt: "Mission illustration - Helping kids",
        reverse: false
    },
    {
        id: 2,
        title: "Harakat erkinligini his eting.",
        text: "Bizning markazimizda qo'llaniladigan Ekzarta va PNF kabi zamonaviy usullar farzandingizga o'z tanasini boshqarishni o'rgatadi. Maxsus osma tizimlar yordamida bajariladigan mashqlar nafaqat mushaklarni mustahkamlaydi, balki bolajonlarga harakatlanish quvonchini va parvoz zavqini hadya etadi.",
        imageSrc: `${import.meta.env.BASE_URL}mission_freedom.svg`,
        imageAlt: "Mission illustration - Freedom of movement",
        reverse: true
    },
    {
        id: 3,
        title: "To'g'ri tashxis — muvaffaqiyatli davolash garovi.",
        text: "Bizning markazimizda UZI va neyrologik diagnostika eng zamonaviy uskunalar yordamida, mutaxassislar nazorati ostida o'tkaziladi. Farzandingiz sog'lig'idagi har bir o'zgarishni va rivojlanish jarayonini aniq tahlil qilish orqali biz eng samarali davolash rejasini tuzamiz. Aniqlik va tajriba — bizning bosh mezonimiz.",
        imageSrc: `${import.meta.env.BASE_URL}mission_diagnosis.svg`,
        imageAlt: "Mission illustration - Diagnosis",
        reverse: false
    },
    {
        id: 4,
        title: "Sog'lom o'sish — bizning g'amxo'rligimizda.",
        text: "Bolajonlarning oyoq kafti va umurtqa pog'onasi bilan bog'liq muammolarini (yassi oyoqlik, skolioz) zamonaviy usullar bilan bartaraf etamiz. Shifokorlarimizning ehtiyotkor qo'llari va xalqaro tajribasi farzandingizning qadamlarini ishonchli va og'riqsiz qiladi. Kichik g'alabalardan katta natijalar sari birga boramiz!",
        imageSrc: `${import.meta.env.BASE_URL}mission_ortho.svg`,
        imageAlt: "Mission illustration - Healthy Growth",
        reverse: true
    }
];

// Intro section with centered SVG and full-width text
function IntroRow({ item, animationKey }: { item: MissionItem; animationKey: number }) {
    const [hasInView, setHasInView] = useState(false);

    return (
        <motion.div
            className="flex flex-col items-center gap-0 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            onViewportEnter={() => setHasInView(true)}
        >
            {/* Centered SVG - larger */}
            <div className="w-full max-w-4xl">
                <div className="w-full relative" style={{ aspectRatio: '1024/1024' }}>
                    {hasInView ? (
                        <object
                            key={animationKey}
                            type="image/svg+xml"
                            data={item.imageSrc}
                            className="w-full h-full svg-cream"
                            aria-label={item.imageAlt}
                        />
                    ) : (
                        <div className="w-full h-full" />
                    )}
                </div>
            </div>

            {/* Full-width prose text */}
            <div className="-mt-10 md:-mt-20 lg:-mt-40 w-full max-w-6xl space-y-6">
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-heading font-bold text-primary">
                    {item.title}
                </h2>
                <div className="text-base md:text-lg text-neutral/70 dark:text-brand-pink/80 leading-relaxed whitespace-pre-line">
                    {item.text.split('\n').map((line, i) => {
                        // Bold specific headers/keys
                        const boldPrefixes = [
                            "Nima uchun ota-onalar aynan bizni tanlashadi?",
                            "Xalqaro darajadagi mutaxassislar:",
                            "Yuqori ishonch va e'tirof:",
                            "Aniq va tezkor natijalar:",
                            "Shinam va xavfsiz muhit:",
                            "Bizning qadriyatlarimiz"
                        ];
                        const startsWithBold = boldPrefixes.find(prefix => line.startsWith(prefix));

                        if (startsWithBold) {
                            const rest = line.substring(startsWithBold.length);
                            return (
                                <span key={i} className="block mb-2">
                                    <strong className="text-neutral dark:text-brand-pink font-bold">{startsWithBold}</strong>{rest}
                                </span>
                            );
                        }
                        return <span key={i} className="block mb-2">{line}</span>;
                    })}
                </div>
            </div>
        </motion.div>
    );
}

// Regular mission row (left-right or right-left layout)
function MissionRow({ item, animationKey }: { item: MissionItem; animationKey: number }) {
    const [hasInView, setHasInView] = useState(false);

    return (
        <div className={`flex flex-col ${item.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
            {/* Image Section */}
            <motion.div
                className="flex-1 w-full max-w-lg"
                initial={{ opacity: 0, x: item.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.8 }}
                onViewportEnter={() => setHasInView(true)}
            >
                <div className="w-full relative" style={{ aspectRatio: '2816/1536' }}>
                    {hasInView ? (
                        <object
                            key={animationKey}
                            type="image/svg+xml"
                            data={item.imageSrc}
                            className="w-full h-full svg-cream"
                            aria-label={item.imageAlt}
                        />
                    ) : (
                        <div className="w-full h-full" />
                    )}
                </div>
            </motion.div>

            {/* Text Section */}
            <motion.div
                className="flex-1 space-y-4 md:space-y-6"
                initial={{ opacity: 0, x: item.reverse ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.8 }}
            >
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary">
                    {item.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-neutral/70 dark:text-brand-pink/80 leading-relaxed">
                    {item.text}
                </p>
            </motion.div>
        </div>
    );
}

export function Mission() {
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    setAnimationKey(prev => prev + 1);
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* About Section - Intro Only */}
            <section id="about" className="mt-0 md:-mt-32 pt-0 pb-12 bg-background dark:bg-brand-dark overflow-hidden scroll-mt-20">
                <div className="container mx-auto px-4 md:px-6">
                    {missionItems.filter(item => item.isIntro).map((item) => (
                        <IntroRow key={item.id} item={item} animationKey={animationKey} />
                    ))}
                </div>
            </section>

            {/* Services Section - 4 Mission Rows */}
            <section id="services" className="pt-12 pb-12 bg-background dark:bg-brand-dark overflow-hidden scroll-mt-20">
                <div className="container mx-auto px-4 md:px-6 space-y-12">
                    {missionItems.filter(item => !item.isIntro).map((item) => (
                        <MissionRow key={item.id} item={item} animationKey={animationKey} />
                    ))}
                </div>
            </section>
        </>
    );
}
