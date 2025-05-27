<template>
  <Navbar></Navbar>
    <div>
      <!-- Hero Section -->
      <section class="bg-blue-900 text-white text-center py-20 mt-8">
        <div class="max-w-3xl mx-auto">
          <h1 class="text-3xl font-bold">Sobre STYN</h1>
          <p class="mt-4">Innovación y tecnología para el agro.</p>
        </div>
      </section>
      <!-- <section class="relative bg-cover bg-center h-80 flex items-center justify-center text-white">
        <div class="text-center bg-black bg-opacity-50 p-6 rounded-lg">
          <h1 class="text-3xl md:text-5xl font-bold">Sobre STYN</h1>
          <p class="text-lg mt-2">Innovación y tecnología para el agro</p>
        </div>
      </section> -->
  
      <!-- Misión y Visión -->
      <section class="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
        <div class="bg-blue-100 p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold text-blue-800">Misión</h2>
          <p class="mt-4 text-gray-700">Ayudar a los tambos a digitalizar y automatizar su gestión, brindando una visión clara de sus operaciones, permitiendo anticipar problemas y tomar decisiones informadas para mejorar la eficiencia y rentabilidad del negocio agropecuario.</p>
        </div>
        <div class="bg-green-100 p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold text-green-800">Visión</h2>
          <p class="mt-4 text-gray-700">Ser la solución tecnológica líder en gestión de tambos, ofreciendo no solo un software, sino un conjunto de soluciones tecnológicas y de negocios que aporten valor al productor agropecuario, maximizando su eficiencia y crecimiento sostenible.
</p>
        </div>
      </section>
  
      <!-- Pilares -->
      <section class="max-w-6xl mx-auto px-6 py-12">
        <h2 class="text-3xl font-bold text-center">Nuestros Pilares</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div class="text-center p-6 bg-white shadow-lg rounded-lg">
            <img src="../../public/gestion.png" class="mx-auto h-12" />
            <h3 class="text-xl font-bold mt-4">Innovación</h3>
            <p class="mt-2 text-gray-600">Fomentamos la creatividad y el uso de tecnología para el agro.</p>
          </div>
          <div class="text-center p-6 bg-white shadow-lg rounded-lg">
            <img src="../../public/unido.png" class="mx-auto h-12" />
            <h3 class="text-xl font-bold mt-4">Colaboración</h3>
            <p class="mt-2 text-gray-600">Trabajamos en equipo para lograr soluciones efectivas.</p>
          </div>
          <div class="text-center p-6 bg-white shadow-lg rounded-lg">
            <img src="../../public/cliente.png" class="mx-auto h-12" />
            <h3 class="text-xl font-bold mt-4">Cliente en el centro</h3>
            <p class="mt-2 text-gray-600">Ponemos al productor agropecuario en el corazón de nuestras soluciones.</p>
          </div>
          <div class="text-center p-6 bg-white shadow-lg rounded-lg">
            <img src="../../public/transparencia.png" class="mx-auto h-12" />
            <h3 class="text-xl font-bold mt-4">Transparencia</h3>
            <p class="mt-2 text-gray-600">Nos guiamos por la honestidad y la comunicación clara.</p>
          </div>
        </div>
      </section>
  
      <!-- Founders -->
      <section class="max-w-6xl mx-auto px-6 py-12">
        <h2 class="text-3xl font-bold text-center">Fundadores</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          <div v-for="founder in founders" :key="founder.name" class="text-center">
            <img :src="founder.image" class="w-40 h-40 mx-auto rounded-full object-cover" />
            <h3 class="text-xl font-bold mt-4">{{ founder.name }}</h3>
            <p class="text-gray-600">Co-Fundador</p>
            <a :href="founder.linkedin" target="_blank" class="text-blue-600 hover:underline">LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
    <Footer></Footer>
  </template>
  
  <script setup>
  import Footer from '@@/components/Footer.vue';
  import Navbar from '@@/components/Navbar.vue';


  const founders = [
  { name: "Alejandro Lambrese", image: "/alito.jpeg", linkedin: "https://www.linkedin.com/in/alejandro-lambrese-412123231/" },
    { name: "Valentino Mottura", image: "/vale12.jpg", linkedin: "https://www.linkedin.com/in/valentino-mottura-3abaaa2a2/" },
    { name: "Dario Cuevas", image: "/dariocuevas.jpeg", linkedin: "https://www.linkedin.com/in/dario-cuevas/" },
    { name: "Valentin Sanchez", image: "/valesanchez.jpeg", linkedin: "https://www.linkedin.com/in/valent%C3%ADn-s%C3%A1nchez-9a090a322/" },
  ];
  </script>
  
  <style>
  section {
    scroll-margin-top: 80px;
  }
  </style>
  