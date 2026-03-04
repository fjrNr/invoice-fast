'use client'

import type { InvoiceItem } from '@/lib/supabase/types'
import { formatRupiah } from '@/lib/utils/currency'

interface InvoiceItemRowProps {
  item: InvoiceItem
  index: number
  onUpdate: (field: keyof InvoiceItem, value: string | number) => void
  onRemove: () => void
  canRemove: boolean
}

export default function InvoiceItemRow({ item, index, onUpdate, onRemove, canRemove }: InvoiceItemRowProps) {
  const subtotal = item.quantity * item.unitPrice

  return (
    <div className="grid grid-cols-12 gap-4 items-start">
      {/* Item Name */}
      <div className="col-span-6">
        <input
          type="text"
          value={item.name}
          onChange={(e) => onUpdate('name', e.target.value)}
          placeholder={`Item ${index + 1}`}
          className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
        />
      </div>

      {/* Quantity */}
      <div className="col-span-2">
        <input
          type="number"
          value={item.quantity}
          onChange={(e) => onUpdate('quantity', parseInt(e.target.value) || 1)}
          min="1"
          className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 text-sm text-center focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
        />
      </div>

      {/* Unit Price */}
      <div className="col-span-3">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 text-sm">
            Rp
          </span>
          <input
            type="text"
            value={item.unitPrice > 0 ? item.unitPrice.toLocaleString('id-ID') : ''}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, '')
              onUpdate('unitPrice', value ? parseInt(value) : 0)
            }}
            placeholder="0"
            className="w-full pl-10 pr-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 text-sm text-right focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
          />
        </div>
      </div>

      {/* Remove Button */}
      <div className="col-span-1 flex items-center justify-center">
        <button
          type="button"
          onClick={onRemove}
          disabled={!canRemove}
          className="text-zinc-400 hover:text-red-500 dark:hover:text-red-400 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          title="Hapus item"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>

      {/* Subtotal Display (full width below) */}
      <div className="col-span-12 flex justify-end pt-2">
        <span className="text-sm text-zinc-600 dark:text-zinc-400">
          Subtotal: {formatRupiah(subtotal)}
        </span>
      </div>
    </div>
  )
}
