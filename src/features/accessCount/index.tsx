import React from "react";
import { PrimaryGreyTextP } from "../../components/styledComponents/p";
import * as Styled from "./StyledAccessCount";

const AccessCount = () => {
  return (
    <PrimaryGreyTextP data-testid="access-count-id">
      Your access contains 64,234 standards
    </PrimaryGreyTextP>
  );
};

export default AccessCount;
