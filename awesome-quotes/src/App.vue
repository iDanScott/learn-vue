<template>
    <div class="container">
        <app-new-quote @quote-added="newQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes" class="mt-2" @quote-deleted="deleteQuote"></app-quote-grid>
        <div class="row mt-5">
            <div class="col-lg-12 alert alert-info text-center">
                    Info: Click on a quote to delete it
            </div>
        </div>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid/QuoteGrid.vue'
    import NewQuote from './components/NewQuote/NewQuote.vue'
    export default {
        components: {
            appQuoteGrid: QuoteGrid, 
            appNewQuote: NewQuote
        },
        data() {
            return { 
                maxQuotes: 10, 
                quotes: [ 
                    {
                        id: 0,
                        quote: 'Just a Quote to see something'
                    }
                ]
            }
        }, 
        methods: {
            newQuote(quote) {
                this.quotes.push({
                    quote, 
                    id: this.quotes.length
                });    
            }, 
            deleteQuote(id) {
                this.quotes = this.quotes.filter(q => {
                    return q.id !== id;
                });
            }
        }
    }
</script>

<style>
</style>
