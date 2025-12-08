import { motion } from 'framer-motion';
import { Award, GraduationCap, Building } from 'lucide-react';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="py-20 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto">
                {/* Intro */}
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Meet The Founders</h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        World-class radiological expertise combined with advanced technology.
                        Led by Harvard and Johns Hopkins trained radiologists.
                    </p>
                </div>

                <div className="space-y-20">
                    {/* Dr. Viswanadhan */}
                    <div className="bg-surface rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                            {/* Image Placeholder */}
                            <div className="md:col-span-5 bg-gradient-to-br from-slate-800 to-slate-900 min-h-[400px] relative group">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-48 h-48 rounded-full bg-slate-700/50 flex items-center justify-center border-4 border-slate-600">
                                        <span className="text-4xl font-bold text-slate-500">NV</span>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                                    <h2 className="text-2xl font-bold text-white">Dr. Narayan Viswanadhan</h2>
                                    <p className="text-primary font-medium">Founder & CEO, MD</p>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="md:col-span-7 p-8 md:p-12">
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                            <GraduationCap className="h-6 w-6 text-primary mr-3" />
                                            Executive Leadership & Clinical Distinction
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed mb-4">
                                            Dr. Viswanadhan is the <span className="text-white font-semibold">Founder and CEO</span> of NV Rad Imaging.
                                            A Board-Certified Neuroradiologist, he completed his training at <span className="text-white font-semibold">Harvard Medical School</span>.
                                        </p>
                                        <p className="text-gray-400 leading-relaxed">
                                            His leadership experience includes serving as the <span className="text-white font-semibold">Chief of Radiology at the Tampa VA</span>.
                                            He also serves as an <span className="text-white font-semibold">Associate Professor of Radiology at the USF School of Medicine</span>,
                                            mentoring the next generation of radiologists.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                            <Award className="h-6 w-6 text-secondary mr-3" />
                                            Philosophy: Longevity & Empowerment
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            Passionate about longevity and wellness, Dr. Viswanadhan believes deeply in giving patients the agency to take their health into their own hands.
                                            He leads the Concierge Consultation Service to ensure every patient understands their data and has a clear path forward.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dr. Somwaru */}
                    <div className="bg-surface rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                            {/* Content Order Swap on Desktop for visual interest, or keep consistent? Let's keep consistent for now but maybe mirror later if requested. Keeping consistent for clarity. */}
                            <div className="md:col-span-5 bg-gradient-to-br from-indigo-900 to-slate-900 min-h-[400px] relative group md:order-last">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-48 h-48 rounded-full bg-indigo-800/50 flex items-center justify-center border-4 border-indigo-700">
                                        <span className="text-4xl font-bold text-slate-400">AS</span>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                                    <h2 className="text-2xl font-bold text-white">Dr. Alexander Somwaru</h2>
                                    <p className="text-secondary font-medium">Clinical Director, Body Imaging & Co-Founder</p>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="md:col-span-7 p-8 md:p-12">
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                            <GraduationCap className="h-6 w-6 text-secondary mr-3" />
                                            Clinical Distinction & Training
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            Dr. Somwaru is a Board-Certified Radiologist specializing in Body Imaging. He completed his advanced fellowship training at
                                            <span className="text-white font-semibold"> Johns Hopkins Hospital</span>.
                                            His expertise is crucial for the accurate interpretation of the abdomen, pelvis, and torso, distinguishing between common benign findings and early-stage disease.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                            <Building className="h-6 w-6 text-accent mr-3" />
                                            The Clinical Imperative
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            Dr. Somwaru co-founded NV Rad Imaging to pair direct-to-consumer imaging with academic-level clinical oversight.
                                            He personally oversees the quality assurance of the Body components, ensuring diagnostic excellence from the brain down to the pelvis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default About;
