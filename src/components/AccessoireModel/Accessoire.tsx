import React, { FC, useState } from 'react';
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
  let zIndex = props.zIndex; 

  const accessoire: AccessoireModel = props.accessoire;
  const category = accessoire.getCategorie();
  const src = accessoire.getUrl();
  const srcColor = accessoire.getUrlColor();
  const srcSkin = accessoire.getUrlSkin();

  const handleImageError = (event: any) => {
    event.target.style.display = 'none'; // masquer l'image
  };

  if (src) {
    zIndex = zIndex - 3; 
    const colorStyle = {
      zIndex: zIndex - 2,
      filter: accessoire.getCouleurFilter()
    }; 
    const skinStyle = {
      zIndex: zIndex - 1,
      filter: accessoire.getCouleurFilter()
    }; 

    return (
      <React.Fragment key={category.nom}>
        <img
          className='first-img'
          src={src}
          onError={handleImageError}
          alt={category.nom}
          style={{ zIndex }}
        />
        <img
        className='color-img'
          src={srcColor}
          onError={handleImageError}
          alt={`${category.nom} color `}
          style={ colorStyle } 
        />
        <img
        className='skin-img'
          src={srcSkin}
          onError={handleImageError}
          alt={`${category.nom} color `}
          style={ skinStyle } 
        />
      </React.Fragment>
    );
  } 
  return null;
};

export default Accessoire;
