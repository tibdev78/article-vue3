import articleStore from "./articleStore";
import { createStore, createLogger } from "vuex";

const debug = process.env.NODE_ENV !== "production";

const Store = createStore({
  modules: { articleStore },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});

export default Store;
