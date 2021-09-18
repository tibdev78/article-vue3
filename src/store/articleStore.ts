import { IRootState } from "@/models/Store";
import {
  ArticleState,
  ArticleGetters,
  ArticlesActionsTypes,
  ArticlesEnumActions,
  ArticlesEnumMutations,
  ArticlesMutationTypes,
  ArticleHttpData,
} from "@/models/Article";
import { GetterTree, Module, ActionTree, MutationTree } from "vuex";

const state: ArticleState = {
  articles: [],
};

const getters: GetterTree<ArticleState, IRootState> & ArticleGetters = {
  getArticle: (paramState: ArticleState) => paramState.articles || [],
};
const actions: ActionTree<ArticleState, IRootState> & ArticlesActionsTypes = {
  [ArticlesEnumActions.SET_ARTICLES]({ commit }, oData) {
    commit(ArticlesEnumMutations.UPDATES_ARTICLES, oData);
  },
};
const mutations: MutationTree<ArticleState> & ArticlesMutationTypes = {
  [ArticlesEnumMutations.UPDATES_ARTICLES](state, oData) {
    state.articles = [...(oData.data as Array<ArticleHttpData>)];
  },
};

const articleStore: Module<ArticleState, IRootState> = {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};

export default articleStore;
