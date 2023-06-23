import styled from "styled-components";

export const StyleTechList = styled.div`
  background-color: var(--grey-3);

  padding: 20px 20px;

  margin-left: 4.7vw;
  margin-right: 4.7vw;
  margin-top: 15px;
  margin-bottom: 50px;

  min-height: 430px;

  border-radius: 3px;

  display: flex;
  flex-direction: column;
  gap: 17px;

  .listContainer {
    background-color: var(--grey-4);

    border-radius: 4px;

    list-style: none;
  }

  .listContainer__div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 15px 20px;
  }

  @media (min-width: 768px) {
    margin-left: 14.7vw;
    margin-right: 15.4vw;
  }
`;

export const EmptyList = styled.div`
  background-color: var(--grey-3);

  padding: 20px 20px;

  margin-left: 4.7vw;
  margin-right: 4.7vw;
  margin-top: 15px;
  margin-bottom: 50px;

  min-height: 430px;

  border-radius: 3px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 17px;

  @media (min-width: 768px) {
    margin-left: 14.7vw;
    margin-right: 15.4vw;
  }
`;
