'use client'

import { useCallback } from 'react'
import InvoiceItemRow from './InvoiceItemRow'
import type { InvoiceItem } from '@/lib/supabase/types'

interface InvoiceItemsProps {
  items: InvoiceItem[]
  setItems: (items: InvoiceItem[]) => void
}

let itemIdCounter = 0

export default function InvoiceItems({ items, setItems }: InvoiceItemsProps) {
  const addItem = useCallback(() => {
    const newItem: InvoiceItem = {
      id: `item-${itemIdCounter++}`,
      name: '',
      quantity: 1,
      unitPrice: 0,
    }
    setItems([...items, newItem])
  }, [items, setItems])

  const removeItem = useCallback((id: string) => {
    if (items.length === 1) {
      // Don't remove if it's the only item, just clear it
      setItems([{ id: `item-${itemIdCounter++}`, name: '', quantity: 1, unitPrice: 0 }])
    } else {
      setItems(items.filter(item => item.id !== id))
    }
  }, [items, setItems])

  const updateItem = useCallback((id: string, field: keyof InvoiceItem, value: string | number) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, [field]: value } : item
    ))
  }, [items, setItems])

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="grid grid-cols-12 gap-4 text-sm font-medium text-zinc-600 dark:text-zinc-400 pb-2 border-b border-zinc-200 dark:border-zinc-700">
        <div className="col-span-6">Nama Item</div>
        <div className="col-span-2 text-center">Qty</div>
        <div className="col-span-3 text-right">Harga Satuan</div>
        <div className="col-span-1"></div>
      </div>

      {/* Item Rows */}
      {items.map((item, index) => (
        <InvoiceItemRow
          key={item.id}
          item={item}
          index={index}
          onUpdate={(field, value) => updateItem(item.id, field, value)}
          onRemove={() => removeItem(item.id)}
          canRemove={items.length > 1}
        />
      ))}

      {/* Add Button */}
      <button
        type="button"
        onClick={addItem}
        className="w-full py-3 border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg text-zinc-600 dark:text-zinc-400 hover:border-[#FF6B6B] hover:text-[#FF6B6B] dark:hover:text-[#FF8A8A] transition-all duration-300 font-medium"
      >
        + Tambah Item
      </button>
    </div>
  )
}
