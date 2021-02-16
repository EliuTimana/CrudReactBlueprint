export class SecurityService {
  private static API = '';
  public static login = (username: string, password: string) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'admin@email.com' && password === 'qwerty') {
          sessionStorage.setItem('token', 'jwt_token');
          resolve(true);
        } else {
          reject();
        }
      }, 400);
    });
  }

  public static loggedIn = () => {
    return sessionStorage.getItem('token') !== null;
  }
}
