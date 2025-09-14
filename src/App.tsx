
import Forest from "./assets/images/Forest.jpg"
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Services } from "./components/Services/Services";
import { Technology } from "./components/Technology/Technology";


export default function App() {
  return (
    <div className="min-h-screen relative">
      {/* Background Forest Image */}
      <div className="fixed inset-0 z-0">
        <img
          src={Forest}
          alt="Winter forest background"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlays for elegant modern look */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-slate-800/90 to-slate-900/95"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-slate-900/80"></div>
        <div className="absolute inset-0 backdrop-blur-[1px]"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-20">
        <Header />
        <Hero />
        <Services />
        <Technology />
      </div>
    </div>
  );
}