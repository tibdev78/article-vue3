<template>
  <ArticleComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ArticleComponent from "@/components/ArticleComponent.vue";
export default defineComponent({
  name: "Home",
  components: {
    ArticleComponent,
  },
});
</script>
