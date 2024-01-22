/**
 * Checks if a string value is empty.
 * @param value - The string value to check.
 * @returns `true` if the email is valid, `false` otherwise.
 */
export const isEmpty = (value: string): boolean => {
	return value.trim().length === 0
}

export const isValidEmail = (email: string) => {
	return new RegExp('/^S+@S+.S+$/').test(email)
}
