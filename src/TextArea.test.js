import { render, screen } from "@testing-library/react";
import TextArea from "./TextArea";

describe("TextArea Component", () => {
    const minimumProps = {
        label: 'Label',
        id: 'id',
        name: 'name',
        onChange: jest.fn()
    };

    it("renders correctly", () => {
        render(<TextArea {...minimumProps} />);
        const textbox = screen.getByRole('textbox');

        expect(textbox).toBeTruthy();
    })
});
