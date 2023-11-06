import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class VeiculoValidator {
  constructor(protected ctx: HttpContextContract) { }
  public schema = schema.create({
    placa: schema.string({}, [
      rules.required(),
      rules.unique({ table: 'Veiculos', column: 'placa' })
    ]),
    cor: schema.string({}, [ //deve ser select
      rules.required(),
    ]),
    marca: schema.string({}, [
      rules.required()
    ]),
    modelo: schema.string({}, [
      rules.required()
    ]),
  })

  public messages: CustomMessages = {
    required: "O {{field}} é obrigatório!",
    'placa.unique': "Veículo já cadastrado!",
  }
}
