import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="py-20 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Get in Touch</h1>
                        <p className="text-xl text-gray-400 mb-12">
                            Ready for your scan? Our team is here to answer your questions and schedule your appointment.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div className="ml-6">
                                    <h3 className="text-lg font-semibold text-white">Visit Us</h3>
                                    <p className="text-gray-400 mt-2">
                                        New York <br />New York, NY
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div className="ml-6">
                                    <h3 className="text-lg font-semibold text-white">Call Us</h3>
                                    <p className="text-gray-400 mt-2">
                                        <a href="tel:+12017047674" className="hover:text-primary transition-colors">+1 (201) 704-7674</a>
                                    </p>
                                    <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9am - 5pm EST</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div className="ml-6">
                                    <h3 className="text-lg font-semibold text-white">Email Us</h3>
                                    <p className="text-gray-400 mt-2">nvradimagingllc@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-surface p-8 rounded-3xl border border-white/5 shadow-xl">
                        <h2 className="text-2xl font-bold text-white mb-6">Request A Call Back</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                                    <input type="text" className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                                    <input type="text" className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Doe" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input type="email" className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message (Optional)</label>
                                <textarea rows={4} className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="How can we help you?"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02]">
                                Submit Request
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
