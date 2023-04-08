class LocalStorageService {
    static saveItem(key: string, value: string) {
      localStorage.setItem(key, value);
    }
  
    static getItem(key: string) {
      return localStorage.getItem(key);
    }
  
    static removeItem(key: string) {
      localStorage.removeItem(key);
    }
  }
  
  export default LocalStorageService;
  