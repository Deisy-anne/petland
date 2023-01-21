import { StringUtils } from './string'

export const PasswordUtils = {
  isValid: (password: string): boolean => {
    if (!StringUtils.isDefined(password)) return false
    if (!StringUtils.isValidLength({ text: password, minCharacters: 10, maxCharacters: 200, considerBlanks: false })) return false
    const onlyNumbers = StringUtils.onlyNumbers(password)
    if (onlyNumbers.length < 2) return false
    const specialCharacters = ['!', '@', '#', '%', '&']
    return password.split('').some((character) => specialCharacters.includes(character))
  }
}
