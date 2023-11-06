import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Voucher extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: number
  
  @column()
  public datad: Date

  @column()
  public quantidade: number

  @column()
  public horario_inicio: DateTime

  @column()
  public horario_termino: string

  @column()
  public valor: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
