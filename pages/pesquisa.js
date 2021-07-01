import React, {useState} from 'react'
import PageTitle from '../components/PageTitle'

const Pesquisa = () => {

    const notas = [0, 1, 2, 3, 4, 5]
    const [success, setSuccess] = useState(false)
    const [retorno, setRetorno] = useState({})

    const save = async() => {
        try {
            const response = await fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(form)
            })

            const data = await response.json()
            setSuccess(true)
            setRetorno(data)

        } catch (err) { }
    }

    const [ form, setForm ] = useState({
        Nome: '',
        Email: '',
        Whatsapp: '',
        Nota: 0,
    })

    const onChange = (event) => {
        const e = event
        setForm(old =>({
            ...old,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className='pt-6'>
            <PageTitle title='Pesquisa' />
            <div className='text-center mb-6'>
                <h1 className='font-bold my-4 text-2xl'>Críticas e sugestões</h1>
                <p>O restaurante X sempre busca por atender melhor seus clientes.</p>
                <p>Por isso, estamos sempre abertos a ouvir a sua opinião.</p>
            </div>

            {!success &&
            <div className='w-1/3 mx-auto'>
                <div className='w-full'>
                    <label className='font-bold'>Nome:</label>
                    <input
                        className='w-full p-4 shadow block bg-blue-100 my-2 rounded'
                        type='text'
                        placeholder='Nome'
                        name='Nome'
                        value={form.Nome}
                        onChange={onChange}
                    />
                </div>

                <div className='w-full'>
                    <label className='font-bold'>E-mail:</label>
                    <input
                        className='w-full p-4 shadow block bg-blue-100 my-2 rounded'
                        type='text'
                        placeholder='E-mail'
                        name='Email'
                        value={form.Email}
                        onChange={onChange}
                    />
                </div>

                <div className='w-full'>
                    <label className='font-bold'>Whatsapp:</label>
                    <input
                        className='w-full p-4 shadow block bg-blue-100 my-2 rounded'
                        type='text'
                        placeholder='Whatsapp'
                        name='Whatsapp'
                        value={form.Whatsapp}
                        onChange={onChange}
                    />
                </div>

                <div className='w-full'>
                    <label className='font-bold block'>Nota:</label>
                    <div className='flex w-full'>
                        {notas.map((nota, index) => {
                            return (
                                <div key={index} className='items-center w-1/6'>
                                    <label>{nota}</label>
                                    <input
                                        className='cursor-pointer block'
                                        type='radio'
                                        value={nota}
                                        name='Nota'
                                        onChange={onChange}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>

                <button onClick={save} className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg my-4'>
                    Salvar
                </button>
            </div>
            }

            {success &&
            <div className='text-center w-1/2 mb-4 mx-auto'>
                <p className='bg-blue-100 border-t border-b border-blue-500 text-blue-500 p-4 mb-4'>
                    Obrigado por contribuir com a sua sugestão ou crítica.
                </p>

                { retorno.showCoupon &&
                <div className=' mb-4'>
                    <p>Cupom</p>
                    <p className='font-bold text-2xl'> {retorno.Cupom}</p>
                </div>
                }

                { retorno.showCoupon &&
                <p className='p-4 border'>
                    {retorno.Promo}
                </p>
                }
            </div>
            }

        </div>
    )
}

export default Pesquisa