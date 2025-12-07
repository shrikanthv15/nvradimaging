import { Activity, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-surface border-t border-white/5 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Activity className="h-6 w-6 text-primary" />
                            <span className="text-lg font-bold text-white">NV RAD <span className="text-primary">IMAGING</span></span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Advanced Whole Body MRI screening for early detection and peace of mind. Led by Dr. Narayan Viswanadhan.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-white font-semibold tracking-wide">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start text-gray-400">
                                <MapPin className="h-5 w-5 mr-3 text-primary mt-0.5" />
                                <span>1305 York Ave,<br />New York, NY 10021</span>
                            </li>
                            <li className="flex items-center text-gray-400">
                                <Phone className="h-5 w-5 mr-3 text-primary" />
                                <a href="tel:000-000-0000" className="hover:text-primary transition-colors">000-000-0000</a>
                            </li>
                            <li className="flex items-center text-gray-400">
                                <Mail className="h-5 w-5 mr-3 text-primary" />
                                <a href="mailto:info@nvrad.com" className="hover:text-primary transition-colors">info@nvrad.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links / Disclaimer */}
                    <div className="space-y-4">
                        <h3 className="text-white font-semibold tracking-wide">Patient Information</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-primary transition-colors">Patient Portal</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Pay Bill Online</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Insurance Information</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} NV Rad Imaging. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Not associated with Weill Cornell Medicine (Demo)</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
