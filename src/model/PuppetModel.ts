import CATG_NB from "../constantes/AccessoireConst";
import { Color } from "../services/outilsColor";
import { AccessoireModel } from "./AccessoireModel";

export class PuppetModel {
    public url: string = "./";
    public skin: string = Color.getRandomHexColor();
    public skinFilter: string = Color.getFilterFromHex(this.skin);

    public chapeaux: AccessoireModel = new AccessoireModel(CATG_NB.chapeaux, this.skinFilter); 
    public coupe: AccessoireModel = new AccessoireModel(CATG_NB.coupe, this.skinFilter);
    public oreille: AccessoireModel = new AccessoireModel(CATG_NB.oreille, this.skinFilter);
    public pattes: AccessoireModel = new AccessoireModel(CATG_NB.pattes, this.skinFilter);
    public lunettes: AccessoireModel = new AccessoireModel(CATG_NB.lunettes, this.skinFilter);
    public sourcils: AccessoireModel = new AccessoireModel(CATG_NB.lunettes, this.skinFilter);
    public oeil_gauche: AccessoireModel = new AccessoireModel(CATG_NB.oeil_gauche, this.skinFilter);
    public nez: AccessoireModel = new AccessoireModel(CATG_NB.nez, this.skinFilter);
    public oeil_droit: AccessoireModel = new AccessoireModel(CATG_NB.oeil_droit, this.skinFilter);
    public bouche: AccessoireModel = new AccessoireModel(CATG_NB.bouche, this.skinFilter);
    public visage: AccessoireModel = new AccessoireModel(CATG_NB.visage, this.skinFilter);
    public corps: AccessoireModel = new AccessoireModel(CATG_NB.corps, this.skinFilter);

    constructor(){ 
    }

    getSkin(){
        return this.skin;
    }

    setSkin(skin:string){
        this.skin = skin;
        let skinFilter = Color.getFilterFromHex(this.skin);
        this.setSkinFilter(skinFilter);
        this.chapeaux.setSkinFilter(skinFilter);
        this.coupe.setSkinFilter(skinFilter);
        this.oreille.setSkinFilter(skinFilter);
        this.pattes.setSkinFilter(skinFilter);
        this.lunettes.setSkinFilter(skinFilter);
        this.sourcils.setSkinFilter(skinFilter);
        this.oeil_gauche.setSkinFilter(skinFilter);
        this.nez.setSkinFilter(skinFilter);
        this.oeil_droit.setSkinFilter(skinFilter);
        this.bouche.setSkinFilter(skinFilter);
        this.visage.setSkinFilter(skinFilter);
        this.corps.setSkinFilter(skinFilter);
    }

    setSkinFilter(skinFilter: string){
        this.skinFilter = skinFilter;
    }
    
    clone(): PuppetModel {
        const puppet = new PuppetModel();
        puppet.url = this.url;
        puppet.skin = this.skin;
        puppet.skinFilter = this.skinFilter;
        puppet.chapeaux = this.chapeaux.clone();
        puppet.coupe = this.coupe.clone();
        puppet.oreille = this.oreille.clone();
        puppet.pattes = this.pattes.clone();
        puppet.lunettes = this.lunettes.clone();
        puppet.sourcils = this.sourcils.clone();
        puppet.oeil_gauche = this.oeil_gauche.clone();
        puppet.nez = this.nez.clone();
        puppet.oeil_droit = this.oeil_droit.clone();
        puppet.bouche = this.bouche.clone();
        puppet.visage = this.visage.clone();
        puppet.corps = this.corps.clone();
        return puppet;
      }
}
 
