export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">உங்களுக்கான சரியான ட்ராக்டரை கண்டறியுங்கள்</h2>
        <p className="text-lg md:text-xl mb-8 text-green-100">
          நம்பகமான விற்பனையாளர்களிடமிருந்து தரமான பழைய ட்ராக்டர்கள். உங்கள் விவசாய தேவைகளுக்கு தரமான உபகரணங்கள்.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#listings"
            className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
          >
            பட்டியல்களை காணுங்கள்
          </a>
          <button onClick={() => document.getElementById('contact-btn')?.click()} className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition">
            உங்கள் ட்ராக்டரை விற்கவும்
          </button>
        </div>
      </div>
    </section>
  )
}
