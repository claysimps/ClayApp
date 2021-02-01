import React, { useEffect, useState } from "react";
import { StyledSpinnerContainer, StyledSpinner } from "./LoadingSpinner.styles";

export const LoadingSpinner = ({ isFetching }: { isFetching: boolean }) => {
  const [isSpinning, setIsSpinning] = useState(isFetching);

  useEffect(() => {
    if (isFetching === false) {
      setIsSpinning(false);
    }
    setInterval(() => {
      setIsSpinning(false);
    }, 3000);
  }, [isFetching]);

  return (
    <StyledSpinnerContainer>
      <StyledSpinner visible={isSpinning} textContent={"Loading..."} />
    </StyledSpinnerContainer>
  );
};
