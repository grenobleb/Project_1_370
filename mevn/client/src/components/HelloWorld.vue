<template>
<div>
<h1>User List</h1>
<ul>
<li v-for="user in users" :key="user._id">{{user.name}} - {{user.occupation}}
</li>
</ul>
</div>
</template>
<script>
export default {
data() {
return {
users: []
};
},
mounted() {
fetch('http://localhost:5000/users')
.then( response => response.json() )
.then( data => this.users = data );
}
};
</script>

