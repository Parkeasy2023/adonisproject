import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public usuario: string
  
  @column({ serializeAs: null })
  public password: string

  @column()
  public document: string

  @column()
  public telefone: string

  @column()
  public sexo: string

  @column()
  public datanasc: string

//específicos: string | nulladfa
  @column()
  public cep: string

  @column()
  public razao: string

  @column()
  public cidade: string

  @column()
  public bairro: string 

  @column()
  public numero: string 

  @column()
  public logradouro: string 

  @column()
  public atendimento: string 

  @column()
  public rememberMeToken: string 

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
