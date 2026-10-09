import React from 'react'
import JuegosForm from '../components/JuegosForm'

function JuegosContainers() {
    const handleCreatJuego = (juego)=>{
        console.log("Juego creado)")
    };
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-3'>
                <JuegosForm onCreateJuego={handleCreatJuego}/>
            </div>
            <div className="col-8">
                <h1>Lista de juegos</h1>
            </div>
        </div>

    </div>
  )
}

export default JuegosContainers