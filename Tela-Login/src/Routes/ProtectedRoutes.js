import React, { useState, useEffect } from 'react';
import Routering from './routes';
import fazerPostDeJSON from '../Pages/Services/UserService';

const ProtectedRoutes = ({ children }) => {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(false);

  useEffect(() => {
    const verificarAutenticacao = async () => {
      try {
        const response = await fazerPostDeJSON();
        setUsuarioAutenticado(response.usuarioAutenticado);
      } catch (err) {
        console.error("Erro ao verificar autenticação:", err);
      }
    };

    verificarAutenticacao();
  }, []);

  return usuarioAutenticado ? children : <Routering />;
};

export default ProtectedRoutes;