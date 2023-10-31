import { Post } from '../post/models/Post';
import { Vote } from '../vote/Vote';
import { Comment } from '../comment/Comment';

export class User {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  loggedIn?: boolean;
  posts?: Post[];
  votes?: Vote[];
  comments?: Comment[];
}
