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
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Meet The Expert</h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        World-class radiological expertise combined with advanced technology.
                    </p>
                </div>

                {/* Profile Card */}
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
                                <p className="text-primary font-medium">Chief Radiologist, MD</p>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="md:col-span-7 p-8 md:p-12">
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                        <GraduationCap className="h-6 w-6 text-primary mr-3" />
                                        Education & Credentials
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        Dr. Narayan Viswanadhan is a board-certified radiologist with extensive training from Harvard Medical School.
                                        With years of experience in diagnostic imaging, he specializes in advanced MRI techniques and preventative body scanning.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                        <Building className="h-6 w-6 text-secondary mr-3" />
                                        Professional Background
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        Prior to founding NV Rad Imaging, Dr. Viswanadhan served at top-tier academic medical centers,
                                        contributing to research in early cancer detection and imaging safety protocols.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                        <Award className="h-6 w-6 text-accent mr-3" />
                                        Philosophy
                                    </h3>
                                    <blockquote className="border-l-4 border-primary pl-4 italic text-gray-300">
                                        "We believe that knowing is better than worrying. Our mission is to provide accessible,
                                        hospital-grade imaging to empower patients with the knowledge they need to live healthier lives."
                                    </blockquote>
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
