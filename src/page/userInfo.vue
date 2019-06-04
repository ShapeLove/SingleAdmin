<template>
    <div class="body-container" v-cloak>
        <div v-if="openId == null">没有该用户信息！</div>
        <div v-else class="info-container">
            <div class="head-info">
                <div class="base-info">
                    <div
                        style="width: 50%; height: 100%; display: flex; flex-direction: column; justify-content: center;">
                        <p class="info-title"><span style="width: 5vw; display: inline-block; text-align: right; margin-right: 1vw;">OpenId: </span>{{userInfo.openId}}</p>
                        <p class="info-title" style="margin-top: 0.6vw;"><span style="width: 5vw; display: inline-block; text-align: right; margin-right: 1vw;">昵称: </span>{{userInfo.name}} <el-tag style="margin-left: 1vw;">{{userSex}}</el-tag></p>
                        <div style="margin-top: 10px;font-size: 1.1em;">
                            <span style="width: 5vw; display: inline-block; text-align: right; margin-right: 1vw;">个人标签: </span>
                            <el-tag type="primary" v-if="userInfo.doingTags">{{userInfo.doingTags}}</el-tag>
                            <el-tag type="primary" v-if="userInfo.planTags">{{userInfo.planTags}}</el-tag>
                            <el-tag type="primary" v-if="userInfo.activityTags">{{userInfo.activityTags}}</el-tag>
                        </div>
                    </div>
                    <div
                        style="width: 45%; height: 100%; display: flex; justify-content: flex-end; align-items: center">
                        <el-tag :type="getStatus(userInfo.status).type" style="margin-right: 25px;" class="status-tag">
                            {{getStatus(userInfo.status).desc}}
                        </el-tag>
                        <el-tag :type="getYn(userInfo.yn).type" class="status-tag">{{getYn(userInfo.yn).desc}}</el-tag>
                    </div>
                </div>
                <div class="image-info">
                    <template v-for="item in userPhotos">
                        <img style="width: 10vw; height: 10vw; border-radius: 10px; border: 1px solid white;" :src="baseImgPath + item"/>
                    </template>
                </div>
            </div>
            <div class="body-info">
                <div class="body-info-row">
                    <div class="body-item">
                        <span class="title"><span style="color: red">*</span>咚咚号：</span>
                        <span class="value">{{userInfo.dongdong}}</span>
                    </div>
                    <div class="body-item">
                        <span class="title"><span style="color: red">*</span>微信号：</span>
                        <span class="value">{{userInfo.wxNumber}}</span>
                    </div>
                </div>
                <div class="body-info-row">
                    <div class="body-item">
                        <span class="title"><span style="color: red">*</span>身高：</span>
                        <span class="value">{{userInfo.height}}cm</span>
                    </div>
                    <div class="body-item">
                        <span class="title"><span style="color: red">*</span>体重：</span>
                        <span class="value">{{userInfo.weight}}kg</span>
                    </div>
                </div>
                <div class="body-info-row">
                    <div class="body-item">
                        <span class="title"><span style="color: red">*</span>籍贯：</span>
                        <span class="value">{{userInfo.province + userInfo.city}}</span>
                    </div>
                    <div class="body-item">
                        <span class="title"><span style="color: red">*</span>生日：</span>
                        <span class="value">{{userInfo.birthday}}</span>
                    </div>
                </div>
                <div class="body-info-row">
                    <div class="body-item">
                        <span class="title"><span style="color: red">*</span>星座：</span>
                        <span class="value">{{userInfo.constellation}}</span>
                    </div>
                    <div class="body-item">
                        <span class="title"><span style="color: red">*</span>学历：</span>
                        <span class="value">{{userInfo.education}}</span>
                    </div>
                </div>
                <div class="body-info-row">
                    <div class="body-item">
                        <span class="title"><span style="color: red">*</span>所在部门：</span>
                        <span class="value">{{userInfo.department}}</span>
                    </div>
                    <div class="body-item">
                        <span class="title"><span style="color: red">*</span>工作地址：</span>
                        <span class="value">{{userInfo.workArea}}</span>
                    </div>
                </div>
                <div class="body-info-row">
                    <div class="body-item">
                        <span class="title">自我评价：</span>
                        <span class="value">{{userInfo.selfEvaluation}}</span>
                    </div>
                </div>
                <div class="body-info-row">
                    <div class="body-item">
                        <span class="title">最想说的：</span>
                        <span class="value">{{userInfo.wantSay}}</span>
                    </div>
                </div>
                <div class="body-info-row">
                    <div class="body-item">
                        <span class="title">家庭状况：</span>
                        <span class="value">{{userInfo.family}}</span>
                    </div>
                </div>
                <div class="body-info-row">
                    <div class="body-item">
                        <span class="title">交友标准：</span>
                        <span class="value">{{userInfo.standFriend}}</span>
                    </div>
                </div>
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
                    {value: 0, desc: "待审核", type: "primary"},
                    {value: 1, desc: "审核通过", type: "success"},
                    {value: 2, desc: "驳回", type: "error"}
                ],
                ynList: [
                    {value: 0, desc: "正常", type: "success"},
                    {value: 1, desc: "封禁", type: "error"}
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
            },
            userSex() {
                if (this.userInfo.sex != null) {
                    return this.userInfo.sex === 0 ? "男" : "女"
                }
                return "未知"
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
                    return this.statusList.find(x => x.value === value);
                }
                return "未知"
            },
            getYn(value) {
                console.log(value);
                if (value != null) {
                    return this.ynList.find(x => x.value === value);
                }
                return "未知"
            }
        }
    }
</script>

<style scoped lang="less">
    * {
        font-family: "Microsoft Yahei", sans-serif;
    }
    .body-container {
        display: flex;
        width: 100%;
        height: 100%;
        background: #f5f5f5;
        justify-content: center;
    }

    .info-container {
        background: white;
        width: 60%;
    }

    .head-info {
        width: 100%;
        height: 40%;
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
        font-size: 1.1em;
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

    .body-info-row {
        width: 100%;
        height: 3vw;
        display: flex;
        margin-top: 0.2vw;
    }

    .body-item {
        width: 50%;
        height: 2.5vw;
        display: flex;

        span {
            line-height: 2.5vw;
        }

        .title {
            flex: 1;
            text-align: right;
            padding-right: 0.1vw;
            background-color: #f8f8f9;
            border: 1px solid #dcdee2;
            border-radius: 0 0.5vw 0.5vw 0;
        }
        .value {
            flex: 2;
            padding-left: 0.2vw;
        }
    }
    .status-tag {
        font-size: 18px;
        line-height: 26px;
        height: 30px;
    }
</style>
