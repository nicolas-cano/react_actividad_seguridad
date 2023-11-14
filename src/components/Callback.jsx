import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Callback = () => {
  const { handleRedirectCallback } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    const processAuthentication = async () => {
      await handleRedirectCallback();
      navigate("/"); // O redirige a '/profile' o cualquier ruta que prefieras.
    };

    processAuthentication();
  }, [handleRedirectCallback, navigate]);

  return <div>Loading...</div>; // Muestra un texto o spinner mientras se procesa el callback.
};

export default Callback;
