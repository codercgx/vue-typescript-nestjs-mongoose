<template>
  <div class="goodsList">
    <el-table :data="getList" stripe style="width: 100%">
      <el-table-column label="收藏" align="center" width="60">
        <template #default="{row}">
          <div>
            <i
              class="el-icon-star-on"
              :class="{ highLight: row.status }"
              @click="tiggle(row._id)"
            ></i>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="序号" type="index" align="center" width="60">
      </el-table-column>
      <el-table-column label="封面" align="center" width="180">
        <template #default="{row}">
          <div>
            <img :src="row.cover" alt="" />
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="名称" align="center" width="180">
      </el-table-column>
      <el-table-column prop="desc" label="描述" align="center" width="180">
      </el-table-column>
      <el-table-column prop="price" label="价格" align="center" width="180">
      </el-table-column>

      <el-table-column
        prop="category.name"
        label="所属分类"
        width="180"
        align="center"
      >
      </el-table-column>
      <el-table-column label="删除" width="100" align="center">
        <template #default="{row}">
          <el-button type="primary" size="mini" @click="edit(row._id)"
            >编辑</el-button
          >
        </template>
      </el-table-column>
      <el-table-column label="编辑" width="100" align="center">
        <template #default="{row}">
          <el-button type="danger" size="mini" @click="remove(row._id)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="goodItem" v-for="(item, index) in goodsList" :key="index">
      <img :src="item.cover" alt="" />
      <div class="goodName">{{ item.name }}</div>
      <div class="desc">{{ item.desc }}</div>
      <div class="price">{{ item.price }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { log } from "util";

@Component
export default class GoodList extends Vue {
  // @Prop() goodsList;
  goodsList: any[] = [];
  // @Watch("goodsList")
  // private watchGoodsList(val) {
  //   console.log(val);
  // }

  object = 0;
  get getList() {
    // interface goodItem {
    //   category: object;
    //   cover: string;
    //   desc: string;
    //   name: string;
    //   price: string;
    //   _id: string;
    // }
    // this.goodsList.forEach(async (item) => {
    //   const { data } = await this.$http.get("action/status", {
    //     params: {
    //       type: "Good",
    //       name: "fav",
    //       object: item._id,
    //     },
    //   });
    //   return this.$set(item, "status", data);
    // });
    // const data = await this.getStatus(this.object);
    // console.log(data);

    this.goodsList.map(item => {
      item.status = true;
    });
    console.log(this.goodsList);

    return this.goodsList;
  }
  // get getStatus() {
  //   return this.$http.get("action", {
  //     params: {
  //       type: "Good",
  //       name: "fav",
  //       object: this.object,
  //     },
  //   });
  // }
  created() {
    this.getGoodsList();
    // this.getList();
  }

  async tiggle(id) {
    this.object = id;
    console.log(this.object);
    await this.$http.post("action/toggle", {
      type: "Good",
      name: "fav",
      boject: this.object
    });
    const data = await this.getStatus(this.object);
    console.log(data);

    this.getList
      .filter(item => {
        item._id = id;
      })
      .map(item => {
        return (item.status = data.status);
      });
  }
  async getStatus(id) {
    const { data } = await this.$http.get("action/status", {
      params: {
        type: "Good",
        name: "fav",
        boject: this.object
      }
    });
    return data;
  }
  edit(id) {
    console.log(id);
  }

  async remove(id) {
    console.log(id);
    this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning"
    })
      .then(async () => {
        const { data } = await this.$http.delete(`goods/${id}`);
        console.log(data);
        if (data.ok === 1) {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          await this.getGoodsList();
        }
      })
      .catch(() => {
        this.$message({
          type: "info",
          message: "已取消删除"
        });
      });
  }

  async getGoodsList() {
    const { data } = await this.$http.get("goods");
    this.goodsList = data;
    console.log(this.goodsList);
  }
}
</script>

<style lang="scss" scoped>
.goodsList {
  margin-top: 20px;
  .goodItem {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
  }
}
.highLight {
  color: orange;
  font-size: 20px;
  cursor: pointer;
  // background-color: orange;
}
img {
  width: 100px;
  height: 100px;
}
</style>
