<template>
    <div class="flex h-screen flex-col">
        <Navbar></Navbar>
        <div class="absolute top-20 left-4">
            <button @click="navigateTo('/')" 
                    class="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" 
                     class="h-5 w-5" 
                     fill="none" 
                     viewBox="0 0 24 24" 
                     stroke="currentColor">
                    <path stroke-linecap="round" 
                          stroke-linejoin="round" 
                          stroke-width="2" 
                          d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Volver
            </button>
        </div>
        <div class="flex-1 container mx-auto w-1/2">
            <div class="flex flex-col h-full">
                <div class="text-center mb-6 mt-2">
                    <h1 class="text-4xl text-gray-800">Registro de Usuario</h1>
                </div>
                <h2 class="font-bold text-md">Información Personal:</h2>
                <form @submit.prevent="register">
                    <div class="mt-7 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mb-6">
                        <div class="sm:col-span-3">
                            <label class="block text-sm leading-6 text-gray-600">NOMBRE</label>
                            <div class="mt-2">
                                <input required type="text" v-model="form.Nombre"
                                    class="block w-full border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6">
                            </div>
                        </div>
                    
                        <div class="sm:col-span-3">
                            <label class="block text-sm leading-6 text-gray-600">APELLIDO</label>
                            <div class="mt-2">
                                <input required type="text" v-model="form.Apellido"
                                    class="block w-full border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6">
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <label class="block text-sm leading-6 text-gray-600">DNI</label>
                            <div class="mt-2">
                                <input required type="number" v-model="form.Dni"
                                    class="block w-full border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6">
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <label class="block text-sm leading-6 text-gray-600">TELÉFONO</label>
                            <div class="mt-2">
                                <input required type="number" v-model="form.Telefono"
                                    class="block w-full border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6">
                            </div>
                        </div>

                        <div class="sm:col-span-full">
                            <label class="block text-sm leading-6 text-gray-600">EMAIL</label>
                            <div class="mt-2">
                                <input required type="email" v-model="form.Email"
                                    class="block w-full border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6">
                            </div>
                        </div>

                       
                        <div class="sm:col-span-3">
                            <label class="block text-sm leading-6 text-gray-600">CONTRASEÑA</label>
                            <div class="mt-2">
                                <input required type="password" v-model="form.Password"
                                    class="block w-full border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6">
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <label class="block text-sm leading-6 text-gray-600">CONFIRMAR CONTRASEÑA</label>
                            <div class="mt-2">
                                <input required type="password" v-model="form.ConfirmPassword"
                                    class="block w-full border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6">
                            </div>
                            <p class="mt-2 text-sm text-red-600">{{ confirmPasswordError }}</p>
                        </div>

                        <div class="col-span-full">
                            <label class="block text-sm leading-6 text-gray-600">DIRECCIÓN</label>
                            <div class="mt-2">
                                <input required type="text" v-model="form.Direcion"
                                    class="block w-full border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6">
                            </div>
                        </div>
                    </div>

                    <p class="mt-2 text-sm text-red-600" v-for="error in translatedErrors">{{ error }}</p>

                    <div class="flex flex-row mt-6 gap-5">
                        <button type="submit"
                            class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 me-2 mb-2">
                            Enviar
                        </button>
                        <button @click="cleanForm" type="button"
                            class="text-black hover:border-m border-0 focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 me-2 mb-2">
                            Borrar todo
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <Toast 
            :show="showToast" 
            :message="toastMessage"
            :type="toastType"
            @close="showToast = false"
        />
    </div>
</template>

<script setup>

import { ref, computed } from 'vue';
import authService from '../services/authService';
import Toast from '~/old/Toast.vue';

const form = ref({
    Email: '',
    Password: '',
    ConfirmPassword: '',
    Nombre: '',
    Apellido: '',
    Telefono: '',
    Direcion: '',
    Dni: '',
    Role: 'User'
});

const errors = ref([]);
const visibleToast = ref(false);
const confirmPasswordError = ref('');
const showToast = ref(false);
const toastMessage = ref('');
const toastType = ref('success');
const selectedTime = ref('');

const cleanForm = () => {
    form.value = {}
    errors.value = []
    confirmPasswordError.value = null
}
const validatePasswords = () =>{
    if(form.value.Password === form.value.ConfirmPassword ){
        confirmPasswordError.value = null
        return true
    }else{
        confirmPasswordError.value = "La contraseña no coincide"
        return false
    }

}
const setAlert = async () => {
    toastMessage.value = 'Usuario registrado exitosamente';
    toastType.value = 'success';
    showToast.value = true;
    
    const data = {
        Email: form.value.Email,
        Password: form.value.Password
    };

    setTimeout(async () => {
        showToast.value = false;
        await authService.login(data);
        const user = userData();
        console.log(user.value.role)
        if(user.value.role == 'Admin'){
            navigateTo('/admin');
        }else{
            navigateTo('/usuario');
        }
        cleanForm();
    }, 3000);
};
const translatedErrors =computed(() =>{
    const translationMap = {
        "PasswordRequiresLower" : "La contraseña debe tener al menos una letra minuscula (a-z)",
        "PasswordTooShort": "La contraseña es demasiado corta",
        "PasswordRequiresNonAlphanumeric": "La contraseña debe tener al menos un carácter no alfanumérico.",
        "PasswordRequiresDigit": "La contraseña debe tener al menos un dígito ('0'-'9').",
        "PasswordRequiresUpper": "La contraseña debe tener al menos una letra mayúscula ('A'-'Z').",
        "DuplicateUserName": "Ya existe un usuario con ese Email",
      }
      return errors.value.map(error => translationMap[error.code]);


});
const register = async () => {

    if(!validatePasswords() ){
        return
    }
    form.value.Telefono = form.value.Telefono.toString()
    form.value.Dni = form.value.Dni.toString()
    try {
        errors.value  = []
        await authService.register(form.value).then(res => {
            //.log(res)
            res.errors ? (errors.value = res.errors) : null
            res.message ? (setAlert()) : null
        })
    } catch (error) {
        //.error(error)
    }
}
</script>
