import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function UsuarioIndividual({ usuario }) {
  const navegar = useNavigate();

  //funcion para borrar usuario

  function borrarusuario(idusuario) {
    axios
      .post(
        "https://proyectomernstack-server.vercel.app/api/usuario/borrarusuario",
        {
          idusuario: idusuario,
        }
      )
      .then((res) => {
        console.log(res.data[0]);
        alert(res.data);
        navegar(0);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container">
      <div className="column">
        <div className="row-md-1 offset-md-1">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Usuario</h5>
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>ID:</strong> {usuario.idusuario}
                </li>
                <li className="list-group-item">
                  <strong>Nombre:</strong> {usuario.nombre}
                </li>
                <li className="list-group-item">
                  <strong>Email:</strong> {usuario.email}
                </li>
                <li className="list-group-item">
                  <strong>Teléfono:</strong> {usuario.telefono}
                </li>
              </ul>
              <div className="mt-4">
                <Link
                  to={`/editarusuario/${usuario.idusuario}`}
                  className="btn btn-primary mr-2"
                >
                  Editar
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    borrarusuario(usuario.idusuario);
                  }}
                >
                  Borrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsuarioIndividual;
