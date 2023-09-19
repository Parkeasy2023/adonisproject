import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name',255).notNullable()
      table.string('usuario',255).notNullable().unique()
      table.string('email', 255).notNullable().unique()
      table.string('password', 180).notNullable()
      table.string('document', 11).notNullable().unique()
      table.string('telefone', 11).notNullable().unique()
      table.string('sexo', 255).nullable() 
      table.string('datanasc', 10).nullable()

      table.string('razao',255).nullable()
      table.string('cep', 11).nullable()
      table.string('cidade', 11).nullable()
      table.string('bairro', 11).nullable()
      table.string('numero', 11).nullable()
      table.string('logradouro', 11).nullable()
      table.boolean('atendimento',).nullable()

      table.string('remember_me_token').nullable()

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
//nullable: específico