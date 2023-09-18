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

    sexo: schema.string.optional(),
    cep: schema.string.optional(),
    razao: schema.string.optional(),
    cidade: schema.string.optional(),
    bairro: schema.string.optional(),
    numero: schema.string.optional(),
    logradouro: schema.string.optional(),
    atendimento: schema.string.optional(),

  })

  public messages: CustomMessages = {
    required: "O {{field}} é obrigatório!",
    'email.unique': "Email já cadastrado!",
    'minlenght': "Senha muito pequena!"
  }
}
