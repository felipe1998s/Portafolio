// src/components/Contact.js

import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {

  const form = useRef(); 
  const [data,setData] = useState({
    user_name:"",
    user_email:"",
    message:""
  });

  const handleChange = (event) => {
    const {value, name } = event.target;
    setData({...data,[name]:value})
  }

  const sendEmail = (e) => { 
      e.preventDefault(); 
      emailjs.sendForm( "service_kq6242m", "react_contact_fr", form.current, "JSIVwA3xJhFZ_YmmU" ) 
      .then( (result) => { alert('message sent successfully...'); 
          console.log(result.text);
          setData({
            user_name:"",
            user_email:"",
            message:""
          })
      }, (error) => { console.log(error.text); } ); 
  }; 

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Santiago+de+Cali,+Cali,+Valle+del+Cauca,+Colombia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                Ciudad de resistencia
              </h2>
              <p className="mt-1">
                Santiago de Cali
              </p>
            </div>
            <div className="lg:w-1/1 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                CORREO ELECTRÓNICO
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                felipeandressuarez20@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                NÚMERO DE TELÉFONO
              </h2>
              <p className="leading-relaxed">3007926530</p>
            </div>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            ¡Contrátame!
          </h2>
          <p className="leading-relaxed mb-5">
          Actualmente estoy buscando nuevos retos y oportunidades para aplicar mis conocimientos, si estás interesado en mis servicios no dudes en contactarme.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              value={data.user_name}
              onChange={(event)=>handleChange(event)}
              autoComplete="off"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              value={data.user_email}
              onChange={(event)=>handleChange(event)}
              autoComplete="off"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={data.message}
              onChange={(event)=>handleChange(event)}
              autoComplete="off"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}