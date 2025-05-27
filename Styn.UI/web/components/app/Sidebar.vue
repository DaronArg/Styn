<template>
  <aside 
    :class="[
      'fixed top-0 left-0 z-40 h-screen transition-all duration-300 ease-in-out',
      isOpen ? 'w-64' : 'w-16',
      'bg-[#003C53] border-r  border-[#003C53] dark:bg-[#003C53]'
    ]"
  >
    <div class="h-full px-3 py-4 overflow-y-auto">
      <div class="flex items-center justify-center mb-5">
        <NuxtLink to="/" class="flex justify-center flex-row">
          <img src="../../public/9.png" class="h-16 mr-3" alt="Logo" />
          <!-- <span v-if="isOpen" class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Admin</span> -->
        </NuxtLink>
        <button 
          @click="$emit('toggle')" 
          class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700"
        >
          <Icon v-if="isOpen" name="lucide:chevron-left" class="w-5 h-5 text-gray-500 dark:text-gray-400" />
          <Icon v-else name="lucide:chevron-right" class="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </button>
      </div>
      
      <ul class="space-y-2 font-medium">
        <li v-for="item in menuItems" :key="item.path">
          <NuxtLink 
            :to="item.path" 
            class="flex items-center p-2 rounded-lg text-white hover:bg-[#34B705] group"
          >
            <Icon :name="item.icon" class="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <span v-if="isOpen" class="ml-3">{{ item.name }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: "AppSidebar",
  props: {
    isOpen: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      menuItems: [
        { name: "Dashboard", path: "/Dashboard" },
        // { name: "Usuarios", path: "/modules/users" },
        // { name: "Productos", path: "/modules/products" },
        // { name: "Categorías", path: "/modules/categories" },
        { name: "Fichas Animales", path: "/modules/fichaAnimal" },
        { name: "Lotes", path: "/modules/lotes" },
        { name: "Raza", path: "/modules/raza" },
        { name: "Secado", path: "/modules/Secado" },
        { name: "Descartes", path: "/modules/descartes" },

        { name: "Configuración", path: "/settings" },
      ],
    }
  },
  emits: ["toggle"],
}
</script>
