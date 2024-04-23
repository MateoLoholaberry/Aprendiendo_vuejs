<script setup>
import { ref, computed } from "vue";

const nombre = "vue dinámico";
const styleColor = "color: blue;";
const colores = ["blue", "red", "green"];
const activo = false;

const listaFrutas = ["Manzana", "Pera", "Naranja", "Banana", "Sandía"];

const listaFrutas2 = [
    {
        name: "Manzana",
        price: "$1.00",
        description: "Una manzana",
        stock: 0,
    },
    {
        name: "Pera",
        price: "$2.00",
        description: "Una pera",
        stock: 12,
    },
    {
        name: "Naranja",
        price: "$3.00",
        description: "Una naranja",
        stock: 20,
    },
];

const handleClick = (message) => {
    console.log(message);
};

const counter = ref(0);

const increment = () => {
    counter.value++;
};

const decrease = () => {
    counter.value--;
};

const reset = () => {
    counter.value = 0;
};

const classCounter = computed(() => {
    if (counter.value === 0) {
        return "neutro";
    } else if (counter.value > 0) {
        return "positive";
    } else {
        return "negative";
    }
});

const listaNumeros = ref([]);

const addToList = () => {
    listaNumeros.value.push(counter.value);
};

const verifyListNumber = computed(() => {
    if (listaNumeros.value.includes(counter.value)) return true;
    return false;
});

</script>

<template>
    <h1>Hola mundo desde Vuejs 3</h1>
    <h2 v-bind:style="styleColor">{{ nombre }}</h2>
    <h2 v-bind:style="`color: ${colores[1]}`">{{ nombre }}</h2>
    <h2>{{ activo ? "Estoy activo" : "Estoy inactivo" }}</h2>
    <h2 v-if="activo">Estoy activo con directiva</h2>
    <h2 v-else="activo">Estoy inactivo con directiva</h2>

    <!-- v-for -->
    <h2>Lista de frutas</h2>
    <ul>
        <li v-for="(fruta, index) in listaFrutas" :key="index">
            {{ index }} - {{ fruta }}
        </li>
    </ul>

    <hr />

    <div>
        <template v-for="(fruta, index) in listaFrutas2" :key="index">
            <div v-if="fruta.stock > 0">
                {{ fruta.name }} <br />
                Description: {{ fruta.description }} <br />
                price: {{ fruta.price }} <br />
            </div>
        </template>
    </div>

    <!-- v-on -->
    <hr />
    <button @:click="handleClick('texto left')">Activame left</button>
    <button @:click.middle="handleClick('texto middle')">
        Activame center
    </button>
    <button v-on:click.right="handleClick('texto right')">
        Activame right
    </button>

    <!-- Reactividad en Vue -->
    <hr />
    <br />
    <h2 :class="classCounter" class="mx-2">{{ counter }}</h2>
    <br />
    <button @click="decrease" class="btn btn-danger m-2">Disminuir</button>
    <button @click="reset" class="btn btn-secondary m-2">Resetear</button>
    <button @click="increment" class="btn btn-primary m-2">Incrementar</button>
    <br />
    <button
        :disabled="verifyListNumber"
        @click="addToList"
        type="button"
        class="btn btn-success mx-2"
    >
        Agregar n° a la lista
    </button>
    <h2>Lista de numeros</h2>
    <div>
        {{ listaNumeros }}
    </div>

    <ul>
        <li v-for="(num, index) in listaNumeros" :key="index">{{ num }}</li>
    </ul>

    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
</template>

<style>
h1 {
    color: red;
}

.negative {
    color: red;
}

.positive {
    color: green;
}

.neutro {
    color: blue;
}
</style>
