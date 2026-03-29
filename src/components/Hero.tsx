import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16 md:py-20 overflow-hidden relative" aria-labelledby="hero-heading">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          உங்களுக்கான சரியான ட்ராக்டரை கண்டறியுங்கள்
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-lg md:text-xl mb-8 text-green-100"
        >
          நம்பகமான விற்பனையாளர்களிடமிருந்து தரமான பழைய ட்ராக்டர்கள். உங்கள் விவசாய தேவைகளுக்கு தரமான உபகரணங்கள். 🔧 பழுதடைந்த ட்ராக்டர்கள் மற்றும் பாகங்களுக்கு சிறந்த விலை.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row justify-center gap-4"
          role="group"
          aria-label="ட்ராக்டர் வாங்க விற்க பட்டன்கள்"
        >
          <motion.a
            href="#listings"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition cursor-pointer inline-block"
            aria-label="ட்ராக்டர் பட்டியல்களை காண்க"
          >
            பட்டியல்களை காணுங்கள்
          </motion.a>
          <motion.button
            onClick={() => document.getElementById('contact-btn')?.click()}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition cursor-pointer"
            aria-label="உங்கள் ட்ராக்டரை விற்க தொடர்பு கொள்க"
          >
            உங்கள் ட்ராக்டரை விற்கவும்
          </motion.button>
        </motion.div>

        {/* Floating Tractor Animation */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.6, ease: 'easeOut' }}
          className="absolute top-1/2 left-10 transform -translate-y-1/2 hidden xl:block"
          aria-hidden="true"
        >
          <svg width="200" height="150" viewBox="0 0 200 150" fill="currentColor" className="text-white/10">
            <rect x="20" y="60" width="80" height="50" rx="5" />
            <rect x="100" y="70" width="80" height="40" rx="5" />
            <circle cx="50" cy="110" r="20" />
            <circle cx="130" cy="110" r="18" />
            <circle cx="50" cy="110" r="10" fill="currentColor" fillOpacity="0.3" />
            <circle cx="130" cy="110" r="8" fill="currentColor" fillOpacity="0.3" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
