import React, { FC, useEffect, useRef, useState } from 'react';
import { ChromePicker } from 'react-color';
import { MdClose } from 'react-icons/md';
import './CustomColorPicker.scss';

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
  onHide: () => void;
}

const CustomColorPicker: FC<ColorPickerProps> = ({ color, onChange, onHide }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleColorChange = (color: any) => {
    onChange(color.hex);
  };

  const handleClose = () => {
    onHide();
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      onHide();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref} className="custom-color-picker">
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
