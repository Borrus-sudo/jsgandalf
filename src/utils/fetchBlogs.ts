import { reactive } from "vue";
import called from "./keepTrack";
import { blog, blogs } from "./types";
const data = reactive<blogs>({ blogs: [], start: 1, end: 5 });
(async () => {
  const url = "https://jdev.glitch.me/post/getPost";
  const res = await fetch(url);
  const json = await res.json();
  json.forEach((element: blog) => {
    data.blogs.push(element);
    called.calledBlogs.push(element._id);
  });
})();
export default data;
