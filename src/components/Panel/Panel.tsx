import React, { FC, useEffect, useRef, useState } from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { CirclePicker, HuePicker } from 'react-color';
import './Panel.scss';
import { PuppetModel } from '../../model/PuppetModel';
import OutilsHtmlService from '../../services/outilsHtml';
import CATG_NB, { Category_Item } from '../../constantes/AccessoireConst';
import { AccessoireModel } from '../../model/AccessoireModel';
import Accessoire from '../AccessoireModel/Accessoire';
import { Color } from '../../services/outilsColor';

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

  const puppet: PuppetModel = props.puppet;  

  function handleCatgClick(key : string){
    loadCatg(key);
  }

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
    
      for(let i=1; i <= catgActive.nbImg; i++){
        const accessoireKey: keyof PuppetModel = catgActive.nom as keyof PuppetModel;
        if(puppet[accessoireKey] instanceof AccessoireModel){
          const accessoire: AccessoireModel = puppet[accessoireKey] as AccessoireModel;
          imgList.push(new AccessoireModel(catgActive,  accessoire.getSkinFilter(), i.toString(),accessoire.getCouleurFilter()));
        }
      }
      setCatgImgList(imgList);
    }
  }
  
  const changeColor = (color: string) => {
    setActiveColor(color); 
    const catgActive = CATG_NB[activeCatg];
    console.log(catgActive);
    const accessoire: AccessoireModel = puppet[catgActive.nom as keyof PuppetModel] as AccessoireModel;
    accessoire.setCouleurFilter(Color.getFilterFromHex(color));
    
    // on lance les methode de refresh des elements
    handleImgClick(accessoire);
    loadCatg(catgActive.nom);
  };
  
  
 
  //HTML
  const catg_keys = Object.keys(CATG_NB);
  const category_item = catg_keys.map((catg_key) => (
    <div className={`catg-item ${activeCatg === catg_key ? ' active' : ''}`} key={catg_key} onClick={() => handleCatgClick(catg_key)} >
      {catg_key.toString()}
    </div>
  ));

  // const catg_img = catgImgList.map((imgSrc, index) => (
  //   <div key={index} className="div-assets">
  //     <img key={index} src={imgSrc} alt="catg-img" 
  //       onClick={() => handleImgClick(imgSrc)}
  //     />
  //   </div>
  // ));

  const catg_accessoires = catgImgList.map((accessoire, index) => (
    <div key={index} className="div-assets" onClick={() => handleImgClick(accessoire)} >
      <Accessoire key={index} accessoire={accessoire} zIndex={index+10} />
    </div>
  ));
  
  
  useEffect(() => {
    loadCatg(CATG_NB.skin.nom);
    setActiveCatg(CATG_NB.skin.nom);
  }, []);

  return (
    <div className="Panel" data-testid="Panel">

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

      {/* ASSETS */}
      <div className="panel-assets">    
          {catg_accessoires}
      </div>

      {/* COULEURS */}
      <div className="panel-colors" id="scrollable-content">
          {/* <div className="panel-left-a" onClick={()=> {OutilsHtmlService.handleLeftArrowClick(colorsScrollable) }}>
          <MdArrowBackIosNew />
        </div> */}
       { 
       activeCatg && CATG_NB[activeCatg].color &&
       <div className="panel-middle-s">
          <HuePicker onChangeComplete={(color) => changeColor(color.hex)} color={activeColor} />
        </div>
       } 
          {/* <div className="panel-right-a" onClick={()=> { OutilsHtmlService.handleRightArrowClick(colorsScrollable) }}>
          <MdArrowForwardIos />
        </div> */}
      </div>
    </div>
  );
};

export default Panel;
