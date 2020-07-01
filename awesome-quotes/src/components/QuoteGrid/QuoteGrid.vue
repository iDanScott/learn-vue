<template>
    <div class="row">
        <app-quote 
            v-for="quote in quotes" 
            :key="quote.id"
            @click.native="quoteClicked(quote.id)">

            {{ quote.quote }}

        </app-quote>
    </div>
</template>

<script>
import Quote from '../Quote/Quote.vue'
export default {
    props: ['quotes'], 
    components: {
        appQuote: Quote
    }, 
    methods: {
        quoteClicked(id) {
            this.$emit('quote-deleted', id);
        }
    }
}
</script>

<style>

</style>