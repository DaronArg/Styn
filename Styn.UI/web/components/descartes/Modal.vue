<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div class="w-full max-w-lg bg-white rounded-lg shadow-lg">
      <div class="flex items-center justify-between p-4 border-b">
        <h2 class="text-xl font-semibold">
          {{ descarte ? 'Editar Descarte' : 'Nuevo Descarte' }}
        </h2>
        <button
          @click="$emit('close')"
          class="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>

      <form @submit.prevent="handleSubmit" class="p-4">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div class="mb-4">
            <label for="fecha" class="block mb-1 font-medium text-gray-700">Fecha</label>
            <input
              id="fecha"
              v-model="formData.fecha"
              type="date"
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div class="mb-4">
            <label for="rp" class="block mb-1 font-medium text-gray-700">RP</label>
            <input
              id="rp"
              v-model="formData.rp"
              type="text"
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div class="mb-4">
            <label for="tipoDescarte" class="block mb-1 font-medium text-gray-700">Tipo de Descarte</label>
            <select
              id="tipoDescarte"
              v-model="formData.tipoDescarte"
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="Voluntario">Voluntario</option>
              <option value="Involuntario">Involuntario</option>
              <option value="Enfermedad">Enfermedad</option>
              <option value="Baja Producción">Baja Producción</option>
              <option value="Otro">Otro</option>
            </select>
          </div>

          <div class="mb-4">
            <label for="responsable" class="block mb-1 font-medium text-gray-700">Responsable</label>
            <input
              id="responsable"
              v-model="formData.responsable"
              type="text"
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div class="mb-4 md:col-span-2">
            <label for="observacion" class="block mb-1 font-medium text-gray-700">Observación</label>
            <textarea
              id="observacion"
              v-model="formData.observacion"
              rows="3"
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
        </div>

        <div class="flex justify-end mt-6 space-x-2">
          <button
            type="button"
            @click="$emit('close')"
            class="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cancelar
          </button>
          <button
            type="submit"
            class="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            :disabled="loading"
          >
            {{ loading ? 'Guardando...' : 'Guardar' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "DescarteModal",
  props: {
    descarte: {
      type: Object,
      default: null,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["close", "save"],
  data() {
    return {
      formData: {
        id: null,
        fecha: new Date().toISOString().split("T")[0],
        rp: "",
        tipoDescarte: "",
        observacion: "",
        responsable: "",
      },
    }
  },
  mounted() {
    if (this.descarte) {
      // Clonar el objeto para evitar modificar el original
      Object.keys(this.formData).forEach((key) => {
        if (key in this.descarte) {
          if (key === "fecha") {
            // Formatear la fecha para el input date (YYYY-MM-DD)
            const date = new Date(this.descarte[key])
            this.formData[key] = date.toISOString().split("T")[0]
          } else {
            this.formData[key] = this.descarte[key]
          }
        }
      })
    }
  },
  methods: {
    handleSubmit() {
      const formattedData = { ...this.formData }
      this.$emit("save", formattedData)
    },
  },
}
</script>
