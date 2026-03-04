/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate invoice form data
 */
export interface InvoiceFormData {
  clientName: string
  clientEmail?: string
  items: Array<{ name: string; quantity: number; unitPrice: number }>
}

export function validateInvoiceForm(data: InvoiceFormData): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  // Client name validation
  if (!data.clientName.trim()) {
    errors.push('Nama klien wajib diisi')
  }

  // Client email validation (if provided)
  if (data.clientEmail && !isValidEmail(data.clientEmail)) {
    errors.push('Format email tidak valid')
  }

  // Items validation
  const validItems = data.items.filter(item => item.name.trim())
  if (validItems.length === 0) {
    errors.push('Minimal satu item harus diisi')
  }

  // Check for invalid quantities or prices
  validItems.forEach((item, index) => {
    if (item.quantity < 1) {
      errors.push(`Item ${index + 1}: Quantity minimal 1`)
    }
    if (item.unitPrice < 0) {
      errors.push(`Item ${index + 1}: Harga tidak boleh negatif`)
    }
  })

  return {
    valid: errors.length === 0,
    errors,
  }
}
