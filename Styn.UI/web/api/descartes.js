import { apiClient } from "./client"

export const descartesApi = {
  getDescartes: async (params = {}) => {
    try {
      const response = await apiClient.get("/descartes", { params })
      return response.data
    } catch (error) {
      console.error("Error fetching descartes:", error)
      throw error
    }
  },

  getDescarteById: async (id) => {
    try {
      const response = await apiClient.get(`/descartes/${id}`)
      return response.data
    } catch (error) {
      console.error(`Error fetching descarte ${id}:`, error)
      throw error
    }
  },

  createDescarte: async (descarteData) => {
    try {
      const response = await apiClient.post("/descartes", descarteData)
      return response.data
    } catch (error) {
      console.error("Error creating descarte:", error)
      throw error
    }
  },

  updateDescarte: async (id, descarteData) => {
    try {
      const response = await apiClient.put(`/descartes/${id}`, descarteData)
      return response.data
    } catch (error) {
      console.error(`Error updating descarte ${id}:`, error)
      throw error
    }
  },

  deleteDescarte: async (id) => {
    try {
      const response = await apiClient.delete(`/descartes/${id}`)
      return response.data
    } catch (error) {
      console.error(`Error deleting descarte ${id}:`, error)
      throw error
    }
  },
}
