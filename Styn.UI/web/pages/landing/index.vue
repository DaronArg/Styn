<template>

  <Navbar></Navbar>

  <div class="relative h-screen bg-[url('/public/landing-page.jpg')] bg-cover bg-center bg-no-repeat">
    <!-- Filtro de color para mejorar la legibilidad -->
    <!-- <div class="absolute inset-0 bg-gradient-to-r from-green-700/60 to-blue-900/60"></div> -->

    <<div class="relative h-full flex items-center px-2 sm:px-8 md:px-12 lg:px-16 overflow-x-hidden">
      <div class="text-white max-w-2xl text-left">
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight">
  TRANSFORMÁ<br>
  TU TAMBO
</h1>
        <p class="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl">
          STYNAgro, el primer software ERP pensado para el productor lechero.
        </p>
      </div>
  </div>
  </div>

  <section class="max-w-4xl mx-auto py-12 pxn-4">
  <h2 class="text-2xl font-semibold text-center mb-6">¿Cómo ayuda un ERP al productor?</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

    <div class="bg-blue-900 text-white p-6 rounded-lg shadow-lg">
      <!-- Cow -->
      <!-- Cow Head SVG alternativa -->
<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-white" viewBox="0 0 512 512" fill="currentColor">
  <path d="M511.1 186.6c-4.6-23.2-26.8-36.9-50.3-31.6-5.4 1.2-10.4 3.2-14.8 5.8-9.6-14.5-25.2-26.1-43.2-31.7-4.1-15.2-11.9-30.2-23.3-42.4-14.4-15.1-32.1-25.5-50.8-30.1-9.2-25.4-28.5-46.2-54.1-57.8-4.2-1.9-9-1.9-13.2 0-25.6 11.6-44.9 32.4-54.1 57.8-18.7 4.6-36.4 15-50.8 30.1-11.4 12.2-19.2 27.2-23.3 42.4-18 5.6-33.6 17.2-43.2 31.7-4.4-2.6-9.4-4.6-14.8-5.8-23.5-5.3-45.7 8.4-50.3 31.6C-5.5 224.6 48 270.5 99.6 286c0 8.8.4 17.8 1.5 26.9C117 406.5 192 471 256 512c64-41 139-105.5 154.9-199.1 1.1-9.1 1.5-18.1 1.5-26.9 51.6-15.5 105.1-61.4 98.7-99.4zM176 304c-17.7 0-32-17.9-32-40s14.3-40 32-40 32 17.9 32 40-14.3 40-32 40zm160 0c-17.7 0-32-17.9-32-40s14.3-40 32-40 32 17.9 32 40-14.3 40-32 40z"/>
</svg>

      <h3 class="font-bold mt-4">Gestión integral del rodeo</h3>
      <p class="text-sm mt-1">Registra y controla en tiempo real la producción diaria, eventos reproductivos,
        sanitarios y gestiones de lotes y fichas individuales, mejorando la eficiencia y salud del rodeo.</p>
    </div>

    <div class="bg-blue-900 text-white p-6 rounded-lg shadow-lg">
      <!-- Stethoscope -->
      <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-white" viewBox="0 0 512 512" fill="currentColor">
        <path d="M447.1 64h-32a16 16 0 0 0-16 16v128a79.1 79.1 0 0 1-158.1 0v-80a16 16 0 0 0-32 0v80a111.1 111.1 0 0 0 96 110.5V384a48 48 0 0 1-96 0v-16a16 16 0 0 0-32 0v16a80 80 0 0 0 160 0v-65.5A111.1 111.1 0 0 0 448 208V80a16 16 0 0 0-16.9-16z"/>
      </svg>
      <h3 class="font-bold mt-4">Control reproductivo y sanitario</h3>
      <p class="text-sm mt-1">Facilita la carga y seguimiento de celos, partos, servicios y patologías, ayudando a
        optimizar ciclos reproductivos y mantener animales sanos.</p>
    </div>

    <div class="bg-blue-900 text-white p-6 rounded-lg shadow-lg">
      <!-- File-invoice-dollar -->
      <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-white" viewBox="0 0 384 512" fill="currentColor">
        <path d="M288 256H96v32h192v-32zm0 64H96v32h192v-32zm89.6-211.3L320 6.4A24 24 0 0 0 302.6 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V89.4c0-6.4-2.5-12.5-7-17.1zM256 52l76.1 76.1H256V52zM336 464H48V48h176v104a23.9 23.9 0 0 0 24 24h104v288z"/>
      </svg>
      <h3 class="font-bold mt-4">Gestión financiera</h3>
      <p class="text-sm mt-1">Permite controlar ingresos, egresos, ventas, costos y flujos de caja, brindando una
        visión clara para decisiones económicas acertadas.</p>
    </div>

    <div class="bg-blue-900 text-white p-6 rounded-lg shadow-lg">
      <!-- Dashboard (Chart Line) -->
      <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-white" viewBox="0 0 512 512" fill="currentColor">
        <path d="M500 384H12c-6.6 0-12 5.4-12 12v36c0 13.3 10.7 24 24 24h464c13.3 0 24-10.7 24-24v-36c0-6.6-5.4-12-12-12zM176 320h64v64h-64v-64zm96-128h64v192h-64V192zm-192 96h64v96H80v-96zm288-160h64v256h-64V96z"/>
      </svg>
      <h3 class="font-bold mt-4">Panel de indicadores</h3>
      <p class="text-sm mt-1">Visualiza toda la información clave en un solo lugar, promoviendo decisiones rápidas y
        fundamentadas para potenciar la rentabilidad del tambo.</p>
    </div>

  </div>
</section>




  <div class="bg-blue-900 text-white py-20 px-4 md:px-16">
    <div class="flex flex-col md:flex-row items-center text-center md:text-left gap-10">

      <!-- Contenedor de texto -->
      <div class="flex-1 flex flex-col items-center md:items-start">
        <h3 class="text-sm font-bold uppercase">STYN</h3>
        <h1 class="text-3xl md:text-5xl font-bold mt-2">
          CONOCEMOS LAS PROBLEMATICAS DE LOS PRODUCTORES
        </h1>
        <p class="mt-4 max-w-2xl">
          Nacimos en el corazón de una de las cuencas lecheras más grandes de Latinoamérica, lo que nos permite conocer
          de cerca las problemáticas del productor y sus desafíos diarios en la gestión del tambo. </p>
        <NuxtLink to="/landing/nosotros"
          class="mt-10 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-blue-900 transition">
          Más de nosotros
        </NuxtLink>
      </div>

      <!-- Contenedor del mapa responsivo -->
      <div class="flex-1 w-full">
        <div class="relative w-full pt-[56.25%]"> <!-- 16:9 aspect ratio -->
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29374176.178089038!2d-68.46450955884178!3d-26.010156210903848!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95caae460db27c0f%3A0x8be1b926d473c17b!2sRafaela%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1741922951321!5m2!1ses-419!2sar"
            class="absolute top-0 left-0 w-full h-full border-0" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>

    </div>
  </div>







  <div id="contacto" class="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 ">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row">

      <div class="w-full lg:w-1/2 pr-0 lg:pr-[6rem] mt-8">
        <h1 class="text-3xl font-bold text-gray-800 mb-6">
          ¿Necesitas aumentar la rentabilidad y tener control de todo el proceso?
        </h1>
        <p class="text-md text-gray-600">
          ¡Transforma tu tambo con STYNAgro! Completá el formulario y hacé todo más simple.

        </p>
        <img src="/control2.jpg" alt="Imagen descriptiva" class="w-full h-auto rounded-lg shadow-lg mt-8">

        <div class="bg-blue-900 text-white p-6 rounded-lg shadow-lg max-w-sm mt-8 mx-auto lg:ml-14">

          <h3 class="text-lg font-bold text-center">Contactate con nosotros</h3>
          <div class="mt-4">
            <p class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white mr-2" viewBox="0 0 24 24"
                fill="currentColor">
                <path
                  d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.36 11.36 0 003.55.57 1 1 0 011 1v3.33a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1h3.33a1 1 0 011 1 11.36 11.36 0 00.57 3.55 1 1 0 01-.27 1.11l-2.01 2.13z" />
              </svg>
              <a href="https://wa.me/5493562558323" target="_blank" class="hover:underline">
                +54 9 3562 55-8323
              </a>

            </p>
            <p class="text-sm ml-8">(Whatsapp y llamadas)</p>
            <p class="flex items-center mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white mr-2" fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M19.07 4H4.93A2.93 2.93 0 002 6.93v10.14A2.93 2.93 0 004.93 20h14.14A2.93 2.93 0 0022 17.07V6.93A2.93 2.93 0 0019.07 4zM20 7.74L12 12.41 4 7.74V6l8 4.67L20 6v1.74z">
                </path>
              </svg>
              <a href="mailto:styncontacto@gmail.com?subject=Consulta%20desde%20el%20sitio%20web&body=Hola%20STYNagro%2C%20quiero%20más%20información..."
                class="hover:underline">
                styncontacto@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <!-- Columna derecha: Formulario -->
      <div class="w-full lg:w-1/2 pl-0 lg:pl-8">
        <div class="bg-white p-8 rounded-lg shadow-lg text-left">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">Quiero que me asesoren</h2>

          <!-- Formulario -->
          <form @submit.prevent="enviarFormulario">
            <div class="mb-6">
              <input v-model="form.nombre" type="text" placeholder="Nombre"
                class="w-full px-2 py-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <div class="mb-6">
              <input v-model="form.apellido" type="text" placeholder="Apellido"
                class="w-full px-2 py-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <div class="mb-6">
              <label for="telefono" class="block text-sm font-medium text-gray-700 mb-2">Teléfono:</label>
              <input v-model="form.telefono" type="tel" id="telefono" placeholder="+54 91 1234-5678"
                class="w-full px-2 py-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <div class="mb-6">
              <input v-model="form.email" type="email" placeholder="Email Corporativo"
                class="w-full px-2 py-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <div class="mb-6">
              <input v-model="form.empresa" type="text" placeholder="Empresa"
                class="w-full px-2 py-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <div class="mb-6">
              <label for="pais" class="block text-sm font-medium text-gray-700 mb-2">Localidad:</label>
              <input v-model="form.empresa" type="text" placeholder="Localidad"
                class="w-full px-2 py-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <div class="mb-6">
              <label for="empleados" class="block text-sm font-medium text-gray-700 mb-2">¿Nivel de producción
                diario?</label>
              <select v-model="form.empleados" id="empleados"
                class="w-full px-2 py-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                <option value="" disabled selected>Elegir opción...</option>
                <option value="0 a 150">2.000L</option>
                <option value="151 a 250">2.000L a 5.000L</option>
                <option value="501 a 1000">> 5.000L</option>
              </select>
            </div>

            <!-- <div class="mb-6">
              <input v-model="form.usuariosSistema" type="number" placeholder="¿Cuántos usuarios operan el sistema?"
                class="w-full px-2 py-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            </div> -->

            <div class="mb-6">
              <textarea v-model="form.mensaje" rows="4" placeholder="¿Cómo podemos ayudarte?"
                class="w-full px-2 py-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>

            <div class="text-center">
              <button type="submit" class="bg-blue-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700">
                Solicitar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <Footer></Footer>

</template>

<style>
.bg-tambo {
  background-image: url('/assets/img/tambo4.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.bg-cultivo {
  background-image: url('/assets/img/image.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.bg-farmer {
  background-image: url('/assets/img/farmer.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.whatsapp-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25D366;
  border-radius: 50%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  padding: 10px;
  transition: background-color 0.3s;
}

.whatsapp-button:hover {
  background-color: #128C7E;
}

.whatsapp-icon {
  width: 50px;
  height: 50px;
}
</style>

<script setup>

import Footer from '@@/components/Footer.vue';
import Navbar from '@@/components/Navbar.vue';

const form = ref({
  nombre: '',
  apellido: '',
  telefono: '',
  email: '',
  empresa: '',
  pais: '',
  mensaje: ''
});

const enviarFormulario = () => {
  console.log("Formulario enviado:", form.value);
  alert("Formulario enviado correctamente");
};


</script>
