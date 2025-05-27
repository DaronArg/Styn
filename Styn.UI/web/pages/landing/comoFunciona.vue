<template>
  <Navbar></Navbar>
  <div>
    <!-- Encabezado -->
    <section class="bg-blue-900 text-white text-center py-20 mt-8">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-3xl font-bold">Un aliado estratégico para tu tambo</h1>
        <p class="mt-4">STYNAgro te ayuda a gestionar cada etapa del proceso productivo con información precisa y actualizada.</p>
      </div>
    </section>

    <!-- Carrusel de funcionalidades -->
    <section class="bg-gray-50 py-12">
      <div class="max-w-5xl mx-auto px-4">
        <h2 class="text-2xl font-semibold text-center mb-8 text-blue-900">¿Qué puedes gestionar con STYNAgro?</h2>
        <div class="relative">
          <!-- Botón Anterior -->
          <button
            @click="prevModule"
            class="absolute -left-8 top-1/2 -translate-y-1/2 z-10 bg-white border border-blue-900 rounded-full p-2 shadow hover:bg-blue-100 transition"
            aria-label="Anterior"
          >
            <svg class="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <!-- Contenedor de tarjetas -->
          <div class="flex gap-6 overflow-x-auto scrollbar-hide justify-center">
            <div
              v-for="(modulo, idx) in visibleModules"
              :key="idx"
              class="bg-white rounded-xl shadow-md p-6 min-w-[260px] max-w-sm flex-1 transition-transform duration-300"
            >
              <h3 class="text-lg font-bold text-blue-900 mb-2">{{ modulo.title }}</h3>
              <p class="text-gray-700 text-sm">{{ modulo.description }}</p>
            </div>
          </div>
          <!-- Botón Siguiente -->
          <button
            @click="nextModule"
            class="absolute -right-8 top-1/2 -translate-y-1/2 z-10 bg-white border border-blue-900 rounded-full p-2 shadow hover:bg-blue-100 transition"
            aria-label="Siguiente"
          >
            <svg class="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <!-- Indicadores -->
        <div class="flex justify-center gap-2 mt-6">
          <button
            v-for="i in totalSlides"
            :key="i"
            @click="goToModule(i-1)"
            class="w-3 h-3 rounded-full"
            :class="{
              'bg-blue-900': moduleStartIndex === (i-1),
              'bg-gray-300': moduleStartIndex !== (i-1)
            }"
          ></button>
        </div>
      </div>
    </section>

    <!-- Implementación -->
    <section class="bg-gray-100 py-12">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-2xl font-semibold text-center mb-6">Implementación en 6 pasos</h2>
        <ol class="space-y-4">
          <li
            v-for="(paso, index) in implementacion"
            :key="index"
            class="p-4 border-l-4 border-blue-900 bg-white shadow"
          >
            <h3 class="font-semibold">{{ paso.titulo }}</h3>
            <p class="text-gray-600">{{ paso.descripcion }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- Preguntas frecuentes -->
    <section class="max-w-4xl mx-auto py-12 px-4">
      <h2 class="text-2xl font-semibold text-center mb-6">Preguntas Frecuentes</h2>
      <div
        v-for="(pregunta, index) in preguntas"
        :key="index"
        class="border-b py-4 cursor-pointer"
        @click="toggleFAQ(index)"
      >
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold">{{ pregunta.pregunta }}</h3>
          <svg
            v-if="pregunta.activa"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-blue-900 transform rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-blue-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 15l-7-7-7 7" />
          </svg>
        </div>
        <p v-show="pregunta.activa" class="text-gray-600 mt-2">{{ pregunta.respuesta }}</p>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-blue-900 text-black text-center py-20 mt-8">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-2xl font-bold text-white">Empieza a usar STYNAgro hoy mismo</h2>
        <div class="mt-8">

          <NuxtLink to="/landing/contacto"
        class="text-white px-6 py-3 rounded-lg font-medium text-center border border-white rounded-full hover:bg-white hover:text-blue-900 transition">
        Solicitar demo
    </NuxtLink>
          

          
        </div>
      </div>
    </section>
  </div>
  <Footer></Footer>
</template>

<script>
export default {
  data() {
    return {
      implementacion: [
        { titulo: "Paso 1: Solicita la demo", descripcion: "Contáctanos para acceder a una prueba gratuita de 3 meses." },
        { titulo: "Paso 2: Recibe un tutorial básico", descripcion: "Accede a una guía o capacitación inicial sobre el funcionamiento de STYNAgro para comenzar a familiarizarte con el sistema." },
        { titulo: "Paso 3: Prueba el sistema", descripcion: "Usa todas las funcionalidades y ajusta el software a las necesidades de tu tambo o empresa agropecuaria." },
        { titulo: "Paso 4: Confirma tu licencia", descripcion: "Si estás satisfecho, realiza el pago para continuar con el software." },
        { titulo: "Paso 5: Accede al software", descripcion: "Comienza a usar STYNAgro con soporte técnico siempre disponible." },
        { titulo: "Paso 6: Capacitación personalizada", descripcion: "Recibe una capacitación adaptada a tu equipo y procesos para aprovechar al máximo las herramientas del sistema." },
      ],
      preguntas: [
        { pregunta: "¿Para qué tipo de actividad está destinado?", respuesta: "Es un software especializado para producción agropecuaria especializada en tambos.", activa: false },
        { pregunta: "¿Solo sirve para grandes productores?", respuesta: "No, es adaptable tanto para pequeñas como grandes empresas.", activa: false },
        { pregunta: "¿Cómo aprendo a usar el software?", respuesta: "Te capacitamos desde el inicio y tendrás un tutor disponible.", activa: false },
        { pregunta: "¿STYNAgro funciona en cualquier dispositivo?", respuesta: "Sí, es una plataforma online que podés utilizar desde la computadora, tablet o celular, con acceso desde cualquier lugar.", activa: false },
        { pregunta: "¿Qué tipo de soporte técnico ofrecen?", respuesta: "Contamos con asistencia continua para resolver dudas, acompañarte en el uso del sistema y brindarte soluciones rápidas ante cualquier inconveniente.", activa: false },
        { pregunta: "¿Puedo probar STYNAgro antes de contratarlo?", respuesta: "Sí, ofrecemos una demo gratuita de 3 meses para que puedas probar todas las funcionalidades antes de confirmar la licencia.", activa: false },
      ],
      modules: [
        {
          title: "Módulo Productivo",
          description: "Permite cargar en tiempo real la producción diaria y realizar un control lechero mensual, con un seguimiento detallado de la eficiencia por lote y vaca para optimizar la producción.",
        },
        {
          title: "Módulo Reproductivo",
          description: "Facilita el registro de celos, partos, servicios y abortos, ofreciendo un control completo sobre la reproducción del rodeo, asegurando su eficiencia y salud reproductiva.",
        },
        {
          title: "Módulo Sanitario",
          description: "Registra exámenes genitales y patologías, actualizando la ficha animal, lo que permite un monitoreo constante y un control sanitario eficiente del rodeo.",
        },
        {
          title: "Gestión de Rodeo",
          description: "Permite buscar y crear nuevas fichas animales, gestionar descartes, y administrar el traspaso de lotes, asegurando una correcta organización y control del rodeo.",
        },
        {
          title: "Módulo Financiero",
          description: "Controla los flujos de caja, ingresos, egresos, cuentas por cobrar y por pagar, ventas totales y clasificación de costos, proporcionando una visión clara y precisa de la situación financiera.",
        },
        {
          title: "Panel de Control",
          description: "Visualiza los indicadores clave de los módulos anteriores, brindando un resumen integral para facilitar decisiones estratégicas en tiempo real.",
        }
      ],
      moduleStartIndex: 0,
      modulesItemsPerPage: 3,
    };
  },
  computed: {
    visibleModules() {
      // Hace que el carrusel sea circular y de uno en uno
      let end = this.moduleStartIndex + this.modulesItemsPerPage;
      if (end <= this.modules.length) {
        return this.modules.slice(this.moduleStartIndex, end);
      } else {
        // Si el final se pasa, concatena desde el inicio (loop)
        return this.modules.slice(this.moduleStartIndex).concat(this.modules.slice(0, end - this.modules.length));
      }
    },
    totalSlides() {
      // Un slide por cada módulo (avanza de a uno)
      return this.modules.length;
    }
  },
  methods: {
    toggleFAQ(index) {
      this.preguntas[index].activa = !this.preguntas[index].activa;
    },
    nextModule() {
      this.moduleStartIndex = (this.moduleStartIndex + 1) % this.modules.length;
    },
    prevModule() {
      this.moduleStartIndex = (this.moduleStartIndex - 1 + this.modules.length) % this.modules.length;
    },
    goToModule(idx) {
      this.moduleStartIndex = idx;
    },
    updateModulesItemsPerPage() {
      if (window.innerWidth < 640) {
        this.modulesItemsPerPage = 1;
      } else if (window.innerWidth < 1024) {
        this.modulesItemsPerPage = 2;
      } else {
        this.modulesItemsPerPage = 3;
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.updateModulesItemsPerPage);
    this.updateModulesItemsPerPage();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateModulesItemsPerPage);
  }
};
</script>

<style scoped>
/* Oculta scrollbar en navegadores modernos */
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
</style>