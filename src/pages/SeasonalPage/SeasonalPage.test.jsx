import React from "react"
import {describe, it, expect, beforeEach, afterEach} from "vitest"
import {screen, render, cleanup} from "@testing-library/react"
import matchers from "@testing-library/jest-dom/matchers"
expect.extend(matchers)

import SeasonalPage from "."

describe("SeasonalPage renders each season: ", () => {
    beforeEach(() => {
        render(
            <SeasonalPage />
        );
    });

    it("spring: ", () => {
        const tt = screen.getByTestId("Sidebanner")
        expect(tt).toBeTruthy()
    })
});
