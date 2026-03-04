'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { formatRupiah } from '@/lib/utils/currency'
import type { DatabaseInvoice, User } from '@/lib/supabase/types'

export default function InvoicesPage() {
  const [user, setUser] = useState<User | null>(null)
  const [invoices, setInvoices] = useState<DatabaseInvoice[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const supabase = createClient()

  const fetchInvoices = useCallback(async (userId: string) => {
    const { data, error } = await supabase
      .from('invoices')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching invoices:', error)
    } else {
      setInvoices(data || [])
    }
    setLoading(false)
  }, [supabase])

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/login')
        return
      }
      setUser(user as User)
      fetchInvoices(user.id)
    }
    checkUser()
  }, [router, supabase, fetchInvoices])

  const getStatusColor = useCallback((status: string) => {
    switch (status) {
      case 'paid':
        return 'bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800'
      case 'pending':
        return 'bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800'
      case 'overdue':
        return 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800'
      default:
        return 'bg-zinc-100 dark:bg-zinc-900/20 text-zinc-700 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800'
    }
  }, [])

  const getStatusLabel = useCallback((status: string) => {
    switch (status) {
      case 'paid':
        return 'Lunas'
      case 'pending':
        return 'Pending'
      case 'overdue':
        return 'Jatuh Tempo'
      default:
        return status
    }
  }, [])

  const formatDate = useCallback((dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
  }, [])

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
              <span className="text-sm text-zinc-600 dark:text-zinc-400">
                {user?.email}
              </span>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
              Daftar Invoice
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              Kelola semua invoice Anda
            </p>
          </div>
          <Link
            href="/dashboard/invoices/new"
            className="border-3 border-red-200 bg-[#FF6B6B] hover:bg-[#FF5252] hover:border-red-300 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            + Buat Invoice Baru
          </Link>
        </div>

        {/* Invoice List or Empty State */}
        {invoices.length === 0 ? (
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-12 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                Belum Ada Invoice
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                Buat invoice pertama Anda untuk memulai
              </p>
              <Link
                href="/dashboard/invoices/new"
                className="inline-block border-3 border-red-200 bg-[#FF6B6B] hover:bg-[#FF5252] hover:border-red-300 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Buat Invoice Sekarang
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-zinc-50 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700 text-sm font-medium text-zinc-600 dark:text-zinc-400">
              <div className="col-span-2">Nomor Invoice</div>
              <div className="col-span-3">Nama Klien</div>
              <div className="col-span-2 text-right">Total</div>
              <div className="col-span-2 text-center">Status</div>
              <div className="col-span-2 text-right">Tanggal</div>
              <div className="col-span-1"></div>
            </div>

            {/* Table Rows */}
            {invoices.map((invoice) => (
              <div
                key={invoice.id}
                className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-zinc-200 dark:border-zinc-700 items-center hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors duration-300"
              >
                <div className="col-span-2">
                  <span className="font-medium text-zinc-900 dark:text-zinc-50">
                    {invoice.invoice_number}
                  </span>
                </div>
                <div className="col-span-3">
                  <span className="text-zinc-700 dark:text-zinc-300">
                    {invoice.client_name}
                  </span>
                </div>
                <div className="col-span-2 text-right">
                  <span className="font-medium text-zinc-900 dark:text-zinc-50">
                    {formatRupiah(invoice.total)}
                  </span>
                </div>
                <div className="col-span-2 text-center">
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(invoice.status)}`}>
                    {getStatusLabel(invoice.status)}
                  </span>
                </div>
                <div className="col-span-2 text-right">
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">
                    {formatDate(invoice.created_at)}
                  </span>
                </div>
                <div className="col-span-1 flex justify-end gap-2">
                  <button
                    className="text-zinc-400 hover:text-[#FF6B6B] dark:hover:text-[#FF8A8A] transition-colors"
                    title="Lihat detail"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
