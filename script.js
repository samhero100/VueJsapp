Vue.component('button-counter', {
  data: function () {
    let obj = {
      count: 0
    }
    return obj
  },
  template: '<button v-on:click="count++">{{ count }} 👏 claps</button>'
});
let app = new Vue ({
  el: '#app',
  data: {
    myData: 'Super cool VueJS application 🖖'
  }
});
