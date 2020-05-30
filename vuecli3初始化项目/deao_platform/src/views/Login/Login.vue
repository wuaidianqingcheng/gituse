<!-- 登录 -->
<template>
  <div class="login-wrap">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm login-page"
    >
      <h3>公安研判平台</h3>
      <el-form-item label="用户名" prop="user">
        <el-input type="text" v-model="ruleForm.user" autocomplete="off" size="small"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off" size="small"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%;">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Login",
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        user: "",
        pass: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  methods: {
    ...mapMutations(["changeLoginToken"]),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.ruleForm.user == "admin" && this.ruleForm.pass == "123") {
            sessionStorage.setItem("Authorization", "123123");
            this.changeLoginToken({ Authorization: "123123" });
            this.$router.push("/home");
          } else {
            alert("密码错误");
          }
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped="scoped">
.login-wrap {
  width: 100%;
  height: 100%;
  background: url(../../assets/img/login-back.png);
  background-size: 100% 100%;
  position: relative;
  h3 {
    text-align: center;
    font-size: 24px;
  }
  .login-page {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    width: 350px;
    height: 200px;
    padding: 35px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    position: absolute;
    top: 30%;
    left: 60%;
    right: 0;
    bottom: 0;
    margin: 0 auto;
  }
  label.el-checkbox.rememberme {
    margin: 0px 0px 15px;
    text-align: left;
  }
}
</style>
