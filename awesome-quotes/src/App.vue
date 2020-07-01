<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
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
    import Header from './components/Header/Header.vue'

    export default {
        components: {
            appQuoteGrid: QuoteGrid, 
            appNewQuote: NewQuote, 
            appHeader: Header
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
                if (this.quotes.length >= this.maxQuotes) {
                    return alert('Please delete Quotes first!');
                }
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
