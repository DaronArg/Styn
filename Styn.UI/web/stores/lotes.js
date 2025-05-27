import { defineStore } from "pinia"
import { lotesApi } from "@/api/lotes"

export const useLotesStore = defineStore("lotes", {
  state: () => ({
    lotes: [],
    lote: null,
    loading: false,
    error: null,
  }),

  getters: {
    getLoteById: (state) => (id) => {
      return state.lotes.find((lote) => lote.id === id)
    },
  },

  actions: {
    async fetchLotes(params = {}) {
      this.loading = true
      try {
        const response = await lotesApi.getLotes(params)
        return response
      } catch (error) {
        this.error = error.message || "Error al cargar lotes"
        throw error
      } finally {
        this.loading = false
      }
    },

    async fetchLoteById(id) {
      this.loading = true
      try {
        const lote = await lotesApi.getLoteById(id)
        this.lote = lote
        return lote
      } catch (error) {
        this.error = error.message || "Error al cargar el lote"
        throw error
      } finally {
        this.loading = false
      }
    },

    async createLote(loteData) {
      this.loading = true
      try {
        const newLote = await lotesApi.createLote(loteData)
        return newLote
      } catch (error) {
        this.error = error.message || "Error al crear el lote"
        throw error
      } finally {
        this.loading = false
      }
    },

    async updateLote(loteData) {
      this.loading = true
      try {
        const updatedLote = await lotesApi.updateLote(loteData.id, loteData)
        return updatedLote
      } catch (error) {
        this.error = error.message || "Error al actualizar el lote"
        throw error
      } finally {
        this.loading = false
      }
    },

    async deleteLote(id) {
      this.loading = true
      try {
        await lotesApi.deleteLote(id)
      } catch (error) {
        this.error = error.message || "Error al eliminar el lote"
        throw error
      } finally {
        this.loading = false
      }
    },
  },
})
