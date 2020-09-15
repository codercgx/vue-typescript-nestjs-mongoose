<template>
  <div v-if="cateData">
    <h3>{{ id ? "编辑" : "新建" }}分类</h3>
    <el-form :model="cateData">
      <el-form-item label="选择上级分类">
        <el-select
          v-model="cateData.parent"
          clearable
          placeholder="请选择"
          v-if="!id"
        >
          <el-option
            v-for="(item, i) in options"
            :key="i"
            :label="item.name"
            :value="item._id"
          >
          </el-option>
        </el-select>
        <el-select
          v-model="cateData.parent"
          clearable
          placeholder="请选择"
          v-else
        >
          <el-option
            v-for="(item, index) in options"
            :key="index"
            :label="item.parent.name"
            :value="item.parent._id"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="cateData.name"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="save">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
interface BlogDto {
  name: string;
  title: string;
}
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class CategoeyCreate extends Vue {
  @Prop() id!: string;
  @Prop() resource!: string;
  cateData: any = {};
  options = [];
  created() {
    this.getOptions();

    // console.log(this.options);
    this.id && this.getCateDetile();
  }
  // get Content() {
  //   switch (this.resource) {
  //     case "blog":
  //       return "博客";
  //     // break;
  //     case "category":
  //       return "分类";
  //     // break;
  //     default:
  //       return "";
  //     // break;
  //   }
  // }
  async save() {
    if (this.id) {
      this.$confirm("此操作将修改该分类, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          await this.$http.put(`categories/${this.id}`, this.cateData);
          // this.cateData = {};
          this.$message({
            type: "success",
            message: "修改成功!"
          });
          console.log(this.cateData);

          // this.$router.push("/category/list");
        })
        .catch(async () => {
          this.$message({
            type: "info",
            message: "已取消"
          });
        });
    } else {
      const data = await this.$http.post(`categories`, this.cateData);
      // console.log(this.cateData);
      this.$message.success("新建成功!");
      this.$router.push("/category/list");
    }
  }

  async getCategory() {
    const { data } = await this.$http.get("categories");
    // console.log(data);
    this.cateData = data;
  }
  async getCateDetile() {
    const { data } = await this.$http.get(`categories/${this.id}`);
    // console.log(data);
    this.cateData = data;
  }
  async getOptions() {
    const { data } = await this.$http.get("categories");
    this.options = data;
    console.log(data);
  }
}
</script>
