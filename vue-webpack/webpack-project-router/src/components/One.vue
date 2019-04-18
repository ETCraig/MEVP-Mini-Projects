<template>
    <div>
        {{msg}}: {{url_msg}}
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            msg: 'Message One.'
        }
    },
    computed: {
        url_msg:function() {
            return this.$route.params.msg;
        }
    }
}
</script>

<style scoped>

</style>