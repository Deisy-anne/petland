import { NumberUtils } from './number'

export const PhoneNumberUtils = {
  isValid: (phoneNumber: number): boolean => {
    if (!NumberUtils.isPositive(phoneNumber)) return false
    if (!NumberUtils.isDefined(phoneNumber)) return false
    const regex = /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/
    if (!regex.test(phoneNumber as any)) return false
    return true
  }
}
