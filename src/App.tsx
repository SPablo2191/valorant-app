import './App.css'
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/primereact.min.css";                                       
import "primereact/resources/themes/lara-light-indigo/theme.css";

function App() {
  return (
    <>
      <PrimeReactProvider>
      </PrimeReactProvider>
    </>
  )
}

export default App
