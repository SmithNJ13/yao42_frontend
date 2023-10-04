import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

import PopUp from '.';

describe('PopUp Component', () => {
    afterEach(() => {
      cleanup();
    });
  
    it('renders the PopUp component', () => {
      
      render(<PopUp SetOpenPopUp={() => {}} />);
      
      
      expect(document.querySelector('.modalBackground')).not.toBeNull();
      expect(document.querySelector('.modalContainer')).not.toBeNull();
      expect(screen.getByText('Recipe Created!')).toBeInTheDocument();
    });
  
    it('calls SetOpenPopUp when clicking outside the modal', () => {
      
      const mockSetOpenPopUp = vi.fn();
  
     
      render(<PopUp SetOpenPopUp={mockSetOpenPopUp} />);
      
      
      fireEvent.click(screen.getByTestId('modalBackground'));
  
     
      expect(mockSetOpenPopUp).toHaveBeenCalledWith(false);
    });
  
    it('calls SetOpenPopUp when clicking the "That\'s great!" button', () => {
     
      const mockSetOpenPopUp = vi.fn();
  
      
      render(<PopUp SetOpenPopUp={mockSetOpenPopUp} />);
      
     
      fireEvent.click(screen.getByText("That's great!"));
  
      
      expect(mockSetOpenPopUp).toHaveBeenCalledWith(false);
    });
  
    it('stops propagation when clicking inside the modal', () => {
     
      const mockSetOpenPopUp = vi.fn();
  
      
      render(<PopUp SetOpenPopUp={mockSetOpenPopUp} />);
      
      
      fireEvent.click(screen.getByTestId('modalContainer'));
  
      
      expect(mockSetOpenPopUp).not.toHaveBeenCalled();
    });
  });