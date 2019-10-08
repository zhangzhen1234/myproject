<template>
  <div class="">
    <h3 class="">天伦网络有限公司注册</h3>、
     <el-row>
       <el-col :offset="5" :span="4">
         <span>用户名：</span>
       </el-col>
       <el-col :span="8">
         <el-input
           type="text"
           placeholder="请输入中文真实姓名"
           v-model="registerForm.username"
           auto-complete='off'>
         </el-input>
       </el-col>
     </el-row>

    <el-row class="m-t">
      <el-col :offset="5" :span="4">
        <span class="pull-right m-r">用户密码:</span>
      </el-col>
      <el-col :span="8">
        <el-input
          type="text"
          placeholder="请输入您的密码"
          v-model="registerForm.password"
          auto-complete='off'>
        </el-input>
      </el-col>
    </el-row>

    <el-row class="m-t">
      <el-col :offset="5" :span="4">
        <span class="pull-right m-r">用户邮箱:</span>
      </el-col>
      <el-col :span="8">
        <el-input
          type="email"
          placeholder="用户邮箱(baofu.com,mandao.com,xinyan.com)"
          v-model="registerForm.email"
          auto-complete='off'>
        </el-input>
      </el-col>
    </el-row>

    <el-row class="m-t">
      <el-col :offset="5" :span="4">
        <span class="pull-right m-r">手机号码:</span>
      </el-col>
      <el-col :span="8">
        <el-input
          type="email"
          placeholder="请输入手机号码"
          v-model="registerForm.phone"
          auto-complete='off'>
        </el-input>
      </el-col>
    </el-row>

    <el-row class="m-t">
      <el-col :offset="5" :span="4">
        <span class="pull-right m-r">公司名称:</span>
      </el-col>
      <el-col :span="8">
        <el-select class='w-full' v-model="registerForm.company_id" placeholder="请选择">
          <el-option
            v-for="item in companys"
            :key="item.id"
            :label="item.full_name"
            :value="item.id">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row class="m-t">
      <el-col :offset="5" :span="4">
        <span class="pull-right m-r">部门名称:</span>
      </el-col>
      <el-col :span="8">
        <el-select class="w-full" v-model="registerForm.department_id" placeholder="请选择">
          <el-option
            v-for="item in departments"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </el-col>
    </el-row>

    <el-row class="m-t-lg">
      <el-col :offset="9" :span="8">
        <el-button @click='register(registerForm)' :disabled='!canSubmit' class="pull-right w-full" type="primary">
<!--          <span v-if='!loading'>注册</span>-->
<!--          <span v-if='loading'>-->
<!--          <span>正在注册</span>-->
<!--            <i class="el-icon-loading"></i>-->
<!--          </span>-->
          <span >注册</span>
        </el-button>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import userApi from '../../api/user.js'
export default {
  name: 'Register',
  data () {
    return {
      registerForm: {
        password: '',
        username: '',
        email: '',
        phone: '',
        department_id: '',
        company_id: ''
      },
      canSubmit: false,
      companys: [],
      departments: []
    }
  },
  methods: {
    register (m) {
        authApi.register(m).then((res) => {
            var data = res.data
            if (data.code !== 0) {
                this.$notify.error(data.message)
            } else {
                this.$notify.success('请前往注册邮箱进行激活。')
                this.$router.push('/login')
            }
            this.canSubmit = false
        })
    },
    getCompany () {
      userApi.getCompany().then((res) => {
        if (res.data.code === undefined) {
          this.companys = res.data.objects
        }
      })
    }
  },
  created: function () {
    this.getCompany()
  },
  watch: {
    'registerForm': {
      handler: function (newval, oldVal) {
      }
    }
  }
}
</script>

<style scoped>

</style>
