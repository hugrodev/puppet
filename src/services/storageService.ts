class LocalStorageService {
    static savePuppet(key: string, value: string) {
      localStorage.setItem(key, value);
    }
  
    static getPuppet(key: string) {
      return localStorage.getItem(key);
    }

    static getPuppetAffiche() {
      const puppet = localStorage.getItem("puppet_affiche");
      return puppet? JSON.parse(puppet): null;
    }
  
    static removePuppet(key: string) {
      localStorage.removeItem(key);
    }
  }
  
  export default LocalStorageService;
  