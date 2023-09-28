import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import DeleteButton from '.';

describe('DeleteButton component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/profile']}>
        <DeleteButton onDelete={() => {}} comment="Test Comment" />
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
    const deleteButtons = screen.getAllByRole('button');
    expect(deleteButtons.length).toBeGreaterThan(0);
  
    // You can choose the button to interact with, e.g., the first one:
    const deleteButton = deleteButtons[0];
    expect(deleteButton).toBeTruthy();
  });
  

  it('renders a delete button with a trash icon', () => {
    const deleteButtons = screen.getAllByRole('button');
    expect(deleteButtons.length).toBeGreaterThan(0);
  
    // You can choose the button to interact with, e.g., the first one:
    const deleteButton = deleteButtons[0];
    expect(deleteButton.classList.contains('trash')).toBe(true);
  });
  

  it('clicking the delete button calls the onDelete function', () => {
    const onDeleteMock = vi.fn();

    render(
      <MemoryRouter initialEntries={['/profile']}>
        <DeleteButton onDelete={onDeleteMock} comment="Test Comment" />
      </MemoryRouter>
    );

    const deleteButtons = screen.getAllByRole('button');
    const deleteButton = deleteButtons[0];

    fireEvent.click(deleteButton);

    expect(onDeleteMock.mock.calls.length).toBe(1);
  });
});
