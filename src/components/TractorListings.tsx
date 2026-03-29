import { motion } from 'framer-motion'
import { Tractor } from '../App'

interface TractorListingsProps {
  tractors: Tractor[]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

export default function TractorListings({ tractors }: TractorListingsProps) {
  return (
    <section id="listings" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">சிறப்பு ட்ராக்டர்கள்</h2>
          <p className="text-center text-gray-600 mb-12">தரமான விவசாய உபகரணங்களின் தேர்வை காணுங்கள்</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {tractors.map((tractor) => (
            <TractorCard key={tractor.id} tractor={tractor} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function TractorCard({ tractor, variants }: { tractor: Tractor, variants?: any }) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <motion.div
        className="h-48 overflow-hidden relative"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src={tractor.image}
          alt={tractor.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{tractor.name}</h3>
          <motion.span
            whileHover={{ scale: 1.1 }}
            className={`px-2 py-1 text-xs rounded-full cursor-default ${
              tractor.condition === 'Excellent' ? 'bg-green-100 text-green-800' :
              tractor.condition === 'Good' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}
          >
            {tractor.condition === 'Excellent' ? 'சிறப்பானது' :
             tractor.condition === 'Good' ? 'நல்லது' : 'நியாயமானது'}
          </motion.span>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="space-y-2 text-gray-600 mb-4"
        >
          <p><span className="font-medium">ஆண்டு:</span> {tractor.year}</p>
          <p><span className="font-medium">ஓட்ட நேரம்:</span> {tractor.hours.toLocaleString()} மணி</p>
          <p><span className="font-medium">இடம்:</span> {tractor.location}</p>
        </motion.div>
        <div className="flex justify-between items-center pt-4 border-t">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-bold text-green-600"
          >
            ₹{tractor.price.toLocaleString()}
          </motion.span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition cursor-pointer"
          >
            விசாரிக்கவும்
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
