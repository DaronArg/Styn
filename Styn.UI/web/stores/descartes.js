import { defineStore } from "pinia"
import { descartesApi } from "@/api/descartes"

export const useDescartesStore = defineStore("descartes", {
  state: () => ({
    descartes: [],
    descarte: null,
    loading: false,
    error: null,
  }),

  getters: {
    getDescarteById: (state) => (id) => {
      return state.descartes.find((descarte) => descarte.id === id)
    },
  },

  actions: {
    async fetchDescartes(params = {}) {
      this.loading = true
      try {
        const response = await descartesApi.getDescartes(params)
        return response
      } catch (error) {
        this.error = error.message || "Error al cargar descartes"
        throw error
      } finally {
        this.loading = false
      }
    },

    async fetchDescarteById(id) {
      this.loading = true
      try {
        const descarte = await descartesApi.getDescarteById(id)
        this.descarte = descarte
        return descarte
      } catch (error) {
        this.error = error.message || "Error al cargar el descarte"
        throw error
      } finally {
        this.loading = false
      }
    },

    async createDescarte(descarteData) {
      this.loading = true
      try {
        const newDescarte = await descartesApi.createDescarte(descarteData)
        return newDescarte
      } catch (error) {
        this.error = error.message || "Error al crear el descarte"
        throw error
      } finally {
        this.loading = false
      }
    },

    async updateDescarte(descarteData) {
      this.loading = true
      try {
        const updatedDescarte = await descartesApi.updateDescarte(descarteData.id, descarteData)
        return updatedDescarte
      } catch (error) {
        this.error = error.message || "Error al actualizar el descarte"
        throw error
      } finally {
        this.loading = false
      }
    },

    async deleteDescarte(id) {
      this.loading = true
      try {
        await descartesApi.deleteDescarte(id)
      } catch (error) {
        this.error = error.message || "Error al eliminar el descarte"
        throw error
      } finally {
        this.loading = false
      }
    },
  },
})
