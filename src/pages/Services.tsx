import { motion } from 'framer-motion';
import { Scan, ClipboardCheck, FileText, Brain, Heart, Activity } from 'lucide-react';

const Services = () => {
    const steps = [
        {
            title: "Before Your Visit",
            desc: "Complete your safety forms online. No fasting or special preparation is required for the scan.",
            icon: ClipboardCheck
        },
        {
            title: "During The Scan",
            desc: "Relax in our state-of-the-art 3T MRI. The scan takes approximately 45 minutes and covers you from head to thighs.",
            icon: Scan
        },
        {
            title: "After The Scan",
            desc: "Your images are reviewed by subspecialty radiologists. You'll receive a detailed, easy-to-understand report within 2 business days.",
            icon: FileText
        }
    ];

    return (
        <div className="py-20 px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-6 text-white"
                >
                    Whole Body MRI Technology
                </motion.h1>
                <p className="text-xl text-gray-400">
                    A proactive approach to health. Our advanced AI-powered imaging captures thousands of images to detect abnormalities early.
                </p>
            </div>

            {/* Process Steps */}
            <div className="max-w-7xl mx-auto mb-32">
                <h2 className="text-3xl font-bold text-white text-center mb-16">What to Expect</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            className="relative z-10 flex flex-col items-center text-center"
                        >
                            <div className="w-24 h-24 rounded-full bg-background border-2 border-primary/50 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                                <step.icon className="h-10 w-10 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-gray-400 leading-relaxed max-w-sm">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Anatomy Grid */}
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
