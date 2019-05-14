<template>
    <div>
        {{list[0]}}
    </div>
</template>

<script>
    import {getTestExcept} from '@/api/getData'
    const axios = require('axios');
    export default {
        data() {
            return {
                list:[]
            }
        },
        created() {
           // axios.get("http://localhost:8080/except/list")
           //     .then((response) => {
           //         console.log(response)
           //         this.list = response.data;
           //     })
            this.initdata();
        },
        methods: {
            async initdata() {
                const lists = await axios.get("http://localhost:8080/except/list");
                console.log(lists);
                this.list = lists.data;
            }
        }
    }
</script>

<style scoped>

</style>
