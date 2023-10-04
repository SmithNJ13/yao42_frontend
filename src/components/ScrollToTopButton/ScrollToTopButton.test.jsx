import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, cleanup, fireEvent } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

import ScrollToTopButton from '.';

describe('ScrollToTopButton Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders ScrollToTopButton component with correct season', () => {
    // Define a mock season
    const season = 'summer';

    // Render the ScrollToTopButton component with the mock season
    const { container } = render(<ScrollToTopButton season={season} />);
    
    // Ensure that the button is rendered with the correct background color based on the season
    expect(container.querySelector('button')).toHaveStyle({
      backgroundColor: '#FFE448', // Mocked background color for summer
    });
  });

  it('calls handleScrollToTop when the button is clicked', () => {
    // Create a mock function for handleScrollToTop
    const handleScrollToTopMock = vi.fn();

    // Render the ScrollToTopButton component with the mock function
    const { getByText } = render(<ScrollToTopButton season="summer" handleScrollToTop={handleScrollToTopMock} />);
    
    // Find the button element and simulate a click event
    const buttonElement = getByText('Back to Top');
    fireEvent.click(buttonElement);
    
    // Ensure that handleScrollToTop is called once when the button is clicked
    expect(handleScrollToTopMock).toHaveBeenCalledTimes(1);
  });

  it('changes background color on hover', () => {
    // Create a mock function for handleScrollToTop
    const handleScrollToTopMock = vi.fn();

    // Render the ScrollToTopButton component with the mock function and season
    const { getByText } = render(<ScrollToTopButton season="summer" handleScrollToTop={handleScrollToTopMock} />);
    
    // Find the button element
    const buttonElement = getByText('Back to Top');
    
    // Simulate a mouse hover event
    fireEvent.mouseEnter(buttonElement);
    
    // Ensure that the background color changes when hovered
    expect(buttonElement).toHaveStyle({
      backgroundColor: '#F0D013', // Mocked hover background color for summer
    });
    
    // Simulate a mouse leave event
    fireEvent.mouseLeave(buttonElement);
    
    // Ensure that the background color returns to its original color after mouse leave
    expect(buttonElement).toHaveStyle({
      backgroundColor: '#FFE448', // Mocked background color for summer
    });
  });
});
