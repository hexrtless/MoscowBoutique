export class AuthResponseDto {
  readonly accessToken: string
  readonly user: {
      id: string,
      first_name: string,
      last_name: string,
      father_name: string | null,
      birthday: string,
      gender: 'male' | 'female' | null,
      email: string
      role: 'client' | 'admin'
  }
}