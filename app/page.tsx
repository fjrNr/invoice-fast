export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#050507] transition-colors duration-300">
      {/* Header / Navbar */}
      <header className="border-b border-gray-200 dark:border-[#18181b] bg-white/80 dark:bg-[#050507]/80 backdrop-blur-xl sticky top-0 z-50 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="text-2xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 dark:from-cyan-400 dark:via-teal-400 dark:to-emerald-400 bg-clip-text text-transparent">
                InvoiceFast
              </span>
            </div>
            <nav className="hidden gap-8 md:flex">
              <a href="#fitur" className="text-gray-600 dark:text-zinc-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors text-sm font-medium tracking-wide">
                Fitur
              </a>
              <a href="#harga" className="text-gray-600 dark:text-zinc-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors text-sm font-medium tracking-wide">
                Harga
              </a>
            </nav>
            <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 shadow-lg dark:shadow-cyan-900/20">
              Mulai Gratis
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-white dark:bg-[#050507] transition-colors duration-300">
        {/* Editorial grid background - only in dark mode */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 dark:opacity-20 opacity-0 pointer-events-none transition-opacity duration-300"></div>
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none transition-colors duration-300"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/5 dark:bg-teal-500/10 rounded-full blur-3xl pointer-events-none transition-colors duration-300"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-[#18181b] bg-gray-50 dark:bg-[#0a0a0f] text-gray-600 dark:text-zinc-400 text-xs font-medium mb-8 transition-colors duration-300">
                <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full animate-pulse"></span>
                Platform Invoice #1 di Indonesia
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-display tracking-tight leading-[1.1] transition-colors duration-300">
                Buat Invoice dalam <span className="bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 dark:from-cyan-400 dark:via-teal-400 dark:to-emerald-400 bg-clip-text text-transparent">30 Detik</span>
              </h1>
              <p className="text-base md:text-lg text-gray-600 dark:text-zinc-400 mb-8 max-w-xl leading-relaxed font-light transition-colors duration-300">
                Platform invoice tercepat untuk bisnis Anda. Buat invoice profesional, bagikan dengan klien, dan lacak pembayaran dalam satu tempat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold text-base hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 shadow-xl dark:shadow-cyan-900/20 hover:dark:shadow-cyan-900/40 hover:-translate-y-0.5">
                  Buat Invoice Sekarang
                </button>
                <button className="border border-gray-300 dark:border-[#27272a] text-gray-700 dark:text-zinc-300 px-8 py-4 rounded-lg font-semibold text-base hover:bg-gray-50 dark:hover:bg-[#0a0a0f] hover:border-gray-400 dark:hover:border-[#3f3f46] transition-all duration-300">
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </div>

            {/* Right Column - Invoice Preview */}
            <div className="relative">
              <div className="relative bg-white dark:bg-white rounded-lg shadow-2xl dark:shadow-cyan-900/20 overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                {/* Invoice Header */}
                <div className="bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-white font-bold text-lg font-display">INVOICE</h3>
                      <p className="text-cyan-100 text-sm">#INV-2025-001</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-semibold text-sm">InvoiceFast</p>
                      <p className="text-cyan-100 text-xs">Jakarta, Indonesia</p>
                    </div>
                  </div>
                </div>

                {/* Invoice Body */}
                <div className="p-6 bg-gray-50">
                  {/* Bill To */}
                  <div className="mb-4">
                    <p className="text-gray-500 text-xs mb-1">Kepada:</p>
                    <p className="text-gray-900 font-semibold text-sm">PT. Maju Bersama</p>
                    <p className="text-gray-600 text-xs">Jl. Sudirman No. 123</p>
                  </div>

                  {/* Table */}
                  <div className="border-t border-b border-gray-200 py-3 mb-4">
                    <div className="grid grid-cols-12 gap-2 text-xs text-gray-500 mb-2">
                      <div className="col-span-6">Item</div>
                      <div className="col-span-2 text-center">Qty</div>
                      <div className="col-span-4 text-right">Harga</div>
                    </div>
                    <div className="grid grid-cols-12 gap-2 text-xs text-gray-900 mb-2">
                      <div className="col-span-6">Jasa Web Development</div>
                      <div className="col-span-2 text-center">1</div>
                      <div className="col-span-4 text-right">Rp 15.000.000</div>
                    </div>
                    <div className="grid grid-cols-12 gap-2 text-xs text-gray-900 mb-2">
                      <div className="col-span-6">Hosting & Domain (1 Tahun)</div>
                      <div className="col-span-2 text-center">1</div>
                      <div className="col-span-4 text-right">Rp 1.500.000</div>
                    </div>
                    <div className="grid grid-cols-12 gap-2 text-xs text-gray-900">
                      <div className="col-span-6">Maintenance Bulanan</div>
                      <div className="col-span-2 text-center">3</div>
                      <div className="col-span-4 text-right">Rp 3.000.000</div>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-500 text-xs">Tanggal: 25 Feb 2025</p>
                      <p className="text-gray-500 text-xs">Jatuh Tempo: 27 Mar 2025</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-500 text-xs">Total</p>
                      <p className="text-gray-900 font-bold text-lg">Rp 19.500.000</p>
                    </div>
                  </div>
                </div>

                {/* Invoice Footer */}
                <div className="bg-gray-100 px-6 py-3 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600 text-xs font-medium">Status: Lunas</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-teal-400 rounded flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-teal-400 rounded flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-500/10 dark:from-cyan-500/20 to-teal-500/10 dark:to-teal-500/20 rounded-full blur-2xl -z-10 transition-colors duration-300"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-cyan-500/5 dark:from-cyan-500/10 to-teal-500/5 dark:to-teal-500/10 rounded-full blur-2xl -z-10 transition-colors duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="fitur" className="py-24 bg-gray-50 dark:bg-[#050507] transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-display tracking-tight transition-colors duration-300">
              Fitur Unggulan
            </h2>
            <p className="text-lg text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto font-light transition-colors duration-300">
              Semua yang Anda butuhkan untuk mengelola invoice dengan efisien
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="group relative bg-white dark:bg-[#0a0a0f] border border-gray-200 dark:border-[#18181b] p-8 rounded-xl hover:border-cyan-500/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-500/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 tracking-tight transition-colors duration-300">
                  Buat Invoice Cepat
                </h3>
                <p className="text-gray-600 dark:text-zinc-400 leading-relaxed text-sm font-light transition-colors duration-300">
                  Buat invoice profesional dalam hitungan detik dengan template yang siap pakai. Tidak perlu keahlian desain.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative bg-white dark:bg-[#0a0a0f] border border-gray-200 dark:border-[#18181b] p-8 rounded-xl hover:border-cyan-500/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-500/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 tracking-tight transition-colors duration-300">
                  Share Link
                </h3>
                <p className="text-gray-600 dark:text-zinc-400 leading-relaxed text-sm font-light transition-colors duration-300">
                  Bagikan invoice ke klien hanya dengan satu link. Tidak perlu lampirkan file PDF lagi.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative bg-white dark:bg-[#0a0a0f] border border-gray-200 dark:border-[#18181b] p-8 rounded-xl hover:border-cyan-500/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-500/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 tracking-tight transition-colors duration-300">
                  Track Status
                </h3>
                <p className="text-gray-600 dark:text-zinc-400 leading-relaxed text-sm font-light transition-colors duration-300">
                  Pantau status pembayaran invoice secara real-time. Tahu kapan invoice sudah dibayar atau jatuh tempo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="harga" className="py-24 bg-gray-50 dark:bg-[#050507] transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-display tracking-tight transition-colors duration-300">
              Pilih Paket Anda
            </h2>
            <p className="text-lg text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto font-light transition-colors duration-300">
              Mulai gratis, upgrade kapan saja
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white dark:bg-[#0a0a0f] border border-gray-200 dark:border-[#18181b] p-8 rounded-xl hover:border-gray-300 dark:hover:border-[#27272a] transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 tracking-tight transition-colors duration-300">
                Gratis
              </h3>
              <p className="text-gray-500 dark:text-zinc-500 mb-8 text-sm font-light transition-colors duration-300">
                Untuk bisnis yang baru mulai
              </p>
              <div className="mb-8">
                <span className="text-5xl font-bold text-gray-900 dark:text-white tracking-tight transition-colors duration-300">Rp 0</span>
                <span className="text-gray-500 dark:text-zinc-500 text-sm transition-colors duration-300">/bulan</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-600 dark:text-zinc-400 text-sm transition-colors duration-300">
                  <svg className="w-4 h-4 text-cyan-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  10 invoice per bulan
                </li>
                <li className="flex items-center text-gray-600 dark:text-zinc-400 text-sm transition-colors duration-300">
                  <svg className="w-4 h-4 text-cyan-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Template dasar
                </li>
                <li className="flex items-center text-gray-600 dark:text-zinc-400 text-sm transition-colors duration-300">
                  <svg className="w-4 h-4 text-cyan-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Share link invoice
                </li>
              </ul>
              <button className="w-full border border-gray-300 dark:border-[#27272a] text-gray-700 dark:text-zinc-300 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-[#0a0a0f] hover:border-gray-400 dark:hover:border-[#3f3f46] transition-all duration-300 text-sm">
                Mulai Gratis
              </button>
            </div>

            {/* Pro Plan */}
            <div className="relative bg-white dark:bg-[#0a0a0f] border-2 border-cyan-500/50 p-8 rounded-xl hover:border-cyan-400 transition-all duration-300 shadow-lg dark:shadow-xl dark:shadow-cyan-900/10">
              <div className="absolute top-6 right-6">
                <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 tracking-wider uppercase transition-colors duration-300">Populer</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 rounded-xl pointer-events-none"></div>
              <div className="relative">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 tracking-tight transition-colors duration-300">
                  Pro
                </h3>
                <p className="text-gray-500 dark:text-zinc-500 mb-8 text-sm font-light transition-colors duration-300">
                  Untuk bisnis yang berkembang
                </p>
                <div className="mb-8">
                  <span className="text-5xl font-bold text-gray-900 dark:text-white tracking-tight transition-colors duration-300">Rp 99.000</span>
                  <span className="text-gray-500 dark:text-zinc-500 text-sm transition-colors duration-300">/bulan</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-700 dark:text-zinc-300 text-sm transition-colors duration-300">
                    <svg className="w-4 h-4 text-cyan-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Invoice unlimited
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-zinc-300 text-sm transition-colors duration-300">
                    <svg className="w-4 h-4 text-cyan-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Template premium
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-zinc-300 text-sm transition-colors duration-300">
                    <svg className="w-4 h-4 text-cyan-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Track status pembayaran
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-zinc-300 text-sm transition-colors duration-300">
                    <svg className="w-4 h-4 text-cyan-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Logo dan branding custom
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-zinc-300 text-sm transition-colors duration-300">
                    <svg className="w-4 h-4 text-cyan-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Support prioritas
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 shadow-lg dark:shadow-cyan-900/20 text-sm">
                  Pilih Pro
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50 dark:bg-[#050507] relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-3xl transition-colors duration-300"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/5 dark:bg-teal-500/5 rounded-full blur-3xl transition-colors duration-300"></div>
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-display tracking-tight transition-colors duration-300">
            Siap Membuat Invoice Pertama Anda?
          </h2>
          <p className="text-lg text-gray-600 dark:text-zinc-400 mb-12 font-light transition-colors duration-300">
            Bergabung dengan ribuan bisnis yang sudah menggunakan InvoiceFast
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-10 py-4 rounded-lg font-semibold text-base hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 shadow-xl dark:shadow-cyan-900/20 hover:dark:shadow-cyan-900/40 hover:-translate-y-0.5">
            Mulai Gratis Sekarang
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-[#050507] text-gray-900 dark:text-white py-16 border-t border-gray-200 dark:border-[#18181b] transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-lg font-semibold tracking-tight mb-4">
                <span className="bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 dark:from-cyan-400 dark:via-teal-400 dark:to-emerald-400 bg-clip-text text-transparent">
                  InvoiceFast
                </span>
              </h3>
              <p className="text-gray-600 dark:text-zinc-500 text-sm leading-relaxed font-light transition-colors duration-300">
                Platform invoice tercepat untuk bisnis Anda.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900 dark:text-white text-sm tracking-wide transition-colors duration-300">Produk</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 dark:text-zinc-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors text-sm font-light">Fitur</a></li>
                <li><a href="#" className="text-gray-600 dark:text-zinc-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors text-sm font-light">Harga</a></li>
                <li><a href="#" className="text-gray-600 dark:text-zinc-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors text-sm font-light">Integrasi</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900 dark:text-white text-sm tracking-wide transition-colors duration-300">Perusahaan</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 dark:text-zinc-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors text-sm font-light">Tentang</a></li>
                <li><a href="#" className="text-gray-600 dark:text-zinc-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors text-sm font-light">Blog</a></li>
                <li><a href="#" className="text-gray-600 dark:text-zinc-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors text-sm font-light">Karir</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900 dark:text-white text-sm tracking-wide transition-colors duration-300">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 dark:text-zinc-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors text-sm font-light">Bantuan</a></li>
                <li><a href="#" className="text-gray-600 dark:text-zinc-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors text-sm font-light">Kontak</a></li>
                <li><a href="#" className="text-gray-600 dark:text-zinc-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors text-sm font-light">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-[#18181b] mt-12 pt-8 text-center transition-colors duration-300">
            <p className="text-gray-500 dark:text-zinc-600 text-sm font-light transition-colors duration-300">&copy; 2025 InvoiceFast. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
