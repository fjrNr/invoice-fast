'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import InvoiceItems from './InvoiceItems'
import { formatRupiah } from '@/lib/utils/currency'
import { validateInvoiceForm } from '@/lib/utils/validation'
import type { InvoiceItem } from '@/lib/supabase/types'

interface InvoiceFormProps {
  userId: string
  invoiceNumber: string
}

export default function InvoiceForm({ userId, invoiceNumber }: InvoiceFormProps) {
  const router = useRouter()
  const supabase = createClient()

  // Form state
  const [clientName, setClientName] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const [notes, setNotes] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [items, setItems] = useState<InvoiceItem[]>([
    { id: '1', name: '', quantity: 1, unitPrice: 0 }
  ])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Validation
    const validation = validateInvoiceForm({
      clientName,
      clientEmail,
      items,
    })

    if (!validation.valid) {
      setError(validation.errors.join('. '))
      return
    }

    setLoading(true)

    try {
      // Insert items (only valid items with names)
      const validItems = items.filter(item => item.name.trim())
      const itemsToInsert = validItems.map(item => ({
        item_name: item.name,
        quantity: item.quantity,
        unit_price: item.unitPrice,
      }))

      let grandTotal: number = 0
      for (const item of itemsToInsert ) {
        const total = item.quantity * item.unit_price; 
        grandTotal += total;
      }

      // Insert invoice
      const { data: invoice, error: invoiceError } = await supabase
        .from('invoices')
        .insert({
          invoice_number: invoiceNumber,
          user_id: userId,
          client_name: clientName,
          client_email: clientEmail || null,
          items: itemsToInsert,
          total: grandTotal,
          notes: notes || null,
          due_date: dueDate || null,
        })
        .select()
        .single()

      if (invoiceError) throw invoiceError

      // Redirect to invoice list on success
      router.push('/dashboard/invoices')
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Gagal menyimpan invoice. Silakan coba lagi.'
      setError(message)
      setLoading(false)
    }
  }

  const total = items.reduce((sum, item) =>
    sum + (item.quantity * item.unitPrice), 0
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Error display */}
      {error && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
        </div>
      )}

      {/* Invoice Number Display */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-display text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
              Nomor Invoice
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Nomor unik untuk invoice ini
            </p>
          </div>
          <div className="text-right">
            <div className="font-display text-3xl font-bold text-[#FF6B6B]">
              {invoiceNumber}
            </div>
          </div>
        </div>
      </div>

      {/* Client Information Section */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
        <h2 className="font-display text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
          Informasi Klien
        </h2>
        <div className="space-y-4">
          {/* Client Name */}
          <div>
            <label htmlFor="clientName" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              Nama Klien <span className="text-[#FF6B6B]">*</span>
            </label>
            <input
              id="clientName"
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="PT Contoh Indonesia"
              className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition-colors duration-300"
            />
          </div>

          {/* Client Email */}
          <div>
            <label htmlFor="clientEmail" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              Email Klien
            </label>
            <input
              id="clientEmail"
              type="email"
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
              placeholder="client@contoh.com"
              className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition-colors duration-300"
            />
          </div>

          {/* Due Date */}
          <div>
            <label htmlFor="dueDate" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              Tanggal Jatuh Tempo
            </label>
            <input
              id="dueDate"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition-colors duration-300"
            />
          </div>
        </div>
      </div>

      {/* Items Section */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
        <h2 className="font-display text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
          Items
        </h2>
        <InvoiceItems
          items={items}
          setItems={setItems}
        />
      </div>

      {/* Notes Section */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
        <h2 className="font-display text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
          Catatan
        </h2>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Tambahkan catatan untuk invoice ini..."
          rows={4}
          className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent resize-none transition-colors duration-300"
        />
      </div>

      {/* Total & Actions */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg text-zinc-600 dark:text-zinc-400">Total</span>
          <span className="font-display text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            {formatRupiah(total)}
          </span>
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => router.push('/dashboard')}
            className="flex-1 border-3 border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 py-3 rounded-lg font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300"
          >
            Batal
          </button>
          <button
            type="submit"
            disabled={loading}
            className="flex-1 border-3 border-red-200 bg-[#FF6B6B] hover:bg-[#FF5252] hover:border-red-300 text-white py-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Menyimpan...' : 'Simpan Invoice'}
          </button>
        </div>
      </div>
    </form>
  )
}
