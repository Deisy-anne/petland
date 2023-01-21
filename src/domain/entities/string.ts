export type isValidLengthInput = {
  text: string
  minCharacters: number
  maxCharacters: number
  considerBlanks?: boolean
}

export const StringUtils = {
  isDefined: (text: string): boolean => {
    if (text === undefined || text === null || text.length === 0) return false
    return true
  },

  isValidLength: ({ text, minCharacters, maxCharacters, considerBlanks = true }: isValidLengthInput): boolean => {
    const textToValidate = considerBlanks ? text : text.trim()
    if (textToValidate.length < minCharacters || textToValidate.length > maxCharacters) return false
    return true
  },

  onlyNumbers: (text: string): string => text.replace(/\D/g, '')

}
