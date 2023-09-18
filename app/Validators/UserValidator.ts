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

    sexo: schema.string.nullableAndOptional(),
    cep: schema.string.nullableAndOptional(),
    razao: schema.string.nullableAndOptional(),
    cidade: schema.string.nullableAndOptional(),
    bairro: schema.string.nullableAndOptional(),
    numero: schema.string.nullableAndOptional(),
    logradouro: schema.string.nullableAndOptional(),
    atendimento: schema.string.nullableAndOptional(),

  })

  public messages: CustomMessages = {
    required: "O {{field}} é obrigatório!",
    'email.unique': "Email já cadastrado!",
    'minlenght': "Senha muito pequena!"
  }
}
