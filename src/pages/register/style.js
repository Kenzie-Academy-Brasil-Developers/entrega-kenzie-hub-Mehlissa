import styled from "styled-components";

export const StyleRegisterPage = styled.div`
  background-color: var(--grey-4);
  color: var(--grey-0);

  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    width: 90vw;
    padding: 55px 0px;
  }

  .header {
    display: flex;
    justify-content: space-between;

    width: 100%;
    margin-bottom: 45px;
  }

  @media (min-width: 768px) {
    .container {
      width: 380px;
    }
  }
`;
