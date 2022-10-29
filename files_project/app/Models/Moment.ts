import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Comment from './Comment'

export default class Moment extends BaseModel {
  @hasMany(() => Comment)
  public coments: HasMany<typeof Comment>

  @column({ isPrimary: true })
  public id: number

  // creating entidade
  @column()
  public title: string

  @column()
  public description: string

  @column()
  public image: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}