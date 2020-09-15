<template>
  <div>
    <el-breadcrumb
      separator-class="el-icon-arrow-right"
      style="margin-bottom: 20px"
    >
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品库</el-breadcrumb-item>
    </el-breadcrumb>
    <el-button type="primary" icon="el-icon-plus" @click="addBtn"
      >添加商品</el-button
    >

    <el-dialog
      title="添加商品"
      :visible.sync="goodDialogVisible"
      :before-close="handleClose"
    >
      <el-form :model="goodForm">
        <el-form-item label="商品分类" :label-width="formLabelWidth">
          <el-select v-model="goodForm.category" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item._id"
              :label="item.name"
              :value="item._id"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品名称" :label-width="formLabelWidth">
          <el-input v-model="goodForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品描述" :label-width="formLabelWidth">
          <el-input v-model="goodForm.desc" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品价格" :label-width="formLabelWidth">
          <el-input v-model="goodForm.price" autocomplete="off">
            <span slot="append">元</span>
          </el-input>
        </el-form-item>
        <el-form-item label="商品封面" :label-width="formLabelWidth">
          <el-upload
            action="http://localhost:3000/upload"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-success="uploadImg"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="goodDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addGood">确 定</el-button>
      </div>
    </el-dialog>
    <good-list ref="goodListRef"></good-list>
  </div>
</template>

<script lang="ts">
import GoodList from "@/components/GoodList.vue";
import { Vue, Component, Watch, Ref } from "vue-property-decorator";

import AnotherComponent from "@/path/to/another-component.vue";
@Component({
  components: {
    GoodList
  }
})
export default class Goods extends Vue {
  goodForm = {
    category: "",
    name: "",
    desc: "",
    price: "",
    cover: ""
  };
  goodDialogVisible = false;
  formLabelWidth = "80px";
  dialogImageUrl = "";
  dialogVisible = false;
  options = [];
  // goodsList = [];
  //  @Watch('goodsList')
  // private watchGoodsList(val){
  //   console.log(111)
  // }
  // created() {
  //   this.getGoods();
  // }

  @Ref() readonly goodListRef;

  handleClose(done) {
    this.$confirm("确认关闭？")
      .then(() => {
        this.initForm();
        done();
      })
      .catch(() => {
        this.initForm();
      });
  }
  handleRemove(file, fileList) {
    // console.log(file, fileList);
  }
  handlePictureCardPreview(file) {
    this.dialogImageUrl = file.url;
    this.dialogVisible = true;
  }
  uploadImg(file) {
    console.log(file);
    this.goodForm.cover = file.url;
  }
  initForm() {
    this.goodForm = {
      category: "",
      name: "",
      desc: "",
      price: "",
      cover: ""
    };
  }
  async getGoods() {
    const { data } = await this.$http.get("goods");
    console.log(data);

    // this.goodsList = data;
  }
  async addBtn() {
    await this.getOptions();
    this.initForm();
    console.log(this.goodForm);

    this.goodDialogVisible = true;
  }
  async getOptions() {
    const { data } = await this.$http.get("categories");
    this.options = data;
  }

  async addGood() {
    this.$confirm("此操作将添加该物品, 是否继续?", "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning"
    })
      .then(async () => {
        await this.$http.post("goods", this.goodForm);
        this.initForm();
        this.goodDialogVisible = false;
        this.goodListRef.getGoodsList();

        this.$message({
          type: "success",
          message: "添加成功!"
        });
      })
      .catch(() => {
        this.$message({
          type: "info",
          message: "已取消删除"
        });
      });
  }
}
</script>

<style lang="scss" scoped>
/deep/.el-dialog {
  width: 500px;
}
</style>
