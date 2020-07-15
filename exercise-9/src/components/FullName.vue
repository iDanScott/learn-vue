<template>
    <div>
        <div class="form-group">
            <label>First Name</label>
            <input type="text" class="form-control" v-model="value.firstName" @change="changed()" />
        </div>
        <div class="form-group">
            <label>Last Name</label>
            <input type="text" class="form-control" v-model="value.lastName" @change="changed()" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'FullName',
    props: ['value'], 
    methods: {
        changed() {
            this.$emit('input', {
                firstName: this.value.firstName, 
                lastName: this.value.lastName
            });
        }
    }
}
</script>

<style scoped>

</style>