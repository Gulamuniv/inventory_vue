let login = require('./components/auth/login.vue').default;
let register = require('./components/auth/register.vue').default;
let forget = require('./components/auth/forget.vue').default;

let logout = require('./components/auth/logout.vue').default;

// End Authentication 

// Employee Component
let Storeemployee = require('./components/employee/create.vue').default;
let employee = require('./components/employee/index.vue').default;



let home = require('./components/home.vue').default;



                 


export const routes = [
  { path: '/', component: login, name:'/'},
  { path: '/register', component: register, name:'register'},
  { path: '/forget', component: forget, name:'forget'},
  { path: '/home', component: home, name:'home'},
  { path: '/logout', component: logout, name:'logout'},
  { path: '/store-employee', component: Storeemployee, name:'store-employee'},
  { path: '/employee', component: employee, name:'employee'},

]