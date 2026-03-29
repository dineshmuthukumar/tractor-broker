import { Tractor } from '../App'

interface TractorListingsProps {
  tractors: Tractor[]
}

export default function TractorListings({ tractors }: TractorListingsProps) {
  return (
    <section id="listings" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">சிறப்பு ட்ராக்டர்கள்</h2>
        <p className="text-center text-gray-600 mb-12">தரமான விவசாய உபகரணங்களின் தேர்வை காணுங்கள்</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tractors.map((tractor) => (
            <TractorCard key={tractor.id} tractor={tractor} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TractorCard({ tractor }: { tractor: Tractor }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img
          src={tractor.image}
          alt={tractor.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{tractor.name}</h3>
          <span className={`px-2 py-1 text-xs rounded-full ${
            tractor.condition === 'Excellent' ? 'bg-green-100 text-green-800' :
            tractor.condition === 'Good' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {tractor.condition === 'Excellent' ? 'சிறப்பானது' :
             tractor.condition === 'Good' ? 'நல்லது' : 'நியாயமானது'}
          </span>
        </div>
        <div className="space-y-2 text-gray-600 mb-4">
          <p><span className="font-medium">ஆண்டு:</span> {tractor.year}</p>
          <p><span className="font-medium">ஓட்ட நேரம்:</span> {tractor.hours.toLocaleString()} மணி</p>
          <p><span className="font-medium">இடம்:</span> {tractor.location}</p>
        </div>
        <div className="flex justify-between items-center pt-4 border-t">
          <span className="text-2xl font-bold text-green-600">
            ₹{tractor.price.toLocaleString()}
          </span>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
            விசாரிக்கவும்
          </button>
        </div>
      </div>
    </div>
  )
}
