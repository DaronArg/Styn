import { defineStore } from "pinia"
import { secadoApi } from "@/api/secado"

export const useSecadoStore = defineStore("secado", {
  state: () => ({
    secados: [],
    secado: null,
    loading: false,
    error: null,
  }),

  getters: {
    getSecadoById: (state) => (id) => {
      return state.secados.find((secado) => secado.id === id)
    },
  },

  actions: {
    async fetchSecados(params = {}) {
      this.loading = true
      try {
        const response = await secadoApi.getSecados(params)
        return response
      } catch (error) {
        this.error = error.message || "Error al cargar secados"
        throw error
      } finally {
        this.loading = false
      }
    },

    async fetchSecadoById(id) {
      this.loading = true
      try {
        const secado = await secadoApi.getSecadoById(id)
        this.secado = secado
        return secado
      } catch (error) {
        this.error = error.message || "Error al cargar el secado"
        throw error
      } finally {
        this.loading = false
      }
    },

    async createSecado(secadoData) {
      this.loading = true
      try {
        const newSecado = await secadoApi.createSecado(secadoData)
        return newSecado
      } catch (error) {
        this.error = error.message || "Error al crear el secado"
        throw error
      } finally {
        this.loading = false
      }
    },

    async updateSecado(secadoData) {
      this.loading = true
      try {
        const updatedSecado = await secadoApi.updateSecado(secadoData.id, secadoData)
        return updatedSecado
      } catch (error) {
        this.error = error.message || "Error al actualizar el secado"
        throw error
      } finally {
        this.loading = false
      }
    },

    async deleteSecado(id) {
      this.loading = true
      try {
        await secadoApi.deleteSecado(id)
      } catch (error) {
        this.error = error.message || "Error al eliminar el secado"
        throw error
      } finally {
        this.loading = false
      }
    },
  },
})
