import { reactive } from "vue";

const called = reactive<{ calledBlogs:string[]}>({ calledBlogs: [] });
export default called;