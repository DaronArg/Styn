import { apiClient } from "./client"

export const secadoApi = {
  getSecados: async (params = {}) => {
    try {
      const response = await apiClient.get("/secados", { params })
      return response.data
    } catch (error) {
      console.error("Error fetching secados:", error)
      throw error
    }
  },

  getSecadoById: async (id) => {
    try {
      const response = await apiClient.get(`/secados/${id}`)
      return response.data
    } catch (error) {
      console.error(`Error fetching secado ${id}:`, error)
      throw error
    }
  },

  createSecado: async (secadoData) => {
    try {
      const response = await apiClient.post("/secados", secadoData)
      return response.data
    } catch (error) {
      console.error("Error creating secado:", error)
      throw error
    }
  },

  updateSecado: async (id, secadoData) => {
    try {
      const response = await apiClient.put(`/secados/${id}`, secadoData)
      return response.data
    } catch (error) {
      console.error(`Error updating secado ${id}:`, error)
      throw error
    }
  },

  deleteSecado: async (id) => {
    try {
      const response = await apiClient.delete(`/secados/${id}`)
      return response.data
    } catch (error) {
      console.error(`Error deleting secado ${id}:`, error)
      throw error
    }
  },
}
