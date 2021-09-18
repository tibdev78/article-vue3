<template>
  <div class="row">
    <div class="col-12">
      <input
        class="form-control"
        type="text"
        v-model="inputData"
        placeholder="type your title"
      />
    </div>
    <div class="col-6" v-for="article in articles" :key="article.id">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ article.title }}</h5>
          <p class="card-text">
            {{ article.body.substr(0, article.body.length - 50).concat("...") }}
          </p>
          <router-link :to="`/article/${article.id}`" class="card-link">
            Details
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
/* global VoidFunction */
import { defineComponent, computed, onMounted } from "vue";
import articleService from "@/service/http/articlesService";
import { useStore } from "vuex";
import { useSearch } from "@/hook/useSearch";
import useDebounceRef from "@/hook/useDebounceRef";

export default defineComponent({
  name: "ArticleComponent",
  setup() {
    const store = useStore();
    const inputData = useDebounceRef("", 500);
    const articles = computed(() => {
      return useSearch(
        store.getters["articleStore/getArticle"],
        inputData.value as string
      );
    });

    const getArticles: VoidFunction = async () => {
      const articleData = await articleService.getArticles();
      store.dispatch("articleStore/SET_ARTICLES", { data: articleData });
    };

    onMounted(getArticles);

    return {
      articles,
      inputData,
    };
  },
});
</script>
