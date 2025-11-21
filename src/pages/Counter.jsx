import { Smile, TrendingUp, Clock, Briefcase } from "lucide-react";
import { AnimatedCounter } from "../components/AnimatedCounter";

export default function StatsSection() {
    return (
        <section className=" py-16 relative overflow-hidden">
            <div className="absolute inset-0 opacity-40"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">

                    {/* Happy Clients */}
                    <div className="transform transition-all hover:scale-110 bg-white/10 rounded-xl p-6 flex flex-col items-center justify-center shadow-lg">
                        <Smile className="w-10 h-10 text-yellow-400 mb-2" />
                        <AnimatedCounter end={350} suffix="+" />
                        <div className="text-sm opacity-90 mt-2">Happy Clients</div>
                    </div>

                    {/* Average Growth */}
                    <div className="transform transition-all hover:scale-110 bg-white/10 rounded-xl p-6 flex flex-col items-center justify-center shadow-lg">
                        <TrendingUp className="w-10 h-10 text-green-400 mb-2" />
                        <AnimatedCounter end={85} suffix="%" />
                        <div className="text-sm opacity-90 mt-2">Average Growth</div>
                    </div>

                    {/* Support Available */}
                    <div className="transform transition-all hover:scale-110 bg-white/10 rounded-xl p-6 flex flex-col items-center justify-center shadow-lg">
                        <Clock className="w-10 h-10 text-blue-400 mb-2" />
                        <div className="text-4xl font-bold">24/7</div>
                        <div className="text-sm opacity-90 mt-2">Support Available</div>
                    </div>

                    {/* Years Experience */}
                    <div className="transform transition-all hover:scale-110 bg-white/10 rounded-xl p-6 flex flex-col items-center justify-center shadow-lg">
                        <Briefcase className="w-10 h-10 text-purple-400 mb-2" />
                        <AnimatedCounter end={10} suffix="+" />
                        <div className="text-sm opacity-90 mt-2">Years Experience</div>
                    </div>

                </div>
            </div>
        </section>
    );
}
