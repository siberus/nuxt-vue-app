<template>
    <div>
      <div v-for="post in posts" :key="post.id">
        <!-- Отображение карточки поста -->
        <router-link :to="'/posts/' + post.id">
          <img :src="post.image" alt="Post Image">
          <h2>{{ post.title }}</h2>
          <p>{{ post.miniDescription }}</p>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['posts'],
  };
  </script>