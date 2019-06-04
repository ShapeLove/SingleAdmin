<template>
    <div class="body-container" v-cloak>
        <div v-if="openId == null">没有该用户信息！</div>
        <div v-else class="info-container">
            <div class="head-info">
                <div class="base-info">
                    <div style="width: 50%; height: 100%; display: flex; flex-direction: column; justify-content: center;">
                        <p class="info-title">OpenId: {{userInfo.openId}}</p>
                        <p class="info-title">昵称: {{userInfo.name}}</p>
                        <div style="margin-top: 10px;">
                            <el-tag type="primary" v-if="userInfo.doingTags">{{userInfo.doingTags}}</el-tag>
                            <el-tag type="primary" v-if="userInfo.planTags">{{userInfo.planTags}}</el-tag>
                            <el-tag type="primary" v-if="userInfo.activityTags">{{userInfo.activityTags}}</el-tag>
                        </div>
                    </div>
                    <div style="width: 45%; height: 100%; display: flex; justify-content: flex-end; align-items: center">
                        <el-tag :type="getStatus(userInfo.status).type" style="margin-right: 25px;">{{getStatus(userInfo.status).desc}}</el-tag>
                        <el-tag :type="getYn(userInfo.yn).type">{{getYn(userInfo.yn).desc}}</el-tag>
                    </div>
                </div>
                <div class="image-info">
                    <template v-for="item in userPhotos">
                        <img style="width: 10vw; height: 10vw; border-radius: 10px;" :src="baseImgPath + item"/>
                    </template>
                </div>
            </div>
            <div class="body-info">

            </div>
        </div>
    </div>
</template>

<script>
    import {userManage} from "../api/getData";
    import {baseImgPath} from '@/config/env'

    export default {
        data() {
            return {
                userInfo: {},
                openId: null,
                statusList: [
                    { value: 0, desc: "待审核", type: "primary"},
                    { value: 1, desc: "审核通过", type: "success"},
                    { value: 2, desc: "驳回", type: "error"}
                ],
                ynList: [
                    { value: 0, desc: "正常", type: "success"},
                    { value: 1, desc: "封禁", type: "error"}
                ],
                baseImgPath
            }
        },
        created() {
            console.log(this.$route);
            this.openId = this.$route.query.openId;
            this.getUserInfo();
        },
        computed: {
            userPhotos() {
                if (this.userInfo.photos) {
                    return JSON.parse(this.userInfo.photos);
                }
              return [];
            }
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
            },
            getStatus(value) {
                if (value != null) {
                   return this.statusList.find(x=> x.value === value);
                }
                return "未知"
            },
            getYn(value) {
                console.log(value);
                if (value != null) {
                    return this.ynList.find(x=> x.value === value);
                }
                return "未知"
            }
        }
    }
</script>

<style scoped>
    .body-container {
        display: flex;
        width: 100%;
        height: 100%;
        background: #fcfcfc;
        justify-content: center;
    }
    .info-container {
        background: white;
        width: 60%;
    }
    .head-info{
        width: 100%;
        height: 50%;
        background: rgb(50, 64, 87);
    }
    .base-info {
        width: 100%;
        height: 25%;
        padding: 15px;
        display: flex;
        align-items: center;
        color: white;
    }
    .info-title {
        display: block;
    }
    .image-info {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        padding: 15px;
        height: 60%;
    }
    .body-info {
        height: 50%;
        width: 100%;
    }
</style>
