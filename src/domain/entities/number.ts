
export const NumberUtils = {
  isPositive: (number: number): boolean => {
    if (number < 0) return false
    return true
  },
  isDefined: (number: number): boolean => {
    if (number === undefined || number === null) return false
    return true
  }
}
