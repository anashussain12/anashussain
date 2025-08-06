'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('https://formsubmit.co/ajax/hussainanas68@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success === 'true') {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' }); // ✅ Reset form

      setTimeout(() => setSubmitted(false), 4000); // ✅ Hide message after 4s
    }
  };

  return (
    <div id="contact" className="max-w-screen-xl mx-auto px-4 sm:px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center">
          Let's Connect
        </h2>
        <p className="text-center mb-10 max-w-xl mx-auto text-gray-400">
          I'm always open to new opportunities, collaborations, or just a chat about tech.
        </p>
      </motion.div>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          onChange={handleChange}
          value={formData.name}
          className="w-full p-3 border rounded-md bg-white text-black"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          onChange={handleChange}
          value={formData.email}
          className="w-full p-3 border rounded-md bg-white text-black"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          onChange={handleChange}
          value={formData.message}
          rows={5}
          className="w-full p-3 border rounded-md bg-white text-black"
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-black text-white px-6 py-3 rounded-md transition ${
            loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'
          }`}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        <AnimatePresence>
          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-green-600 mt-4 font-medium text-center"
            >
              ✅ Thanks! Your message has been sent.
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
