import React, { FC } from 'react';
import './Puppet.scss';

interface PuppetProps {}

const Puppet: FC<PuppetProps> = () => (
  <div className="Puppet" data-testid="Puppet">
    Puppet Component
  </div>
);

export default Puppet;
