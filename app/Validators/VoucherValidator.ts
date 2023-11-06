import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class VeiculoValidator {
  constructor(protected ctx: HttpContextContract) { }
  public schema = schema.create({
    datad: schema.date({}, [
      rules.required(),
    ]),
    quantidade: schema.number([
      rules.required(),
    ]),
    horario_inicio: schema.string({}, [
      rules.required()
    ]),
    horario_termino: schema.string({}, [
      rules.required()
    ]),
    valor: schema.number([
      rules.required()   
    ]),
  })

  public messages: CustomMessages = {
    required: "O {{field}} é obrigatório!",
    'placa.unique': "Vocuher já cadastrado!",
  }
}
