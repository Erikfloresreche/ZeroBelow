
import AuroraScout from "../../assets/images/AuroraScout.jpg"
import PolarSentinel from "../../assets/images/PolarSentinel.jpg"
import FrostEyeX1 from "../../assets/images/FrostEyeX1.jpg"
import { useState, useEffect } from "react";

export const HeroController = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            image: AuroraScout,
            title: "Aurora Scout",
            description: "Diseñado para operar en largas misiones en climas extremos, cuenta con baterías de alto rendimiento optimizadas para bajas temperaturas y una cámara capaz de capturar la aurora boreal en detalle.",
            gradient: "from-purple-900/60 via-blue-800/40 to-black/60",
            accentGradient: "from-purple-500/20 to-blue-600/20"
        },
        {
            id: 2,
            image: PolarSentinel,
            title: "Polar Sentinel",
            description: "Un dron resistente y autónomo, preparado para soportar temperaturas de hasta -40 °C. Integra sensores antiescarcha y una cámara de ultra alta definición con protección térmica, ideal para misiones científicas y grabaciones en las zonas más inhóspitas del planeta.",
            gradient: "from-orange-900/60 via-amber-800/40 to-black/60",
            accentGradient: "from-orange-500/20 to-amber-600/20"
        },
        {
            id: 3,
            image: FrostEyeX1,
            title: "FrostEye X1",
            description: "Un dron con cámara térmica avanzada, diseñado para grabaciones nocturnas y en ambientes polares. Su sistema de estabilización asegura imágenes claras incluso en tormentas de nieve.",
            gradient: "from-blue-900/60 via-cyan-800/40 to-black/60",
            accentGradient: "from-cyan-500/20 to-blue-600/20"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 10000);
        return () => clearInterval(interval);
    }, []);

    return {
        nextSlide,
        prevSlide,
        currentSlide,
        slides,
        setCurrentSlide
    }
}
