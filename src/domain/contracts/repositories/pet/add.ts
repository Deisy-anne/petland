import { Pet } from '@/domain/entities/pet'

export interface IAddPetRepository {
  add: (pet: Pet) => Promise <void>
}
