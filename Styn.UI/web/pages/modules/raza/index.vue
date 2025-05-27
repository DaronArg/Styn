<template>
  <div class="container px-4 py-6 mx-auto">
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-bold">Razas</h1>
      <button
        @click="openModal()"
        class="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Nueva Raza
      </button>
    </div>

    <!-- Filtros -->
    <ModuleFilters
      :filters="filters"
      @filter-change="handleFilterChange"
      @search="handleSearch"
    />

    <!-- Tabla -->
    <ModuleTable
      :columns="columns"
      :data="razas"
      :loading="loading"
      class="mb-6"
    >
      <template #cell(actions)="{ item }">
        <div class="flex space-x-2">
          <button
            @click="openModal(item)"
            class="p-1 text-blue-600 hover:text-blue-800 focus:outline-none"
            title="Editar"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              ></path>
            </svg>
          </button>
          <button
            @click="confirmDelete(item)"
            class="p-1 text-red-600 hover:text-red-800 focus:outline-none"
            title="Eliminar"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              ></path>
            </svg>
          </button>
        </div>
      </template>
    </ModuleTable>

    <!-- Paginación -->
    <ModulePagination
      :total="totalItems"
      :current-page="currentPage"
      :per-page="perPage"
      @page-change="handlePageChange"
    />

    <!-- Modal de Raza -->
    <RazaModal
      v-if="isModalOpen"
      :raza="selectedRaza"
      :loading="loading"
      @close="closeModal"
      @save="saveRaza"
    />

    <!-- Modal de Confirmación -->
    <ConfirmModal
      v-if="isConfirmModalOpen"
      title="Eliminar Raza"
      message="¿Está seguro que desea eliminar esta raza? Esta acción no se puede deshacer."
      @confirm="deleteRaza"
      @cancel="isConfirmModalOpen = false"
    />
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue"
import { useRazaStore } from "@/stores/raza"
import ModuleFilters from "@/components/module/Filters.vue"
import ModuleTable from "@/components/module/Table.vue"
import ModulePagination from "@/components/module/Pagination.vue"
import RazaModal from "@/components/raza/Modal.vue"
import ConfirmModal from "@/components/common/ConfirmModal.vue"
definePageMeta({
  layout:"adminl"
})
export default {
  name: "RazaPage",
  components: {
    ModuleFilters,
    ModuleTable,
    ModulePagination,
    RazaModal,
    ConfirmModal,
  },
  setup() {
    // Store
    const razaStore = useRazaStore()

    // Estado
    const razas = ref([])
    const loading = ref(true)
    const isModalOpen = ref(false)
    const isConfirmModalOpen = ref(false)
    const selectedRaza = ref(null)
    const currentPage = ref(1)
    const perPage = ref(10)
    const totalItems = ref(0)
    const searchQuery = ref("")
    const activeFilters = ref({})

    // Definición de columnas para la tabla
    const columns = [
      { key: "nombre", label: "Nombre" },
      { key: "actions", label: "Acciones" },
    ]

    // Definición de filtros
    const filters = []

    // Métodos
    const fetchRazas = async () => {
      loading.value = true
      try {
        const response = await razaStore.fetchRazas({
          page: currentPage.value,
          perPage: perPage.value,
          search: searchQuery.value,
          filters: activeFilters.value,
        })
        console.log(response)
        razas.value = response
        totalItems.value = response.length
      } catch (error) {
        console.error("Error fetching razas:", error)
      } finally {
        loading.value = false
      }
    }

    const openModal = (raza = null) => {
      selectedRaza.value = raza
      isModalOpen.value = true
    }

    const closeModal = () => {
      selectedRaza.value = null
      isModalOpen.value = false
    }

    const saveRaza = async (razaData) => {
      loading.value = true
      try {
        if (razaData.id) {
          await razaStore.updateRaza(razaData)
        } else {
          await razaStore.createRaza(razaData)
        }
        await fetchRazas()
        closeModal()
      } catch (error) {
        console.error("Error saving raza:", error)
      } finally {
        loading.value = false
      }
    }

    const confirmDelete = (raza) => {
      selectedRaza.value = raza
      isConfirmModalOpen.value = true
    }

    const deleteRaza = async () => {
      if (!selectedRaza.value) return

      loading.value = true
      try {
        await razaStore.deleteRaza(selectedRaza.value.id)
        await fetchRazas()
        isConfirmModalOpen.value = false
        selectedRaza.value = null
      } catch (error) {
        console.error("Error deleting raza:", error)
      } finally {
        loading.value = false
      }
    }

    const handleFilterChange = (filters) => {
      activeFilters.value = filters
      currentPage.value = 1 // Reset to first page when filters change
      fetchRazas()
    }

    const handleSearch = (query) => {
      searchQuery.value = query
      currentPage.value = 1 // Reset to first page when search changes
      fetchRazas()
    }

    const handlePageChange = (page) => {
      currentPage.value = page
      fetchRazas()
    }

    // Cargar datos iniciales
    onMounted(() => {
      fetchRazas()
    })

    return {
      razas,
      loading,
      isModalOpen,
      isConfirmModalOpen,
      selectedRaza,
      currentPage,
      perPage,
      totalItems,
      columns,
      filters,
      openModal,
      closeModal,
      saveRaza,
      confirmDelete,
      deleteRaza,
      handleFilterChange,
      handleSearch,
      handlePageChange,
    }
  },
}
</script>
