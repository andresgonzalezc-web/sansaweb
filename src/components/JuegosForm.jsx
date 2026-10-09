import {Button, Card, CardActions, CardContent, CardHeader, FormControlLabel, MenuItem, Select, Switch, TextField} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import React, { useState } from 'react'

function JuegosForm({onCreateJuego=()=>{}}) {
    const companias= [{label: "Sony", value: "sony"}, {label: "Microsoft", value: "microsoft"}, {label: "Nintendo", value: "nintendo"}];
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [compania, setCompania] = useState(companias[0]);
    const [plataforma, setPlataforma] = useState('');
    const [anio, setAnio] = useState(null);
    const [tieneFisico, setTieneFisico] = useState(false);

    const handleClick= ()=>{
        const juego = {}
            juego.nombre = nombre;
            juego.descripcion = descripcion;
            juego.compania = compania;
            juego.plataforma = plataforma;
            juego.anio = anio;
            juego.tieneFisico = tieneFisico;
        onCreateJuego(juego);
    }
    
return (
   <Card raised>
     <CardHeader title="Registrar juegos"></CardHeader>
     <CardContent>
      <div className="mt-3">
        <TextField label="nombre del juego" value={nombre} onChange={(e)=>setNombre(e.target.value)} fullWidth id='nombre-juego'></TextField>
      </div>
      <div className="mt-3">
        <TextField multiline label="Descripcion" value={descripcion} onChange={(e)=>setDescripcion(e.target.value)} fullWidth id="desc-juego"></TextField>
      </div>
      <div className="mt-3" >
        <Select id="compamia-juego" label="compañia" value={compania} onChange={(e)=>setCompania(e.target.value)} >
            {companias.map((c) =>
               <MenuItem value={c.value}>{c.label}</MenuItem>
            ) }
        </Select>

      <div className="mt-3">
        <TextField id="plataforma-juego" label="plataforma" value={plataforma} onChange={(e)=>setPlataforma(e.target.value)} fullWidth>

        </TextField>
      </div>
     </div>
       <div className="mt-3">
        <DatePicker fullWidth id="anio-juego" value={anio} onChange={v=>setAnio(v)} label="año del juego"/>
       </div>
      <div className="mt-3">
        <FormControlLabel id="fisico-juego" label="tiene versión fisica?" checked={tieneFisico} 
        onChange={e=>setTieneFisico(e.target.checked)} 
        labelPlacement='start' 
        control={<Switch/>}></FormControlLabel>
      </div>
     </CardContent>
     <CardActions>
        <Button onClick={handleClick} fullWidth variant='outlined' color="secondary">Registrar Juego</Button>
     </CardActions>
   </Card>
  )
}
export default JuegosForm