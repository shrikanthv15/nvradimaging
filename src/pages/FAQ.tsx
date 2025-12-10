import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const FAQs = [
    {
        question: "Is this safe to do every year?",
        answer: "Yes. Because MRI uses magnetic fields rather than ionizing radiation (like CT scans), it is safe for regular preventative screening. This makes it the ideal tool for tracking your long-term biological aging."
    },
    {
        question: "What if you find something incidental?",
        answer: "Incidental findings are common in high-resolution imaging. Our expert radiologists are trained to categorize these findings, helping distinguish between benign issues that need no action and findings that require follow-up. We guide you through the noise so you don't worry unnecessarily."
    },
    {
        question: "How fast will I get my results?",
        answer: "Thanks to our teleradiology network, you typically receive your comprehensive report within 3-5 business days—significantly faster than standard hospital timelines."
    },
    {
        question: "Can I share this with my doctor?",
        answer: "Absolutely. We encourage it. Your report is designed to be a clinical-grade asset that empowers your primary care physician or longevity specialist."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold text-white mb-6">Common Questions</h1>
                    <p className="text-gray-400">Everything you need to know about the process.</p>
                </motion.div>

                <div className="space-y-4">
                    {FAQs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-surface border border-white/5 rounded-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-lg font-medium text-white">{faq.question}</span>
                                {openIndex === idx ? (
                                    <Minus className="h-5 w-5 text-primary" />
                                ) : (
                                    <Plus className="h-5 w-5 text-primary" />
                                )}
                            </button>
                            {openIndex === idx && (
                                <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                                    {faq.answer}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
