import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext"
import Voucher from "../../Models/Voucher"
import VoucherValidator from "../../Validators/VoucherValidator"

export default class VouchersController {

    public async register({ request }: HttpContextContract) {
        const data = await request.validate(VoucherValidator)
        const userDb = await Voucher.create(data) //em algum lugar existe uma diferença entre o date e o datetimegit 
        return userDb
    }

    public async update({ params, request }: HttpContextContract) {
        const VoucherDB = await Voucher.findOrFail(params.id)
        const  { datad, quantidade, horario_inicio, horario_termino, valor } = request.only(["datad", "quantidade", "horario_inicio", "horario_termino", "valor"])
        VoucherDB.datad = datad
        VoucherDB.quantidade = quantidade
        VoucherDB.horario_inicio = horario_inicio
        VoucherDB.horario_termino = horario_termino
        VoucherDB.valor = valor
        await VoucherDB.save()
        return VoucherDB
    }

    public async store({ request }: HttpContextContract) {
        const data = request.only(["datad", "quantidade", "horario_inicio", "horario_termino", "valor" ])
        const voucherDB = await Voucher.create({ ...data })
        return voucherDB
      }
}