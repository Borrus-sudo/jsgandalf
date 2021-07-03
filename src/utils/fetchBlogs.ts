import { reactive } from "vue";
import called from "./keepTrack";
import { blog, blogs } from "./types";
const data = reactive<blogs>({ blogs: [], start: 1, end: 5 });
(async () => {
  const url = "https://jdev.glitch.me/post/getPost";
  const res = await fetch(url);
  const json = await res.json();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  } as const;
  json.reverse();
  json.forEach((element: blog) => {
    const today = new Date(element.time);
    element.time = today.toLocaleDateString("en-US", options);
    element.meta = element.meta.split("duration")[0].trim();
    element.time = element.time
      .slice(element.time.indexOf(",") + 1, element.time.length)
      .trim();
    data.blogs.push(element);
    called.calledBlogs.push(element._id);
  });
})();
export default data;
