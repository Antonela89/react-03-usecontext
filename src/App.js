import {createContext} from 'react';
import User from './components/User.jsx'

export const UserContext = createContext(); //ya esta desestructurada desde la importacion
//export const UserContext = React.CreateContext(); // equivalente a la expresion de arriba 

const App = () => {

    const user = {
        nombre: 'Antonela',
        edad:34,
        sector: 'Codo a Codo',
        cargo: 'Estudiante'
    }

  return (
    <UserContext.Provider value={user}>
      <User/>
    </UserContext.Provider>

  )
}

export default App