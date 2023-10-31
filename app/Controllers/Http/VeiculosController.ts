import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext"
import UserValidator from "../../Validators/UserValidator"
import User from "../../Models/User"
import Veiculo from "../../Models/Veiculo"

export default class VeiculosController {

    public async register({ request }: HttpContextContract) {
        const data = await request.validate(UserValidator)
        const userDb = await User.create(data)
        return userDb
    }

    public async update({ params, request }: HttpContextContract) {
        const veiculoDB = await Veiculo.findOrFail(params.id)
        const  { placa, marca, cor, modelo } = request.only(["placa", "marca", "cor", "modelo"])
        veiculoDB.placa = placa
        veiculoDB.marca = marca
        veiculoDB.cor = cor
        veiculoDB.modelo = modelo
        await veiculoDB.save()
        return veiculoDB
      }

    public async store({ request }: HttpContextContract) {
        const data = request.only(["placa", "marca", "cor", "modelo"])
        const veiculoDB = await Veiculo.create({ ...data })
        return veiculoDB
      }

    public async destroy({ params }: HttpContextContract) {
        const projetoDB = await Veiculo.findOrFail(params.id)
        await projetoDB.delete()
        return projetoDB
      }

}

