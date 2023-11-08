import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserValidator {
  constructor(protected ctx: HttpContextContract) { }
  public schema = schema.create({
    name: schema.string({}, [ //estacionamento
      rules.required()
    ]),
    email: schema.string({}, [ //estacionamento
      rules.required(),
      rules.email(),
      rules.unique({ table: 'users', column: 'email' })
    ]),
    usuario: schema.string({}, [ //estacionamento
      rules.required(),
      rules.unique({ table: 'users', column: 'usuario' })
    ]), 
    password: schema.string({}, [ //estacionamento
      rules.required(),
      rules.minLength(5)
    ]),
    document: schema.string({}, [ //estacionamento
      rules.required(),
      rules.unique({ table: 'users', column: 'document'}),
      rules.minLength(14)
    ]),
    telefone: schema.string({}, [ //estacionamento
      rules.required(),
      rules.minLength(10)
    ]),
    sexo: schema.string.optional(),
    datanasc: schema.string.optional({}, [
      rules.minLength(8)
    ]),
    cep: schema.string.optional({}, [ //estacionamento
      rules.minLength(9)
    ]),
    razao: schema.string.optional(), //estacionamento
    cidade: schema.string.optional(), //estacionamento
    bairro: schema.string.optional(), //estacionamento
    numero: schema.string.optional(), //estacionamento
    logradouro: schema.string.optional(), //estacionamento
    atendimento: schema.string.optional(), //estacionamento
  })

  public messages: CustomMessages = {
    required: "O {{field}} é obrigatório!",
    'email.unique': "Email já cadastrado!",
    'minLenght': "Senha muito pequena!",
    'document.unique': "Documento já cadastrado!"
  }
}
