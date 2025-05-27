<template>
  <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-4 sm:p-6">
    <div class="flex items-center">
      <div :class="color" class="p-3 rounded-full">
        <Icon :name="icon" class="w-6 h-6" />
      </div>
      <div class="ml-4">
        <h2 class="text-lg font-semibold text-gray-900 dark:text-white">{{ value }}</h2>
        <p class="text-sm text-gray-500 dark:text-gray-400">{{ title }}</p>
      </div>
      <div v-if="change" class="ml-auto">
        <div :class="[
          Number(change) >= 0 ? 'text-green-500' : 'text-red-500',
          'flex items-center'
        ]">
          <Icon 
            :name="Number(change) >= 0 ? 'lucide:trending-up' : 'lucide:trending-down'" 
            class="w-4 h-4 mr-1" 
          />
          <span class="text-sm font-medium">{{ Math.abs(Number(change)) }}%</span>
        </div>
        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">{{ subtitle }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: "bg-blue-100 text-blue-500"
  },
  change: {
    type: [String, Number],
    default: null
  },
  subtitle: {
    type: String,
    default: ""
  }
})
</script>