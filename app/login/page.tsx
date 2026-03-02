'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const supabase = createClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      setSent(true)
      setLoading(false)
    }
  }

  if (sent) {
    return (
      <div className="min-h-screen bg-red-50 dark:bg-zinc-950 flex items-center justify-center px-4 transition-colors duration-300">
        <div className="max-w-md w-full">
          <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-8 text-center shadow-lg transition-colors duration-300">
            <div className="w-16 h-16 bg-[#FFF0F0] dark:bg-[#3D1010]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#FF6B6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="font-display text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-3 tracking-tight transition-colors duration-300">
              Cek Email Kamu
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 transition-colors duration-300">
              Kami telah mengirimkan link login ke <span className="font-semibold text-zinc-900 dark:text-zinc-50">{email}</span>.<br />
              Klik link tersebut untuk masuk ke akun kamu.
            </p>
            <div className="text-xs text-zinc-500 dark:text-zinc-500 mb-6 transition-colors duration-300">
              Tidak menerima email? Cek folder spam atau coba lagi.
            </div>
            <button
              onClick={() => setSent(false)}
              className="text-sm text-[#FF6B6B] dark:text-[#FF8A8A] hover:underline font-medium transition-colors"
            >
              &larr; Kembali
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-red-50 dark:bg-zinc-950 flex items-center justify-center px-4 transition-colors duration-300">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2 transition-colors duration-300">
            InvoiceFast
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 transition-colors duration-300">
            Login untuk mengelola invoice kamu
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-8 shadow-lg transition-colors duration-300">
          <h2 className="font-display text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2 tracking-tight transition-colors duration-300">
            Masuk dengan Email
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 transition-colors duration-300">
            Kami akan mengirimkan link login ke email kamu
          </p>

          {error && (
            <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2 transition-colors duration-300">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="nama@email.com"
                disabled={loading}
                className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full border-3 border-red-200 bg-[#FF6B6B] hover:bg-[#FF5252] hover:border-red-300 text-white py-3 rounded-lg font-semibold text-base transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Mengirim...' : 'Kirim Link Login'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <a
              href="/"
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-[#FF6B6B] dark:hover:text-[#FF8A8A] transition-colors"
            >
              &larr; Kembali ke Beranda
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-xs text-zinc-500 dark:text-zinc-500 mt-6 transition-colors duration-300">
          Belum punya akun? Kamu akan otomatis dibuatkan saat pertama kali login.
        </p>
      </div>
    </div>
  )
}
