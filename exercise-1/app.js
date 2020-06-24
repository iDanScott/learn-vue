(function() {
    document.addEventListener("DOMContentLoaded", function() {
        new Vue({
            el: "#exercise", 
            data: {
                name: 'Dan', 
                age: 25, 
                profilePicture: 'https://pbs.twimg.com/profile_images/1102480719388049409/LF11-lH8_400x400.jpg'
            }, 
            methods: {
                updateName(e) {
                    this.name = e.target.value;
                }
            }
        })
    });
})();