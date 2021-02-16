import { axiosApi } from '../ApiConfig';
import { Post, User } from '../models';

export class PostsService {
  public static getAll() {
    return new Promise<Post[]>((resolve, reject) => {
      axiosApi.get<Post[]>('/posts').then(r => {
        if (r.status === 200) {
          resolve(r.data);
        }
      }).catch(e => reject(e));
    });
  }

  public static mergeWithUsers(posts: Post[], users: User[]) {
    return posts.map(p => {
      p.user = users.find(u => u.id === p.userId);
      return p;
    })
  }
}
