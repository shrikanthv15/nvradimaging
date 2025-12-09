import { motion } from 'framer-motion';
import { Award, GraduationCap, Building, Cpu } from 'lucide-react';
import somwaruImg from '../assets/somwaru.jpg';

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
                            <div className="md:col-span-5 bg-gradient-to-br from-slate-800 to-slate-900 min-h-[400px] relative group flex flex-col items-center justify-center p-8 md:p-0">
                                <div className="w-56 h-56 rounded-full bg-slate-700/50 flex items-center justify-center border-4 border-slate-600/50 shadow-2xl relative z-10 mb-6 md:mb-0">
                                    <span className="text-5xl font-bold text-slate-500">NV</span>
                                </div>

                                {/* Decorational circle behind */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1),transparent_70%)]" />

                                <div className="relative md:absolute md:bottom-0 left-0 right-0 p-0 md:p-8 text-center md:text-left">
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
                            {/* Image */}
                            <div className="md:col-span-5 bg-gradient-to-br from-indigo-900 to-slate-900 min-h-[400px] relative group md:order-last flex flex-col items-center justify-center p-8 md:p-0">
                                <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-indigo-500/30 shadow-2xl relative z-10 mb-6 md:mb-0">
                                    <img
                                        src={somwaruImg}
                                        alt="Dr. Alexander Somwaru"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Decorational circle behind */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.2),transparent_70%)]" />

                                <div className="relative md:absolute md:bottom-0 left-0 right-0 p-0 md:p-8 text-center md:text-left">
                                    <h2 className="text-2xl font-bold text-white">Dr. Alexander Somwaru</h2>
                                    <p className="text-secondary font-medium">Co-Founder & Clinical Director</p>
                                    <p className="text-gray-300 text-sm mt-1">Deputy Chief of Radiology, Tampa VA</p>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="md:col-span-7 p-8 md:p-12">
                                <div className="space-y-8">

                                    {/* Titles */}
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2 flex items-center">
                                            <Building className="h-6 w-6 text-secondary mr-3" />
                                            Academic & Clinical Leadership
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            Dr. Somwaru is an <span className="text-white font-semibold">Associate Professor at USF Morsani College of Medicine</span> and
                                            <span className="text-white font-semibold"> Deputy Chief of Radiology at the James A. Haley VA</span>.
                                            A graduate of UPenn and Johns Hopkins (Fellowship), he previously served as faculty at Georgetown (Teacher of the Year) and Mount Sinai.
                                        </p>
                                    </div>

                                    {/* Expertise */}
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2 flex items-center">
                                            <GraduationCap className="h-6 w-6 text-accent mr-3" />
                                            Subspecialty Expertise
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            Board-certified and fellowship-trained in Body Imaging, he is an expert in MRI/CT, specifically <span className="text-white">multi-parametric prostate MRI</span> and ultrasound fusion biopsies.
                                            He has published over 15 peer-reviewed papers and 30 exhibits.
                                        </p>
                                    </div>

                                    {/* Innovation/AI */}
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2 flex items-center">
                                            <Cpu className="h-6 w-6 text-primary mr-3" />
                                            Innovation & Technology
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            A pioneer in clinical tech, Dr. Somwaru has translated AI tools (Clear Read, Rapid AI) into practice and advocates for
                                            <span className="text-white"> Augmented/Virtual Reality</span> to enhance patient care and surgical planning.
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
