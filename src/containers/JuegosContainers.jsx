import React, { useState } from 'react'
import JuegosForm from '../components/JuegosForm'
import JuegosView from '../components/juegosView';



function JuegosContainers() {

    const [juegos, setJuegos] = useState([]);

    const handleCreateJuegos = (juego)=>{
        setJuegos([...juegos, juego]);
    };
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-3'>
                <JuegosForm onCreateJuego={handleCreateJuegos}/>
            </div>
            <div className="col-8">
                <JuegosView juegos={juegos}></JuegosView>
            </div>
        </div>

    </div>
  )
}

export default JuegosContainers