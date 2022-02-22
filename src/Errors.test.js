import { render, screen } from "@testing-library/react";
import Errors from "./Errors";

describe("Errors Component", () => {
    it("renderes when it has a list of errors", () => {
        render(<Errors errors={['test error', 'test error 2']} />);
        const list = screen.getByRole('list');

        expect(list).toBeTruthy();
    })

    it("will not render without array of errors", () => {
        const { container } = render(<Errors />);

        expect(container).toBeEmptyDOMElement();        
    })
});
