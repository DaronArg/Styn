<template>
    <!-- Navbar adicional (arriba) -->

    <nav class="bg-white shadow fixed top-0 w-full z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <!-- Logo -->
                <a href="/landing" to="/landing" class="flex items-center space-x-4">
                    <img src="/logo2.png" alt="STYN Logo" class="h-20" />
                </a>
                <!-- Links (Desktop) -->
                <div class="hidden md:flex space-x-6">
                    <NuxtLink to="/landing/" class="text-gray-700 hover:text-blue-600 text-sm">Inicio
                    </NuxtLink>
                    <NuxtLink to="/landing/comoFunciona" class="text-gray-700 hover:text-blue-600 text-sm">Como funciona
                    </NuxtLink>
                    <NuxtLink to="/landing/nosotros" class="text-gray-700 hover:text-blue-600 text-sm">Nosotros
                    </NuxtLink>
                    <NuxtLink to="/landing/contacto" class="text-gray-700 hover:text-blue-600 text-sm">Contacto
                    </NuxtLink>
                </div>



                <!-- Button and Top Links (Desktop) -->
                <div class="bg-white hidden md:flex flex-col items-center space-y-2">
                    <div class="flex space-x-4 text-xs text-gray-700">
                        <NuxtLink to="/login">
                            <button class="btn hover:text-blue-600">Login</button>
                        </NuxtLink>
                        <!-- Enlace a WhatsApp para soporte técnico con target="_blank" -->
                        <a href="https://wa.me/543562558323" class="hover:text-blue-600" target="_blank">Soporte
                            Técnico</a>
                    </div>
                    <NuxtLink to="/landing/contacto"
                        class="px-4 py-2 bg-blue-900 text-white text-sm font-medium rounded hover:bg-blue-700">
                        Solicitar demo
                    </NuxtLink>
                </div>


                <!-- Hamburger Icon (Mobile) -->
                <div class="md:hidden flex items-center">
                    <button @click="toggleMenu" class="text-gray-700 hover:text-blue-600 focus:outline-none">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu -->
            <div v-if="isMenuOpen" class="md:hidden bg-white shadow-lg">
                <div class="px-4 py-2 space-y-4">

                    <NuxtLink to="/landing/" class="block text-gray-700 hover:text-blue-600 text-sm">Inicio
                        </NuxtLink>
                    <NuxtLink to="/landing/comoFunciona" class="block text-gray-700 hover:text-blue-600 text-sm">Como
                        funciona</NuxtLink>
                    <NuxtLink to="/landing/nosotros" class="block text-gray-700 hover:text-blue-600 text-sm">Nosotros
                    </NuxtLink>
                    <NuxtLink to="/landing/contacto" class="block text-gray-700 hover:text-blue-600 text-sm">Contacto
                    </NuxtLink>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
    data() {
        return {
            isMenuOpen: false, // Estado del menú en dispositivos móviles
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
    },
};
</script>

<style scoped>
/* Estilos opcionales si necesitas personalizar más el navbar */
</style>