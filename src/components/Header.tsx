import { motion } from 'framer-motion'

interface HeaderProps {
  onContactClick: () => void
}

export default function Header({ onContactClick }: HeaderProps) {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-green-700 text-white shadow-lg sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center space-x-2"
        >
          <motion.svg
            className="w-10 h-10"
            fill="currentColor"
            viewBox="0 0 24 24"
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <path d="M19.5 9.5h-1V6a1 1 0 00-1-1h-1V3a1 1 0 00-1-1H8a1 1 0 00-1 1v2H6a1 1 0 00-1 1v3.5H4a2.5 2.5 0 000 5h1V20a1 1 0 001 1h12a1 1 0 001-1v-5.5h1a2.5 2.5 0 000-5zM9 4h6v1H9V4zm7 15H8v-9h8v9zm1-11H7V7h8v1z"/>
          </motion.svg>
          <h1 className="text-xl md:text-2xl font-bold">ஞானசேகரன் ட்ராக்டர் தரகர்</h1>
        </motion.div>
        <nav className="hidden md:flex space-x-6">
          {['முகப்பு', 'பட்டியல்கள்', 'எங்களை பற்றி'].map((item, index) => (
            <motion.a
              key={item}
              href={item === 'முகப்பு' ? '#' : item === 'பட்டியல்கள்' ? '#listings' : '#about'}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (index * 0.1), duration: 0.4 }}
              whileHover={{ y: -2, color: '#86efac' }}
              className="transition cursor-pointer"
            >
              {item}
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            whileHover={{ scale: 1.05, backgroundColor: '#16a34a' }}
            whileTap={{ scale: 0.95 }}
            onClick={onContactClick}
            className="bg-green-600 px-4 py-2 rounded-lg cursor-pointer"
          >
            தொடர்பு கொள்ளுங்கள்
          </motion.button>
        </nav>
      </div>
    </motion.header>
  )
}
