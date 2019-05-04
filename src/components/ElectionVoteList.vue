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
            <th style="width:20px;"></th>
            <th style="width:20px;">Partido</th>
            <th style="width:20px;">Votos</th>
            <th style="width:20px;">Escaños</th>
            </tr>
        </thead>
        <tbody>
        <tr v-for="resultado in resultados" :key="resultado.siglas">
            <td :style="{ background: resultado.color, width: '20px' }"></td>
            <td>{{ resultado.siglas }}</td>
            <td>{{ resultado.votos | parseInt }}</td>
            <td>{{ resultado.escanos | parseInt}}</td>
        </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import ElectionService from '/services/Election.service';
const electionService = new ElectionService();

export default {
    data() {
        return {
            info: {},
            resultados: []
        }
    },
    mounted() {
        console.log("he sido montado");
        electionService.get()
            .then(data => { 
                console.log(data);
                this.info = data.resultados.shift();
                this.resultados = data.resultados
                    .filter(resultado => parseInt(resultado.escanos) > 0);
            });
    },
    filters: {
        parsePercent: function(value) {
            return value / 100;
        },
        parseInt: function(value) {
            return parseInt(value);
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
    td {
        text-align: right;
    }
    td {
        padding: 0 5px;
    }
</style>
