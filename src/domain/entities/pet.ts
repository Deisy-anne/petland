import { CustomError, Either, left, right } from '@/shared'
import { InvalidPetAgeError } from '../errors/pet/invalid-age'
import { InvalidPetBirthDateError } from '../errors/pet/invalid-birth-date'
import { InvalidPetNameError } from '../errors/pet/invalid-name'
import { InvalidPetWeightError } from '../errors/pet/invalid-weight'
import { DateUtils } from './date'
import { NumberUtils } from './number'
import { StringUtils } from './string'

export class Pet {
  private constructor (
    readonly id: string,
    readonly name: string,
    readonly age: number,
    readonly guardianId: string,
    readonly weight?: number,
    readonly birthDate?: Date

  ) { Object.freeze(this) }

  static create ({ id, name, age, guardianId, weight, birthDate }: Pet.Input): Pet.Output {
    const errors: CustomError[] = []
    if (!this.isValidName(name)) errors.push(InvalidPetNameError(name))
    if (!this.isValidAge(age)) errors.push(InvalidPetAgeError(age))
    if (weight !== null &&
       weight !== undefined &&
        !this.isValidWeight(weight)) errors.push(InvalidPetWeightError(weight))
    if (birthDate !== null &&
      birthDate !== undefined &&
       !this.isValidBirthDate(birthDate)) errors.push(InvalidPetBirthDateError(birthDate))
    if (errors.length > 0) return left(errors)
    const formattedName = name.trimStart().trimEnd()
    return right(new Pet(
      id,
      formattedName,
      age,
      guardianId,
      weight,
      birthDate
    )

    )
  }

  static isValidName (name: string): boolean {
    if (!StringUtils.isDefined(name)) return false
    const validName = StringUtils.isValidLength({ text: name, minCharacters: 2, maxCharacters: 200 })
    if (!validName) return false
    return true
  }

  static isValidAge (age: number): boolean {
    if (!NumberUtils.isPositive(age)) return false
    if (!NumberUtils.isDefined(age)) return false
    return true
  }

  static isValidWeight (weight: number): boolean {
    if (!NumberUtils.isPositive(weight)) return false
    if (!NumberUtils.isDefined(weight)) return false
    return true
  }

  static isValidBirthDate (birthDate: Date): boolean {
    if (!DateUtils.isDefined(birthDate)) return false
    return true
  }
}

export namespace Pet {
  export type Input = {
    id: string
    name: string
    age: number
    guardianId: string
    weight?: number
    birthDate?: Date
  }
  export type Output = Either <CustomError[], Pet>
}
