import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TractorListings from './components/TractorListings'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

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
  }
]

function App() {
  const [showContact, setShowContact] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onContactClick={() => setShowContact(true)} />
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
