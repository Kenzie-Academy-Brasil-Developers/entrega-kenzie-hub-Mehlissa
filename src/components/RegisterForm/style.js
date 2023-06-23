import styled from "styled-components";

export const StyleRegister = styled.form`
  border-radius: 3.20867px;

  .containerForm {
    background-color: var(--grey-3);
    display: flex;
    flex-direction: column;

    gap: 10px;

    padding: 50px 17px;
  }

  .containerHeaderForm {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 25px;
    margin-bottom: 20px;
  }

  .buttonRegisterSubmit {
    background-color: var(--color-primary-Disable);

    outline: none;
  }

  .buttonRegisterSubmit:hover {
    background-color: var(--color-primary);

    outline: none;
  }

  @media (min-width: 768px) {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    .containerForm {
      width: 350px;
    }
  }
`;
