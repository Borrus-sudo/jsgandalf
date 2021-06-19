import { reactive } from "vue";
interface project {
  name: string;
  url: string;
  description: string;
}
const projects = reactive<project[]>([]);
(async () => {
  const url = "https://api.github.com/users/Borrus-sudo/repos";
  const json = await fetch(url);
  const data = await json.json();
  const {
    owner: { login, avatar_url },
  } = data[0];
  console.log(login, avatar_url);
  data.array.forEach((work: any, index: number) => {
    if (index != 0) {
      const { full_name: name, html_url: url, description } = work;
      projects.push({ name, url, description });
    }
  });
})();
export default projects;
