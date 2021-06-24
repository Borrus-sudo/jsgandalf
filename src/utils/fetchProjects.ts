import { reactive } from "vue";
interface project {
  name: string;
  url: string;
  description: string;
}
interface githubProject {
  full_name: string;
  html_url: string;
  description: string;
}
interface exportType {
  projects: project[];
  owner: { login: string; avatar_url: string };
}
const toExport = reactive<exportType>({
  projects: [],
  owner: { login: "", avatar_url: "" },
});

(async () => {
  const url = "https://api.github.com/users/Borrus-sudo/repos";
  const json = await fetch(url);
  const data = await json.json();
  const {
    owner: { login, avatar_url },
  } = data[0];
  toExport.owner.login = login;
  toExport.owner.avatar_url = avatar_url;
  data.forEach((work: never, index: number) => {
    if (index != 0) {
      const {
        full_name: name,
        html_url: url,
        description,
      } = work as githubProject;
      toExport.projects.push({ name, url, description });
    }
  });
})();
export default toExport;
