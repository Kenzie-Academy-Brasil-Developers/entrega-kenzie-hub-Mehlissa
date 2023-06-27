import styled from "styled-components";

export const StylesButtons = styled.button`
  background-color: var(--color-primary);
  color: var(--grey-0);

  height: 40px;

  border: none;
  border-radius: 4px;
`;

export const StyleButtonsLink = styled.a`
  background-color: var(--grey-1);

  width: 100%;
  height: 40px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;

  border: none;
  border-radius: 4px;

  .link {
    width: 100%;
    height: 30px;

    text-align: center;

    text-decoration: none;

    color: var(--grey-0);
  }
`;

export const StyleButtonsLinkBack = styled.a`
  background-color: var(--grey-3);

  padding: 2px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: 4px;

  .link {
    width: 100%;

    text-align: center;
    text-decoration: none;

    padding: 10px 17px;

    border-radius: 4px;

    color: var(--grey-0);
  }

  .link:hover {
    background-color: var(--grey-2);
  }
`;
