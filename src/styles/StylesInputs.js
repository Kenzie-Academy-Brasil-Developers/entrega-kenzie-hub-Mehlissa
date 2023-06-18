import styled from "styled-components";

export const StylesInputs = styled.input`
  background-color: var(--grey-2);
  color: var(--grey-0);

  height: 43px;
  padding: 0px 14px;
  margin-bottom: 10px;

  border-radius: 4px;
  border: none;
  outline: 0;
`;

export const StylesInputsPassword = styled.input`
  background-color: var(--grey-2);
  color: var(--grey-0);

  height: 43px;
  padding: 0px 14px;
  width: 100%;

  border-radius: 4px;
  border: none;

  outline: 0;
`;

export const StylesInputsDiv = styled.div`
  background-color: var(--grey-2);

  height: 43px;
  width: 100%;
  margin-bottom: 14px;

  display: flex;

  border-radius: 4px;

  .eyeHide {
    margin-right: 14px;
    opacity: 30%;
  }

  .eyeHide.hide {
    opacity: 100%;
  }
`;
