<template>
    <form>
        <div class="row">
            <div class="col-lg-6 offset-lg-3">
                <label>Quote</label>
                <textarea class="form-control" rows="3" v-model="quote"></textarea>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6 offset-lg-3 mt-2 text-right">
                <button class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            quote: ''
        }
    }, 
    methods: {
        createNew() {
            this.$emit('quote-added', this.quote);
            this.quote = '';
        }
    }
}
</script>

<style>

</style>