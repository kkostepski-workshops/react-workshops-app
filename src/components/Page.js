import React from "react";
import styled from "styled-components";

const Page = ({ children }) => <StyledPage>{children}</StyledPage>;

const StyledPage = styled.div`
  display: flex;
  height: 100vh;
`;

export default Page;
