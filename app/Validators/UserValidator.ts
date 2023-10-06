import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserValidator {
  constructor(protected ctx: HttpContextContract) { }
  public schema = schema.create({
    name: schema.string({}, [
      rules.required()
    ]),
    email: schema.string({}, [
      rules.required(),
      rules.email(),
      rules.unique({ table: 'users', column: 'email' })
    ]),
    usuario: schema.string({}, [
      rules.required(),
      rules.unique({ table: 'users', column: 'usuario' })
    ]),
    password: schema.string({}, [
      rules.required(),
      rules.minLength(5)
    ]),
    document: schema.string({}, [
      rules.required(),
      rules.unique({ table: 'users', column: 'document'}),
      rules.minLength(14)
    ]),
    telefone: schema.string({}, [
      rules.required(),
      rules.minLength(10)
    ]),
    sexo: schema.string.optional(),
    datanasc: schema.string.optional({}, [
      rules.minLength(8)
    ]),
    cep: schema.string.optional({}, [
      rules.minLength(9)
    ]),
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
    'minLenght': "Senha muito pequena!",
    'document.unique': "Documento já cadastrado!"
  }
}
