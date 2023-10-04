import { describe, it, expect, beforeEach, afterEach, vi, beforeAll, afterAll} from 'vitest';
import { cleanup, render, renderHook, screen, act, fireEvent, getAllByLabelText } from '@testing-library/react';
import { useNavigate, useLocation } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

import BudgetFilter from '.';


vi.mock('react-router-dom', () => ({
    useNavigate: vi.fn(),
    useLocation: vi.fn(),
  }));
  
  describe('BudgetFilter component', () => {
    const mockNavigate = vi.fn();
    const mockUseLocation = vi.fn();
  
    beforeAll(() => {
      useNavigate.mockReturnValue(mockNavigate);
      useLocation.mockReturnValue({ search: '', pathname: '/spring' });
    });
  
    it('renders the budget filter checkboxes', () => {
      const { getByText, getByLabelText } = render(<BudgetFilter />);
      
      expect(getByText('BUDGET:')).toBeInTheDocument();
      expect(getByLabelText('£')).toBeInTheDocument();
      expect(getByLabelText('££')).toBeInTheDocument();
      expect(getByLabelText('£££')).toBeInTheDocument();
    });
  
    it('checks and unchecks the checkboxes', () => {
      const { getAllByLabelText } = render(<BudgetFilter />);
      const checkbox1 = getAllByLabelText('£')[0];
      const checkbox2 = getAllByLabelText('££')[0];
      
      fireEvent.click(checkbox1);
      fireEvent.click(checkbox2);
  
      expect(checkbox1).toBeChecked();
      expect(checkbox2).toBeChecked();
  
      fireEvent.click(checkbox1);
      fireEvent.click(checkbox2);
  
      expect(checkbox1).not.toBeChecked();
      expect(checkbox2).not.toBeChecked();
    });
  
    it('updates the URL when checkboxes are clicked', () => {
      const { getAllByLabelText } = render(<BudgetFilter />);
      const checkbox1 = getAllByLabelText('£')[0];
      const checkbox2 = getAllByLabelText('££')[0];
      
      fireEvent.click(checkbox1);
      fireEvent.click(checkbox2);
  
      expect(mockNavigate).toHaveBeenCalledWith('/spring?filter=%C2%A3&filter=%C2%A3%C2%A3');
    });
  });