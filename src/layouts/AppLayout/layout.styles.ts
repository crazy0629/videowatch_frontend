import styled from "styled-components";

export const AppLayoutWrapper = styled.div``;

export const HeaderWrapper = styled.div`
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogoWrapper = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  div {
    margin-right: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  img {
    cursor: pointer;
  }
  h1 {
    color: #ff6f00;
  }
`;

export const HeaderNavWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  & > :not(:first-child) {
    margin-left: 16px;
  }
  .icon-wrapper {
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    position: relative;
    span {
      position: absolute;
      display: block;
      width: 5px;
      height: 5px;
      border-radius: 99px;
      background-color: red;
      top: 5px;
      right: 5px;
    }
  }
`;

export const AuthActionWrapper = styled.div`
  position: relative;
`;

export const AuthActionButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  user-select: none;
  background-color: #5a88ff;
  width: 32px;
  height: 32px;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  img {
    border-radius: 99px;
    object-fit: cover;
  }
  line-height: 20.4px; /* 145.714% */
`;

export const AuthListWrapper = styled.div<{ visible?: string }>`
  transition: all 0.3s;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  position: absolute;
  z-index: 99;
  top: 38px;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 213px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 18px 40px 0px rgba(232, 232, 232, 0.5);
  contain: content;
  a,
  p {
    display: flex;
    align-items: center;
    cursor: pointer;
    span {
      margin-left: 16px;
    }
    padding: 12px 36px;
    text-decoration: none;
    color: #000;
    font-size: 14px;
    transition: all 0.3s;
    font-weight: 400;
    line-height: 20.4px; /* 145.714% */
    &:first-child {
      background: #eaeaea;
    }
  }
`;

export const AppMainSection = styled.div`
  display: flex;
  height: calc(100vh - 85px);
`;

export const AppMainContainer = styled.div`
  width: 100%;
  flex: 1;
`;

export const AppMainContent = styled.div`
  height: 100%;
`;
