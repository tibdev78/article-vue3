import { IRootState, StorePayload } from "./Store";
import { ActionContext } from "vuex";

type ArticleHttpData = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

interface ArticleState {
  articles?: Array<ArticleHttpData>;
  rootDispatch?: boolean;
}

interface ArticleGetters {
  getArticle(paramState: ArticleState): Array<ArticleHttpData>;
}

enum ArticlesEnumActions {
  SET_ARTICLES = "SET_ARTICLES",
}

type ArticlesActionsTypes = {
  [ArticlesEnumActions.SET_ARTICLES](
    paramStore: ActionContext<ArticleState, IRootState>,
    payload: StorePayload
  ): void;
};

enum ArticlesEnumMutations {
  UPDATES_ARTICLES = "UPDATES_ARTICLES",
}

type ArticlesMutationTypes = {
  [ArticlesEnumMutations.UPDATES_ARTICLES](
    state: ArticleState,
    payload: StorePayload
  ): void;
};

export {
  ArticleHttpData,
  ArticleState,
  ArticleGetters,
  ArticlesActionsTypes,
  ArticlesEnumActions,
  ArticlesMutationTypes,
  ArticlesEnumMutations,
};
