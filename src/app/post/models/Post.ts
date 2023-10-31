import { Comment } from '../../comment/Comment';

export class Post {
  id?: number;
  title?: string;
  postUrl?: string;
  posterName?: string;
  voteCount?: number;
  userId?: number;
  postedAt?: Date;
  updatedAt?: Date;
  comments?: Comment[];
}
