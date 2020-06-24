(function() {
    document.addEventListener("DOMContentLoaded", function() {
        new Vue({
            el: "#exercise", 
            data: {
                value: null,
            }, 
            methods: {
                showAlert() {
                    alert('woo');
                }, 
                keyDownHandler(e) {
                    this.value = e.target.value;
                }
            }
        })
    });
})();