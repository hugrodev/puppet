import OutilsService from "../services/outilsService";
import { Category_Item } from "../constantes/AccessoireConst";
import { Color, Solver } from "../services/outilsColor";

export class AccessoireModel {
    private categorie: Category_Item;

    // format css car les couleurs sont affiché grace au filtre 
    private couleurFilter: string = "";  
    private skinFilter: string= "";

    private numero: string = "";

    constructor(catg: Category_Item, skinFilter: string, numero?: string,   colorFilter?: string) {
        this.categorie =  catg;
        this.skinFilter = skinFilter;

        if(numero) {
            this.numero = numero;
        }else{
            this.numero = OutilsService.getRandomNumber(1,5).toString();
        }
        if(colorFilter){
            this.couleurFilter = colorFilter;
        }else {
            this.setCouleurFilter(Color.getFilterFromHex(Color.getRandomHexColor()));
        }
    } 

    /**
     * 
     * @param couleur Attend une couleur en hexadecimal, la transforme en css
     */
    setCouleurFilter(couleur: string){        
        this.couleurFilter = couleur;
    }
    /**
     * 
     * @param couleur Attend une couleur en hexadecimal, la transforme en css
     */
    setSkinFilter(filter: string){        
        this.couleurFilter = filter;
    }

    getCouleurFilter(){
        return this.couleurFilter;
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
        const clone = new AccessoireModel(this.categorie,  this.skinFilter, this.numero, this.couleurFilter);  
        return clone;
    }
}