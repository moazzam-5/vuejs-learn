import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import state from "./state";
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";

export default createStore({
  state,
  getters,
  mutations,
  actions,
  plugins: [createPersistedState()],
});
