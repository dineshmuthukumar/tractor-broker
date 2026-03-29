interface HeaderProps {
  onContactClick: () => void
}

export default function Header({ onContactClick }: HeaderProps) {
  return (
    <header className="bg-green-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.5 9.5h-1V6a1 1 0 00-1-1h-1V3a1 1 0 00-1-1H8a1 1 0 00-1 1v2H6a1 1 0 00-1 1v3.5H4a2.5 2.5 0 000 5h1V20a1 1 0 001 1h12a1 1 0 001-1v-5.5h1a2.5 2.5 0 000-5zM9 4h6v1H9V4zm7 15H8v-9h8v9zm1-11H7V7h8v1z"/>
          </svg>
          <h1 className="text-xl md:text-2xl font-bold">ஞானசேகரன் ட்ராக்டர் தரகர்</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-green-200 transition">முகப்பு</a>
          <a href="#listings" className="hover:text-green-200 transition">பட்டியல்கள்</a>
          <a href="#about" className="hover:text-green-200 transition">எங்களை பற்றி</a>
          <button
            onClick={onContactClick}
            className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-lg transition"
          >
            தொடர்பு கொள்ளுங்கள்
          </button>
        </nav>
      </div>
    </header>
  )
}
