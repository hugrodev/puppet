import React, { FC, useEffect, useRef, useState } from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { CirclePicker, HuePicker } from 'react-color';
import './Panel.scss';
import { PuppetModel } from '../../model/PuppetModel';
import OutilsHtmlService from '../../services/outilsHtml';
import CATG_NB, { Category_Item } from '../../constantes/AccessoireConst';
import { AccessoireModel } from '../../model/AccessoireModel';
import Accessoire from '../AccessoireModel/Accessoire';

interface PanelProps {
  puppet: PuppetModel;
  onPuppetChange: (puppet: PuppetModel) => void;
}

const Panel: FC<PanelProps> = (props) => {

  // UTILS
  const colorsScrollable = useRef<HTMLDivElement>(null);
  const catgScrollable = useRef<HTMLDivElement>(null);
  const [catgImgList, setCatgImgList] = useState<AccessoireModel[]>([]);
  const [activeCatg, setActiveCatg] = useState<string>('');

  function handleCatgClick(key : string){
    loadCatg(key);
    setActiveCatg(key);
  }

  function handleImgClick(accessoire : AccessoireModel){ 
    const category = accessoire.getCategorie().nom; 

    if(category){ 
      // on fait un clone pour etre sur de la detection de changements
      const nouveauPuppet = props.puppet.clone();

      // la skin modifie l'origine du repertoire pour toutes les images enfants
        (nouveauPuppet[category as keyof PuppetModel] as AccessoireModel) = accessoire;

      //on notifie la modif
      props.onPuppetChange(nouveauPuppet);
    } 
  }

  // Charge les images de la catégorie passée en parametre
  function loadCatg(const_catg: string){
    const catg: Category_Item = CATG_NB[const_catg];
    const imgList: AccessoireModel[] = [];
  
    for(let i=1; i <= catg.nbImg; i++){
      const accessoireKey: keyof PuppetModel = catg.nom as keyof PuppetModel;
      if(props.puppet[accessoireKey] instanceof AccessoireModel){
        const accessoire: AccessoireModel = props.puppet[accessoireKey] as AccessoireModel;
        imgList.push(new AccessoireModel(catg,  accessoire.getSkinFilter(), i.toString(),accessoire.getCouleurFilter()));
      }
    }
    setCatgImgList(imgList);
  }
  
  const changeColor = (color: string) => {
    console.log(color);
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
          <div className="panel-left-a" onClick={()=> {OutilsHtmlService.handleLeftArrowClick(colorsScrollable) }}>
          <MdArrowBackIosNew />
        </div>
        <div className="panel-middle-s" ref={colorsScrollable}>
          <HuePicker onChangeComplete={(color) => changeColor(color.hex)} />
        </div>
          <div className="panel-right-a" onClick={()=> { OutilsHtmlService.handleRightArrowClick(colorsScrollable) }}>
          <MdArrowForwardIos />
        </div>
      </div>
    </div>
  );
};

export default Panel;
