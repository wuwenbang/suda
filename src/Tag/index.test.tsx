import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Tag from './index';

describe('<Tag />', () => {
  it('Render Tag', () => {
    const msg = 'Test Message';
    render(<Tag>{msg}</Tag>);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
