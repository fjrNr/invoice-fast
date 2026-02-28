export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
      {/* Header / Navbar */}
      <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl sticky top-0 z-50 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-36">
          <div className="flex h-16 items-center justify-between">
            <div className="text-xl font-bold tracking-tight">
              <span className="text-zinc-900 dark:text-zinc-50">
                InvoiceFast
              </span>
            </div>
            <nav className="hidden gap-8 md:flex">
              <a href="#fitur" className="text-zinc-600 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors text-sm font-medium">
                Fitur
              </a>
              <a href="#testimoni" className="text-zinc-600 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors text-sm font-medium">
                Testimoni
              </a>
              <a href="#harga" className="text-zinc-600 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors text-sm font-medium">
                Harga
              </a>
            </nav>
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300">
              Mulai Gratis
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-36">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 text-xs font-medium mb-6 transition-colors duration-300">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></span>
                Platform Invoice #1 di Indonesia
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 tracking-tight leading-[1.1] transition-colors duration-300">
                Bikin Invoice dalam <span className="text-indigo-500 dark:text-indigo-400">30 Detik</span>
              </h1>
              <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-xl leading-relaxed transition-colors duration-300">
                Platform invoice tercepat untuk bisnis Anda. Buat invoice profesional, bagikan dengan klien, dan lacak pembayaran dalam satu tempat.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3.5 rounded-lg font-semibold text-base transition-all duration-300">
                  Mulai Gratis Sekarang
                </button>
                <button className="border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300">
                  Lihat Demo
                </button>
              </div>
            </div>

            {/* Right Column - Invoice Preview */}
            <div className="relative">
              <div className="relative bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-xl transition-all duration-300">
                {/* Invoice Header */}
                <div className="bg-zinc-50 dark:bg-zinc-800/50 px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-zinc-900 dark:text-zinc-50 font-bold text-lg">INVOICE</h3>
                      <p className="text-zinc-500 dark:text-zinc-400 text-sm font-mono">#INV-2025-001</p>
                    </div>
                    <div className="text-right">
                      <p className="text-zinc-900 dark:text-zinc-50 font-semibold text-sm">InvoiceFast</p>
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs">Jakarta, Indonesia</p>
                    </div>
                  </div>
                </div>

                {/* Invoice Body */}
                <div className="p-6">
                  {/* Bill To */}
                  <div className="mb-5">
                    <p className="text-zinc-500 dark:text-zinc-400 text-xs mb-1">Kepada:</p>
                    <p className="text-zinc-900 dark:text-zinc-50 font-semibold text-sm">PT. Maju Bersama</p>
                    <p className="text-zinc-500 dark:text-zinc-400 text-xs">Jl. Sudirman No. 123</p>
                  </div>

                  {/* Table */}
                  <div className="border-t border-b border-zinc-200 dark:border-zinc-800 py-3 mb-5">
                    <div className="grid grid-cols-12 gap-2 text-xs text-zinc-500 dark:text-zinc-400 mb-3">
                      <div className="col-span-6">Item</div>
                      <div className="col-span-2 text-center">Qty</div>
                      <div className="col-span-4 text-right">Harga</div>
                    </div>
                    <div className="grid grid-cols-12 gap-2 text-xs text-zinc-900 dark:text-zinc-50 mb-2">
                      <div className="col-span-6">Jasa Web Development</div>
                      <div className="col-span-2 text-center text-zinc-500 dark:text-zinc-400">1</div>
                      <div className="col-span-4 text-right font-medium">Rp 15.000.000</div>
                    </div>
                    <div className="grid grid-cols-12 gap-2 text-xs text-zinc-900 dark:text-zinc-50 mb-2">
                      <div className="col-span-6">Hosting & Domain (1 Tahun)</div>
                      <div className="col-span-2 text-center text-zinc-500 dark:text-zinc-400">1</div>
                      <div className="col-span-4 text-right font-medium">Rp 1.500.000</div>
                    </div>
                    <div className="grid grid-cols-12 gap-2 text-xs text-zinc-900 dark:text-zinc-50">
                      <div className="col-span-6">Maintenance Bulanan</div>
                      <div className="col-span-2 text-center text-zinc-500 dark:text-zinc-400">3</div>
                      <div className="col-span-4 text-right font-medium">Rp 3.000.000</div>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs">Tanggal: 25 Feb 2025</p>
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs">Jatuh Tempo: 27 Mar 2025</p>
                    </div>
                    <div className="text-right">
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs">Total</p>
                      <p className="text-zinc-900 dark:text-zinc-50 font-bold text-lg">Rp 19.500.000</p>
                    </div>
                  </div>
                </div>

                {/* Invoice Footer */}
                <div className="bg-zinc-50 dark:bg-zinc-800/50 px-6 py-3 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-zinc-600 dark:text-zinc-400 text-xs font-medium">Status: Lunas</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 rounded flex items-center justify-center transition-colors duration-300">
                      <svg className="w-4 h-4 text-zinc-600 dark:text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </button>
                    <button className="w-8 h-8 bg-indigo-500 hover:bg-indigo-600 rounded flex items-center justify-center transition-colors duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="fitur" className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-36">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 tracking-tight transition-colors duration-300">
              Fitur Unggulan
            </h2>
            <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto transition-colors duration-300">
              Semua yang Anda butuhkan untuk mengelola invoice dengan efisien
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-xl hover:border-indigo-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/20 transition-colors duration-300">
                <svg className="w-6 h-6 text-zinc-700 dark:text-zinc-300 group-hover:text-indigo-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2 tracking-tight transition-colors duration-300">
                Bikin Invoice Cepat
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed transition-colors duration-300">
                Buat invoice profesional dalam hitungan detik dengan template yang siap pakai. Tidak perlu keahlian desain.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-xl hover:border-indigo-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/20 transition-colors duration-300">
                <svg className="w-6 h-6 text-zinc-700 dark:text-zinc-300 group-hover:text-indigo-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2 tracking-tight transition-colors duration-300">
                Share Link
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed transition-colors duration-300">
                Bagikan invoice ke klien hanya dengan satu link. Tidak perlu lampirkan file PDF lagi.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-xl hover:border-indigo-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/20 transition-colors duration-300">
                <svg className="w-6 h-6 text-zinc-700 dark:text-zinc-300 group-hover:text-indigo-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2 tracking-tight transition-colors duration-300">
                Track Status
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed transition-colors duration-300">
                Pantau status pembayaran invoice secara real-time. Tahu kapan invoice sudah dibayar atau jatuh tempo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="testimoni" className="py-16 md:py-24 bg-white dark:bg-zinc-950 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-36">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 tracking-tight transition-colors duration-300">
              Testimoni
            </h2>
            <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto transition-colors duration-300">
              Dipercaya para freelancer Indonesia
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl transition-colors duration-300">
              <p className="font-display text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight transition-colors duration-300">10,000+</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 transition-colors duration-300">Bisnis</p>
            </div>
            <div className="text-center bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl transition-colors duration-300">
              <p className="font-display text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight transition-colors duration-300">50M+</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 transition-colors duration-300">Invoice dibuat</p>
            </div>
            <div className="text-center bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl transition-colors duration-300">
              <p className="font-display text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight transition-colors duration-300">4.9/5</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 transition-colors duration-300">Rating</p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="flex flex-col bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl transition-colors duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="flex-grow text-sm text-zinc-700 dark:text-zinc-300 mb-4 leading-relaxed transition-colors duration-300">
                "InvoiceFast sangat membantu bisnis saya. Sekarang saya bisa membuat invoice dalam hitungan detik dan tracking pembayaran jadi lebih mudah."
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                  AR
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 transition-colors duration-300">Andi Rahman</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 transition-colors duration-300">CEO, PT Digital Kreatif</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl transition-colors duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="flex-grow text-sm text-zinc-700 dark:text-zinc-300 mb-4 leading-relaxed transition-colors duration-300">
                "Fitur share link sangat berguna. Klien saya bisa langsung lihat invoice dan bayar tanpa perlu download PDF."
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                  SW
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 transition-colors duration-300">Siti Wulandari</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 transition-colors duration-300">Freelance Designer</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="flex flex-col bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl transition-colors duration-300 md:hidden lg:block">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="flex-grow text-sm text-zinc-700 dark:text-zinc-300 mb-4 leading-relaxed transition-colors duration-300">
                "UI yang bersih dan mudah digunakan. Sangat recommended untuk UMKM yang ingin professional dalam pembuatan invoice."
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                  BP
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 transition-colors duration-300">Budi Pratama</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 transition-colors duration-300">Owner, Warung Kopi Senja</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="harga" className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-36">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 tracking-tight transition-colors duration-300">
              Pilih Paket Anda
            </h2>
            <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto transition-colors duration-300">
              Mulai gratis, upgrade kapan saja
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300">
              <h3 className="font-display text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2 tracking-tight transition-colors duration-300">
                Gratis
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 mb-6 text-sm transition-colors duration-300">
                Untuk bisnis yang baru mulai
              </p>
              <div className="mb-8">
                <span className="font-display text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight transition-colors duration-300">Rp 0</span>
                <span className="text-zinc-500 dark:text-zinc-400 text-sm transition-colors duration-300">/bulan</span>
              </div>
              <ul className="flex-grow space-y-3 mb-8">
                <li className="flex items-center text-sm text-zinc-600 dark:text-zinc-400 transition-colors duration-300">
                  <svg className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  10 invoice per bulan
                </li>
                <li className="flex items-center text-sm text-zinc-600 dark:text-zinc-400 transition-colors duration-300">
                  <svg className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Template dasar
                </li>
                <li className="flex items-center text-sm text-zinc-600 dark:text-zinc-400 transition-colors duration-300">
                  <svg className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Share link invoice
                </li>
              </ul>
              <button className="w-full border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 py-3 rounded-lg font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300 text-sm">
                Mulai Gratis
              </button>
            </div>

            {/* Pro Plan */}
            <div className="relative flex flex-col bg-white dark:bg-zinc-900 border-2 border-indigo-500 p-8 rounded-xl hover:border-indigo-400 transition-all duration-300 shadow-lg">
              <div className="absolute top-6 right-6">
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase transition-colors duration-300">Populer</span>
              </div>
              <div className="absolute inset-0 bg-indigo-50/50 dark:bg-indigo-950/20 rounded-xl pointer-events-none"></div>
              <div className="relative flex flex-col flex-grow">
                <h3 className="font-display text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2 tracking-tight transition-colors duration-300">
                  Pro
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 mb-6 text-sm transition-colors duration-300">
                  Untuk bisnis yang berkembang
                </p>
                <div className="mb-8">
                  <span className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight transition-colors duration-300">Rp 99.000</span>
                  <span className="text-zinc-500 dark:text-zinc-400 text-sm transition-colors duration-300">/bulan</span>
                </div>
                <ul className="flex-grow space-y-3 mb-8">
                  <li className="flex items-center text-sm text-zinc-700 dark:text-zinc-300 transition-colors duration-300">
                    <svg className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Invoice unlimited
                  </li>
                  <li className="flex items-center text-sm text-zinc-700 dark:text-zinc-300 transition-colors duration-300">
                    <svg className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Template premium
                  </li>
                  <li className="flex items-center text-sm text-zinc-700 dark:text-zinc-300 transition-colors duration-300">
                    <svg className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Track status pembayaran
                  </li>
                  <li className="flex items-center text-sm text-zinc-700 dark:text-zinc-300 transition-colors duration-300">
                    <svg className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Logo dan branding custom
                  </li>
                  <li className="flex items-center text-sm text-zinc-700 dark:text-zinc-300 transition-colors duration-300">
                    <svg className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Support prioritas
                  </li>
                </ul>
                <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 text-sm">
                  Coba 14 Hari Gratis
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-zinc-950 relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-18 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 tracking-tight transition-colors duration-300">
            Siap Membuat Invoice Pertama Anda?
          </h2>
          <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 mb-10 transition-colors duration-300">
            Bergabung dengan 10,000+ bisnis yang sudah menggunakan InvoiceFast
          </p>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-10 py-4 rounded-lg font-semibold text-base transition-all duration-300">
            Mulai Gratis Sekarang
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-36">
          <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xl font-bold tracking-tight">
              <span className="text-zinc-900 dark:text-zinc-50">
                InvoiceFast
              </span>
            </div>
            <div className="flex items-center gap-6 md:gap-8">
              <a href="#" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                Bantuan
              </a>
              <a href="#" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                Kontak
              </a>
              <a href="#" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                Privasi
              </a>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
                &copy; 2025 InvoiceFast
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
