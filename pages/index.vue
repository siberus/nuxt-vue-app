// pages/index.vue
<template>
  <div>
    <PostsList :posts="posts" />
  </div>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.state.posts.posts;
    },
  },
  async mounted() {
    await this.$store.dispatch('fetchPosts');
  },
};
</script>