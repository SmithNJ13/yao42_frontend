import { describe, it, expect, beforeEach, afterEach, test } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import * as matchers from '@testing-library/jest-dom/matchers';
import Lottie from 'lottie-react'; // Import the Lottie component
expect.extend(matchers);

// Define the MOCK_CANVAS environment variable
process.env.MOCK_CANVAS = JSON.stringify(true);

import Profile from '.';

describe('Profile page', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Profile />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('Profile component renders correctly', () => {
    // You can use getByText or other queries to assert that specific content is present
    //expect(screen.getByText('Bob')).toBeInTheDocument(); // Example assertion

  });
});
