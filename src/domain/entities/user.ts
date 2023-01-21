import { CustomError, Either, left, right } from '@/shared'
import { InvalidUserBirthDateError } from '@/domain/errors/user/invalid-birth-date'
import { InvalidUserEmailError } from '@/domain/errors/user/invalid-email'
import { InvalidUserLastNameError } from '@/domain/errors/user/invalid-last-name'
import { InvalidUserNameError } from '@/domain/errors/user/invalid-name'
import { InvalidUserPhoneNumberError } from '@/domain/errors/user/invalid-phone-number'
import { DateUtils, EmailUtils, PhoneNumberUtils, StringUtils } from '@/domain/entities'

export class User {
  private constructor (
    readonly id: string,
    readonly name: string,
    readonly lastName: string,
    readonly birthDate: Date,
    readonly phoneNumber: number,
    readonly email: string,
    readonly password: string

  ) {
    Object.freeze(this)
  }

  setPassword (password: string): User {
    return new User(
      this.id,
      this.name,
      this.lastName,
      this.birthDate,
      this.phoneNumber,
      this.email,
      password
    )
  }

  static create ({ id, name, lastName, birthDate, phoneNumber, email, password }: User.Input): User.Output {
    const errors: CustomError[] = []
    if (!this.isValidName(name)) errors.push(InvalidUserNameError(name))
    if (!this.isValidLastName(lastName)) errors.push(InvalidUserLastNameError(lastName))
    if (!this.isValidBirthDate(birthDate)) errors.push(InvalidUserBirthDateError(birthDate))
    if (!this.isValidPhoneNumber(phoneNumber)) errors.push(InvalidUserPhoneNumberError(phoneNumber))
    if (!this.isValidEmail(email)) errors.push(InvalidUserEmailError(email))
    if (errors.length > 0) return left(errors)
    const formattedName = name.trimStart().trimEnd()
    const formattedLastName = lastName.trimStart().trimEnd()
    return right(new User(
      id,
      formattedName,
      formattedLastName,
      birthDate,
      phoneNumber,
      email,
      password
    )

    )
  }

  private static isValidName (name: string): boolean {
    if (!StringUtils.isDefined(name)) return false
    if (!StringUtils.isValidLength({ text: name, minCharacters: 2, maxCharacters: 200 })) return false
    return true
  }

  private static isValidLastName (lastName: string): boolean {
    if (!StringUtils.isDefined(lastName)) return false
    if (!StringUtils.isValidLength({ text: lastName, minCharacters: 2, maxCharacters: 150 })) return false
    return true
  }

  private static isValidBirthDate (birthDate: Date): boolean {
    if (!DateUtils.isDefined(birthDate)) return false
    return true
  }

  private static isValidPhoneNumber (phoneNumber: number): boolean {
    if (!PhoneNumberUtils.isValid(phoneNumber)) return false
    return true
  }

  private static isValidEmail (email: string): boolean {
    if (!EmailUtils.isValid(email)) return false
    return true
  }
}

export namespace User {
  export type Input = {
    id: string
    name: string
    lastName: string
    birthDate: Date
    phoneNumber: number
    email: string
    password: string
  }

  export type Output = Either <CustomError[], User>
}
