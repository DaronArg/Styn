<template>
  <div class="container px-4 py-6 mx-auto">
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-bold">Lotes</h1>
      <button
        @click="openModal()"
        class="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Nuevo Lote
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
      :data="lotes"
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

    <!-- Modal de Lote -->
    <LoteModal
      v-if="isModalOpen"
      :lote="selectedLote"
      :loading="loading"
      @close="closeModal"
      @save="saveLote"
    />

    <!-- Modal de Confirmación -->
    <ConfirmModal
      v-if="isConfirmModalOpen"
      title="Eliminar Lote"
      message="¿Está seguro que desea eliminar este lote? Esta acción no se puede deshacer."
      @confirm="deleteLote"
      @cancel="isConfirmModalOpen = false"
    />
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue"
import { useLotesStore } from "@/stores/lotes"
import ModuleFilters from "@/components/module/Filters.vue"
import ModuleTable from "@/components/module/Table.vue"
import ModulePagination from "@/components/module/Pagination.vue"
import LoteModal from "@/components/lotes/Modal.vue"
import ConfirmModal from "@/components/common/ConfirmModal.vue"
definePageMeta({
  layout:"adminl"
})
export default {
  name: "LotesPage",
  components: {
    ModuleFilters,
    ModuleTable,
    ModulePagination,
    LoteModal,
    ConfirmModal,
  },
  setup() {
    // Store
    const lotesStore = useLotesStore()

    // Estado
    const lotes = ref([])
    const loading = ref(true)
    const isModalOpen = ref(false)
    const isConfirmModalOpen = ref(false)
    const selectedLote = ref(null)
    const currentPage = ref(1)
    const perPage = ref(10)
    const totalItems = ref(0)
    const searchQuery = ref("")
    const activeFilters = ref({})

    // Definición de columnas para la tabla
    const columns = [
      { key: "nombre", label: "Nombre" },
      { key: "descripcion", label: "Descripción" },
      { key: "actions", label: "Acciones" },
    ]

    // Definición de filtros
    const filters = []

    // Métodos
    const fetchLotes = async () => {
      loading.value = true
      try {
        const response = await lotesStore.fetchLotes({
          page: currentPage.value,
          perPage: perPage.value,
          search: searchQuery.value,
          filters: activeFilters.value,
        })

        lotes.value = response.data
        totalItems.value = response.total
      } catch (error) {
        console.error("Error fetching lotes:", error)
      } finally {
        loading.value = false
      }
    }

    const openModal = (lote = null) => {
      selectedLote.value = lote
      isModalOpen.value = true
    }

    const closeModal = () => {
      selectedLote.value = null
      isModalOpen.value = false
    }

    const saveLote = async (loteData) => {
      loading.value = true
      try {
        if (loteData.id) {
          await lotesStore.updateLote(loteData)
        } else {
          await lotesStore.createLote(loteData)
        }
        await fetchLotes()
        closeModal()
      } catch (error) {
        console.error("Error saving lote:", error)
      } finally {
        loading.value = false
      }
    }

    const confirmDelete = (lote) => {
      selectedLote.value = lote
      isConfirmModalOpen.value = true
    }

    const deleteLote = async () => {
      if (!selectedLote.value) return

      loading.value = true
      try {
        await lotesStore.deleteLote(selectedLote.value.id)
        await fetchLotes()
        isConfirmModalOpen.value = false
        selectedLote.value = null
      } catch (error) {
        console.error("Error deleting lote:", error)
      } finally {
        loading.value = false
      }
    }

    const handleFilterChange = (filters) => {
      activeFilters.value = filters
      currentPage.value = 1 // Reset to first page when filters change
      fetchLotes()
    }

    const handleSearch = (query) => {
      searchQuery.value = query
      currentPage.value = 1 // Reset to first page when search changes
      fetchLotes()
    }

    const handlePageChange = (page) => {
      currentPage.value = page
      fetchLotes()
    }

    // Cargar datos iniciales
    onMounted(() => {
      fetchLotes()
    })

    return {
      lotes,
      loading,
      isModalOpen,
      isConfirmModalOpen,
      selectedLote,
      currentPage,
      perPage,
      totalItems,
      columns,
      filters,
      openModal,
      closeModal,
      saveLote,
      confirmDelete,
      deleteLote,
      handleFilterChange,
      handleSearch,
      handlePageChange,
    }
  },
}
</script>
