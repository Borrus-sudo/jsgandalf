import { reactive } from "vue";
type blog = { content: string; time: string; star: number; _id: string };
interface blogs {
  blogs: Array<blog>;
  start: number;
  end: number;
}
const data = reactive<blogs>({ blogs: [], start: 1, end: 5 });
(async () => {
  const url = "https://jdev.glitch.me/post/getPost";
  const res = await fetch(url);
  const json = await res.json();
  json.forEach((element:blog) => {
    data.blogs.push(element);
  });
})();
export default data;
