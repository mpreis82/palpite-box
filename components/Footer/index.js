import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gray-700 p-4'>
            <div className='container mx-auto text-center font-bold text-white'>
                Projeto desenvolvido por: {' '}
                <a hef='https://tuliofaria.net'>Tulio Faria</a> / {' '}
                <a hef='https://tuliofaria.net'>LinkedIn</a> / {' '}
                <a hef='https://tuliofaria.net'>Github</a>

                <div className='mt-4'>
                    <img className='inline p-4' src="./logo_semana_fsm.png" width='214' />
                    <img className='inline p-4' src="./logo_devpleno.png" width='240' />
                </div>
            </div>
        </div>
    )
}

export default Footer