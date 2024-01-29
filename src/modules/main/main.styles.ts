import styled from "styled-components";

export const MainPageSectionWrapper = styled.div`
  border-top: 1px solid #eaeaea;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 30px;
`;

export const MainGridWrapper = styled.div`
  flex: 1;
  overflow: auto;
  display: flex;
  width: 100%;
  & > div {
    width: 100%;
  }
  .infinite-scroll-component {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 32px;
    padding: 0 20px 40px;
  }
`;

export const TopUsersWrapper = styled.div`
  max-width: 400px;
  padding: 0 24px;
  h1 {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    span {
      margin-left: 16px;
    }
  }
`;

export const TopUsersList = styled.div`
  div {
    display: flex;
    margin-bottom: 12px;
    align-items: center;
    span {
      width: 32px;
      margin-right: 8px;
      height: 32px;
      background: #5a88ff;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
    }
    p {
      flex: 1;
      font-size: 18px;
    }
  }
`;
