import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './index';

describe('<Input />', () => {
  it('render Input', () => {
    const msg = 'InputTest';
    render(<Input value={msg} onChange={(value) => console.log(value)} />);
    expect(screen.getByDisplayValue(msg)).toBeInTheDocument();
  });
});
