<template>
  <div>
    <div class="d-flex justify-content-center">
      <h5>{{ article.title }}</h5>
    </div>
    <div class="d-flex justify-content-center">
      <h5>{{ article.body }}</h5>
    </div>
    <div class="d-flex justify-content-end">
      <button type="button" class="btn btn-secondary" @click="goBack()">
        Back
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { ArticleHttpData } from "@/models/Article";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "ArticleDetails",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const article = computed(() => {
      const articles: Array<ArticleHttpData> =
        store.getters["articleStore/getArticle"];
      return (
        articles?.find((item) => item.id === +props.id) ?? {
          title: "No title",
          body: "No Body",
        }
      );
    });

    const goBack = () => {
      router.go(-1);
    };

    return {
      article,
      goBack,
    };
  },
});
</script>
