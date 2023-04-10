class OutilsHtmlService {
        
    static handleLeftArrowClick(scrollable: React.RefObject<HTMLDivElement> ) {
        if (scrollable.current) {
            scrollable.current.scrollBy({
            left: -200,
            behavior: 'smooth',
            });
        }
    }

    static handleRightArrowClick(scrollable: React.RefObject<HTMLDivElement> ) {
        if (scrollable.current) { 
            scrollable.current.scrollBy({
            left: 200,
            behavior: 'smooth',
            });
        }
    } 
  }
  
  export default OutilsHtmlService;