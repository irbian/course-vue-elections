<template>
    <div class="selector">
        <button type="button" v-on:click="setElection(2016)">2016</button>
        <button type="button" v-on:click="setElection('current')">2019</button>
    </div>
</template>

<script>
import { EventBus } from '/event-bus.js';

export default {
    methods: {
        setElection: function(election) {
            EventBus.$emit('election:set', election);
        }
    }
}
</script>

<style>
    .selector {
        display: flex;
        justify-content: space-around;
        width: 100%;
        padding: 10px;
    }
</style>
