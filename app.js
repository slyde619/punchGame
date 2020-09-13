// new Vue({
//   el: '#intro-vue',
//   data: {
//     person: {
//       name: 'Goddy',
//       age: 45,
//       city: 'Ikot ekpene',
//       job: 'NinjaWarrior'
//     }
//   },
//   methods: {
//     hello: function(time){
//       return `Hello, ${time} ${this.person.name}`
//     },
//     square: function(number){
//       return Math.pow(number, 2)
//     }
//   }
// })

// new Vue({
//   el: '#data-binding',
//   data: {
//     website: 'http://wwww.google.com',
//     name: 'Helen Doe',
//     job: 'Software Dev',
//     linkTag: '<a href="https://www.facebook.com">Go to Facebook</a>',
//     websiteTag: `<a href="http://www.answers.com">Find Here</a>`
//   }
// })

// new Vue({
//   el: '#vue-app',
//   data:{
//     age: 20,
//     x: 0,
//     y: 0
//   },
//   methods:{
//     add: function(increment){
//       this.age += increment
//     },
//     subtract: function(decrement){
//       this.age -= decrement
//     },
//     updateXY: function(event){
//       this.x = event.offsetX
//       this.y = event.offsetY
//     },
//     preventMe: function(){
//       alert('You just clicked me!!')
//     }
//   }
// })

// new Vue({
//   el: '#vue-app',
//   data: {
  
//   },
//   methods:{
//     logName: function(){
//       console.log('You entered a name')
//     },
//     logAge: function(){
//       console.log('You entered your age')
//     }
//   }
// })

// new Vue({
//   el: '#vue-app',
//   data: {
//     name: '',
//     age: '',
//     country: ''
//   },
//   methods:{
//     logName: function(){
//       console.log('You entered a name')
//     },
//     logAge: function(){
//       console.log('You entered your age')
//     }
//   }
// })

// new Vue({
//   el: '#vue-app',
//   data: {
//     age: 20,
//     a: 0,
//     b: 0
//   },
//   computed: {
//     addToA: function(){
//       console.log('AddToA')
//       return this.a + this.age
//     },
//     addToB: function(){
//       console.log('AddToB')
//       return this.b + this.age
//     }
//   }
// })

// new Vue({
//   el: '#vue-app',
//   data: {
//     available: false,
//     nearby: false
//   }, 
//   methods:{

//   },
//   computed: {
//     getClass: function(){
//       return{
//         available: this.available,
//         nearby: this.nearby
//       }
//     }
//   }
// })

// new Vue({
//   el: '#vue-app',
//   data: {
//     error: false,
//     success: false
//   },
//   methods: {

//   },
//   computed: {
    
//   }
// })

// new Vue({
//   el: '#vue-app',
//   data:{
//     foods: ['Rice', 'Margeine', 'Beans', 'Netflix'],
//     snacks: [
//       {name: 'Cheese', qty: 22},
//       {name: 'RainbowBalls', qty: 122},
//       {name: 'KiloBrea', qty: 72}
//     ] 
//   }
// })


new Vue({
  el: '#vue-app',
  data: {
    health: 100,
    hasEnded: false,
    showMsg: `Bursted!!!`
  },
  methods:  {
    punch: function(){
      this.health -= 10
      if(this.health <=0){
        this.hasEnded = true
      }
    },
    restart: function(){
      this.health = 100
      this.hasEnded = false;
    }
  },
  computed:{

  }
})