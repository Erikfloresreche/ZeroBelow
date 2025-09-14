

import { Battery, Cpu, Shield, Thermometer, Wind, Zap } from "lucide-react";
import { motion } from "motion/react";
import { Card, CardContent } from "@/widgets/card";
import { Badge } from "@/widgets/badge";
import dronTermico from "@/assets/images/dronTermico.jpg";

export function Technology() {
  const features = [
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "Sistema de Calefacción Inteligente",
      description: "Mantiene los componentes críticos calientes automáticamente"
    },
    {
      icon: <Battery className="w-6 h-6" />,
      title: "Baterías de Alta Capacidad",
      description: "Tecnología Li-Po optimizada para bajas temperaturas"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Carcasa Resistente",
      description: "Protección IP67 contra humedad y partículas"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Procesador de Alto Rendimiento",
      description: "IA integrada para vuelo autónomo y análisis en tiempo real"
    },
    {
      icon: <Wind className="w-6 h-6" />,
      title: "Resistencia al Viento",
      description: "Estable hasta vientos de 15 m/s en condiciones árticas"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Carga Rápida",
      description: "Sistema de carga de 0 a 80% en 30 minutos"
    }
  ];

  const specs = [
    { label: "Temperatura Operativa", value: "-40°C a +60°C" },
    { label: "Autonomía de Vuelo", value: "120 minutos" },
    { label: "Velocidad Máxima", value: "90 km/h" },
    { label: "Altitud Máxima", value: "6,000 metros" },
    { label: "Carga Útil", value: "2.5 kg" },
    { label: "Resistencia al Agua", value: "IP67" }
  ];

  return (
    <section id="tecnologia" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Tecnología
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {" "}Avanzada
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Innovación de vanguardia diseñada específicamente para resistir y operar en condiciones extremas
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Technology Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img className="w-full h-96 object-cover" src={dronTermico} alt="Technology" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                  Cámara Térmica FLIR
                </Badge>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-cyan-400 mb-2">{feature.icon}</div>
                <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Especificaciones Técnicas
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {specs.map((spec, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">
                      {spec.value}
                    </div>
                    <div className="text-slate-300">{spec.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                    GPS RTK
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                    LiDAR
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                    5G Ready
                  </Badge>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                    Visión Nocturna
                  </Badge>
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                    IA Integrada
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}