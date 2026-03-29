import { useState } from 'react'
import emailjs from 'emailjs-com'

interface ContactFormProps {
  onClose: () => void
}

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function ContactForm({ onClose }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // Using EmailJS - replace with your actual service details
      const result = await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to_name: 'ஞானசேகரன்'
        },
        'YOUR_PUBLIC_KEY'
      )

      if (result.text === 'OK') {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', subject: 'general', message: '' })
        setTimeout(() => {
          setStatus('idle')
          onClose()
        }, 3000)
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('மின்னஞ்சல் அனுப்புவதில் தோல்வி. தயவு செய்து மீண்டும் முயற்சிக்கவும் அல்லது நேரடியாக தொடர்பு கொள்ளவும்.')
      console.error('Email error:', error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">தொடர்பு கொள்ளுங்கள்</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
            >
              ×
            </button>
          </div>

          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">செய்தி அனுப்பப்பட்டது!</h3>
              <p className="text-gray-600">நாங்கள் விரைவில் தொடர்பு கொள்வோம்.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  பெயர் *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  placeholder="உங்கள் பெயர்"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  மின்னஞ்சல் *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  தொலைபேசி எண்
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  placeholder="9597716735"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  விஷயம் *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                >
                  <option value="general">பொது விசாரணை</option>
                  <option value="buy">ட்ராக்டர் வாங்க</option>
                  <option value="sell">ட்ராக்டர் விற்க</option>
                  <option value="finance">நிதி உதவி</option>
                  <option value="service">சேவை</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  செய்தி *
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none"
                  placeholder="உங்கள் தேவைகளை தெரிவிக்கவும்..."
                />
              </div>

              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'அனுப்புகிறது...' : 'செய்தி அனுப்பு'}
              </button>
            </form>
          )}

          <div className="mt-6 pt-6 border-t text-center text-sm text-gray-500">
            <p className="mb-2">அல்லது நேரடியாக எங்களை தொடர்பு கொள்ளவும்:</p>
            <p>📞 9597716735 - ஞானசேகரன்</p>
            <p>📍 தமிழ்நாடு, இந்தியா</p>
          </div>
        </div>
      </div>
    </div>
  )
}
