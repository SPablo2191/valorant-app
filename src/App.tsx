import './App.css'
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/primereact.min.css";                                       
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { HomePage } from './pages/home/HomeComponent';

function App() {
  return (
    <>
      <PrimeReactProvider>
        <HomePage/>
      </PrimeReactProvider>
    </>
  )
}

export default App
