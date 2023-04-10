import React, { FC } from 'react';
import './Panel.scss';
import { PuppetModel } from '../../model/PuppetModel';

interface PanelProps {
  puppet: PuppetModel;
}


const Panel: FC<PanelProps> = (props) => (
  <div className="Panel" data-testid="Panel">
  </div>
);

export default Panel;
