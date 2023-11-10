import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext"
import VeiculoValidator from "../../Validators/VeiculoValidator" 
import Veiculo from "../../Models/Veiculo"

export default class VeiculosController {

    public async register({ request, auth }: HttpContextContract) {
        const data = await request.validate(VeiculoValidator)
        const userDb = await Veiculo.create({...data, user_id: auth.user?.id})
        return userDb
    }

    public async update({ params, request, auth }: HttpContextContract) {
        const veiculoDB = await Veiculo.findOrFail(params.id)
        const  { placa, marca, cor, modelo } = request.only(["placa", "marca", "cor", "modelo"])
        veiculoDB.user_id= auth.user?.id as number
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
        const veiculoDB = await Veiculo.findOrFail(params.id)
        await veiculoDB.delete()
        return veiculoDB
      }

}

