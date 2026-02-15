import Hero from '../components/sections/Hero';
import Mission from '../components/sections/Mission';
import { ServicesMenu } from '../components/layout/ServicesMenu';
import { useState } from 'react';

export default function Home() {
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    return (
        <>
            <ServicesMenu isOpen={isServicesOpen} onClose={() => setIsServicesOpen(false)} />
            <Hero onOpenServices={() => setIsServicesOpen(true)} />
            <Mission />
        </>
    );
}
