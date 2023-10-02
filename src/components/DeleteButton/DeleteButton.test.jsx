import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

import DeleteButton from '.';

describe('DeleteButton component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/profile']}>
        <DeleteButton onDelete={() => {}} comment="Test Comment" testId="button" />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('renders without crashing', () => {
    render(<DeleteButton />);
  });

  it('renders a delete button', () => {
    const deleteButton = screen.getByTestId('button');
    expect(deleteButton).toBeInTheDocument();
  
    // You can choose the button to interact with, e.g., the first one:
    // const deleteButton = deleteButtons[0];
    // console.log(deleteButton)
    // expect(deleteButton).toBeTruthy();
  });
  

  it('renders a delete button with a trash icon', () => {
    const deleteButtons = screen.getAllByTestId('button');
    expect(deleteButtons.length).toBeGreaterThan(0);
  
    // You can choose the button to interact with, e.g., the first one:
    const deleteButton = deleteButtons[0];
    expect(deleteButton.classList.contains('trash')).toBe(true);
  });
  

  it('clicking the delete button calls the onDelete function', async () => {
    const onDeleteMock = vi.fn()
    const mockDelete = {
      onDelete: () => 100
    }
   

    vi.spyOn(mockDelete, 'onDelete')

    render(
      <MemoryRouter initialEntries={['/profile']}>
        <DeleteButton onDelete={onDeleteMock()} comment="Test Comment" />
      </MemoryRouter>
    );

    const deleteButton = screen.getAllByTestId('button');
    fireEvent.click(deleteButton[0]);  

    expect(onDeleteMock).toHaveBeenCalled()
  });
});
