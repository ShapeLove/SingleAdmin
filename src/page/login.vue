<template>
  	<div class="login_page fillcontain">
	    <div class="blur-show"></div>
        <div class="login_body">
            <transition name="form-fade" mode="in-out">
                <section class="form_contianer" v-show="showLogin">
                    <div class="manage_tip">
                        <p>欢迎登陆</p>
                    </div>
                    <div class="manage-body">
                        <el-form :model="loginForm" :rules="rules" ref="loginForm">
                            <el-form-item prop="username">
                                <el-input v-model="loginForm.username" placeholder="用户名"
                                          style="width: 80%;">
                                    <span>dsfsf</span>
                                </el-input>
                            </el-form-item>
                            <el-form-item prop="password">
                                <el-input type="password" placeholder="密码"
                                          v-model="loginForm.password" style="width: 80%;"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登陆</el-button>
                            </el-form-item>
                        </el-form>
                        <p class="tip"><i class="el-icon-warning"></i>温馨提示：</p>
                        <p class="tip">未登录过的新用户，自动注册</p>
                        <p class="tip">注册过的用户可凭账号密码登录</p>
                    </div>
                </section>
            </transition>
        </div>
        <div class="login_bottom">
           <div class="icon_group">
               <p>
                   <img src="../assets/img/icon_group.png">
                   <span>专业化团队</span>
               </p>
               <p>
                   <img src="../assets/img/icon_refresh.png">
                   <span>初心不改</span>
               </p>
               <p>
                   <img src="../assets/img/time.png">
                   <span>7x24h</span>
               </p>
           </div>
            <div class="login_bottom_us">
                <span class="show_line">关于我们</span>
                <span class="show_line">联系我们</span>
                <span>意见反馈</span>
                <div>
                    <img src="../assets/img/Q.png" >
                    <ul>
                        <li>
                            管理员邮箱：3104288823@qq.com
                        </li>
                        <li>
                            管理员邮箱：3104288823@qq.com
                        </li>
                        <li>
                            管理员邮箱：3104288823@qq.com
                        </li>
                        <li>
                            管理员邮箱：3104288823@qq.com
                        </li>
                    </ul>
                </div>
            </div>
        </div>
  	</div>
</template>

<script>
	import {login, getAdminInfo} from '@/api/getData'
	import {mapActions, mapState} from 'vuex'

	export default {
	    data(){
			return {
				loginForm: {
					username: '',
					password: '',
				},
                path: null,
				rules: {
					username: [
			            { required: true, message: '请输入用户名', trigger: 'blur' },
			        ],
					password: [
						{ required: true, message: '请输入密码', trigger: 'blur' }
					],
				},
				showLogin: false,
			}
		},
		mounted(){
	        let path = this.$route.query.path;
	        if (path) {
	            this.path = path;
            }
			this.showLogin = true;
			if (!this.adminInfo.id) {
            	this.getAdminData()
            }
		},
		computed: {
			...mapState(['adminInfo']),
		},
		methods: {
			...mapActions(['getAdminData']),
			async submitForm(formName) {
			    console.log( this.loginForm);
				this.$refs[formName].validate(async (valid) => {
					if (valid) {
						const res = await login({name: this.loginForm.username, passwd: this.loginForm.password})
                        if (res.success) {
                            this.getAdminData();
                            if (this.path) {
                                this.$router.replace(this.path)
                            }else {
                                this.$router.replace('manage')
                            }

                        }else {
                            this.$message({
                                type: 'error',
                                message: res.message
                            });
                        }
					} else {
						this.$notify.error({
							title: '错误',
							message: '请输入正确的用户名密码',
							offset: 100
						});
						return false;
					}
				});
			},
		},
		watch: {
			adminInfo: function (newValue){
				if (newValue.id) {
					this.$message({
                        type: 'success',
                        message: '检测到您之前登录过，将自动登录'
                    });
                    if (this.path) {
                        this.$router.replace(this.path)
                    }else {
                        this.$router.replace('manage')
                    }
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../style/mixin';
    .hxc_icon{
        color: white;
    }
	.login_page{
		background: url('../assets/img/writeBack.jpg') no-repeat;
        -webkit-background-size: 100% 100%;
        -o-background-size: 100% 100%;
        background-size:100% 100%;
	}
    .blur-show{
        width: 94%;
        height: 87%;
        position: relative;
        left: 3%;
        top: 7%;/*
        filter: blur(1px);
        background: rgba(0,0,0, 0.1);*/
    }
    .el-input__inner{
        border-bottom: 1px solid lightgray ;border-radius: 0;
        color: yellow;
    }
	.manage_tip{
		position: relative;
		width: 100%;
		left: 0;
        top: 15%;
		p{
			font-size: 20px;
			color: black;
            font-weight: 600;
		}
	}
    .manage-body{
        position: relative;
        top: 26%;
    }
	.form_contianer{
        width: 300px;
        height: auto;
        position: absolute;
        top: 10%;
        bottom: 10%;
        right: 20%;
        padding: 25px;
        text-align: center;
        background-color: #fff;
		.submit_btn{
			width: 80%;
			font-size: 16px;
		}
	}
	.tip{
        font-size: 10px;
        color: #ff9900;
        font-weight: lighter;
	}
	.form-fade-enter-active, .form-fade-leave-active {
	  	transition: all 1s;
	}
	.form-fade-enter, .form-fade-leave-active {
	  	transform: translate3d(0, -50px, 0);
	  	opacity: 0;
	}
    .login_body{
        position: absolute;
        top: 0;
        width: 100%;
        height: 60%;
    }
    .login_bottom{
        width: 100%;
        height: 40%;
        position: absolute;
        bottom: 0;
        background-color: #1f2d3d;
        .icon_group{
            padding: 20px;
            text-align: center;
            p{
                padding: 0 100px;
                display: inline-block;
                color: #f5f7f9;
            }
            span{
                margin-left: 20px;
                position: relative;
                top: -9px;
                font-weight: lighter;
                font-size: 12px;
                letter-spacing: 2px;
            }
        }
        .icon_group::after{
            content: ' ';
            height: 1px;
            width: 90%;
            background: #f5f7f9;
            position: absolute;
            left: 5%;
            top: 20%;
        }
    }
    .login_bottom_us{
        padding-top: 50px;
        text-align: center;
        font-size: 12px;
        color: #f5f7f9;
        letter-spacing: 1px;
        font-weight: lighter;
        span{
            padding:0 30px;
        }
        .show_line::after{
            content: '';
            height: 12px;
            width: 1px;
            position: absolute;
            background-color: #f5f7f9;
            margin-left: 30px;
            margin-top: 2px;
        }
        div{
            margin-top: 20px;
        }
        img{
            width: 100px;
            height: 100px;
            position: relative;
            left: -80px;
        }
        ul{
            display: inline-block;
        }
    }
</style>
