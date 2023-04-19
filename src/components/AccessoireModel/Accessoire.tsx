import React, { FC, useState, useEffect } from 'react';
import './Accessoire.scss';
import { AccessoireModel } from '../../model/AccessoireModel';

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
  const [imgExists, setImgExists] = useState({ src: false, srcColor: false, srcSkin: false });

  const checkImageExists = (url: string, callback: (exists: boolean) => void) => {
    const img = new Image();
    img.onload = () => callback(true);
    img.onerror = () => callback(false);
    img.src = url;
  };

  const updateImageStates = () => {
    const newSrc = accessoire.getUrl();
    const newSrcColor = accessoire.getUrlColor();
    const newSrcSkin = accessoire.getUrlSkin();

    setSrc(newSrc);
    setSrcColor(newSrcColor);
    setSrcSkin(newSrcSkin);

    checkImageExists(newSrc, (exists) => setImgExists((prev) => ({ ...prev, src: exists })));
    checkImageExists(newSrcColor, (exists) => setImgExists((prev) => ({ ...prev, srcColor: exists })));
    checkImageExists(newSrcSkin, (exists) => setImgExists((prev) => ({ ...prev, srcSkin: exists })));
  };

  useEffect(() => {
    updateImageStates();
  }, [accessoire]);

  const zIndex = props.zIndex - 3;
  const colorStyle = {
    zIndex: zIndex - 1,
    filter: accessoire.getCouleurFilter(),
  };
  const skinStyle = {
    zIndex: zIndex - 2,
    filter: accessoire.getSkinFilter(),
  };

  return (
    <React.Fragment key={category.nom}>
      {imgExists.src && (
        <img
          className='accessoire-img first-img'
          src={src}
          alt={category.nom}
          style={{ zIndex }}
        />
      )}
      {imgExists.srcColor && (
        <img
          className='accessoire-img color-img'
          src={srcColor}
          alt={`${category.nom} color `}
          style={colorStyle}
        />
      )}
      {imgExists.srcSkin && (
        <img
          className='accessoire-img skin-img'
          src={srcSkin}
          alt={`${category.nom} color `}
          style={skinStyle}
        />
      )}
    </React.Fragment>
  );
};

export default Accessoire;
