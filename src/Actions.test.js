import { render, screen } from "@testing-library/react";
import Actions from "./Actions";

import { MONTHS } from './utilities';

describe("Actions Component", () => {
    const minimumProps = {
        handleCreateFakeData: jest.fn(),
        handleFileChange: jest.fn(),
        handleChange: jest.fn(),
        handleFilterClick: jest.fn(),
        selectedMonth: '2'
    };

    it("Renders the Create Fake Data Button", () => {
        render(<Actions {...minimumProps} />);
        const button = screen.getByRole('button', { name:'Create Fake Data' });

        expect(button).toBeTruthy();
    });

    it("Renders the Choose File Input", () => {
        render(<Actions {...minimumProps} />);
        const fileInput = screen.getByLabelText('Upload a JSON file');

        expect(fileInput).toBeTruthy();
    });

    it("Renders the Filter Data Button", () => {
        render(<Actions {...minimumProps} />);
        const button = screen.getByRole('button', { name: 'Filter Data' });

        expect(button).toBeTruthy();
    });

    it("Renders the Month to filter by select", () => {
        render(<Actions {...minimumProps} />);
        const select = screen.getByRole('combobox', { name: 'Month to filter by:' });

        expect(select).toBeTruthy();
    });

    it("Renders all months as options", () => {
        render(<Actions {...minimumProps} />);

        MONTHS.forEach((month) => {
            const option = screen.getByRole('option', { name: month });
            expect(option).toBeTruthy();
        })
    });

    it("Correct month is selected", () => {
        render(<Actions {...minimumProps} />);
        const select = screen.getByRole('combobox', { name: 'Month to filter by:' });
        expect(select).toHaveValue('2')
    });
});
