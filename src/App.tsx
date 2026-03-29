import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TractorListings from './components/TractorListings'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import SEOTracker from './components/SEOTracker'

export interface Tractor {
  id: number
  name: string
  brand: string
  model: string
  year: number
  hours: number
  price: number
  condition: 'Excellent' | 'Good' | 'Fair'
  image: string
  location: string
}

const mockTractors: Tractor[] = [
  {
    id: 1,
    name: 'ஜான் டியர் 5050 D',
    brand: 'John Deere',
    model: '5050 D',
    year: 2021,
    hours: 800,
    price: 650000,
    condition: 'Excellent',
    image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=800',
    location: 'திருச்சி, தமிழ்நாடு'
  },
  {
    id: 2,
    name: 'சுவராஜ் 855 FE',
    brand: 'Swaraj',
    model: '855 FE',
    year: 2022,
    hours: 450,
    price: 580000,
    condition: 'Excellent',
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800',
    location: 'மதுரை, தமிழ்நாடு'
  },
  {
    id: 3,
    name: 'மக்கார்மிக் 5450',
    brand: 'Massey Ferguson',
    model: '5450',
    year: 2020,
    hours: 1500,
    price: 520000,
    condition: 'Good',
    image: 'https://images.unsplash.com/photo-1565514020125-9d62939b0320?w=800',
    location: 'கோவை, தமிழ்நாடு'
  },
  {
    id: 4,
    name: 'டான்ஃபர்ட் 5045',
    brand: 'Tafe',
    model: '5045',
    year: 2023,
    hours: 200,
    price: 720000,
    condition: 'Excellent',
    image: 'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800',
    location: 'சேலம், தமிழ்நாடு'
  },
  {
    id: 5,
    name: 'நியூ ஹாலந்து 3630',
    brand: 'New Holland',
    model: '3630 TX',
    year: 2021,
    hours: 1100,
    price: 680000,
    condition: 'Good',
    image: 'https://images.unsplash.com/photo-1574943320219-55ed5d9268d2?w=800',
    location: 'ஈரோடு, தமிழ்நாடு'
  },
  {
    id: 6,
    name: 'குபோட்டா கிராண்ட் 4',
    brand: 'Kubota',
    model: 'B2440',
    year: 2022,
    hours: 600,
    price: 850000,
    condition: 'Excellent',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    location: 'தஞ்சாவூர், தமிழ்நாடு'
  },
  {
    id: 7,
    name: 'மஹிந்திரா 575 DI',
    brand: 'Mahindra',
    model: '575 DI',
    year: 2021,
    hours: 950,
    price: 620000,
    condition: 'Good',
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800',
    location: 'கரூர், தமிழ்நாடு'
  },
  {
    id: 8,
    name: 'சோனாலிகா டியர் 750',
    brand: 'Sonalika',
    model: 'DI 750',
    year: 2023,
    hours: 150,
    price: 780000,
    condition: 'Excellent',
    image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=800',
    location: 'ஈரோடு, தமிழ்நாடு'
  },
  {
    id: 9,
    name: 'எஸ்கார்ட்ஸ் ஃபோர்ட்',
    brand: 'Escorts',
    model: 'Fort 300',
    year: 2020,
    hours: 1800,
    price: 480000,
    condition: 'Fair',
    image: 'https://images.unsplash.com/photo-1565514020125-9d62939b0320?w=800',
    location: 'திருப்பூர், தமிழ்நாடு'
  },
  {
    id: 10,
    name: '�போர்ஸ் சஞ்சயக்',
    brand: 'Force',
    model: 'Sanjay 5000',
    year: 2022,
    hours: 350,
    price: 820000,
    condition: 'Excellent',
    image: 'https://images.unsplash.com/photo-1574943320219-55ed5d9268d2?w=800',
    location: 'தேனி, தமிழ்நாடு'
  },
  {
    id: 11,
    name: 'பிரீத் 989',
    brand: 'Preet',
    model: '989',
    year: 2021,
    hours: 700,
    price: 690000,
    condition: 'Good',
    image: 'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800',
    location: 'திண்டுக்கல், தமிழ்நாடு'
  },
  {
    id: 12,
    name: 'ஜான் டியர் 5105',
    brand: 'John Deere',
    model: '5105',
    year: 2023,
    hours: 120,
    price: 920000,
    condition: 'Excellent',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    location: 'வேலூர், தமிழ்நாடு'
  },
  {
    id: 13,
    name: 'சுவராஜ் 735 XT',
    brand: 'Swaraj',
    model: '735 XT',
    year: 2020,
    hours: 1300,
    price: 490000,
    condition: 'Good',
    image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=800',
    location: 'விருதுநகர், தமிழ்நாடு'
  },
  {
    id: 14,
    name: 'மஹிந்திரா அர்ஜுன் 555',
    brand: 'Mahindra',
    model: 'Arjun 555',
    year: 2022,
    hours: 500,
    price: 750000,
    condition: 'Excellent',
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800',
    location: 'நாகப்பட்டினம், தமிழ்நாடு'
  },
  {
    id: 15,
    name: 'நியூ ஹாலந்து 3230',
    brand: 'New Holland',
    model: '3230 TX',
    year: 2019,
    hours: 2000,
    price: 450000,
    condition: 'Fair',
    image: 'https://images.unsplash.com/photo-1565514020125-9d62939b0320?w=800',
    location: 'கள்ளக்குறிச்சி, தமிழ்நாடு'
  }
]

function App() {
  const [showContact, setShowContact] = useState(false)
  const [showSEOTracker, setShowSEOTracker] = useState(false)

  if (showSEOTracker) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header
          onContactClick={() => setShowContact(true)}
          onSEOTrackerClick={() => setShowSEOTracker(false)}
        />
        <SEOTracker />
        {showContact && (
          <ContactForm onClose={() => setShowContact(false)} />
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onContactClick={() => setShowContact(true)}
        onSEOTrackerClick={() => setShowSEOTracker(true)}
      />
      <main>
        <Hero />
        <TractorListings tractors={mockTractors} />
      </main>
      {showContact && (
        <ContactForm onClose={() => setShowContact(false)} />
      )}
      <Footer />
    </div>
  )
}

export default App
