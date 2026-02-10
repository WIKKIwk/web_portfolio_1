import { AboutPreview } from '../components/sections/AboutPreview';

export function About() {
    return (
        <main className="pt-20 min-h-screen bg-background text-neutral font-sans antialiased">
            <section className="py-20 bg-secondary/10">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-neutral mb-6">Biz Haqimizda</h1>
                    <p className="text-lg text-neutral/70 max-w-2xl mx-auto">
                        Stupenki Kids - bu har bir bolaga individual yondashuv va g'amxo'rlik.
                    </p>
                </div>
            </section>
            <AboutPreview />
            {/* Add more content here */}
        </main>
    );
}
