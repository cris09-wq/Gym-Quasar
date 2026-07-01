<template>
  <q-page class="q-pa-md bg-grey-9 text-white">
    <div class="text-h4 text-bold text-uppercase q-mb-md text-warning">
      Rutina de Pecho
    </div>
    <div class="text-subtitle1 q-mb-xl text-grey-4">
      4 ejercicios fundamentales para desarrollar tu pectoral.
    </div>

    <div class="row q-col-gutter-lg">
      
      <div class="col-12 col-md-6">
        <q-card class="bg-grey-10 text-white shadow-10" bordered>
          <q-video
            src="https://www.youtube.com/embed/GeLq8cMODLc" style="height: 250px;"/>
          <q-card-section>
            <div class="text-h6 text-warning text-bold">1. Press de Banca Plano</div>
            <div class="text-subtitle2 text-grey-5">Series: 4 | Repeticiones: 8-12</div>
          </q-card-section>
          <q-card-section class="q-pt-none text-body2">
            Acuéstate en el banco. Agarra la barra con las manos un poco más abiertas que el ancho de los hombros. Baja la barra de forma controlada hasta tocar el pecho y empuja hacia arriba.
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-6">
        <q-card class="bg-grey-10 text-white shadow-10" bordered>
          <q-video
            src="https://www.youtube.com/embed/MkMf308jXww"
            style="height: 250px;"
          />
          <q-card-section>
            <div class="text-h6 text-warning text-bold">2. Press Inclinado con Mancuernas</div>
            <div class="text-subtitle2 text-grey-5">Series: 3 | Repeticiones: 10-12</div>
          </q-card-section>
          <q-card-section class="q-pt-none text-body2">
            Ajusta el banco a unos 30-45 grados. Empuja las mancuernas hacia arriba hasta que tus brazos estén rectos, luego bájalas lentamente hasta el nivel del pecho superior.
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-6">
        <q-card class="bg-grey-10 text-white shadow-10" bordered>
          <q-video src="https://www.youtube.com/embed/a8RiJEsHfxk" style="height: 250px;"/>
          <q-card-section>
            <div class="text-h6 text-warning text-bold">3. Aperturas en Polea (Cruce)</div>
            <div class="text-subtitle2 text-grey-5">Series: 4 | Repeticiones: 12-15</div>
          </q-card-section>
          <q-card-section class="q-pt-none text-body2">
            Colócate en el centro de las poleas altas. Tira de los agarres hacia abajo y hacia el centro de tu cuerpo manteniendo los codos ligeramente flexionados, como si estuvieras abrazando un barril.
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-6">
        <q-card class="bg-grey-10 text-white shadow-10" bordered>
          <q-video
            src="https://www.youtube.com/embed/IODxDxX7oi4"
            style="height: 250px;"
          />
          <q-card-section>
            <div class="text-h6 text-warning text-bold">4. Flexiones (Push-ups)</div>
            <div class="text-subtitle2 text-grey-5">Series: 3 | Repeticiones: Al fallo</div>
          </q-card-section>
          <q-card-section class="q-pt-none text-body2">
            Posición de plancha con las manos a la anchura de los hombros. Mantén el cuerpo recto y baja hasta que el pecho casi toque el suelo, luego empuja con fuerza.
          </q-card-section>
        </q-card>
      </div>

    </div>
  </q-page>
</template>

<script setup>
// Aquí no necesitamos mucha lógica reactiva por ahora, solo la estructura.
</script>

<style scoped>
.q-card {
  border-color: #333;
}
</style>