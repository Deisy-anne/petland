import { StringUtils } from './string'

export const EmailUtils = {
  isValid: (email: string): boolean => {
    if (!StringUtils.isDefined(email)) return false
    if (!StringUtils.isValidLength({ text: email, minCharacters: 2, maxCharacters: 250, considerBlanks: false })) return false
    const regex = /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/
    if (!regex.test(email)) return false
    return true
  },

  formatter: (email: string): string => email.toLowerCase().trim()
}
