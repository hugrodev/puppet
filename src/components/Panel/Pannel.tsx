import React, { FC, useRef } from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { CirclePicker } from 'react-color';
import './Panel.scss';
import { PuppetModel } from '../../model/PuppetModel';
import OutilsHtmlService from '../../services/outilsHtml';
import CATG_NB from '../../constantes/AccessoireConst';

interface PanelProps {
  puppet: PuppetModel;
}

const Panel: FC<PanelProps> = (props) => {

  // UTILS
  const colorsScrollable = useRef<HTMLDivElement>(null);
  const catgScrollable = useRef<HTMLDivElement>(null);

  //HTML
  const keys = Object.keys(CATG_NB);
  const categoryDivs = keys.map((key) => (
    <div className="catg-item" key={key}>
      {key.toString()}
    </div>
  ));

  return (
    <div className="Panel" data-testid="Panel">

      {/* CATG_NAV */}
      <div className="panel-catg" id="scrollable-content">
        <div className="panel-left-a" onClick={()=> {OutilsHtmlService.handleLeftArrowClick(catgScrollable) }}>
          <MdArrowBackIosNew />
        </div>
        <div className="panel-middle-s" ref={catgScrollable}>
        {categoryDivs}
        </div>
        <div className="panel-right-a" onClick={()=> { OutilsHtmlService.handleRightArrowClick(catgScrollable) }}>
          <MdArrowForwardIos />
        </div>
      </div> 

      {/* ASSETS */}
      <div className="panel-assets">
        
      </div>

      {/* COULEURS */}
      <div className="panel-colors" id="scrollable-content">
          <div className="panel-left-a" onClick={()=> {OutilsHtmlService.handleLeftArrowClick(colorsScrollable) }}>
          <MdArrowBackIosNew />
        </div>
        <div className="panel-middle-s" ref={colorsScrollable}>
          <CirclePicker />
        </div>
          <div className="panel-right-a" onClick={()=> { OutilsHtmlService.handleRightArrowClick(colorsScrollable) }}>
          <MdArrowForwardIos />
        </div>
      </div>
    </div>
  );
};

export default Panel;
