import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface KeywordData {
  keyword: string
  rank: number
  change: number
  volume: number
  difficulty: number
}

interface PageData {
  url: string
  title: string
  seoScore: number
  traffic: number
  status: 'indexed' | 'not-indexed' | 'crawling'
}

interface BacklinkData {
  source: string
  domainAuthority: number
  linkType: 'dofollow' | 'nofollow'
  traffic: number
}

const SEOTracker = () => {
  const [activeTab, setActiveTab] = useState<'keywords' | 'pages' | 'backlinks' | 'performance'>('keywords')
  const [refreshTime, setRefreshTime] = useState(new Date())

  const keywords: KeywordData[] = [
    { keyword: 'ட்ராக்டர் தரகர் தமிழ்நாடு', rank: 3, change: 2, volume: 2400, difficulty: 45 },
    { keyword: 'பழைய ட்ராக்டர் விற்பனை', rank: 5, change: -1, volume: 1800, difficulty: 38 },
    { keyword: 'ஜான் டியர் ட்ராக்டர் விலை', rank: 2, change: 1, volume: 3200, difficulty: 52 },
    { keyword: 'சுவராஜ் ட்ராக்டர் வாங்க', rank: 4, change: 3, volume: 1600, difficulty: 35 },
    { keyword: 'மக்கார்மிக் ட்ராக்டர்', rank: 7, change: -2, volume: 2100, difficulty: 48 },
    { keyword: 'ட்ராக்டர் மொத்த விற்பனை', rank: 6, change: 0, volume: 900, difficulty: 28 },
    { keyword: 'விவசாய உபகரணங்கள் தமிழ்நாடு', rank: 8, change: 1, volume: 1400, difficulty: 32 },
    { keyword: 'நியூ ஹாலந்து ட்ராக்டர்', rank: 3, change: 4, volume: 1900, difficulty: 41 },
  ]

  const pages: PageData[] = [
    { url: '/', title: 'முகப்பு பக்கம்', seoScore: 95, traffic: 4500, status: 'indexed' },
    { url: '/listings', title: 'ட்ராக்டர் பட்டியல்', seoScore: 88, traffic: 3200, status: 'indexed' },
    { url: '/contact', title: 'தொடர்பு கொள்ளுங்கள்', seoScore: 82, traffic: 800, status: 'indexed' },
    { url: '/about', title: 'எங்களை பற்றி', seoScore: 76, traffic: 450, status: 'crawling' },
  ]

  const backlinks: BacklinkData[] = [
    { source: 'agrimart.in', domainAuthority: 45, linkType: 'dofollow', traffic: 12000 },
    { source: 'kisanconnect.com', domainAuthority: 38, linkType: 'dofollow', traffic: 8500 },
    { source: 'tractornews.in', domainAuthority: 52, linkType: 'dofollow', traffic: 25000 },
    { source: 'farmguide.co.in', domainAuthority: 41, linkType: 'nofollow', traffic: 6800 },
    { source: 'tamilagri.com', domainAuthority: 35, linkType: 'dofollow', traffic: 4200 },
  ]

  const performanceMetrics = {
    pageSpeed: {
      desktop: 87,
      mobile: 82
    },
    coreWebVitals: {
      lcp: 'Good - 2.1s',
      fid: 'Good - 85ms',
      cls: 'Good - 0.04'
    },
    crawlErrors: 2,
    indexedPages: 24,
    sitemapStatus: 'Healthy',
    robotsStatus: 'Valid'
  }

  const getChangeColor = (change: number) => {
    if (change > 0) return 'text-green-600'
    if (change < 0) return 'text-red-600'
    return 'text-gray-500'
  }

  const getChangeIcon = (change: number) => {
    if (change > 0) return '↑'
    if (change < 0) return '↓'
    return '→'
  }

  const getStatusBadge = (status: string) => {
    const styles = {
      'indexed': 'bg-green-100 text-green-800',
      'not-indexed': 'bg-red-100 text-red-800',
      'crawling': 'bg-yellow-100 text-yellow-800'
    }
    return styles[status as keyof typeof styles] || 'bg-gray-100 text-gray-800'
  }

  const getLinkTypeBadge = (type: string) => {
    return type === 'dofollow'
      ? 'bg-blue-100 text-blue-800'
      : 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-6 mb-6"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">எஸ்.இ.ஓ கண்காணிப்பு கருவி</h1>
              <p className="text-gray-600">SEO Tracker Dashboard</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-gray-500">கடைசி புதுப்பிப்பு</p>
                <p className="text-lg font-semibold text-gray-900">
                  {refreshTime.toLocaleString('ta-IN')}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setRefreshTime(new Date())}
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition"
              >
                புதுப்பிக்க
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: 'மொத்த முக்கிய சொற்கள்', value: keywords.length, change: '+3', color: 'blue' },
            { label: 'சராசரி தரவரிசை', value: `#${Math.round(keywords.reduce((a, b) => a + b.rank, 0) / keywords.length)}`, change: '↑ 2', color: 'green' },
            { label: 'மொத்த வருகை', value: '8,950', change: '+12%', color: 'purple' },
            { label: 'பின்னூட்டங்கள்', value: backlinks.length, change: '+2', color: 'orange' },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-lg p-6 border-l-4 border-${card.color}-500`}
            >
              <p className="text-sm text-gray-500 mb-1">{card.label}</p>
              <div className="flex items-end justify-between">
                <p className="text-3xl font-bold text-gray-900">{card.value}</p>
                <span className="text-green-600 font-medium">{card.change}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex overflow-x-auto">
              {[
                { id: 'keywords', label: 'முக்கிய சொற்கள்', icon: '🔍' },
                { id: 'pages', label: 'பக்கங்கள்', icon: '📄' },
                { id: 'backlinks', label: 'பின்னூட்டங்கள்', icon: '🔗' },
                { id: 'performance', label: 'செயல்திறன்', icon: '⚡' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-6 py-4 font-medium whitespace-nowrap transition ${
                    activeTab === tab.id
                      ? 'bg-green-50 text-green-700 border-b-2 border-green-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'keywords' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="overflow-x-auto"
              >
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">முக்கிய சொல்</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-700">தரவரிசை</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-700">மாற்றம்</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-700">தேடல் அளவு</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-700">கடினம்</th>
                    </tr>
                  </thead>
                  <tbody>
                    {keywords.map((keyword, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="border-b border-gray-100 hover:bg-gray-50"
                      >
                        <td className="py-4 px-4 font-medium text-gray-900">{keyword.keyword}</td>
                        <td className="py-4 px-4 text-center">
                          <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full font-bold ${
                            keyword.rank <= 3 ? 'bg-green-100 text-green-700' :
                            keyword.rank <= 7 ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            #{keyword.rank}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <span className={`font-semibold ${getChangeColor(keyword.change)}`}>
                            {getChangeIcon(keyword.change)} {Math.abs(keyword.change)}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-center text-gray-600">{keyword.volume.toLocaleString()}</td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full ${
                                  keyword.difficulty < 40 ? 'bg-green-500' :
                                  keyword.difficulty < 50 ? 'bg-yellow-500' :
                                  'bg-red-500'
                                }`}
                                style={{ width: `${keyword.difficulty}%` }}
                              />
                            </div>
                            <span className="text-sm text-gray-600">{keyword.difficulty}</span>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            )}

            {activeTab === 'pages' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="overflow-x-auto"
              >
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">பக்கம்</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">தலைப்பு</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-700">SEO மதிப்பெண்</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-700">வருகை</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-700">நிலை</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pages.map((page, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="border-b border-gray-100 hover:bg-gray-50"
                      >
                        <td className="py-4 px-4 font-mono text-sm text-blue-600">{page.url}</td>
                        <td className="py-4 px-4 font-medium text-gray-900">{page.title}</td>
                        <td className="py-4 px-4 text-center">
                          <div className="inline-flex items-center gap-2">
                            <div className="w-12 bg-gray-200 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full ${
                                  page.seoScore >= 85 ? 'bg-green-500' :
                                  page.seoScore >= 70 ? 'bg-yellow-500' :
                                  'bg-red-500'
                                }`}
                                style={{ width: `${page.seoScore}%` }}
                              />
                            </div>
                            <span className="font-semibold">{page.seoScore}%</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-center text-gray-600">{page.traffic.toLocaleString()}</td>
                        <td className="py-4 px-4 text-center">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(page.status)}`}>
                            {page.status === 'indexed' ? 'குறியிடப்பட்டது' :
                             page.status === 'not-indexed' ? 'குறியிடப்படவில்லை' :
                             'ஊர்ந்து பார்க்கிறது'}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            )}

            {activeTab === 'backlinks' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="overflow-x-auto"
              >
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">மூலம்</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-700">DA</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-700">வகை</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-700">வருகை</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-700">தரம்</th>
                    </tr>
                  </thead>
                  <tbody>
                    {backlinks.map((link, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="border-b border-gray-100 hover:bg-gray-50"
                      >
                        <td className="py-4 px-4">
                          <a href={`https://${link.source}`} target="_blank" rel="noopener noreferrer"
                             className="text-blue-600 hover:underline font-medium">
                            {link.source}
                          </a>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <span className={`inline-flex items-center justify-center w-12 h-12 rounded-full font-bold text-lg ${
                            link.domainAuthority >= 50 ? 'bg-green-100 text-green-700' :
                            link.domainAuthority >= 40 ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {link.domainAuthority}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLinkTypeBadge(link.linkType)}`}>
                            {link.linkType}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-center text-gray-600">{link.traffic.toLocaleString()}</td>
                        <td className="py-4 px-4 text-center">
                          <div className="flex justify-center">
                            {'⭐'.repeat(Math.ceil(link.domainAuthority / 10))}
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            )}

            {activeTab === 'performance' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Page Speed */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    🚀 பக்க வேகம்
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">டெஸ்க்டாப்</span>
                        <span className="font-bold text-green-600">{performanceMetrics.pageSpeed.desktop}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-green-500 h-3 rounded-full transition-all duration-500"
                          style={{ width: `${performanceMetrics.pageSpeed.desktop}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">மொபைல்</span>
                        <span className="font-bold text-yellow-600">{performanceMetrics.pageSpeed.mobile}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-yellow-500 h-3 rounded-full transition-all duration-500"
                          style={{ width: `${performanceMetrics.pageSpeed.mobile}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Core Web Vitals */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    📊 மைய வலை அளவீடுகள்
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(performanceMetrics.coreWebVitals).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between bg-white rounded-lg p-3">
                        <span className="text-sm font-medium text-gray-600 uppercase">{key}</span>
                        <span className="font-semibold text-green-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Index Status */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    📑 குறியீட்டு நிலை
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 text-center">
                      <p className="text-3xl font-bold text-blue-600">{performanceMetrics.indexedPages}</p>
                      <p className="text-sm text-gray-500">பக்கங்கள் குறியிடப்பட்டன</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <p className="text-3xl font-bold text-red-600">{performanceMetrics.crawlErrors}</p>
                      <p className="text-sm text-gray-500">ஊர்வு பிழைகள்</p>
                    </div>
                  </div>
                </div>

                {/* Technical Status */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    🔧 தொழில்நுட்ப நிலை
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-white rounded-lg p-3">
                      <span className="text-gray-600">Sitemap</span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        ✓ {performanceMetrics.sitemapStatus}
                      </span>
                    </div>
                    <div className="flex items-center justify-between bg-white rounded-lg p-3">
                      <span className="text-gray-600">Robots.txt</span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        ✓ {performanceMetrics.robotsStatus}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Export Button */}
        <motion.div
          className="mt-6 flex justify-end gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
            📊 அறிக்கை ஏற்றுமதி
          </button>
          <button className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition">
            📧 மின்னஞ்சல் அறிக்கை
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default SEOTracker
