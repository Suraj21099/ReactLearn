import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom";
import { withPromtedLabel } from "../RestaurantCard";

it("should render RestaurantCard Component with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA}/>);
    const resName = screen.getByText("Theobroma");
    expect(resName).toBeInTheDocument();
})
// it("should render Promoted RestaurantCard component", () => {
//     const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);
//     render(<RestaurantCardPromoted resData={MOCK_DATA} />)
//     const promotedLabel = screen.getByText("label");
//     expect(promotedLabel).toBeInTheDocument();
// })