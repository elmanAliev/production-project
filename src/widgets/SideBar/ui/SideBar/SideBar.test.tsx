import { fireEvent, screen } from "@testing-library/react";
import { componentRender } from "@/shared/lib/tests/componentRender/componentRender";
import { SideBar } from "@/widgets/SideBar";

describe("SideBar", () => {
    test("Test render", () => {
        componentRender(<SideBar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });

    test("Test toggle", () => {
        componentRender(<SideBar />);
        const toggleButton = screen.getByTestId("sidebar-toggle");
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(toggleButton);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
});
