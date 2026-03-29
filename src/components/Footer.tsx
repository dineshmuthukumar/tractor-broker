export default function Footer() {
  return (
    <footer id="about" className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ஞானசேகரன் ட்ராக்டர் தரகர்</h3>
            <p className="text-gray-400">
              விவசாய உபகரணங்கள் விற்பனையில் உங்கள் நம்பகமான பங்காளி. வாங்குபவர்களையும் விற்பவர்களையும் இணைக்கிறோம்.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">விரைவு இணைப்புகள்</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">முகப்பு</a></li>
              <li><a href="#listings" className="hover:text-white transition">பட்டியல்கள்</a></li>
              <li><a href="#" className="hover:text-white transition">சேவைகள்</a></li>
              <li><a href="#" className="hover:text-white transition">எங்களை பற்றி</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">தொடர்பு</h4>
            <ul className="space-y-2 text-gray-400">
              <li>👤 ஞானசேகரன்</li>
              <li>📞 9597716735</li>
              <li>📍 தமிழ்நாடு, இந்தியா</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© 2026 ஞானசேகரன் ட்ராக்டர் தரகர். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.</p>
        </div>
      </div>
    </footer>
  )
}
