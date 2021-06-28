export type blog = {
  meta: string;
  message: string;
  time: string;
  star: number;
  duration: string;
  _id: string;
};
export interface blogs {
  blogs: Array<blog>;
  start: number;
  end: number;
}
