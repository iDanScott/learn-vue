
(function() {
  document.addEventListener("DOMContentLoaded", function() {
    new Vue({
      el: '#exercise',
      data: {
          className: 'highlight', 
          enteredClass: 'test', 
          progress: 0, 
          firstCustomClass: '', 
          applyBlack: 'false'
      },
      methods: {
        startEffect: function() {
          var vm = this;
          setInterval(function() {
            vm.className = vm.className === 'highlight' ? 'shrink' : 'highlight';
          }, 1000)
        }, 
        startProgress: function() {
          var vm = this;
          var interval = setInterval(function() {
            if (vm.progress >= 100){
              clearInterval(interval);
              return;
            }
            vm.progress += 0.1;
          }, 5);
        }
      }, 
      computed: {
        computedClasses: function() {
          return ['w-300', this.enteredClass]
        }, 
        secondComputedClasses: function() {
          return [this.firstCustomClass, { bgBlack: this.applyBlack === 'true' }]
        },
        progressClasses: function() {
          return {
            width: `${this.progress}%`,
            height: '40px',
            backgroundColor: 'red'
          }
        }
      }
    });
  })
})();
