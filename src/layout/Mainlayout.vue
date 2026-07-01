<template>
  <div v-if="!ingresado" class="fullscreen flex flex-center bg-dark">
    <div class="absolute-top-left full-width full-height bg-gradient-gym" />

    <q-card class="bg-grey-9 text-white shadow-15" style="width: 400px; border-radius: 20px; overflow: hidden;">
      <q-card-section class="bg-black text-center q-pt-xl q-pb-lg">
        <q-icon name="fitness_center" size="80px" color="warning" />
        <div class="text-h4 text-bold text-uppercase q-mt-sm">Gym Zone</div>
        <div class="text-subtitle1 text-grey-5">Acceso a tu transformación</div>
      </q-card-section>

      <q-card-section class="q-pa-lg">
        <q-input dark outlined v-model="usuario" label="Usuario" class="q-mb-md" color="warning">
          <template v-slot:prepend><q-icon name="person" /></template>
        </q-input>
        <q-input dark outlined v-model="contrasena" type="password" label="Contraseña" color="warning">
          <template v-slot:prepend><q-icon name="lock" /></template>
        </q-input>

        <div v-if="mensajeError" class="q-mt-md text-negative text-body2">
          {{ mensajeError }}
        </div>
      </q-card-section>

      <q-card-actions class="q-px-lg q-pb-xl">
        <q-btn unelevated size="lg" color="warning" class="full-width text-black text-bold" label="Entrar a Entrenar"
          @click="iniciarSesion" />
      </q-card-actions>
    </q-card>
  </div>
  <q-layout v-else view="lHh Lpr lFf" class="bg-grey-9 text-white">
    <q-header elevated class="bg-black text-warning">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen" />
        <q-toolbar-title class="text-bold text-uppercase">Gym Zone Pro</q-toolbar-title>
        <q-btn flat round icon="logout" @click="ingresado = false" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" overlay behavior="mobile" bordered class="bg-grey-10 text-white">
      <q-list dark>
        <q-item-label header class=" text-warning text-bold">ÁREAS DE TRABAJO</q-item-label>

      <q-item clickable to="/Gym/espalda" active-class="text-warning bg-grey-9">
        <q-item-section avatar><q-icon name="fitness_center" /></q-item-section>
        <q-item-section>Espalda</q-item-section>
      </q-item>

      <q-item clickable to="/Gym/pecho" active-class="text-warning bg-grey-9">
        <q-item-section avatar><q-icon name="accessibility" /></q-item-section>
        <q-item-section>Pecho</q-item-section>
      </q-item>

      <q-item clickable to="/Gym/brazo" active-class="text-warning bg-grey-9">
        <q-item-section avatar><q-icon name="fitness_center" /></q-item-section>
        <q-item-section>Brazo</q-item-section>
      </q-item>

      <q-item clickable to="/Gym/pierna" active-class="text-warning bg-grey-9">
        <q-item-section avatar><q-icon name="directions_run" /></q-item-section>
        <q-item-section>Pierna</q-item-section>
      </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <q-page v-if="$route.path === '/' || $route.path === '/gym'" class="flex flex-center q-pa-md">
        <div class="text-center full-width" style="max-width: 800px;">
          <h4 class="text-warning text-bold q-mb-md text-uppercase">¡Bienvenido a tu entrenamiento!</h4>
          <q-img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
            style="border-radius: 20px; border: 2px solid #ffde43; " class="shadow-15">
            <div class="absolute-bottom text-subtitle1 text-center bg-transparent">
              Selecciona un área de trabajo en el menú izquierdo para comenzar
            </div>
          </q-img>
        </div>
      </q-page>

      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const ingresado = ref(false)
const leftDrawerOpen = ref(false)
const usuario = ref('')
const contrasena = ref('')
const mensajeError = ref('')

function iniciarSesion() {
  if (!usuario.value || !contrasena.value) {
    mensajeError.value = 'Por favor, completa todos los campos.'
    return
  }

  if (usuario.value.length <= 5) {
    mensajeError.value = 'El usuario debe tener más de 5 caracteres.'
    return
  }

  if (contrasena.value.length < 4) {
    mensajeError.value = 'La contraseña debe tener al menos 4 caracteres.'
    return
  }

  mensajeError.value = ''
  ingresado.value = true
}
</script>

<style scoped>
.bg-gradient-gym {
  background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%);
}
</style>