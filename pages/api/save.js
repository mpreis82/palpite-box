import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from "moment"
import { fromBase64 } from '../../utilits/base64'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

const genCupom = () => {
    const code = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase()
    return code.substr(0, 4) + '-' + code.substr(4, 4) + '-' + code.substr(8, 4)
}

export default async (req, res) => {
    const data = JSON.parse(req.body)

    try {
        await doc.useServiceAccountAuth({
            "client_email": process.env.SHEET_CLIENT_EMAIL,
            "private_key": fromBase64(process.env.SHEET_PRIVATE_KEY)
        })

        await doc.loadInfo()

        const sheetConfig = doc.sheetsByIndex[2]

        await sheetConfig.loadCells('A2:B2')

        const mostrarPromocaoCell = sheetConfig.getCell(1, 0)
        const textoCell = sheetConfig.getCell(1, 1)

        let Cupom = ''
        let Promo = ''

        if (mostrarPromocaoCell.value) {
            Cupom = genCupom(),
                Promo = textoCell.value
        }

        const sheet = doc.sheetsByIndex[1]

        await sheet.addRow({
            Nome: data.Nome,
            Email: data.Email,
            Whatsapp: data.Whatsapp,
            Cupom,
            Promo,
            'Data Preenchimento': moment().format('DD/MM/YYYY HH:mm:ss'),
            Nota: parseInt(data.Nota)
        })

        res.end(JSON.stringify({
            showCoupon: Cupom !== '',
            Cupom,
            Promo
        }))

    } catch (err) {
        console.log(err)
        res.end(err)
    }
}