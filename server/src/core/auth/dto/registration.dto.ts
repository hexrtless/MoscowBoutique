export class RegistrationDto {
  readonly first_name: string
  readonly last_name: string
  readonly father_name: string | null
  readonly birthday: string
  readonly gender: 'male' | 'female' | null
  readonly email: string
  readonly role: 'client' | 'admin'
  password: string
}