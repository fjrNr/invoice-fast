import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-red-50 dark:bg-zinc-950 transition-colors duration-300">
      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800 bg-red-50/80 dark:bg-zinc-950/80 backdrop-blur-xl transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-36">
          <div className="flex h-16 items-center justify-between">
            <a href="/" className="text-xl font-bold tracking-tight">
              <span className="text-zinc-900 dark:text-zinc-50">
                InvoiceFast
              </span>
            </a>
            <div className="flex items-center gap-4">
              <a href="/dashboard/invoices" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 font-medium transition-colors duration-300">
                Daftar Invoice
              </a>
              <span className="text-sm text-zinc-300 dark:text-zinc-700">|</span>
              <span className="text-sm text-zinc-600 dark:text-zinc-400 transition-colors duration-300">
                {user.email}
              </span>
              <form action="/auth/signout" method="post">
                <button
                  type="submit"
                  className="border-3 border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300"
                >
                  Keluar
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-36 py-12">
        <div className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2 tracking-tight transition-colors duration-300">
            Dashboard
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 transition-colors duration-300">
            Selamat datang! Ini dashboard InvoiceFast kamu.
          </p>
        </div>

        {/* Placeholder Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl transition-colors duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
                Total Invoice
              </h3>
              <div className="w-10 h-10 bg-[#FFF0F0] dark:bg-[#3D1010]/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-[#FF6B6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <p className="font-display text-3xl font-bold text-zinc-900 dark:text-zinc-50 transition-colors duration-300">0</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 transition-colors duration-300">Invoice dibuat</p>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl transition-colors duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
                Pending
              </h3>
              <div className="w-10 h-10 bg-amber-50 dark:bg-amber-900/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <p className="font-display text-3xl font-bold text-zinc-900 dark:text-zinc-50 transition-colors duration-300">0</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 transition-colors duration-300">Menunggu pembayaran</p>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl transition-colors duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
                Lunas
              </h3>
              <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <p className="font-display text-3xl font-bold text-zinc-900 dark:text-zinc-50 transition-colors duration-300">0</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 transition-colors duration-300">Sudah dibayar</p>
          </div>
        </div>

        {/* Empty State */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-12 text-center transition-colors duration-300">
          <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-zinc-400 dark:text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2 transition-colors duration-300">
            Belum Ada Invoice
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 transition-colors duration-300">
            Mulai buat invoice pertama kamu sekarang
          </p>
          <a href="/dashboard/invoices/new" className="border-3 border-red-200 bg-[#FF6B6B] hover:bg-[#FF5252] hover:border-red-300 text-white px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 inline-block">
            Buat Invoice
          </a>
        </div>
      </main>
    </div>
  )
}
