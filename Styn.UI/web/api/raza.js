import { apiClient } from "./client"

export const razaApi = {
  getRazas: async (params = {}) => {
    try {
      const response = await apiClient.get("/raza", { params })
      return response.data
    } catch (error) {
      console.error("Error fetching razas:", error)
      throw error
    }
  },

  getRazaById: async (id) => {
    try {
      const response = await apiClient.get(`/razas/${id}`)
      return response.data
    } catch (error) {
      console.error(`Error fetching raza ${id}:`, error)
      throw error
    }
  },

  createRaza: async (razaData) => {
    try {
      const response = await apiClient.post("/raza", razaData)
      return response.data
    } catch (error) {
      console.error("Error creating raza:", error)
      throw error
    }
  },

  updateRaza: async (id, razaData) => {
    try {
      const response = await apiClient.put(`/raza/${id}`, razaData)
      return response.data
    } catch (error) {
      console.error(`Error updating raza ${id}:`, error)
      throw error
    }
  },

  deleteRaza: async (id) => {
    try {
      const response = await apiClient.delete(`/raza/${id}`)
      return response.data
    } catch (error) {
      console.error(`Error deleting raza ${id}:`, error)
      throw error
    }
  },
}
