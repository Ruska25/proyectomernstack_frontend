import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

function EditarUsuario() {
  const params = useParams();
  const navigate = useNavigate();

  // Hooks
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");

  useEffect(() => {
    // Usar axios para obtener los datos del usuario
    axios
      .post(
        "https://proyectomernstack-server.vercel.app/api/usuario/obtenerdatausuario",
        {
          idusuario: params.idusuario,
        }
      )
      .then((res) => {
        console.log(res.data[0]);
        const datausuario = res.data[0];
        setNombre(datausuario.nombre);
        setEmail(datausuario.email);
        setTelefono(datausuario.telefono); // Corrección: 'Telefono' a 'telefono'
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.idusuario]);

  // Función para actualizar el usuario
  function editarUsuario() {
    // Nuevo objeto para actualizar el usuario
    const actualizarUsuario = {
      nombre: nombre,
      email: email,
      telefono: telefono,
      idusuario: params.idusuario,
    };

    // Realizar la petición utilizando axios
    axios
      .post(
        "https://proyectomernstack-server.vercel.app/api/usuario/actualizarusuario",
        actualizarUsuario
      )
      .then((res) => {
        console.log(res.data);
        // alert(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container">
      <div className="row">
        <h2 className="mt-4">Editar usuario</h2>
      </div>

      <div className="row">
        <div className="col-sm-6 offset-3">
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">
              Teléfono
            </label>
            <input
              type="text"
              className="form-control"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>

          <button onClick={editarUsuario} className="btn btn-success">
            Guardar usuario
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditarUsuario;

/*import axios from 'axios'
import React, {useEffect, useState } from 'react'
import {useParams} from 'react-router'
function EditarUsuario(){

    const params = useParams()

     //hooks

     const[nombre, setNombre]=useState('')
     const[email, setEmail] = useState('')
     const[telefono, setTelefono] = useState('')




     useEffect(()=>{
        axios.post('/api/usuario/obtenerdatausuario', {idusuario: params.idusuario}).then(res =>{
            console.log(res.data[0])
            const datausuario = res.data[0]
            setNombre(datausuario.nombre)
            setEmail(datausuario.email)
            setTelefono(datausuario.Telefono)
        })
        },[])


        //funcion que actualiza

        function editarUsuario(){

            //Nuevo objeto para actualizar el usuario

            const actualizarusuario ={
                nombre: nombre,
                email: email,
                telefono: telefono,
                idusuario: params.idusuario
            
            }

            //hacer la peticion usando axios

            axios.post('/api/usuario/actualizarusuario', actualizarusuario)
            .then(res => {
                console.log(res.data)
                alert(res.data)
            })
            .then(err => {console.log(err)})
    
        }

      

    return(
        <div className='container'>
        <div className='row'>
            
            <h2 className='mt-4'>Crear un nuevo usuario</h2>

            
        </div>

        <div className='row'>
            <h2 className='mt-4'>Editar usuario</h2>
            <div className='col-sm-6 offset-3'>

            <div className='mb-3'>
                <label htmlFor="nombre" className='form-label'>Nombre</label>
                <input type="text" className='form-control' value={nombre} onChange={(e) => {setNombre(e.target.value)}}></input>
                </div>

                <div className='mb-3'>
                <label htmlFor="email" className='form-label'>Email</label>
                <input type="email" className='form-control' value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
                </div>

                <div className='mb-3'>
                <label htmlFor="telefono" className='form-label'>Telefono</label>
                <input type="text" className='form-control' value={telefono} onChange={(e) => {setTelefono(e.target.value)}}></input>
                </div>

                <button onClick={editarUsuario} className="btn btn-success">Guardar usuario</button>

            </div>
        </div>
       
    </div>
    )

}

export default EditarUsuario


/*
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function EditarUsuario() {
    const { idusuario } = useParams(); // Usar destructuring para acceder a idusuario

    // Hooks
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');

    useEffect(() => {
        axios.post('/api/usuario/obtenerusuario', { idusuario }).then((res) => { // Usar idusuario directamente
            console.log(res.data[0]);
            const datausuario = res.data[0];
            setNombre(datausuario.nombre);
            setEmail(datausuario.email);
            setTelefono(datausuario.telefono); // Cambiar "Telefono" a "telefono"
        });
    }, [idusuario]); // Agregar idusuario a la lista de dependencias

    // Función que actualiza
    function editarUsuario() {
        // Nuevo objeto para actualizar el usuario
        const actualizarusuario = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            idusuario: idusuario, // Usar idusuario directamente
        };

        // Hacer la petición usando axios
        axios.post('/api/usuario/actualizarusuario', actualizarusuario)
            .then((res) => {
                console.log(res.data);
                alert(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className='container'>
            <div className='row'>
                <h2 className='mt-4'>Editar usuario</h2>
            </div>

            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <div className='mb-3'>
                        <label htmlFor='nombre' className='form-label'>Nombre</label>
                        <input type='text' className='form-control' value={nombre} onChange={(e) => { setNombre(e.target.value) }}></input>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>Email</label>
                        <input type='email' className='form-control' value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='telefono' className='form-label'>Telefono</label>
                        <input type='text' className='form-control' value={telefono} onChange={(e) => { setTelefono(e.target.value) }}></input>
                    </div>

                    <button onClick={editarUsuario} className='btn btn-success'>Guardar usuario</button>
                </div>
            </div>
        </div>
    );
}

export default EditarUsuario;
*/
