// store/posts.js
export const state = () => ({
    posts: [],
  });
  
  export const mutations = {
    setPosts(state, posts) {
      state.posts = posts;
    },
  };
  
  export const actions = {
    async fetchPosts({ commit }) {
      // Загрузка данных о постах с сервера или из API
      const posts = await fetch('your_api_endpoint/posts');
      commit('setPosts', posts);
    },
  };