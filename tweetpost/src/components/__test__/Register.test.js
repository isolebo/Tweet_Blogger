import React from 'react';
import Register from '../Register'
import { render, fireEvent } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import {connect} from "react-redux"


test("header renders correct text", () => {
    const {getByTestId} = render(<Register />)
    const headerEl = getByTestId("header")

    expect(headerEl.textContent).toBe("Add New User")
})