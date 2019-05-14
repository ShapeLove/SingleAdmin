<template>
    <div class="fillcontain">
        <head-top></head-top>
        <el-card style="margin:20px;color:#FF4949;">
            <p>
                <i class="el-icon-information"></i>异常信息
            </p>
            javax.mail.AuthenticationFailedException: [EOF]
            at com.sun.mail.smtp.SMTPTransport$Authenticator.authenticate(SMTPTransport.java:965)
            at com.sun.mail.smtp.SMTPTransport.authenticate(SMTPTransport.java:876)
            at com.sun.mail.smtp.SMTPTransport.protocolConnect(SMTPTransport.java:780)
            at javax.mail.Service.connect(Service.java:366)
            at org.springframework.mail.javamail.JavaMailSenderImpl.connectTransport(JavaMailSenderImpl.java:515)
            at org.springframework.mail.javamail.JavaMailSenderImpl.testConnection(JavaMailSenderImpl.java:396)
            at org.springframework.boot.actuate.mail.MailHealthIndicator.doHealthCheck(MailHealthIndicator.java:43)
            at org.springframework.boot.actuate.health.AbstractHealthIndicator.health(AbstractHealthIndicator.java:84)
            at org.springframework.boot.actuate.health.CompositeHealthIndicator.health(CompositeHealthIndicator.java:68)
            at org.springframework.boot.actuate.health.HealthEndpoint.health(HealthEndpoint.java:47)
            at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
            at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
            at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
            at java.lang.reflect.Method.invoke(Method.java:498)
            at org.springframework.util.ReflectionUtils.invokeMethod(ReflectionUtils.java:223)
        </el-card>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    export default {
        components: {
            headTop,
        },
    }
</script>

<style lang="less">
    @import '../style/mixin';
    .explain_text{
        margin-top: 20px;
        text-align: center;
        font-size: 20px;
        color: #333;
    }
</style>
