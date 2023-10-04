import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { cleanup, render, renderHook, screen, act } from '@testing-library/react';
import React from 'react';
import axios from 'axios';
import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

import ShoppingList from '.';


const mockAxios = vi.spyOn(axios, 'get');

describe('ShoppingList component', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders loading when items are not available', async () => {
    mockAxios.mockResolvedValueOnce({ data: { lists: [] } });
    render(<ShoppingList />);
    const loadingElement = screen.getByText('Loading...');
    expect(loadingElement).toBeInTheDocument();
  });

  it('renders items when items are available', async () => {
    // Mock Axios response with some sample items
    const mockItems = ['Item 1', 'Item 2', 'Item 3'];
    mockAxios.mockResolvedValueOnce({ data: { lists: [{ user_id: '1', items: mockItems.join(', ') }] } });

    // Render the component
    render(<ShoppingList />);

    // Check if the items are rendered
    const itemElements = screen.getAllByRole('listitem');
    expect(itemElements.length).toBe(mockItems.length);

    // Check if each item is rendered correctly
    mockItems.forEach((item, index) => {
      const itemElement = itemElements[index];
      const checkboxElement = itemElement.querySelector('input[type="checkbox"]');
      const textElement = itemElement.querySelector('.checked-item');

      expect(checkboxElement).toBeInTheDocument();
      expect(checkboxElement.checked).toBe(false); // Initial state should be unchecked
      expect(textElement).toBeInTheDocument();
      expect(textElement.textContent).toBe(item);
    });
  });
});






