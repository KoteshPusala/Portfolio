import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data/portfolioData';
import GlassCard from '../components/GlassCard';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

export const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [statusMsg, setStatusMsg] = useState('');

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');

    // EmailJS keys from Vite environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // Mock sending if keys are missing (retaining usability for recruiters)
      console.warn("EmailJS credentials missing. Simulating form submission.");
      setTimeout(() => {
        setStatus('success');
        setStatusMsg('Thank you! Your message has been sent successfully (Mock mode).');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1500);
      return;
    }

    // Actual EmailJS call
    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
        setStatus('success');
        setStatusMsg('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, (error) => {
        setStatus('error');
        setStatusMsg('Something went wrong. Please check your credentials or try again later.');
        console.error(error.text);
      });
  };

  return (
    <section 
      id="contact" 
      className="relative py-24 px-6 overflow-hidden bg-premiumLight-bg dark:bg-premiumDark-bg"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          title="Get In Touch"
          subtitle="Contact"
          description="Have a question, opportunity, or want to collaborate on a project? Send a message!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8 items-start">
          
          {/* Left Column: Contact details */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col space-y-6 text-left"
          >
            <h3 className="text-2xl font-bold font-poppins text-premiumLight-text dark:text-premiumDark-text">
              Let's Talk About Engineering
            </h3>
            
            <p className="text-sm md:text-base text-premiumLight-muted dark:text-premiumDark-muted leading-relaxed font-sans">
              I am open to discuss full-time software engineering roles, hackathon collaborations, or technical research. Feel free to contact me directly using the detail cards or the glass form.
            </p>

            {/* Detail info cards */}
            <div className="space-y-4 pt-4">
              
              {/* Card 1: Email */}
              <div className="flex items-center space-x-4 p-4 rounded-xl border border-premiumLight-border dark:border-[#1e293b] bg-premiumLight-card dark:bg-[#111827]/60">
                <div className="p-3 rounded-lg bg-premiumLight-primary/10 dark:bg-premiumDark-accent/15 text-premiumLight-primary dark:text-premiumDark-accent">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold font-outfit uppercase tracking-wider text-premiumLight-muted dark:text-premiumDark-muted">
                    Email Me
                  </span>
                  <a href={`mailto:${personalInfo.email}`} className="block text-sm font-bold font-poppins text-premiumLight-text dark:text-premiumDark-text hover:text-premiumLight-primary dark:hover:text-premiumDark-accent transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              {/* Card 2: Phone */}
              <div className="flex items-center space-x-4 p-4 rounded-xl border border-premiumLight-border dark:border-[#1e293b] bg-premiumLight-card dark:bg-[#111827]/60">
                <div className="p-3 rounded-lg bg-premiumLight-primary/10 dark:bg-premiumDark-accent/15 text-premiumLight-primary dark:text-premiumDark-accent">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold font-outfit uppercase tracking-wider text-premiumLight-muted dark:text-premiumDark-muted">
                    Call / WhatsApp
                  </span>
                  <a href={`tel:${personalInfo.phone}`} className="block text-sm font-bold font-poppins text-premiumLight-text dark:text-premiumDark-text hover:text-premiumLight-primary dark:hover:text-premiumDark-accent transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Card 3: Location */}
              <div className="flex items-center space-x-4 p-4 rounded-xl border border-premiumLight-border dark:border-[#1e293b] bg-premiumLight-card dark:bg-[#111827]/60">
                <div className="p-3 rounded-lg bg-premiumLight-primary/10 dark:bg-premiumDark-accent/15 text-premiumLight-primary dark:text-premiumDark-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold font-outfit uppercase tracking-wider text-premiumLight-muted dark:text-premiumDark-muted">
                    Location
                  </span>
                  <span className="block text-sm font-bold font-poppins text-premiumLight-text dark:text-premiumDark-text">
                    Hyderabad, Telangana, India
                  </span>
                </div>
              </div>

            </div>

            {/* Social handles circle links */}
            <div className="space-y-3 pt-6 border-t border-premiumLight-border dark:border-slate-800">
              <span className="text-xs font-semibold uppercase tracking-wider text-premiumLight-muted dark:text-premiumDark-muted font-outfit">
                Handles Directory:
              </span>
              <div className="flex space-x-3">
                {[
                  { icon: <FaGithub className="w-5 h-5" />, url: personalInfo.socials.github },
                  { icon: <FaLinkedin className="w-5 h-5" />, url: personalInfo.socials.linkedin },
                  { icon: <SiLeetcode className="w-5 h-5" />, url: personalInfo.socials.leetcode }
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-xl border border-premiumLight-border dark:border-[#1e293b] bg-premiumLight-card dark:bg-premiumDark-card text-premiumLight-muted dark:text-premiumDark-muted hover:text-premiumLight-primary dark:hover:text-premiumDark-accent hover:border-premiumLight-primary/30 dark:hover:border-premiumDark-accent/30 transition-all duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Glassmorphic form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 w-full"
          >
            <GlassCard
              className="border border-premiumLight-border dark:border-premiumDark-border/40 p-8"
              hoverLift={false}
              glow={true}
            >
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 text-left">
                
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold font-outfit uppercase tracking-wider text-premiumLight-muted dark:text-slate-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border font-sans text-sm focus:outline-none transition-colors bg-premiumLight-bg dark:bg-[#0c111e]/90 text-premiumLight-text dark:text-premiumDark-text ${
                        errors.name 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-premiumLight-border dark:border-[#1e293b] focus:border-premiumLight-primary dark:focus:border-premiumDark-accent'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <span className="text-[11px] font-semibold text-red-500 flex items-center space-x-1 mt-1 font-outfit">
                        <AlertCircle className="w-3.5 h-3.5 mr-1" /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold font-outfit uppercase tracking-wider text-premiumLight-muted dark:text-slate-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border font-sans text-sm focus:outline-none transition-colors bg-premiumLight-bg dark:bg-[#0c111e]/90 text-premiumLight-text dark:text-premiumDark-text ${
                        errors.email 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-premiumLight-border dark:border-[#1e293b] focus:border-premiumLight-primary dark:focus:border-premiumDark-accent'
                      }`}
                      placeholder="johndoe@example.com"
                    />
                    {errors.email && (
                      <span className="text-[11px] font-semibold text-red-500 flex items-center space-x-1 mt-1 font-outfit">
                        <AlertCircle className="w-3.5 h-3.5 mr-1" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-bold font-outfit uppercase tracking-wider text-premiumLight-muted dark:text-slate-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border font-sans text-sm focus:outline-none transition-colors bg-premiumLight-bg dark:bg-[#0c111e]/90 text-premiumLight-text dark:text-premiumDark-text ${
                      errors.subject 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-premiumLight-border dark:border-[#1e293b] focus:border-premiumLight-primary dark:focus:border-premiumDark-accent'
                    }`}
                    placeholder="Inquiry / Partnership Opportunity"
                  />
                  {errors.subject && (
                    <span className="text-[11px] font-semibold text-red-500 flex items-center space-x-1 mt-1 font-outfit">
                      <AlertCircle className="w-3.5 h-3.5 mr-1" /> {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold font-outfit uppercase tracking-wider text-premiumLight-muted dark:text-slate-300">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border font-sans text-sm focus:outline-none transition-colors bg-premiumLight-bg dark:bg-[#0c111e]/90 text-premiumLight-text dark:text-premiumDark-text resize-none ${
                      errors.message 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-premiumLight-border dark:border-[#1e293b] focus:border-premiumLight-primary dark:focus:border-premiumDark-accent'
                    }`}
                    placeholder="Describe your project, timeline, or request in detail..."
                  />
                  {errors.message && (
                    <span className="text-[11px] font-semibold text-red-500 flex items-center space-x-1 mt-1 font-outfit">
                      <AlertCircle className="w-3.5 h-3.5 mr-1" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit button with loader */}
                <div className="pt-2 flex flex-col items-start gap-4">
                  <Button
                    type="submit"
                    variant="glow"
                    disabled={status === 'loading'}
                    icon={status === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    className="w-full sm:w-auto"
                  >
                    {status === 'loading' ? 'Sending Message...' : 'Send Message'}
                  </Button>

                  {/* Status Notifications */}
                  <AnimatePresence>
                    {status === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="flex items-center space-x-2 text-emerald-500 text-sm font-semibold mt-2 font-outfit"
                      >
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                        <span>{statusMsg}</span>
                      </motion.div>
                    )}
                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="flex items-center space-x-2 text-red-500 text-sm font-semibold mt-2 font-outfit"
                      >
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        <span>{statusMsg}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </form>
            </GlassCard>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
