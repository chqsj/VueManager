<template>
  <div class="goods-container">
    <!-- 面包屑 -->
    <el-breadcrumb class="my-bread" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 输入框 按钮 -->
    <el-row class="my-input">
      <el-col :span="6">
        <el-input placeholder="请输入内容" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-button class="my-btn" type="success" plain>添加商品</el-button>
      </el-col>
    </el-row>
    <!-- 表格 -->
    <el-table class="my-table" :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="#" width="30"></el-table-column>
      <el-table-column prop="goodsname" label="商品名称" width="500"></el-table-column>
      <el-table-column prop="goodsprice" label="商品价格(元)" width="120"></el-table-column>
      <el-table-column prop="goodsweight" label="商品重量" width="80"></el-table-column>
      <el-table-column prop="createtime" label="创建时间" width="160"></el-table-column>

      <el-table-column label="操作" width="250">
        <el-button type="primary" plain>
          <i class="el-icon-edit"></i>
        </el-button>
        <el-button type="danger" plain>
          <i class="el-icon-delete"></i>
        </el-button>
    
      </el-table-column>
    </el-table>
   
  </div>
</template>

<script>
export default {
  name: "goods",
  data() {
    return {
      tableData: [
        {
          id: 1,
          goodsname: "【海外购自营】黎珐(ReFa) MTG日本 CARAT铂金微电流瘦脸瘦身提拉紧致V脸美容仪 【保税仓发货】",
          goodsprice: "1399",
          goodsweight: "100",
          createtime: "1970-01-18 20:47:45"
        },
        {
          id: 2,
           goodsname: "【海外购自营】黎珐(ReFa) MTG日本 CARAT铂金微电流瘦脸瘦身提拉紧致V脸美容仪 【保税仓发货】",
          goodsprice: "1399",
          goodsweight: "100",
          createtime: "1970-01-18 20:47:45"
        },
        {
          id: 3,
         goodsname: "【海外购自营】黎珐(ReFa) MTG日本 CARAT铂金微电流瘦脸瘦身提拉紧致V脸美容仪 【保税仓发货】",
          goodsprice: "1399",
          goodsweight: "100",
          createtime: "1970-01-18 20:47:45"
        },
        {
          id: 4,
          goodsname: "【海外购自营】黎珐(ReFa) MTG日本 CARAT铂金微电流瘦脸瘦身提拉紧致V脸美容仪 【保税仓发货】",
          goodsprice: "1399",
          goodsweight: "100",
          createtime: "1970-01-18 20:47:45"
        }
      ]
    };
  }
};
</script>

<style lang='scss'>
.goods-container {
  height: 100%;
  .my-bread {
    height: 40px;
    line-height: 40px;
    background-color: #d3dce6;
    padding-left: 10px;
  }
  .my-input {
    .my-btn {
      margin-left: 10px;
    }
  }
  .my-table {
  }
  .my-pagination {
  }
}
</style>
