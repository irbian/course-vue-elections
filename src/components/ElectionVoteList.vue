<template>
<div class="vote-list">
    <dl>
        <dt>Porcentaje censo escrutado</dt>
        <dd>{{ info.porcentajeCensoEscrutado | parsePercent }} %</dd>
        <dt>Total de escaños</dt>
        <dd>{{ info.escanos }}</dd>
        <dt>Mayoría</dt>
        <dd>{{ info.mayoria }}</dd>
    </dl>
    <table>
        <thead>
            <tr>
            <th>Partido</th>
            <th></th>
            <th>Votos</th>
            <th>Escaños</th>
            </tr>
        </thead>
        <tbody>
        <tr v-for="resultado in resultados" :key="resultado.siglas">
            <td class="name" :title="resultado.siglas">{{ resultado.siglas }}</td>
            <td :style="{ background: resultado.color, width: '20px' }"></td>
            <td>{{ resultado.votos | parseInt }}</td>
            <td>{{ resultado.escanos | parseInt}}</td>
        </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import ElectionService from '/services/Election.service';
import { EventBus } from '/event-bus.js';
const electionService = new ElectionService();

export default {
    data() {
        return {
            info: {},
            resultados: []
        }
    },
    mounted() {
        this.updateResults('current');

        EventBus.$on('election:set', this.updateResults);
    },
    filters: {
        parsePercent: function(value) {
            return value / 100;
        },
        parseInt: function(value) {
            return parseInt(value);
        }
    },
    methods: {
        updateResults: function (election) {
            electionService.get(election)
                .then(data => { 
                    console.log(data);
                    this.info = data.resultados.shift();
                    this.resultados = data.resultados
                        .filter(resultado => parseInt(resultado.escanos) > 0);
                });
        }
    }
}
</script>

<style>
    .vote-list {
        font-size: 12px;
        /* background: silver;
        color: white; */
        padding: 20px;
    }
    table {
        width: 100%;
    }
    .name {
        overflow:hidden;
        white-space:nowrap;
        text-overflow:ellipsis;
        max-width: 130px;
    }
    td {
        text-align: right;
    }
    td {
        padding: 0 5px;
    }
</style>
