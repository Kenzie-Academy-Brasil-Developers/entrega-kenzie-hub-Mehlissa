import { styled } from "styled-components";

export const BackgroundTech = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgb(0, 0, 0, 0.1);

  z-index: 2;

  .modalControll {
    position: fixed;
    top: 50%;
    left: 50%;

    height: 310px;
    width: 95vw;

    transform: translate(-50%, -50%);

    background-color: var(--grey-3);
  }

  .modalControll__hadear {
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

  .label {
    margin-bottom: 7px;
  }

  .modalContaier__header--ButtonClose {
    background-color: var(--grey-2);
    color: var(--grey-1);

    border: none;
  }

  .modalContaier__divButtons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding: 0px 18px;

    margin-top: 7px;

    gap: 10px;
  }

  .modalContaier__divButtons--buttonSave {
    background-color: var(--color-primary-Disable);

    width: 160px;
  }

  .modalContaier__divButtons--buttonSave:hover {
    background-color: var(--color-primary-50);
  }

  .modalContaier__divButtons--buttonDelete {
    background-color: var(--grey-1);
    color: var(--grey-0);

    width: 85px;

    border: none;
    border-radius: 4px;
  }

  @media (min-width: 768px) {
    .modalControll {
      position: fixed;
      top: 50%;
      left: 50%;

      height: 310px;
      width: 350px;

      transform: translate(-50%, -50%);
    }
  }
`;
