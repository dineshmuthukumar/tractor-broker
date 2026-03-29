import { motion } from 'framer-motion'

interface HeaderProps {
  onContactClick: () => void
  onSEOTrackerClick: () => void
}

export default function Header({ onContactClick, onSEOTrackerClick }: HeaderProps) {
  const navItems = [
    { text: 'முகப்பு', href: '#', label: 'முகப்பு பக்கத்திற்கு செல்க' },
    { text: 'பட்டியல்கள்', href: '#listings', label: 'ட்ராக்டர் பட்டியல்களுக்கு செல்க' },
    { text: 'எங்களை பற்றி', href: '#about', label: 'எங்களை பற்றி பகுதிக்கு செல்க' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-green-700 text-white shadow-lg sticky top-0 z-50"
      role="banner"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.a
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center space-x-2"
          href="#"
          aria-label="ஞானசேகரன் ட்ராக்டர் தரகர் முகப்புப் பக்கம்"
        >
          <motion.svg
            className="w-10 h-10"
            fill="currentColor"
            viewBox="0 0 24 24"
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ duration: 0.3 }}
            aria-hidden="true"
          >
            <path d="M19.5 9.5h-1V6a1 1 0 00-1-1h-1V3a1 1 0 00-1-1H8a1 1 0 00-1 1v2H6a1 1 0 00-1 1v3.5H4a2.5 2.5 0 000 5h1V20a1 1 0 001 1h12a1 1 0 001-1v-5.5h1a2.5 2.5 0 000-5zM9 4h6v1H9V4zm7 15H8v-9h8v9zm1-11H7V7h8v1z"/>
          </motion.svg>
          <span className="text-xl md:text-2xl font-bold">ஞானசேகரன் ட்ராக்டர் தரகர்</span>
        </motion.a>
        <nav className="hidden md:flex space-x-6" role="navigation" aria-label="முக்கிய வழிசெலுத்தல்">
          {navItems.map((item, index) => (
            <motion.a
              key={item.text}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (index * 0.1), duration: 0.4 }}
              whileHover={{ y: -2, color: '#86efac' }}
              className="transition cursor-pointer"
              aria-label={item.label}
            >
              {item.text}
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            whileHover={{ y: -2, color: '#86efac' }}
            onClick={onSEOTrackerClick}
            className="transition cursor-pointer bg-transparent border-none text-white"
            aria-label="எஸ்.இ.ஓ கண்காணிப்பு"
          >
            எஸ்.இ.ஓ
          </motion.button>
          <motion.button
            id="contact-btn"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            whileHover={{ scale: 1.05, backgroundColor: '#16a34a' }}
            whileTap={{ scale: 0.95 }}
            onClick={onContactClick}
            className="bg-green-600 px-4 py-2 rounded-lg cursor-pointer"
            aria-label="தொடர்பு படிவத்தை திற"
          >
            தொடர்பு கொள்ளுங்கள்
          </motion.button>
        </nav>
      </div>
    </motion.header>
  )
}
