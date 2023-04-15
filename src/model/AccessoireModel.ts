import OutilsService from "../services/outilsService";
import { Category_Item } from "../constantes/AccessoireConst";
import { Color, Solver } from "../services/outilsColor";

export class AccessoireModel {
    private categorie: Category_Item;

    //format hexa
    private couleur: string = ""; 
    // format css car les couleurs sont affiché grace au filtre 
    private couleurFilter: string = "";   
    private skinFilter: string= "";

    private numero: string = "";

    /**
     * 
     * @param catg 
     * @param skinFilter 
     * @param numero 
     * @param colorFilter optional
     * @param color optional, if colorfilter present required
     */
    constructor(catg: Category_Item, skinFilter: string, numero?: string,   colorFilter?: string, color ?: string) {
        this.categorie =  catg;
        this.skinFilter = skinFilter;

        if(numero) {
            this.numero = numero;
        }else{
            this.numero = OutilsService.getRandomNumber(1,5).toString();
        }
        if(colorFilter && color){ 
            this.couleur = color;
            this.couleurFilter = colorFilter;
        }else {
            this.setCouleur(Color.getRandomHexColor());
        }
    } 

    /**
     * 
     * @param couleurFilter
     */
    setCouleurFilter(couleur: string){        
        this.couleurFilter = couleur;
    }
    /**
     * 
     * @param filter
     */
    setSkinFilter(filter: string){        
        this.skinFilter = filter;
    }

    getCouleurFilter(){
        return this.couleurFilter;
    }

    /**
     * 
     * @param couleur hexadecimal
     */
    setCouleur (couleur: string){        
        this.couleur = couleur;
        this.setCouleurFilter(Color.getFilterFromHex(this.couleur));
    }

    getCouleur(){
        return this.couleur;
    }

    getCategorie(){
        return this.categorie;
    }

    getSkinFilter(){
        return this.skinFilter;
    }

    setNumero(numero: string){
        this.numero = numero;
    }

    getNumero(){
        return this.numero;
    }

    getUrl(){
        return this.categorie.nom + "/" + this.numero + ".png"; //+ "_" + this.couleur;
    }
    getUrlColor(){
        return this.categorie.nom + "/" + this.numero + "_color.png"; //+ "_" + this.couleur;
    }
    getUrlSkin(){
        return this.categorie.nom + "/" + this.numero + "_skin.png"; //+ "_" + this.couleur;
    }

    clone(): AccessoireModel {
        const clone = new AccessoireModel(this.categorie,  this.skinFilter, this.numero, this.couleurFilter, this.couleur);  
        return clone;
    }
}