<template>
  <div class="dark:bg-[#003C53] bg-white rounded-lg shadow p-4 mb-6">
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <!-- Search input -->
      <div class="relative w-full md:w-64">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Icon name="lucide:search" class="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </div>
        <input 
          type="text" 
          v-model="searchQuery" 
          @input="debounceSearch"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 " 
          placeholder="Buscar..."
        >
      </div>
      
      <!-- Filters -->
      <div class="flex flex-wrap gap-3">
        <div v-for="filter in filters" :key="filter.key" class="w-full md:w-auto">
          <label :for="filter.key" class="sr-only">{{ filter.label }}</label>
          
          <!-- Select filter -->
          <select 
            v-if="filter.type === 'select'" 
            :id="filter.key" 
            v-model="filterValues[filter.key]"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2"
          >
            <option v-for="option in filter.options" :key="option.value" :value="option.value">
              {{ option.label }}
            </option>
          </select>
          
          <!-- Date range filter -->
          <div v-else-if="filter.type === 'date'" class="flex items-center gap-2">
            <input 
              :id="`${filter.key}From`" 
              type="date" 
              v-model="filterValues[`${filter.key}From`]"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
            <span class="text-gray-500 dark:text-gray-400">a</span>
            <input 
              :id="`${filter.key}To`" 
              type="date" 
              v-model="filterValues[`${filter.key}To`]"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
          </div>
        </div>
        
        <!-- Filter buttons -->
        <div class="flex items-center gap-2 w-full md:w-auto">
          <button 
            @click="applyFilters" 
            class="w-full md:w-auto flex items-center justify-center text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 "
          >
            <Icon name="lucide:filter" class="w-4 h-4 mr-2" />
            Filtrar
          </button>
          <button 
            @click="clearFilters" 
            class="w-full md:w-auto flex items-center justify-center text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2 "
          >
            <Icon name="lucide:x" class="w-4 h-4 mr-2" />
            Limpiar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

const props = defineProps({
  filters: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['filter-change', 'search'])

const searchQuery = ref('')
const filterValues = reactive({})
let searchTimeout = null

// Inicializar valores de filtros
onMounted(() => {
  props.filters.forEach((filter) => {
    if (filter.type === 'select') {
      filterValues[filter.key] = ''
    } else if (filter.type === 'date') {
      filterValues[`${filter.key}From`] = ''
      filterValues[`${filter.key}To`] = ''
    }
  })
})

const debounceSearch = () => {
  clearTimeout(searchTimeout)
  searchTimeout = setTimeout(() => {
    emit('search', searchQuery.value)
  }, 300)
}

const applyFilters = () => {
  const activeFilters = {}

  Object.keys(filterValues).forEach((key) => {
    if (filterValues[key]) {
      activeFilters[key] = filterValues[key]
    }
  })

  emit('filter-change', activeFilters)
}

const clearFilters = () => {
  searchQuery.value = ''

  props.filters.forEach((filter) => {
    if (filter.type === 'select') {
      filterValues[filter.key] = ''
    } else if (filter.type === 'date') {
      filterValues[`${filter.key}From`] = ''
      filterValues[`${filter.key}To`] = ''
    }
  })

  emit('search', '')
  emit('filter-change', {})
}
</script>
