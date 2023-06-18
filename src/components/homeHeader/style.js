import styled from "styled-components";

export const StyleHeaderHome = styled.header`
  .container {
    margin-bottom: 10px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 90vw;
  }

  .link {
    padding: 10px;
  }

  @media (min-width: 768px) {
    .container {
      width: 70vw;
    }
  }
`;
