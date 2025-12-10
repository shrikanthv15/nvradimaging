import { motion } from 'framer-motion';
import { ArrowRight, Activity, ShieldCheck, Scan, Zap, Globe, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Longevity = () => {
    return (
        <div className="overflow-hidden pt-20">
            {/* Hero Section */}
            <section className="relative py-20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-background">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
                            The Medicine 3.0 Approach
                        </h1>
                        <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                            Move from reactive healthcare to proactive longevity.
                            The data to design your future.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 bg-surface relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why We Screen: <br /><span className="text-secondary">Proactive vs. Reactive</span></h2>
                            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                                Traditional medicine ("Medicine 2.0") waits for symptoms to appear before treating them. By then, the damage is often done.
                            </p>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                We believe in Medicine 3.0: a proactive, data-driven strategy focused on early detection and prevention. Our goal isn't just to extend your lifespan, but to maximize your healthspan—ensuring your final decades are as vibrant as your current one.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    { text: "Catch It Early: Identify cancer, aneurysms, and metabolic risks at Stage 0 or 1.", icon: ShieldCheck },
                                    { text: "Establish a Baseline: Create a definitive 'Digital Twin' of your internal anatomy.", icon: Activity },
                                    { text: "No Radiation: 100% safe for repeated, longitudinal tracking.", icon: Zap }
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <div className="mt-1 mr-4 p-2 bg-white/5 rounded-lg border border-white/10">
                                            <item.icon className="h-5 w-5 text-primary" />
                                        </div>
                                        <span className="text-gray-300">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center relative">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.1),transparent_60%)]" />
                                <Scan className="w-64 h-64 text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                                <div className="relative z-10 p-8 border border-white/10 bg-black/40 backdrop-blur-md rounded-2xl max-w-xs text-center">
                                    <h4 className="text-white font-semibold mb-2">Digital Twin</h4>
                                    <p className="text-sm text-gray-400">Longitudinal tracking of your biology over time.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Technology Trifecta */}
            <section className="py-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Technology Trifecta</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">High-resolution imaging meet expert analysis.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Scan,
                                title: "Precision Imaging",
                                desc: "Unlike CT or X-rays, our advanced MRI uses zero ionizing radiation. We capture high-resolution cross-sections of soft tissue, organs, and vascular systems with sub-millimeter precision."
                            },
                            {
                                icon: Globe,
                                title: "The Teleradiology Advantage",
                                desc: "Don't wait weeks. Your scan is routed to our elite network of board-certified, sub-specialized radiologists. We separate acquisition from interpretation to guarantee the best expert for the job."
                            },
                            {
                                icon: FileText,
                                title: "Actionable Intelligence",
                                desc: "We provide a structured, easy-to-read report that acts as a GPS for your health, flagging critical findings and offering clear next steps for your care team."
                            }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group"
                            >
                                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <feature.icon className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deep Dive - What We See */}
            <section className="py-24 bg-surface relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Total Body Transparency</h2>
                        <p className="text-gray-400">Head to Toe.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Oncology */}
                        <div className="p-8 border border-white/10 rounded-2xl bg-gradient-to-br from-slate-900 to-black hover:border-red-500/30 transition-colors">
                            <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-semibold mb-4 border border-red-500/20">Oncology</span>
                            <h3 className="text-xl font-bold text-white mb-3">Early Cancer Detection</h3>
                            <p className="text-gray-400 text-sm">
                                Screening for solid tumors in organs that traditional check-ups miss—including the pancreas, liver, kidneys, bladder, and spine. We look for the "silent" signals before they become symptoms.
                            </p>
                        </div>
                        {/* Neurology */}
                        <div className="p-8 border border-white/10 rounded-2xl bg-gradient-to-br from-slate-900 to-black hover:border-indigo-500/30 transition-colors">
                            <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold mb-4 border border-indigo-500/20">Neurology</span>
                            <h3 className="text-xl font-bold text-white mb-3">Brain & Vascular Health</h3>
                            <p className="text-gray-400 text-sm">
                                Visualize the brain’s architecture to spot silent aneurysms, white matter changes (small vessel disease), and potential markers of early neuro-degeneration.
                            </p>
                        </div>
                        {/* Metabolic */}
                        <div className="p-8 border border-white/10 rounded-2xl bg-gradient-to-br from-slate-900 to-black hover:border-emerald-500/30 transition-colors">
                            <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-4 border border-emerald-500/20">Metabolic</span>
                            <h3 className="text-xl font-bold text-white mb-3">Visceral Fat & Organ Health</h3>
                            <p className="text-gray-400 text-sm">
                                BMI is outdated. We quantify Visceral Adipose Tissue (VAT)—the dangerous fat around your organs—and screen for fatty liver disease (NAFLD), giving you the ultimate metric for metabolic optimization.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integration Steps */}
            <section className="py-24 bg-background border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Turning Insight into Action</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                        {[
                            { step: "01", title: "The Scan", desc: "Complete your 60-minute, non-invasive scan at one of our partner centers. No dye, no radiation, no claustrophobia-inducing tubes." },
                            { step: "02", title: "The Expert Review", desc: "Our teleradiology team analyzes gigabytes of data. They distinguish between benign 'noise' and clinically significant findings that require attention." },
                            { step: "03", title: "The Integration", desc: "Use your report to optimize your lifestyle. Pivot to Zone 2 cardio, prioritize sleep hygiene, or gain peace of mind to push your fitness harder." }
                        ].map((item, idx) => (
                            <div key={idx} className="relative z-10 text-center">
                                <div className="w-24 h-24 mx-auto bg-surface border-4 border-background rounded-full flex items-center justify-center mb-6 shadow-xl">
                                    <span className="text-3xl font-bold text-white/20">{item.step}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.2),transparent_70%)]" />
                </div>
                <div className="relative max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Know Your Body. Own Your Future.</h2>
                    <Link to="/contact" className="inline-flex items-center px-10 py-5 bg-white text-background rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
                        Schedule Your Scan Now
                        <ArrowRight className="ml-2 h-6 w-6" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Longevity;
