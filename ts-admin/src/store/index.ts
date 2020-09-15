import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

interface BlogDto {
  name: string;
  title: string;
}
interface I {
  [str: string]: BlogDto;
}
export default new Vuex.Store({
  state: {
    formData: [{}]
  },
  mutations: {
    addBlog(state, param: BlogDto) {
      state.formData.push(param);
    }
  },
  actions: {},
  modules: {}
});
