/**
 * Format number as Indonesian Rupiah
 * @param amount - Amount to format
 * @returns Formatted string (e.g., "Rp 500.000")
 */
export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

/**
 * Parse Rupiah string to number
 * @param value - String value like "500.000" or "Rp 500.000"
 * @returns Parsed number
 */
export function parseRupiah(value: string): number {
  const cleaned = value.replace(/[Rp\s.]/g, '')
  return parseInt(cleaned) || 0
}
