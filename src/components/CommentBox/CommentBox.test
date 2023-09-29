import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { screen, render, cleanup } from '@testing-library/react'
import { userEvent} from '@testing-library/user-event'
import { MemoryRouter} from 'react-router-dom'
import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

import CommentBox from '.'

describe("CommentBox component", () => {
    beforeEach(() => {
        <CommentBox user_id={1}/>
    })

    afterEach(() => {
        cleanup()
    })

    it("renders correctly", () => {
        console.log(document.body.innerHTM)
        expect(screen.getByLabelText("What are your thoughts?")).toBeInTheDocument();
        expect(screen.getByText("Cancel")).toBeInTheDocument();
        expect(screen.getByText("Comment")).toBeInTheDocument();
      });
      






})