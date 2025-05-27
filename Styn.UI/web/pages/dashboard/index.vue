<template>
  <div>
    <!-- Dashboard header -->
    <div class="mb-6">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Dashboard Tambo</h1>
      <p class="text-gray-500 dark:text-gray-400">Bienvenido al panel de administración de su establecimiento lechero</p>
    </div>
    
    <!-- Stats cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <DashboardCard 
        title="Producción de Leche" 
        value="2,450 L" 
        icon="lucide:droplet" 
        color="bg-blue-100 text-blue-500"
        change="5"
        subtitle="vs. semana anterior"
      />
      <DashboardCard 
        title="Animales Activos" 
        value="245" 
        icon="lucide:cow" 
        color="bg-green-100 text-green-500"
        change="2"
        subtitle="vs. mes anterior"
      />
      <DashboardCard 
        title="Partos Mensuales" 
        value="18" 
        icon="lucide:baby" 
        color="bg-purple-100 text-purple-500"
        change="12"
        subtitle="vs. mes anterior"
      />
      <DashboardCard 
        title="Eficiencia Alimentaria" 
        value="1.4 kg/L" 
        icon="lucide:wheat" 
        color="bg-yellow-100 text-yellow-500"
        change="-3"
        subtitle="vs. mes anterior"
      />
    </div>
    
    <!-- Recent activity -->
    <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-4 sm:p-6 xl:p-8 mb-6">
      <div class="mb-4 flex items-center justify-between">
        <div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white">Actividad Reciente</h3>
          <span class="text-base font-normal text-gray-500 dark:text-gray-400">Registro de las últimas operaciones del tambo</span>
        </div>
        <div class="flex-shrink-0">
          <a href="#" class="text-sm font-medium text-primary-600 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 rounded-lg p-2">Ver todo</a>
        </div>
      </div>
      <div class="flex flex-col mt-8">
        <div class="overflow-x-auto rounded-lg">
          <div class="align-middle inline-block min-w-full">
            <div class="shadow overflow-hidden sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                <thead class="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                      Animal
                    </th>
                    <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                      Evento
                    </th>
                    <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                      Estado
                    </th>
                    <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                      Fecha
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white dark:bg-gray-800">
                  <tr v-for="(item, index) in recentActivity" :key="index" class="border-b dark:border-gray-700">
                    <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900 dark:text-white">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                          <span class="text-lg font-bold">{{ item.id.substring(0, 2) }}</span>
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900 dark:text-white">
                            ID: {{ item.id }}
                          </div>
                          <div class="text-sm text-gray-500 dark:text-gray-400">
                            {{ item.category }}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900 dark:text-white">
                      {{ item.event }}
                    </td>
                    <td class="p-4 whitespace-nowrap text-sm">
                      <span :class="getStatusClass(item.status)" class="px-2 py-1 rounded text-xs font-medium">
                        {{ item.status }}
                      </span>
                    </td>
                    <td class="p-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {{ item.date }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Charts section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-4 sm:p-6 xl:p-8">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white">Producción de Leche (Últimos 7 días)</h3>
        </div>
        <div class="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <!-- Aquí iría un gráfico de producción de leche -->
          <p class="text-gray-500 dark:text-gray-400">Gráfico de producción diaria</p>
        </div>
      </div>
      
      <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-4 sm:p-6 xl:p-8">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white">Distribución de Animales</h3>
        </div>
        <div class="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <!-- Aquí iría un gráfico de distribución de animales -->
          <p class="text-gray-500 dark:text-gray-400">Gráfico de distribución por categoría</p>
        </div>
      </div>
    </div>
    
    <!-- Alerts and notifications -->
    <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-4 sm:p-6 xl:p-8">
      <div class="mb-4 flex items-center justify-between">
        <h3 class="text-xl font-bold text-gray-900 dark:text-white">Alertas y Notificaciones</h3>
      </div>
      <div class="space-y-3">
        <div class="flex p-3 bg-yellow-50 rounded-lg">
          <div class="flex-shrink-0">
            <svg class="h-6 w-6 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div class="ml-3">
            <h3 class="text-sm font-medium text-yellow-800">Alerta de Salud</h3>
            <div class="text-sm text-yellow-700">
              5 animales requieren revisión veterinaria programada para esta semana.
            </div>
          </div>
        </div>
        
        <div class="flex p-3 bg-blue-50 rounded-lg">
          <div class="flex-shrink-0">
            <svg class="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="ml-3">
            <h3 class="text-sm font-medium text-blue-800">Recordatorio</h3>
            <div class="text-sm text-blue-700">
              Programar pedido de alimento balanceado para la próxima semana.
            </div>
          </div>
        </div>
        
        <div class="flex p-3 bg-green-50 rounded-lg">
          <div class="flex-shrink-0">
            <svg class="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="ml-3">
            <h3 class="text-sm font-medium text-green-800">Objetivo Cumplido</h3>
            <div class="text-sm text-green-700">
              La producción de leche superó el objetivo mensual en un 3%.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import DashboardCard from "~/components/dashboard/Card.vue"
definePageMeta({
  layout:"adminl"
})
const recentActivity = [
  {
    id: "TA-1245",
    category: "Holstein",
    event: "Ordeñe: 28.5 L",
    status: "Completado",
    date: "Hoy, 06:30 AM",
  },
  {
    id: "TA-0892",
    category: "Jersey",
    event: "Inseminación",
    status: "Programado",
    date: "Hoy, 10:00 AM",
  },
  {
    id: "TA-1103",
    category: "Holstein",
    event: "Tratamiento Veterinario",
    status: "En Proceso",
    date: "Hoy, 09:15 AM",
  },
  {
    id: "TA-0756",
    category: "Jersey",
    event: "Parto",
    status: "Completado",
    date: "Ayer, 23:40 PM",
  },
  {
    id: "TA-1308",
    category: "Holstein",
    event: "Control Sanitario",
    status: "Atención",
    date: "Ayer, 14:20 PM",
  }
]

const getStatusClass = (status) => {
  switch (status) {
    case "Completado":
      return "bg-green-100 text-green-700"
    case "Programado":
      return "bg-blue-100 text-blue-700"
    case "En Proceso":
      return "bg-yellow-100 text-yellow-700"
    case "Atención":
      return "bg-red-100 text-red-700"
    default:
      return "bg-gray-100 text-gray-700"
  }
}
</script>