import { motion } from 'framer-motion'

export default function Footer() {
  const footerLinks = [
    { text: 'முகப்பு', href: '#', label: 'முகப்பு பக்கத்திற்கு செல்க' },
    { text: 'பட்டியல்கள்', href: '#listings', label: 'ட்ராக்டர் பட்டியல்களுக்கு செல்க' },
    { text: 'சேவைகள்', href: '#', label: 'சேவைகள் பக்கத்திற்கு செல்க' },
    { text: 'எங்களை பற்றி', href: '#', label: 'எங்களை பற்றி பக்கத்திற்கு செல்க' }
  ]

  return (
    <footer id="about" className="bg-gray-800 text-white py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4">ஞானசேகரன் ட்ராக்டர் தரகர்</h3>
            <p className="text-gray-400">
              விவசாய உபகரணங்கள் விற்பனையில் உங்கள் நம்பகமான பங்காளி. வாங்குபவர்களையும் விற்பவர்களையும் இணைக்கிறோம்.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h4 className="font-semibold mb-4">விரைவு இணைப்புகள்</h4>
            <nav aria-label="அடிச்செயலி வழிசெலுத்தல்">
              <ul className="space-y-2 text-gray-400">
                {footerLinks.map((link, index) => (
                  <motion.li
                    key={link.text}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (index * 0.1), duration: 0.3 }}
                  >
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5, color: '#fff' }}
                      className="transition cursor-pointer inline-block"
                      aria-label={link.label}
                    >
                      {link.text}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h4 className="font-semibold mb-4">தொடர்பு</h4>
            <address className="not-italic space-y-2 text-gray-400">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="hover:text-white transition"
              >
                <span aria-hidden="true">👤</span> <span className="sr-only">பெயர்:</span> ஞானசேகரன்
              </motion.p>
              <motion.a
                href="tel:+919597716735"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.55 }}
                whileHover={{ scale: 1.05 }}
                className="hover:text-white transition block"
              >
                <span aria-hidden="true">📞</span> 9597716735
              </motion.a>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="hover:text-white transition"
              >
                <span aria-hidden="true">📍</span> தமிழ்நாடு, இந்தியா
              </motion.p>
            </address>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400"
        >
          <p>© 2026 ஞானசேகரன் ட்ராக்டர் தரகர். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.</p>
        </motion.div>
      </div>
    </footer>
  )
}
