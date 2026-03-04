/**
 * User type from Supabase auth
 */
export interface User {
  id: string
  email: string
}

/**
 * Invoice item structure for form state
 */
export interface InvoiceItem {
  id: string // Temporary ID for React keys
  name: string
  quantity: number
  unitPrice: number
}

/**
 * Database invoice structure
 */
export interface DatabaseInvoice {
  id: string
  invoice_number: string
  user_id: string
  client_name: string
  client_email: string | null
  notes: string | null
  due_date: string | null
  status: 'pending' | 'paid' | 'overdue'
  subtotal: number
  total: number
  created_at: string
  updated_at: string
}

/**
 * Database invoice item structure
 */
export interface DatabaseInvoiceItem {
  id: string
  invoice_id: string
  item_name: string
  quantity: number
  unit_price: number
  created_at: string
}

/**
 * Invoice with items joined
 */
export interface InvoiceWithItems extends DatabaseInvoice {
  items: DatabaseInvoiceItem[]
}
