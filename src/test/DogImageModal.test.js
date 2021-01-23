import { render, screen } from "@testing-library/react";
import DogImageModal from "../components/DogImageModal";

import { dogImages } from "./dogMockData";

test("DogImageModal renders multiples rows with a mix of breed and sub-breed image combinations", () => {
  render(
    <DogImageModal
      isFetching={false}
      dogImages={dogImages}
      open={true}
      handleClose={() => {}}
    />
  );
});
