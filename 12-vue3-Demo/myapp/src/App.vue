<template>
  <div id="app">
    <button @click="toggle">Show/Hide heightlighted post</button>
    <Blog :post="post" v-for="post in visibleBlogPost" :key="post.title"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Blog, { Post } from './components/blog.vue';
import { AxiosResponse } from 'axios';
import axios from 'axios'

@Component({
  components: {
    Blog
  }
})
export default class App extends Vue {
  // private blogPost: Post[] = [
  //   {
	// 		title: 'My first blogpost ever!',
	// 		body: 'Lorem ipsum dolor sit amet.',
	// 		author: 'Elke',
	// 		datePosted: new Date(2019, 1, 18),
	// 	},
	// 	{
	// 		title: 'Look I am blogging!',
	// 		body: 'Hurray for me, this is my second post!',
	// 		author: 'Elke',
	// 		datePosted: new Date(2019, 1, 19),
	// 	},
	// 	{
	// 		title: 'Another one?!',
	// 		body: 'Another one!',
	// 		author: 'Elke',
  //     datePosted: new Date(2019, 1, 20),
  //     highlighted: true
	// 	}
  // ]
  private blogPost: Post[] = []; 
  public showHighLighted: boolean = true;

  get visibleBlogPost() {
    return this.blogPost.filter(
      (post: Post) => post.highlighted === undefined || post.highlighted === this.showHighLighted,
    );
  }

  public toggle() {
    this.showHighLighted = !this.showHighLighted;
  }

  // 获取数据
  public created() {
    axios.get('http://localhost:8080/request.json').then((res: AxiosResponse) => {
      // console.log('res', res);
      this.blogPost = res.data.blogposts.map((val: any) => ({
        title: val.title,
        body: val.body,
        author: val.author,
        datePosted: val.datePosted,
        highlighted: val.highlighted,
      }));
      // console.log('blogPost', this.blogPost);
    });
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
