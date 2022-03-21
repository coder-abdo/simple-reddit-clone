export type Error = {
  name: string;
  message: string;
  stack: string;
  status: number;
};
export type Comment = {
  id?: number;
  body: string;
};
export type post = {
  id?: number;
  title: string;
  body: string;
  authorId: number;
  comments: Comment[];
};
