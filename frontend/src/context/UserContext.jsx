import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    // Intenta obtener el token de localStorage, si no existe se inicia en null.
    const [token, setToken] = useState(() => {
        const savedToken = localStorage.getItem('token');
        return savedToken ? JSON.parse(savedToken) : null; // Devuelve el token o null si no existe.
    });

    // Función para realizar el logout:
    const logout = () => {
        setToken(false); 
        localStorage.setItem('token', JSON.stringify(false)); // Guarda el token 
    };

    // Función para realizar el login:
    const login = () => {
        setToken(true); 
        localStorage.setItem('token', JSON.stringify(true)); 
    };

    // Guardar el token en localStorage cada vez que se actualiza, así funciona aún cuando actualizo.
    useEffect(() => {
        if (token !== null) {
            localStorage.setItem('token', JSON.stringify(token));
        }
    }, [token]);

    return (
        <UserContext.Provider value={{ token, logout, login }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
