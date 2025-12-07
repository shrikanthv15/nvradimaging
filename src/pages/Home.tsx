import { motion } from 'framer-motion';
import { ArrowRight, Activity, ShieldCheck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute inset-0 bg-background">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full opacity-20 animate-pulse-slow" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full opacity-30 animate-pulse-slow delay-75" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full opacity-40 animate-pulse-slow delay-150" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
                            Early Detection.<br />
                            <span className="text-primary">Greater Peace of Mind.</span>
                        </h1>
                        <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                            Experience the future of preventative healthcare with Whole Body MRI.
                            Radiation-free, comprehensive scanning in under 45 minutes.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/contact" className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all flex items-center group">
                                Schedule Your Scan
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/services" className="px-8 py-4 border border-white/10 bg-white/5 text-white rounded-full font-semibold hover:bg-white/10 transition-all backdrop-blur-sm">
                                Learn How It Works
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Features */}
            <section className="py-24 bg-surface/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: ShieldCheck,
                                title: "Radiation Free",
                                desc: "Safe for regular screening. No ionizing radiation used during the scan."
                            },
                            {
                                icon: Clock,
                                title: "Fast & Comprehensive",
                                desc: "Complete assessment from head to thighs in approximately 45 minutes."
                            },
                            {
                                icon: Activity,
                                title: "Expert Analysis",
                                desc: "Reviewed by Dr. Viswanadhan and subspecialty radiologists."
                            }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors"
                            >
                                <feature.icon className="h-10 w-10 text-primary mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-400">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
