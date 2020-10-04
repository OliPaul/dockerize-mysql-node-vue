<template>
  <div class="hello">
    <h3>Liste des utilisateurs provenant de l'api</h3>
    <hr>
    <ul>
            <li v-for="(user, index) in users" :key="index">
                <p>{{user.id}}. {{user.name}} ({{user.age}} ans)</p>
            </li>
        </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'Users',
  props: {
    msg: String
  },
  data() {
      return{
          users: [],
      }
  },
  mounted() {
      this.getUsers();
  },
  methods: {
      getUsers(){
            axios({ method: "GET", "url": "http://localhost:3535/api/userlist"}).then(result => {
                    this.response = JSON.parse(JSON.stringify(result.data));

                    var error = this.response.error
                    if(error){
                        console.log(this.response.error_msg)
                        alert(this.response.error_msg)
                        return
                    }

                    this.users = this.response.data

                    
                }, error => {
                    console.error(error)
                    alert(error)
                });
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
