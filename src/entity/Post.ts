import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Comment } from "./Comments";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  body: string;

  @Column()
  authorId: string;

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];
}
