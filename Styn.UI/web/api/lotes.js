import { apiClient } from "./client"

export const lotesApi = {
  getLotes: async (params = {}) => {
    try {
      const response = await apiClient.get("/lotes", { params })
      return response.data
    } catch (error) {
      console.error("Error fetching lotes:", error)
      throw error
    }
  },

  getLoteById: async (id) => {
    try {
      const response = await apiClient.get(`/lotes/${id}`)
      return response.data
    } catch (error) {
      console.error(`Error fetching lote ${id}:`, error)
      throw error
    }
  },

  createLote: async (loteData) => {
    try {
      const response = await apiClient.post("/lotes", loteData)
      return response.data
    } catch (error) {
      console.error("Error creating lote:", error)
      throw error
    }
  },

  updateLote: async (id, loteData) => {
    try {
      const response = await apiClient.put(`/lotes/${id}`, loteData)
      return response.data
    } catch (error) {
      console.error(`Error updating lote ${id}:`, error)
      throw error
    }
  },

  deleteLote: async (id) => {
    try {
      const response = await apiClient.delete(`/lotes/${id}`)
      return response.data
    } catch (error) {
      console.error(`Error deleting lote ${id}:`, error)
      throw error
    }
  },
}
