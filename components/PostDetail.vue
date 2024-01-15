<template>
    <div>
      <img :src="post.image" alt="Post Image">
      <h1>{{ post.title }}</h1>
      <p>{{ post.description }}</p>
      <p>{{ post.date }}</p>
  
      <!-- Добавьте отзывы к посту -->
      <ReviewForm :postId="post.id" />
      <div v-for="review in post.reviews" :key="review.id">
        <!-- Отображение отзыва к посту -->
        <Review :review="review" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['post'],
    components: {
      ReviewForm,
      Review,
    },
  };
  </script>