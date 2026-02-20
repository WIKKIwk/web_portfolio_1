import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface MissionItemConfig {
    id: number;
    imageSrc: string;
    imageAlt: string;
    reverse?: boolean;
    isIntro?: boolean;
}

interface IntroPoint {
    bold: string;
    text: string;
}

interface IntroContent {
    title: string;
    description: string;
    points: IntroPoint[];
}

interface MissionItemContent {
    title: string;
    text: string;
}

const missionConfig: MissionItemConfig[] = [
    {
        id: 0,
        imageSrc: `${import.meta.env.BASE_URL}mission_intro.svg`,
        imageAlt: "Stupenki Kids - Intro",
        isIntro: true
    },
    {
        id: 1,
        imageSrc: `${import.meta.env.BASE_URL}mission_kids.svg`,
        imageAlt: "Mission illustration - Helping kids",
        reverse: false
    },
    {
        id: 2,
        imageSrc: `${import.meta.env.BASE_URL}mission_freedom.svg`,
        imageAlt: "Mission illustration - Freedom of movement",
        reverse: true
    },
    {
        id: 3,
        imageSrc: `${import.meta.env.BASE_URL}mission_diagnosis.svg`,
        imageAlt: "Mission illustration - Diagnosis",
        reverse: false
    },
    {
        id: 4,
        imageSrc: `${import.meta.env.BASE_URL}mission_ortho.svg`,
        imageAlt: "Mission illustration - Healthy Growth",
        reverse: true
    }
];

// Intro section with centered SVG and full-width text
function IntroRow({ item, content, animationKey }: { item: MissionItemConfig; content: IntroContent; animationKey: number }) {
    const [hasInView, setHasInView] = useState(false);

    return (
        <motion.div
            className="flex flex-col items-center gap-0 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            onViewportEnter={() => setHasInView(true)}
            style={{ touchAction: 'pan-y' }}
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
            <div className="-mt-24 md:-mt-20 lg:-mt-40 w-full max-w-6xl space-y-6">
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-heading font-bold text-primary">
                    {content.title}
                </h2>
                <div className="text-base md:text-lg text-neutral/70 dark:text-brand-pink/80 leading-relaxed whitespace-pre-line text-left md:text-center">
                    <p className="mb-4">{content.description}</p>
                    <div className="space-y-2">
                        {content.points.map((point, i) => (
                            <div key={i}>
                                {point.bold && <strong className="text-neutral dark:text-brand-pink font-bold block md:inline md:mr-1">{point.bold}</strong>}
                                {point.text}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

// Regular mission row (left-right or right-left layout)
function MissionRow({ item, content, animationKey }: { item: MissionItemConfig; content: MissionItemContent; animationKey: number }) {
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
                style={{ touchAction: 'pan-y' }}
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
                style={{ touchAction: 'pan-y' }}
            >
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary">
                    {content.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-neutral/70 dark:text-brand-pink/80 leading-relaxed">
                    {content.text}
                </p>
            </motion.div>
        </div>
    );
}

export default function Mission() {
    const { t } = useTranslation();
    const [animationKey, setAnimationKey] = useState(0);

    // Get translated content
    const introContent = t('mission.intro', { returnObjects: true }) as IntroContent;
    const missionItemsContent = t('mission.items', { returnObjects: true }) as MissionItemContent[];

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
            <section id="about" className="-mt-24 md:-mt-32 pt-0 pb-12 bg-background dark:bg-brand-dark overflow-hidden scroll-mt-20 relative z-0">
                <div className="container mx-auto px-4 md:px-6">
                    {missionConfig.filter(item => item.isIntro).map((item) => (
                        <IntroRow key={item.id} item={item} content={introContent} animationKey={animationKey} />
                    ))}
                </div>
            </section>

            {/* Services Section - 4 Mission Rows */}
            <section id="services" className="pt-12 pb-12 bg-background dark:bg-brand-dark overflow-hidden scroll-mt-20">
                <div className="container mx-auto px-4 md:px-6 space-y-12">
                    {missionConfig.filter(item => !item.isIntro).map((item, index) => (
                        <MissionRow key={item.id} item={item} content={missionItemsContent[index]} animationKey={animationKey} />
                    ))}
                </div>
            </section>
        </>
    );
}
