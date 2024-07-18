<template>
    <section>
        <h3>Añadir profesor</h3>
        <div>
            <label for="nombre">Nombre</label>
            <input type="text" id="nombre" v-model="teacher.firstName" />
        </div>
        <div>
            <label for="apellido">Apellido</label>
            <input type="text" id="apellido" v-model="teacher.lastName" />
        </div>
        <div>
            <label for="dni">Dni</label>
            <input type="text" id="dni" v-model="teacher.idNumber" />
        </div>
        <div>
            <label for="materias">Materias</label>
            <input type="text" id="materias" v-model="subject" />
            <button v-on:click="addSubject()">Agregar Materia</button>
            <br />
            <ul>
                <li v-for="(s, index) in teacher.subjects" :key="index">{{ s }}</li>
            </ul>
        </div>
        <div>
            <input type="checkbox" id="documentacion" v-model="teacher.documentation" />
            <label for="documentacion">Documentación entregada</label>
        </div>
        <br />
        <button v-on:click="addTeacher()">Guardar</button>
    </section>

    <section>
        <h3>Listado</h3>
        <p v-if="!teacherList.length">No hay profesores</p>
        <table v-else>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Dni</th>
                    <th>Materias</th>
                    <th>Documentación</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(t, index) in teacherList" :key="index">
                    <td>{{ t.firstName }}</td>
                    <td>{{ t.lastName }}</td>
                    <td>{{ t.idNumber }}</td>
                    <td>
                        <ul>
                            <li
                                v-for="(s, index) in t.subjects"
                                :key="index"
                                style="list-style: none"
                            >
                                {{ s }}
                            </li>
                        </ul>
                    </td>
                    <td v-if="t.documentation">Entregada</td>
                    <td v-else>No entregada</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';

interface ITeacher {
    firstName: string;
    lastName: string;
    idNumber: string;
    subjects: string[];
    documentation: boolean;
}

let teacher: Ref<ITeacher> = ref({
    firstName: '',
    lastName: '',
    idNumber: '',
    subjects: [],
    documentation: false
});

let subject: Ref<string> = ref('');

const addSubject = () => {
    teacher.value.subjects.push(subject.value);
    subject.value = '';
};

const addTeacher = () => {
    teacherList.value.push(teacher.value);
    teacher.value = {
        firstName: '',
        lastName: '',
        idNumber: '',
        subjects: [],
        documentation: false
    };
};

const teacherList: Ref<ITeacher[]> = ref([]);
</script>

<style scoped></style>
