import { fireEvent, screen } from "@testing-library/react";
import {
    renderWithTranslation,
} from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import { SideBar } from "widgets/SideBar";

describe("SideBar", () => {
    test("Test render", () => {
        renderWithTranslation(<SideBar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });

    test("Test toggle", () => {
        renderWithTranslation(<SideBar />);
        const toggleButton = screen.getByTestId("sidebar-toggle");
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(toggleButton);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
});
