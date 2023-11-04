import axios from "axios";
import React, { useEffect, useState } from "react";
import UsuarioIndividual from "./UsuarioIndividual";

function ListaUsuarios() {
  const [datausuarios, setdatausuario] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://proyectomernstack-server.vercel.app/api/usuario/obtenerusuarios"
      ) // Agrega una barra diagonal al principio de la URL
      .then((res) => {
        console.log(res.data);
        setdatausuario(res.data);
      })
      .catch((err) => {
        console.error(err); // Cambia a console.error para mostrar errores
      });
  }, []);

  const listausuarios = datausuarios.map((usuario, i) => {
    // <div key={usuario.id}> {/* Agrega una clave única para cada elemento */}

    return (
      <div key={i}>
        <UsuarioIndividual usuario={usuario} />
      </div>
    );
  });

  return (
    <div>
      <h2 className="text-center">Lista de usuarios</h2>
      {listausuarios}
    </div>
  );
}

export default ListaUsuarios;
