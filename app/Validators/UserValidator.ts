import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({

    name: schema.string({}, [
      rules.required()

    ]),
    email: schema.string({}, [
      rules.required(),
      rules.email(),
      rules.unique({ table: 'users', column: 'email'})
    ]),
    usuario: schema.string(),

    password: schema.string({}, [
      rules.required(),
      rules.minLength(4)

    ]),

    documento: schema.string({}, [
      rules.required(),
      rules.minLength(11)

    ]),

    telefone: schema.string({}, [
      rules.required(),
      rules.minLength(8)

    ]),

    sexo: schema.string(),
    cep: schema.string(),
    razao: schema.string(),
    cidade: schema.string(),
    bairro: schema.string(),
    numero: schema.string(),
    logradouro: schema.string(),
    atendimento: schema.string(),

  })

  public messages: CustomMessages = {
    required: "O {{field}} é obrigatório!",
    'email.unique': "Email já cadastrado!",
    'minlenght': "Senha muito pequena!"
  }
}
