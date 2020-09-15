<template>
  <div>
    <h3>分类列表</h3>
    <el-table :data="tableData" style="width: 100%" align="center" stripe>
      <el-table-column label="日期" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="序号" type="index" width="180">
      </el-table-column>
      <el-table-column align="center" label="名称" prop="name" width="180">
      </el-table-column>
      <el-table-column
        align="center"
        label="上级分类"
        prop="parent"
        width="240px"
      >
        <template #default="{row}">
          <div>
            {{ row.parent ? row.parent.name : `暂无上级分类` }}
          </div>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" fixed="right">
        <template #default="{row}">
          <el-button size="mini" type="primary" @click="editCategory(row)"
            >编辑</el-button
          >
          <el-button size="mini" type="danger" @click="deleteCategory(row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class BlogCreate extends Vue {
  tableData = [];
  created() {
    this.getCategories();
  }
  async getCategories() {
    const { data } = await this.$http.get("categories");
    console.log(data);
    this.tableData = data;
  }

  editCategory({ _id }) {
    this.$router.push(`/category/edit/${_id}`);
    console.log(_id);
  }
  async deleteCategory({ _id }) {
    console.log(_id);
    this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning"
    })
      .then(async () => {
        await this.$http.delete(`categories/${_id}`);
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        this.getCategories();
      })
      .catch(async () => {
        this.$message({
          type: "info",
          message: "已取消删除"
        });
      });
  }
}
</script>
