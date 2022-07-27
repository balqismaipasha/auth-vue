<template>
  <div>
    Name: <input type="text" v-model="name"/> <br>
    Email: <input type="text" v-model="email"/> <br>
    Password: <input type="text" v-model="password"/> <br>
    <button @click="login">Login</button>
  </div>
</template>

<script>
export default {
  name:'LoginForm',
  data(){
    return{
      name: '',
      email:'',
      password: ''
    }
  },
  methods: {
    login() {
      console.log(this.name);
      console.log(this.email);
      console.log(this.password);
    }
  }
}
</script>