<template>
    <div>
        <div v-if="openId == null">没有该用户信息！</div>
        <div v-else>{{userInfo.name}}</div>
    </div>
</template>

<script>
    import {userManage} from "../api/getData";

    export default {
        data() {
            return {
                userInfo: null,
                openId: null
            }
        },
        created() {
            console.log(this.$route);
            this.openId = this.$route.query.openId;
            this.getUserInfo();
        },
        methods: {
            async getUserInfo() {
                if (!this.openId) {
                    return;
                }
                const res = await userManage.getUserInfo(this.openId);
                if (res) {
                    this.userInfo = res;
                }
            }
        }
    }
</script>

<style scoped>

</style>
