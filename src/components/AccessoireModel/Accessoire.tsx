import React, { FC, useState, useEffect } from 'react';
import { PuppetModel } from '../../model/PuppetModel';
import './Accessoire.scss';
import CATG_NB from '../../constantes/AccessoireConst';
import { AccessoireModel } from '../../model/AccessoireModel';
import { Color, Solver } from '../../services/outilsColor';

interface AccessoireProps {
  accessoire: AccessoireModel;
  zIndex: number;
}

const Accessoire: FC<AccessoireProps> = (props) => {  

  const accessoire: AccessoireModel = props.accessoire;
  const category = accessoire.getCategorie();
  const [src, setSrc] = useState(accessoire.getUrl());
  const [srcColor, setSrcColor] = useState(accessoire.getUrlColor());
  const [srcSkin, setSrcSkin] = useState(accessoire.getUrlSkin());
  const [displayFirstImg, setDisplayFirstImg] = useState(false);
  const [displayColorImg, setDisplayColorImg] = useState(false);
  const [displaySkinImg, setDisplaySkinImg] = useState(false); 
 
  const checkImageExiste = (url: string, setDisplayImg: (value: boolean) => void) => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      setDisplayImg(true);
    };
    img.onerror = () => {
      setDisplayImg(false);
    };
  };

  useEffect(() => {
    setSrc(accessoire.getUrl());
    setSrcColor(accessoire.getUrlColor());
    setSrcSkin(accessoire.getUrlSkin());
  }, [accessoire]);

  useEffect(() => {
    checkImageExiste(src, setDisplayFirstImg);
  }, [src]);

  useEffect(() => {
    checkImageExiste(srcColor, setDisplayColorImg);
  }, [srcColor]);

  useEffect(() => {
    checkImageExiste(srcSkin, setDisplaySkinImg);
  }, [srcSkin]);
 
  if (displayFirstImg) {
    const zIndex = props.zIndex - 3;
    const colorStyle = {
      zIndex: zIndex - 2,
      filter: accessoire.getCouleurFilter(),
      display: displayColorImg ? 'block' : 'none',
    };
    const skinStyle = {
      zIndex: zIndex - 1,
      filter: accessoire.getSkinFilter(),
      display: displaySkinImg ? 'block' : 'none',
    };

    return (
      <React.Fragment key={category.nom}>
        <img
          className='accessoire-img first-img'
          src={src} 
          alt={category.nom}
          style={{ zIndex }}
        />
        <img
          className='accessoire-img color-img'
          src={srcColor} 
          alt={`${category.nom} color `}
          style={colorStyle}
        />
        <img
          className='accessoire-img skin-img'
          src={srcSkin} 
          alt={`${category.nom} color `}
          style={skinStyle}
        />
      </React.Fragment>
    );
  }
  return null;
};

export default Accessoire;
