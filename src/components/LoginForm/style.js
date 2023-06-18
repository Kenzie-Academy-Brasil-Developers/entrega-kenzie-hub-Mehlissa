import styled from "styled-components";

export const StyleLogin = styled.form`
  background-color: var(--grey-3);

  width: 90vw;
  border-radius: 3.20867px;

  .loginContainer {
    display: flex;
    flex-direction: column;

    gap: 7px;

    padding: 40px 22px;
  }

  .loginContainer__title {
    align-self: center;
  }

  .linkContainer {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 17px;
  }

  .linkContainer__text {
    margin-top: 15px;
  }

  .buttonEnter:hover {
    background-color: var(--color-primary-50);
  }

  .buttonRegister:hover {
    background-color: var(--grey-2);
  }

  @media (min-width: 768px) {
    width: 350px;

    .loginContainer__title {
      margin-bottom: 20px;
    }
  }
`;
