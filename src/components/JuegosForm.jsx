import {Button, Card, CardActions, CardContent, CardHeader, TextField} from '@mui/material'
import React from 'react'

function JuegosForm() {
  return (
   <Card raised>
     <CardHeader title="Registrar juegos"></CardHeader>
     <CardContent>
      <div className="mt-3">
        <TextField label="nombre del juego" fullWidth id='nombre-juego'></TextField>
      </div>
      <div className="mt-3">
        <TextField multiline label="Descripcion" fullWidth id="desc-juego"></TextField>
      </div>
     </CardContent>
     <CardActions>
        <Button fullWidth variant='outlined' color="secondary">Registrar Juego</Button>
     </CardActions>
   </Card>
  )
}
export default JuegosForm