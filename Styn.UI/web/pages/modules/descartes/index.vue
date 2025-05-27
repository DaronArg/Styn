<template>
  <div class="container px-4 py-6 mx-auto">
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-bold">Descartes</h1>
      <button
        @click="openModal()"
        class="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Nuevo Descarte
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
      :data="descartes"
      :loading="loading"
      class="mb-6"
    >
      <template #cell(fecha)="{ item }">
        {{ formatDate(item.fecha) }}
      </template>
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

    <!-- Modal de Descarte -->
    <DescarteModal
      v-if="isModalOpen"
      :descarte="selectedDescarte"
      :loading="loading"
      @close="closeModal"
      @save="saveDescarte"
    />

    <!-- Modal de Confirmación -->
    <ConfirmModal
      v-if="isConfirmModalOpen"
      title="Eliminar Descarte"
      message="¿Está seguro que desea eliminar este registro de descarte? Esta acción no se puede deshacer."
      @confirm="deleteDescarte"
      @cancel="isConfirmModalOpen = false"
    />
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue"
import { useDescartesStore } from "@/stores/descartes"
import { formatDate } from "@/utils/formatters"
import ModuleFilters from "@/components/module/Filters.vue"
import ModuleTable from "@/components/module/Table.vue"
import ModulePagination from "@/components/module/Pagination.vue"
import DescarteModal from "@/components/descartes/Modal.vue"
import ConfirmModal from "@/components/common/ConfirmModal.vue"
definePageMeta({
  layout:"adminl"
})
export default {
  name: "DescartesPage",
  components: {
    ModuleFilters,
    ModuleTable,
    ModulePagination,
    DescarteModal,
    ConfirmModal,
  },
  setup() {
    // Store
    const descartesStore = useDescartesStore()

    // Estado
    const descartes = ref([])
    const loading = ref(true)
    const isModalOpen = ref(false)
    const isConfirmModalOpen = ref(false)
    const selectedDescarte = ref(null)
    const currentPage = ref(1)
    const perPage = ref(10)
    const totalItems = ref(0)
    const searchQuery = ref("")
    const activeFilters = ref({})

    // Definición de columnas para la tabla
    const columns = [
      { key: "fecha", label: "Fecha" },
      { key: "rp", label: "RP" },
      { key: "tipoDescarte", label: "Tipo de Descarte" },
      { key: "responsable", label: "Responsable" },
      { key: "actions", label: "Acciones" },
    ]

    // Definición de filtros
    const filters = [
      {
        key: "tipoDescarte",
        label: "Tipo de Descarte",
        type: "select",
        options: [
          { value: "", label: "Todos" },
          { value: "Voluntario", label: "Voluntario" },
          { value: "Involuntario", label: "Involuntario" },
          { value: "Enfermedad", label: "Enfermedad" },
          { value: "Baja Producción", label: "Baja Producción" },
          { value: "Otro", label: "Otro" },
        ],
      },
    ]

    // Métodos
    const fetchDescartes = async () => {
      loading.value = true
      try {
        const response = await descartesStore.fetchDescartes({
          page: currentPage.value,
          perPage: perPage.value,
          search: searchQuery.value,
          filters: activeFilters.value,
        })

        descartes.value = response.data
        totalItems.value = response.total
      } catch (error) {
        console.error("Error fetching descartes:", error)
      } finally {
        loading.value = false
      }
    }

    const openModal = (descarte = null) => {
      selectedDescarte.value = descarte
      isModalOpen.value = true
    }

    const closeModal = () => {
      selectedDescarte.value = null
      isModalOpen.value = false
    }

    const saveDescarte = async (descarteData) => {
      loading.value = true
      try {
        if (descarteData.id) {
          await descartesStore.updateDescarte(descarteData)
        } else {
          await descartesStore.createDescarte(descarteData)
        }
        await fetchDescartes()
        closeModal()
      } catch (error) {
        console.error("Error saving descarte:", error)
      } finally {
        loading.value = false
      }
    }

    const confirmDelete = (descarte) => {
      selectedDescarte.value = descarte
      isConfirmModalOpen.value = true
    }

    const deleteDescarte = async () => {
      if (!selectedDescarte.value) return

      loading.value = true
      try {
        await descartesStore.deleteDescarte(selectedDescarte.value.id)
        await fetchDescartes()
        isConfirmModalOpen.value = false
        selectedDescarte.value = null
      } catch (error) {
        console.error("Error deleting descarte:", error)
      } finally {
        loading.value = false
      }
    }

    const handleFilterChange = (filters) => {
      activeFilters.value = filters
      currentPage.value = 1 // Reset to first page when filters change
      fetchDescartes()
    }

    const handleSearch = (query) => {
      searchQuery.value = query
      currentPage.value = 1 // Reset to first page when search changes
      fetchDescartes()
    }

    const handlePageChange = (page) => {
      currentPage.value = page
      fetchDescartes()
    }

    // Cargar datos iniciales
    onMounted(() => {
      fetchDescartes()
    })

    return {
      descartes,
      loading,
      isModalOpen,
      isConfirmModalOpen,
      selectedDescarte,
      currentPage,
      perPage,
      totalItems,
      columns,
      filters,
      formatDate,
      openModal,
      closeModal,
      saveDescarte,
      confirmDelete,
      deleteDescarte,
      handleFilterChange,
      handleSearch,
      handlePageChange,
    }
  },
}
</script>
