// src/store/index.js
import { createStore } from 'vuex';



const store = createStore({
  state: {
    juegos: [],  // Acá se almacena la lista de juegos.
  },
  mutations: {
    setJuegos(state, juegos) {
      state.juegos = juegos;  // Mutación para establecer la lista de juegos y stock
    },
    quitarStock(state, juegoCodigo) {
      const juego = state.juegos.find(j => j.codigo === juegoCodigo);
      if (juego && juego.stock > 0) {
        juego.stock--;
      }
    },
    sumarStock(state, juegoCodigo) {
      const juego = state.juegos.find(j => j.codigo === juegoCodigo);
      if (juego) {
        juego.stock++;
      }
    }
  },
  actions: {
    async cargarJuegos({ commit }) {
      try {
        const juegosJsonUrl = './juegos.json';  //Ruta al archivo .json
        const response = await fetch(new URL(juegosJsonUrl, import.meta.url));
        const juegos = await response.json();
        commit('setJuegos', juegos);
      } catch (error) {
        console.error('Error al cargar los juegos:', error);  //mensaje de error en caso de presentar problemas 
      }
    }
  }
});

export default store;
