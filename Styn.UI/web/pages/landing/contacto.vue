<template>
  <Navbar></Navbar>
  <div id="contacto" class="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 mt-12">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row">
      <!-- Columna izquierda: Texto + Imagen + Ficha de Contacto -->
      <div class="w-full lg:w-1/2 pr-0 lg:pr-[6rem] mt-8">
        <h1 class="text-3xl font-bold text-gray-800 mb-6">
          ¿Necesitas aumentar la rentabilidad y tener control de todo el proceso?
        </h1>
        <p class="text-md text-gray-600">
          ¡Evoluciona la gestión de tu negocio con STYNAgro! Completa el formulario y comienza a optimizar los
          procesos de tu empresa.
        </p>
        <img src="/control2.jpg" alt="Imagen descriptiva" class="w-full h-auto rounded-lg shadow-lg mt-8">

        <!-- Ficha de contacto dentro de la misma columna -->
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

            <!-- <div class="mb-6">
              <label for="pais" class="block text-sm font-medium text-gray-700 mb-2">País:</label>
              <select v-model="form.pais" id="pais"
                class="w-full px-2 py-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                <option value="" disabled selected>Elegir país...</option>
                <option value="argentina">Argentina</option>
                <option value="bolivia">Bolivia</option>
                <option value="brasil">Brasil</option>
                <option value="chile">Chile</option>
                <option value="colombia">Colombia</option>
                <option value="costa-rica">Costa Rica</option>
                <option value="cuba">Cuba</option>
                <option value="ecuador">Ecuador</option>
                <option value="mexico">México</option>
                <option value="peru">Perú</option>
                <option value="uruguay">Uruguay</option>
                <option value="venezuela">Venezuela</option>
                <option value="otro">Otro</option>
              </select>
            </div> -->

            <div class="mb-6">
              <label for="empleados" class="block text-sm font-medium text-gray-700 mb-2">¿Nivel de producción lechera
                mensual aproximado?</label>
              <select v-model="form.empleados" id="empleados"
                class="w-full px-2 py-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                <option value="" disabled selected>Elegir opción...</option>
                <option value="0 a 150">30.000L</option>
                <option value="151 a 250">31.000L a 60.000L</option>
                <option value="151 a 250">61.000L a 120.000L</option>
                <option value="251 a 500">121.000L a 240.000L</option>
                <option value="251 a 500">241.000L a 400.000L</option>
                <option value="501 a 1000">> 400.000L</option>
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

<script setup>
import Footer from '@@/components/Footer.vue';
import Navbar from '@@/components/Navbar.vue';
import { ref } from 'vue';


const form = ref({
  nombre: '',
  apellido: '',
  telefono: '',
  email: '',
  empresa: '',
  pais: '',
  empleados: '',
  usuariosSistema: '',
  mensaje: ''
});

const enviarFormulario = () => {
  console.log("Formulario enviado:", form.value);
  alert("Formulario enviado correctamente");
};
</script>
