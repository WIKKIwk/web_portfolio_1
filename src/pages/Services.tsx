import { Services as ServicesList } from '../components/sections/Services';

export function Services() {
    return (
        <div className="min-h-screen bg-background text-neutral font-sans antialiased">
            <main className="pt-20">
                <section className="py-20 bg-primary/5">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-neutral mb-6">Bizning Xizmatlar</h1>
                        <p className="text-lg text-neutral/70 max-w-2xl mx-auto">
                            Bolangiz salomatligi uchun zamonaviy va samarali reabilitatsiya usullari.
                        </p>
                    </div>
                </section>
                <ServicesList />
            </main>
        </div>
    );
}
