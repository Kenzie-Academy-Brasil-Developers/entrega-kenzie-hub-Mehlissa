import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgb(0, 0, 0, 0.1);

  z-index: 2;
`;

export const ModalStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;

  height: 330px;
  width: 95vw;

  transform: translate(-50%, -50%);

  background-color: var(--grey-3);

  .modalContaier {
    min-width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
  }

  .modalContaier__header {
    background-color: var(--grey-2);

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding: 12px 18px;
    margin-bottom: 15px;
  }

  .modalContaier__main {
    display: flex;
    flex-direction: column;

    padding: 0px 18px;

    gap: 10px;
  }

  .modalContaier__header--ButtonClose {
    background-color: var(--grey-2);
    color: var(--grey-1);

    border: none;
  }

  @media (min-width: 768px) {
    position: fixed;
    top: 50%;
    left: 50%;

    height: 330px;
    width: 350px;

    transform: translate(-50%, -50%);
  }
`;
