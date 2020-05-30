import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
  // 创建初始state
  state: {
    // 判定token值否存在
    Authorization: sessionStorage.getItem("Authorization") ? sessionStorage.getItem("Authorization") : ''
  },
  // mutation
  mutations: {
    //修改token 存入sessionStorage
    changeLoginToken(state, user) {
      state.Authorization = user.Authorization;
      sessionStorage.setItem('Authorization', user.Authorization);
    }
  }
});