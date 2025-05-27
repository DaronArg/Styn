import { defineStore } from "pinia"
import { razaApi } from "@/api/raza"

export const useRazaStore = defineStore("raza", {
  state: () => ({
    razas: [],
    raza: null,
    loading: false,
    error: null,
  }),

  getters: {
    getRazaById: (state) => (id) => {
      return state.razas.find((raza) => raza.id === id)
    },
  },

  actions: {
    async fetchRazas(params = {}) {
      this.loading = true
      try {
        const response = await razaApi.getRazas(params)
        return response
      } catch (error) {
        this.error = error.message || "Error al cargar razas"
        throw error
      } finally {
        this.loading = false
      }
    },

    async fetchRazaById(id) {
      this.loading = true
      try {
        const raza = await razaApi.getRazaById(id)
        this.raza = raza
        return raza
      } catch (error) {
        this.error = error.message || "Error al cargar la raza"
        throw error
      } finally {
        this.loading = false
      }
    },

    async createRaza(razaData) {
      this.loading = true
      try {
        const newRaza = await razaApi.createRaza(razaData)
        return newRaza
      } catch (error) {
        this.error = error.message || "Error al crear la raza"
        throw error
      } finally {
        this.loading = false
      }
    },

    async updateRaza(razaData) {
      this.loading = true
      try {
        const updatedRaza = await razaApi.updateRaza(razaData.id, razaData)
        return updatedRaza
      } catch (error) {
        this.error = error.message || "Error al actualizar la raza"
        throw error
      } finally {
        this.loading = false
      }
    },

    async deleteRaza(id) {
      this.loading = true
      try {
        await razaApi.deleteRaza(id)
      } catch (error) {
        this.error = error.message || "Error al eliminar la raza"
        throw error
      } finally {
        this.loading = false
      }
    },
  },
})
