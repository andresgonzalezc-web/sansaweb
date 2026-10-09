import { LocalizationProvider } from '@mui/x-date-pickers'
import JuegosForm from './components/JuegosForm'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import JuegosContainers from './containers/JuegosContainers'

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
     <>
       <JuegosContainers />
     </>
   </LocalizationProvider>
  )
}

export default App
