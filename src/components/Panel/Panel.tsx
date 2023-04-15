import React, { FC, useEffect, useRef, useState } from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { ChromePicker, SketchPicker } from 'react-color';
import './Panel.scss';
import { PuppetModel } from '../../model/PuppetModel';
import OutilsHtmlService from '../../services/outilsHtml';
import CATG_NB from '../../constantes/AccessoireConst';
import { AccessoireModel } from '../../model/AccessoireModel';
import Accessoire from '../AccessoireModel/Accessoire';  
import CustomColorPicker from '../ColorPicker/CustomColorPicker';

interface PanelProps {
  puppet: PuppetModel;
  onPuppetChange: (puppet: PuppetModel) => void;
}

const Panel: FC<PanelProps> = (props) => {

  // UTILS
  const catgScrollable = useRef<HTMLDivElement>(null);
  const [catgImgList, setCatgImgList] = useState<AccessoireModel[]>([]);
  const [activeCatg, setActiveCatg] = useState<string>('');
  const [activeColor, setActiveColor] = useState<string>(''); 
  const [activeSkin, setActiveSkin] = useState<string>(''); 
  const [showColorPicker, setShowColorPicker] = useState(false)

  const puppet: PuppetModel = props.puppet;  

  function handleCatgClick(key : string){
    loadCatg(key);
  }

  const handleButtonColorClick = () => {
    setShowColorPicker(true);
  };

  function handleImgClick(accessoire : AccessoireModel){ 
    const category = accessoire.getCategorie().nom; 

    if(category){ 
      // on fait un clone pour etre sur de la detection de changements
      const nouveauPuppet: PuppetModel = puppet.clone();

      // la skin modifie l'origine du repertoire pour toutes les images enfants
      (nouveauPuppet[category as keyof PuppetModel] as AccessoireModel) = accessoire; 
      //on notifie la modif
      props.onPuppetChange(nouveauPuppet);
    } 
  }

  // Charge les images de la catégorie passée en parametre
  function loadCatg(const_catg: string){
    if(CATG_NB[activeCatg]){       
      setActiveCatg(const_catg);
      const imgList: AccessoireModel[] = [];
      const catgActive = CATG_NB[const_catg]; 
      const accessoireKey: keyof PuppetModel = catgActive.nom as keyof PuppetModel;
    
      if( puppet[accessoireKey] instanceof AccessoireModel){
        const accessoire: AccessoireModel = puppet[accessoireKey] as AccessoireModel; 
        for(let i=1; i <= catgActive.nbImg; i++){
          imgList.push(new AccessoireModel(catgActive,  accessoire.getSkinFilter(), i.toString(), accessoire.getCouleurFilter(), accessoire.getCouleur()));
        }
        setCatgImgList(imgList);
        setActiveColor(accessoire.getCouleur());
      } else {
        setCatgImgList([]);
        if(catgActive == CATG_NB.skin){ 
          // pannel skin
        }

      }
    }
  }
  
  const changeColor = (color: any) => {  
    const catgActive = CATG_NB[activeCatg]; 
    const accessoire: AccessoireModel = puppet[catgActive.nom as keyof PuppetModel] as AccessoireModel;
    accessoire.setCouleur(color); 
    
    // on lance les methode de refresh des elements
    handleImgClick(accessoire);
    //
    //loadCatg(catgActive.nom);
    
    // Mise à jour de la couleur de chaque composant Accessoire dans catgImgList
    setCatgImgList(prevCatgImgList => {
      const newCatgImgList = prevCatgImgList.map((accessoire: AccessoireModel) => {
        accessoire.setCouleur(color);
        return accessoire;
      });
      return newCatgImgList;
    });

    setActiveColor(color); 
  };

  const changeSkin = (color: any) => {  
    setActiveSkin(color);
    puppet.setSkin(color);  
    // on fait un clone pour etre sur de la detection de changements
    const nouveauPuppet: PuppetModel = puppet.clone(); 
    props.onPuppetChange(nouveauPuppet);
  };
  
  
  
 
  //HTML
  const catg_keys = Object.keys(CATG_NB);
  const category_item = catg_keys.map((catg_key) => (
    <div className={`catg-item ${activeCatg === catg_key ? ' active' : ''}`} key={catg_key} onClick={() => handleCatgClick(catg_key)} >
      {catg_key.toString()}
    </div>
  )); 

  const catg_accessoires = catgImgList.map((accessoire, index) => (
    <div
      key={index}
      className={`div-assets ${accessoire.getNumero() === (puppet[activeCatg as keyof PuppetModel] as AccessoireModel).getNumero().toString() ? 'active' : ''}`}
      onClick={() => handleImgClick(accessoire)}
    >
      <Accessoire key={index} accessoire={accessoire} zIndex={(index + 1) * 5} />
    </div>
  ));
  
  
  
  useEffect(() => { 
    loadCatg(CATG_NB.skin.nom);
    setActiveCatg(CATG_NB.skin.nom);
    setActiveSkin(puppet.getSkin());
  }, []);

  return (
    <div className="Panel" data-testid="Panel">

      <div className="panel-navbar">
        
        
        {/* COULEURS */} 
        { 
        activeCatg && CATG_NB[activeCatg].color && showColorPicker &&
          <div className="panel-colors" id="scrollable-content">  
                {showColorPicker && (
                <CustomColorPicker
                  color={activeColor}
                  onChange={(color: string) => changeColor(color)}
                  onHide={() => setShowColorPicker(false)}
                />
              )}
            </div>
          }  
        { 
          activeCatg && CATG_NB[activeCatg].color &&
        <div className="color-button" onClick={()=>{setShowColorPicker(true)}}>X</div> 
        } 

        <div className="close-button">X</div>
        <div className="empty-navbar"></div>

      </div>

      {/* CATG_NAV */}
      <div className="panel-catg" id="scrollable-content">
        <div className="panel-left-a" onClick={()=> {OutilsHtmlService.handleLeftArrowClick(catgScrollable) }}>
          <MdArrowBackIosNew />
        </div>
        <div className="panel-middle-s" ref={catgScrollable}>
          {category_item}
        </div>
        <div className="panel-right-a" onClick={()=> { OutilsHtmlService.handleRightArrowClick(catgScrollable) }}>
          <MdArrowForwardIos />
        </div>
      </div> 

      {/* LISTE ACCESSOIRE */}
      <div className="panel-assets">  
          {activeCatg === CATG_NB.skin.nom ? ( 
            <div className='skin-assets'>
            <SketchPicker
              disableAlpha={true}
              onChangeComplete={(color: any) => changeSkin(color.hex)}
              color={activeSkin} 
            /> 
            </div>
          ) : (
            <div className='list-assets'>
              {catg_accessoires}
            </div>
          )}
      </div> 

    </div>
  );
};

export default Panel;
