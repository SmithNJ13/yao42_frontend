import React from "react";
import { describe, it, expect, beforeEach, test, afterEach} from "vitest";
import { screen, render, cleanup, waitFor } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
import { MemoryRouter } from "react-router-dom";
expect.extend(matchers);

import SeasonalPage from ".";

describe("SeasonalPage renders each season: ", () => {
  // Check if MOCK_CANVAS is enabled
  

  beforeEach(() => {
    
      render(
        <MemoryRouter>
      <SeasonalPage />
      </MemoryRouter>
      );
    
  });

  afterEach(() => {
    cleanup();
  });

  it("contains a h1", () => {
    h1 = screen.getByRole('heading')
    expect(h1).toBeInTheDocument()
  })
//   it("spring: ", async () => {
    
//       // Use waitFor to wait for the element to appear
//       await waitFor(() => {
//         const tt = screen.getByTestId("sidebanner");
//         expect(tt).toBeTruthy();
//       });
    
//   });
});
