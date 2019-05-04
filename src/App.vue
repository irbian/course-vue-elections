<template>
    <div id="app">
        <ac-election-selector></ac-election-selector>
        <ac-vote-list></ac-vote-list>
    </div>
</template>

<script>
import ElectionSelector from '/components/ElectionSelector';
import ElectionVoteList from '/components/ElectionVoteList';
export default {
    name: 'Elections',
    components: {
        'ac-election-selector': ElectionSelector,
        'ac-vote-list': ElectionVoteList
    },
    data() {
        return {
            dummy: []
        }
    }
}
</script>

<style>
    #app {
        font-family: Arial, Helvetica, sans-serif;

        border: 1px solid black;
    }
</style>
