<template>
  <section id="colorSection">
    <h1>Tienda 32 Bits</h1>

    <h3>Lista de juegos</h3>

    <table>
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Modifica stock</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="juego in juegos" :key="juego.codigo">
          <td>{{ juego.codigo }}</td>
          <td id="nombreJuego">{{ juego.nombre }}</td>
          <td>{{ juego.stock }}</td>
          <td>{{ juego.precio }}</td>
          <td>
            <button @click="quitarStock(juego)">-</button>
            <button @click="sumarStock(juego)">+</button>
          </td>
        </tr>
        </tbody>
    </table>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const juegos = ref([]);

onMounted(async () => {
  const response = await fetch(new URL('./assets/juegos.json', import.meta.url));
  juegos.value = await response.json();
});

const quitarStock = (juego) => {
  juego.stock--;
};

const sumarStock = (juego) => {
  juego.stock++;
};
</script>

<style scoped>
body {
  background-color: rgb(77, 83, 83) !important;
}

#colorSection {
  background-color: aliceblue;
  margin-top: -300px;
  padding: 3%;
  border-radius: 5px;
}

h1 {
  color: rgb(13, 82, 172);
}

h3 {
  color: rgb(11, 32, 59);
}

#nombreJuego {
  color:rgb(13, 82, 172);
  font-weight: 500;
}


th,
td {
  border: 1px solid rgb(11, 32, 59);
  width: 150px;
  height: 40px;
  text-align: left;
}

button {
  background-color: rgb(245, 92, 32);
  margin: 2%;
  color: rgb(13, 82, 172);
  border-radius: 10px;
  font-weight: 700;
}

button:hover {
  background-color: rgb(13, 82, 172);
  color: rgb(255, 72, 0);
}
</style>