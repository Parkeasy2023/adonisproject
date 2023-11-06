import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'veiculos'
  schema: any

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('veiculo_id').unsigned().references('id').inTable('veiculos').onDelete('CASCADE')
      table.string('placa').notNullable()
      table.string('cor').notNullable()
      table.string('marca').notNullable()
      table.string('modelo').notNullable()
      table.string('token', 64).notNullable().unique()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
