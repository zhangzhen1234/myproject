<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
</template>

<script>
    import indexApi from '../../api/user.js'
    export default {
        name: "Data",
        data () {
            return {
                tableData: []
            }
        },
        methods: {
            getInfo () {
                indexApi.getCompany().then((res) => {
                    if (res.data.code === 0) {
                        this.tableData = res.data.message;
                        console.log(this.tableData,11111)
                    }
                })
            }
        },
        created: function () {
            this.getInfo()
        }
    }
</script>

<style scoped>
</style>
