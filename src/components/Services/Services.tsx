
import { Card, CardContent } from "@/widgets/card";
import { Snowflake, Camera, MapPin, Shield, Zap, Thermometer } from "lucide-react";
import { motion } from "motion/react";

export function Services() {
  const services = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Filmación Aérea Extrema",
      description: "Captura de imágenes y videos en condiciones árticas con estabilización avanzada y calidad profesional.",
      features: ["4K HDR", "Estabilización 3 ejes", "Zoom óptico 20x"]
    },
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: "Monitoreo Térmico",
      description: "Análisis de temperaturas y mapeo térmico para investigación científica y monitoreo ambiental.",
      features: ["Sensor FLIR", "Precisión ±0.1°C", "Tiempo real"]
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Cartografía Polar",
      description: "Creación de mapas detallados de regiones polares y glaciares con tecnología LiDAR.",
      features: ["GPS RTK", "Precisión cm", "Modelos 3D"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Inspección de Infraestructura",
      description: "Evaluación de estructuras y equipos en ambientes extremos de manera segura y eficiente.",
      features: ["IA análisis", "Detección fallas", "Reportes detallados"]
    },
    {
      icon: <Snowflake className="w-8 h-8" />,
      title: "Investigación Glaciar",
      description: "Monitoreo del cambio climático y estudios glaciológicos con drones especializados.",
      features: ["Sensores múltiples", "Datos científicos", "Análisis temporal"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Respuesta de Emergencia",
      description: "Búsqueda y rescate en condiciones árticas con drones equipados con tecnología de supervivencia.",
      features: ["Visión nocturna", "Comunicación satelital", "Operación autónoma"]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Servicios
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {" "}Especializados
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Soluciones avanzadas de drones para operar en las condiciones más extremas del planeta
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group h-full">
                <CardContent className="p-6">
                  <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-slate-400">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}