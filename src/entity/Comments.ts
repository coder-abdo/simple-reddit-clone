import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Post } from "./Post";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  body: string;

  @Column()
  authorId: string;

  @ManyToOne(() => Post, (post) => post.comments)
  post: Post;
}
