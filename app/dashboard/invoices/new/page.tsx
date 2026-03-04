'use client'

import { createClient } from '@/lib/supabase/client'
import InvoiceForm from '@/components/invoice/InvoiceForm'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { generateInvoiceNumber } from '@/lib/utils/invoiceNumber'
import type { User } from '@/lib/supabase/types'

export default function NewInvoicePage() {
  const [user, setUser] = useState<User | null>(null)
  const [invoiceNumber, setInvoiceNumber] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/login')
        return
      }
      setUser(user as User)

      // Generate invoice number
      const number = await generateInvoiceNumber(user.id)
      setInvoiceNumber(number)
      setLoading(false)
    }
    checkUser()
  }, [router, supabase])

  if (loading) {
    return (
      <div className="min-h-screen bg-red-50 dark:bg-zinc-950 flex items-center justify-center">
        <div className="text-zinc-600 dark:text-zinc-400">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-red-50 dark:bg-zinc-950">
      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800 bg-red-50/80 dark:bg-zinc-950/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/dashboard" className="flex items-center">
              <span className="font-display text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                InvoiceFast
              </span>
            </Link>

            {/* Nav */}
            <nav className="flex items-center gap-4">
              <Link
                href="/dashboard/invoices"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 font-medium transition-colors duration-300"
              >
                Daftar Invoice
              </Link>
              <span className="text-zinc-300 dark:text-zinc-700">|</span>
              <span className="text-sm text-zinc-600 dark:text-zinc-400">
                {user?.email}
              </span>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
            Buat Invoice Baru
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Isi detail invoice di bawah ini
          </p>
        </div>

        <InvoiceForm userId={user?.id || ''} invoiceNumber={invoiceNumber} />
      </main>
    </div>
  )
}
