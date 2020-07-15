<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->

                    <form>
                        <FullName v-model="userData.name"></FullName>
                        <div class="form-group">
                            <label>Mail</label>
                            <input type="email" class="form-control" v-model="userData.mail" />
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" v-model="userData.password" />
                        </div>
                        <div class="form-group">
                            <label>Store Data?</label>
                            <select class="form-control" v-model="userData.storeInDatabase">
                                <option value="y">Yes</option>
                                <option value="n">No</option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-primary" @click.prevent="submitted">Submit</button>
                    </form>

                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Mail: {{ userData.mail }} </p>
                        <p>Password: {{ userData.password }} </p>
                        <p>Store in Database?: {{ storeInDatabaseDisplay }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './components/FullName.vue';

    export default {
        data() {
            return {
                userData: {
                    mail: '', 
                    password: '', 
                    storeInDatabase: 'y', 
                    name: {
                        firstName: '', 
                        lastName: ''
                    }
                }, 
                isSubmitted: false
            }
        }, 
        components: {
            FullName: FullName,
        },
        computed: {
            fullName() {
                return `${this.userData.name.firstName} ${this.userData.name.lastName}`
            }, 
            storeInDatabaseDisplay() {
                return this.userData.storeInDatabase === 'y' ? 'Yes' : 'No'
            }
        }, 
        methods: {
            submitted() {
                this.isSubmitted = 'true';
            }
        }
    }
</script>

<style>
</style>
