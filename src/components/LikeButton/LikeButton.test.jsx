import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)
import LikeButton from '.';

describe('LikeButton component', () => {
  beforeEach(() => {
    render(<LikeButton/>)
  })

  afterEach(() => {
    cleanup()
  })

  it('should render with the regular heart icon initially', () => {
    const likeButton = screen.getByTestId('like-button');

    expect(likeButton).toBeInTheDocument();
    expect(likeButton).toHaveClass('fa-heart');
    
  });

  it('should toggle to the solid heart icon when clicked', () => {
    const likeButton = screen.getByTestId('like-button');

    
    fireEvent.click(likeButton);

    expect(likeButton).toHaveClass('svg-inline--fa fa-heart likebutton');
    

    fireEvent.click(likeButton);
    expect(likeButton).toHaveClass('fa-heart');
    
  });
});

