<template>
    <div>
        <router-link :to="{name: 'One', params: {msg: 'Hello'}}"><button>One</button></router-link>
        <router-link to="/comp_two"><button>One</button></router-link>
        <router-link to="/comp_three"><button>One</button></router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>