
<template>
  <div class="reports-container">
    <!-- 面包屑 使用面包屑组件-->
    <my-bread sectitle="数据统计" threetitle="数据报表"></my-bread>

    <!-- 使用echarts图形化插件  
        步骤:
            1.安装echarts 
            2.导入
            3.初始化
            4.数据结构
            5.动态渲染
    -->
    <!-- 准备一个容器 -->
    <div class="echarts-container">
      <div id="main" style="width: 800px;height:500px;"></div>
    </div>
  </div>
</template>


<script>
// 导入echarts
import echarts from "echarts";

export default {
  name: "reports",
  data() {
    return {
      option: {
        title: {
          text: "用户来源"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: ["华东", "华南", "华北", "西部", "其他"]
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: [
              "2017-12-27",
              "2017-12-28",
              "2017-12-29",
              "2017-12-30",
              "2017-12-31",
              "2018-1-1"
            ]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "华东",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230]
          },
          {
            name: "华南",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330]
          },
          {
            name: "华北",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330]
          },
          {
            name: "西部",
            type: "line",
            stack: "总量",
            areaStyle: { normal: {} },
            data: [320, 332, 301, 334, 390, 330]
          },
          {
            name: "其他",
            type: "line",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "top"
              }
            },
            areaStyle: { normal: {} },
            data: [820, 932, 901, 934, 1290, 1330]
          }
        ]
      }
    };
  },
  created() {
    // 注意 在created钩子函数中 是无法获取dom元素的
    // let div = document.getElementById("main");
    // console.log(div);  //null
  },
  //  挂载完成之后 在这里才可以访问到template中的 dom元素
  // 在挂载之后发请求获取数据  在created中发请求 因为是异步,不会阻止后续代码的执行,此时mounted方法中已经渲染了初始数据
  async mounted() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("main"));
    let res = await this.$axios.get("reports/type/1");
    console.log(res);
    // 遍历 将从服务器获取的数据按照需要赋值给data中的option中
    // 不能直接赋值对象 因为获取的数据只有一部分 需要遍历获取
    for (const key in res.data.data) {
      this.option[key] = res.data.data[key];
    }
    // 此时x轴有留白  因为没有设置
    //category   类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
    this.option.xAxis[0].type = "category";
    //boundaryGap  坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样。默认为true有留白,要修改成false
    this.option.xAxis[0].boundaryGap = false;

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(this.option);
  }
};
</script>

<style lang='scss'>
.reports-container {
  height: 100%;
  .echarts-container {
    height: 550px;
    background-color: #fff;
    padding: 30px;
    #main {
    }
  }
}
</style>
