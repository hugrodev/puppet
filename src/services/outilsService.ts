class OutilsService {
    
    static getRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
  
  export default OutilsService;