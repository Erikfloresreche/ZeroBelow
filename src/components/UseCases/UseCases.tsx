
import { Badge } from "@/widgets/badge";
import { Button } from "@/widgets/button";
import { Card, CardContent } from "@/widgets/card";
import { ArrowRight, Globe, Search, Mountain, Factory, Lightbulb } from "lucide-react";
import { motion } from "motion/react";
import investigacionGlaciar from "@/assets/images/investigacionGlaciar.jpg";
import cartografiaPolar from "@/assets/images/cartografiaPolar.jpg";
import inspeccionIndustrial from "@/assets/images/inspeccionIndustrial.jpg";
import BusquedaYRescate from "@/assets/images/BusquedaYRescate.jpg";

export const UseCases = () => {
    const cases = [
        {
            icon: <Mountain className="w-6 h-6" />,
            title: "Investigación Glaciar",
            description: "Monitoreo del retroceso glaciar y cambio climático en el Ártico y la Antártida.",
            image: investigacionGlaciar,
            tags: ["Científico", "Climatología", "Mapeo 3D"],
            results: "Datos precisos para investigación del cambio climático global"
        },
        {
            icon: <Search className="w-6 h-6" />,
            title: "Búsqueda y Rescate",
            description: "Localización de personas en avalanchas y emergencias en zonas árticas.",
            image: BusquedaYRescate,
            tags: ["Emergencias", "Seguridad", "Visión Térmica"],
            results: "Tiempo de respuesta reducido en un 70% en rescates árticos"
        },
        {
            icon: <Factory className="w-6 h-6" />,
            title: "Inspección Industrial",
            description: "Monitoreo de infraestructura petrolífera y gasífera en regiones polares.",
            image: inspeccionIndustrial,
            tags: ["Industrial", "Mantenimiento", "Seguridad"],
            results: "Reducción del 85% en costos de inspección manual"
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Cartografía Polar",
            description: "Creación de mapas detallados de territorios inexplorados en el Ártico.",
            image: cartografiaPolar,
            tags: ["Cartografía", "Exploración", "GPS RTK"],
            results: "Mapas con precisión centimétrica de vastas regiones polares"
        }
    ];

    return (
        <section id="casos" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Casos de
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            {" "}Éxito
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-slate-300 max-w-3xl mx-auto"
                    >
                        Aplicaciones reales de nuestros drones en las condiciones más extremas del planeta
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {cases.map((useCase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group overflow-hidden h-full">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={useCase.image}
                                        alt={`${useCase.title} image`}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute top-4 left-4">
                                        <div className="text-cyan-400 bg-black/30 backdrop-blur-sm rounded-lg p-2">
                                            {useCase.icon}
                                        </div>
                                    </div>
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-3">
                                        {useCase.title}
                                    </h3>
                                    <p className="text-slate-300 mb-4 leading-relaxed">
                                        {useCase.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {useCase.tags.map((tag, tagIndex) => (
                                            <Badge key={tagIndex} variant="secondary" className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 text-xs">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                    <div className="bg-slate-800/50 rounded-lg p-3 mb-4">
                                        <div className="flex items-center text-green-400 mb-1">
                                            <Lightbulb className="w-4 h-4 mr-2" />
                                            <span className="text-sm font-medium">Resultado</span>
                                        </div>
                                        <p className="text-slate-300 text-sm">{useCase.results}</p>
                                    </div>
                                    <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 p-0 h-auto group">
                                        Ver caso completo
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                >
                    <h3 className="text-2xl font-bold text-white mb-4">
                        ¿Tienes un proyecto en mente?
                    </h3>
                    <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                        Nuestro equipo de expertos está listo para desarrollar una solución personalizada
                        para tu próximo desafío en ambientes extremos.
                    </p>
                    <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3">
                        Consultar Proyecto
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}