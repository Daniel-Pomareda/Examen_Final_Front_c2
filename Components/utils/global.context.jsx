import { createContext , useReducer , useEffect , useMemo} from "react";

// Define el estado inicial y el reducer
const initialState = { 
theme: 'light',
data: [] ,
};

function reducer(state, action) {
  switch (action.type) {
    case 'toggleTheme':
      console.log("guardo THEME en reducer" ) 
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'setData':
      console.log("guardo DATA en reducer" )  
      return { ...state, data: action.payload };
      
    default:
      return state;
  }
}

// Definir los temas 
const theme = { 
    light:{ color:"black", background: "white" }, 
    dark:{ color:"white", background: "black" }
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {

const [state, dispatch] = useReducer(reducer, initialState);

// Función para cambiar el tema
const toggleTheme = () => {
  dispatch({ type: 'toggleTheme' });
  console.log('Tema cambiado a', state.theme);
};

useEffect(() => {
  // Realizar el fetch de datos aquí y almacenarlos en el estado usando dispatch
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: 'setData', payload: data });
      console.log("Guardo Api en Data")
      console.log(data)
    })
    .catch((error) => {
      console.error('Error al obtener los datos: ', error);
    });
}, []);

const providerValue = useMemo(() => ({ ...state, toggleTheme }), [state, toggleTheme]);

  return (
    <ContextGlobal.Provider value={providerValue}> {/*  antes estaba asi = value={{providerValue}}*/}
      {children}
    </ContextGlobal.Provider>
  );
};
