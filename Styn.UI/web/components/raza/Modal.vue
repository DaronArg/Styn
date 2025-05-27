<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div class="w-full max-w-md bg-white rounded-lg shadow-lg">
      <div class="flex items-center justify-between p-4 border-b">
        <h2 class="text-xl font-semibold">
          {{ raza ? 'Editar Raza' : 'Nueva Raza' }}
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
        <div class="mb-4">
          <label for="nombre" class="block mb-1 font-medium text-gray-700">Nombre</label>
          <input
            id="nombre"
            v-model="formData.nombre"
            type="text"
            class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
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
  name: "RazaModal",
  props: {
    raza: {
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
        id: 0,
        nombre: "",
      },
    }
  },
  mounted() {
    if (this.raza) {
      // Clonar el objeto para evitar modificar el original
      Object.keys(this.formData).forEach((key) => {
        if (key in this.raza) {
          this.formData[key] = this.raza[key]
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
