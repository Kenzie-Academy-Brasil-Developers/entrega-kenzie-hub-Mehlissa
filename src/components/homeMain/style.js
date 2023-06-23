import styled from "styled-components";

export const StyleMainHome = styled.section`
  .container {
    border-top: solid 1px var(--grey-3);
    border-bottom: solid 1px var(--grey-3);

    width: 100vw;
  }

  .container__texts {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

    gap: 17px;

    margin-top: 35px;
    margin-bottom: 35px;
  }

  .container__name {
    margin-left: 4.7vw;
    margin-right: 4.7vw;
  }

  .container__curseModule {
    margin-left: 4.7vw;
    margin-right: 4.7vw;
  }

  .containerMain {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-right: 0%;
    margin-left: 4.7vw;

    gap: 30px;

    margin-top: 40px;

    width: 90vw;
  }

  .containerMain__button {
    background-color: var(--grey-3);

    height: 30px;
    width: 30px;

    border: none;
    border-radius: 4px;
  }

  .containerMain__text {
    margin-left: 4.7vw;
  }

  @media (min-width: 768px) {
    .containerMain {
      margin-left: 10vw;
    }

    .containerMain__button {
      margin-right: 15.6vw;
    }

    .containerMain__title {
      margin-left: 4.7vw;
    }

    .container__texts {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-left: 10vw;
      margin-right: 10vw;
    }

    .container__name {
      margin-right: 0px;
    }

    .container__curseModule {
      margin-left: 0px;
    }
  }
`;
