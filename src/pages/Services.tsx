import { motion } from 'framer-motion';
import { Scan, ClipboardCheck, Brain, Heart, Activity, MonitorPlay, Sparkles, Microscope } from 'lucide-react';

const Services = () => {
    return (
        <div className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-6 text-white"
                >
                    Clinical Services & Technology
                </motion.h1>
                <p className="text-xl text-gray-400">
                    We provide the most authoritative, clinically responsible interpretation of proactive imaging data globally.
                </p>
            </div>

            {/* Core Services */}
            <div className="max-w-7xl mx-auto mb-32 space-y-24">

                {/* Teleradiology */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                            <Microscope className="h-8 w-8 text-primary" />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-6">Whole-Body Teleradiology Reading</h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            We partner with imaging centers to provide high-volume, standardized interpretation of WB-MRI protocols.
                            Our dual-subspecialty review ensures no diagnostic blind spots.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Neuro Read (Harvard): Focus on CNS, spine, and vascular structures.",
                                "Body Read (Johns Hopkins): Focus on chest, abdomen, pelvis, and MSK system.",
                                "Structured reporting for clarity and rapid turnaround."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 mr-3 flex-shrink-0" />
                                    <span className="text-gray-300">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <div className="relative h-[400px] bg-gradient-to-br from-slate-900 to-black rounded-3xl border border-white/10 flex items-center justify-center p-8 overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.15),transparent_60%)]" />
                        <div className="relative z-10 grid grid-cols-2 gap-4 w-full h-full opacity-80">
                            <div className="bg-slate-800/50 rounded-2xl animate-pulse-slow"></div>
                            <div className="bg-slate-800/30 rounded-2xl"></div>
                            <div className="bg-slate-800/30 rounded-2xl"></div>
                            <div className="bg-slate-800/50 rounded-2xl animate-pulse-slow delay-100"></div>
                        </div>
                    </div>
                </div>

                {/* Concierge Consultation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[400px] bg-gradient-to-br from-indigo-950 to-black rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden md:order-last">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.15),transparent_60%)]" />
                        <MonitorPlay className="h-32 w-32 text-indigo-500/20" />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-16 h-16 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6">
                            <ClipboardCheck className="h-8 w-8 text-indigo-400" />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-6">Concierge Patient Consultation</h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            This is our premium differentiator. A required, personalized 30-minute virtual consultation with a founder-radiologist.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Clinical Translation: We explain complex findings in clear language.",
                                "Anxiety Management: We contextualize incidental findings to reduce unnecessary worry.",
                                "Action Plan: We create a clear, evidence-based follow-up plan for your PCP."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start">
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2.5 mr-3 flex-shrink-0" />
                                    <span className="text-gray-300">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>

            {/* AI Technology */}
            <div className="max-w-7xl mx-auto mb-32">
                <div className="bg-gradient-to-r from-cyan-950/30 via-slate-900/50 to-cyan-950/30 rounded-3xl p-8 md:p-16 border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto mb-6">
                            <Sparkles className="h-8 w-8 text-cyan-400" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Powered by Artificial Intelligence</h2>
                        <p className="text-gray-400 text-lg mb-12">
                            We integrate AI-enabled tools to enhance image quality, standardize protocols, and provide sophisticated translations of findings.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                            <div className="p-6 rounded-xl bg-black/40 border border-white/5">
                                <h3 className="font-bold text-white mb-2">Protocol Enhancement</h3>
                                <p className="text-sm text-gray-400">Automated slice positioning and motion correction for consistent, high-quality scans.</p>
                            </div>
                            <div className="p-6 rounded-xl bg-black/40 border border-white/5">
                                <h3 className="font-bold text-white mb-2">Quality Assurance</h3>
                                <p className="text-sm text-gray-400">Pre-read AI checks for image metrics (SNR, artifacts) to ensure diagnostic yield.</p>
                            </div>
                            <div className="p-6 rounded-xl bg-black/40 border border-white/5">
                                <h3 className="font-bold text-white mb-2">Patient Translation</h3>
                                <p className="text-sm text-gray-400">AI-assisted layperson summaries to help you understand your report instantly.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Anatomy Grid - Kept as it's visually good and relevant */}
            <div className="max-w-7xl mx-auto">
                <div className="bg-surface rounded-3xl p-8 md:p-12 border border-white/5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Comprehensive Coverage</h2>
                            <p className="text-gray-400 mb-8">
                                Our scan creates a detailed map of your body's major organs, screening for cancer and other conditions in:
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { name: "Brain & Head", icon: Brain },
                                    { name: "Chest & Heart", icon: Heart },
                                    { name: "Abdomen & Pelvis", icon: Activity },
                                    { name: "Spine", icon: Activity },
                                    { name: "Liver & Kidneys", icon: Activity },
                                    { name: "Prostate/Ovaries", icon: Activity },
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center space-x-3 text-gray-300">
                                        <item.icon className="h-5 w-5 text-secondary" />
                                        <span>{item.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative h-[400px] bg-black/50 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden group">
                            {/* Abstract Visualization */}
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-[gradient_15s_ease_infinite]" />
                            <div className="relative z-10 text-center">
                                <Scan className="h-32 w-32 text-primary/20 mx-auto mb-4 group-hover:text-primary/40 transition-colors duration-500" />
                                <p className="text-sm text-primary uppercase tracking-widest font-mono">Scanning Protocol Active</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
