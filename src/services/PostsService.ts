import { axiosApi, toPromise } from '../ApiConfig';
import { Post, User, Comment } from '../models';

export class PostsService {

  private static API = '/posts';

  public static getAll() {
    return new Promise<Post[]>((resolve, reject) => {
      axiosApi.get<Post[]>(this.API).then(r => {
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

  public static delete(id: number) {
    return new Promise<void>((resolve, reject) => {
      axiosApi.delete(`${this.API}/${id}`).then(r => {
        if (r.status === 200) {
          resolve();
        }
      }).catch(e => reject(e));
    })
  }

  public static getComments(id: number) {
    return toPromise<Comment[]>(axiosApi.get(`${this.API}/${id}/comments`))
  }

  public static update(post:Post){
    return new Promise<void>((resolve, reject) => {
      axiosApi.patch(`${this.API}/${post.id}`,post).then(r => {
        if (r.status === 200) {
          resolve();
        }
      }).catch(e => reject(e));
    })
  }
}
