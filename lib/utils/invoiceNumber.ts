import { createClient } from '@/lib/supabase/client'

/**
 * Generate sequential invoice number for a user
 * Format: INV-001, INV-002, INV-003, etc.
 * @param userId - The user ID to generate invoice number for
 * @returns Promise with the generated invoice number
 */
export async function generateInvoiceNumber(userId: string): Promise<string> {
  const supabase = createClient()

  // Fetch the last invoice for this user, ordered by invoice_number descending
  const { data, error } = await supabase
    .from('invoices')
    .select('invoice_number')
    .eq('user_id', userId)
    .order('invoice_number', { ascending: false })
    .limit(1)
    .single()

  if (error || !data) {
    // No invoice found, start with INV-001
    return 'INV-001'
  }

  // Extract the numeric part from invoice number (e.g., "INV-001" -> 1)
  const lastNumber = parseInt(data.invoice_number.replace('INV-', ''), 10)

  if (isNaN(lastNumber)) {
    // If parsing fails, start with INV-001
    return 'INV-001'
  }

  // Increment and format with leading zeros
  const newNumber = lastNumber + 1
  return `INV-${String(newNumber).padStart(3, '0')}`
}
