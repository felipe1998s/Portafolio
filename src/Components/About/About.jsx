// src/components/About.js

import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hola, soy Felipe
            <br className="hidden lg:inline-block" />Me encanta construir aplicaciones web.
          </h1>
          <p className="mb-8 leading-relaxed">
            Soy desarrollador de software con experiencia en tecnologías frontend como HTML, CSS, Javascript
            y la biblioteca React para el desarrollo de interfaces de usuario. También tengo experiencia en el uso de las tecnologías
            al lado del backend como Node, Express, Sequelize y PostgreSQL. Además del uso de herramientas como Git y GitHub. 
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Trabaja conmigo
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Mira mis trabajos anteriores
            </a>
            <a
              href="FelipeSuarezCV.pdf" 
              download="Felipe-Suarez-CV.pdf"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              CV
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full w-50"
            alt="hero"
            src="https://media.licdn.com/dms/image/D4E03AQGhPK42VtlAAA/profile-displayphoto-shrink_200_200/0/1685404040687?e=1692230400&v=beta&t=ebd9JL_0jodDIP7EIAsibS_ki9Lt9pcLX8iduiEbkyI"
          />
        </div>
      </div>
    </section>
  );
}