import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { formatValue } from "react-currency-input-field"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function formattedValue(amount: number) {


  const s = String(amount)
  const l = s.split(".")[0].length

  const value = s.slice(0, l + 3)

	return formatValue({
		value,
		groupSeparator: ",",
		decimalSeparator: ".",
		prefix: "$",
	})
}
