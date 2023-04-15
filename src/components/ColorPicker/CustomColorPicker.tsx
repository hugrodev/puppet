import React, { FC, useState } from 'react';
import { ChromePicker } from 'react-color';
import { MdClose } from 'react-icons/md';
import './CustomColorPicker.scss';

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
  onHide: () => void;
}

const CustomColorPicker: FC<ColorPickerProps> = ({ color, onChange, onHide }) => {

  const handleColorChange = (color: any) => {
    onChange(color.hex);
  };

  const handleClose = () => {
    onHide();
  };

  return (
    <div className="custom-color-picker">
      <div className="color-picker-container">
        <div className="close-button" onClick={handleClose}>
          <MdClose />
        </div>
        <ChromePicker disableAlpha={true} color={color} onChangeComplete={handleColorChange} />
      </div>
    </div>
  );
};

export default CustomColorPicker;
