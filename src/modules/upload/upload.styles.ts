import styled from "styled-components";

export const UploadModalWrapper = styled.div<{ open?: string }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  transition: all 0.3s;
  opacity: 0;
  visibility: hidden;
  &.open {
    opacity: 1;
    visibility: visible;
  }
  z-index: 999;
`;

export const UploadModalContainer = styled.div`
  box-shadow: 0px 18px 40px 0px rgba(232, 232, 232, 0.25);
  max-height: 90%;
  height: fit-content;
  overflow: auto;
  margin-top: 5vh;
  background: #fff;
  max-width: 800px;
  width: 100%;
  overflow: auto;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
`;

export const UploadModalOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #00000050;
`;

export const UploadModalHeader = styled.div`
  border-bottom: 1px solid #afafaf;
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    cursor: pointer;
  }
`;

export const DetailsWrapper = styled.div`
  padding: 24px 16px;
  display: flex;
`;

export const DetailsFormWrapper = styled.div`
  flex: 1;
`;

export const FormContainer = styled.div`
  width: 100%;
  & > :not(:first-child) {
    margin-top: 16px;
  }
`;

export const TextAreaFormItem = styled.div<{ height: number }>`
  height: ${({ height }) => height}px;
  border-radius: 5px;
  width: 100%;
  border: 1px solid #afafaf;
  display: flex;
  flex-direction: column;
  position: relative;
  contain: content;
  p {
    padding: 10px 10px 6px 10px;
    color: #afafaf;
    font-size: 12px;
    font-weight: 400;
  }
  textarea {
    padding: 0 10px 10px;
    font-family: "Inter", sans-serif;
    border: none;
    outline: none;
    height: 100%;
    width: 100%;
    resize: none;
    font-size: 14px;
    font-weight: 400;
    &::placeholder {
      color: #afafaf;
    }
  }
  span {
    position: absolute;
    color: #afafaf;
    font-size: 10px;
    font-weight: 400;
    right: 6px;
    bottom: 6px;
  }
`;

export const DetailsPreviewWrapper = styled.div`
  width: 350px;
  margin-left: 24px;
`;

export const VideoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  video {
    width: 100%;
    height: 250px;
    object-fit: contain;
  }
`;

export const VideoInfoWrapper = styled.div`
  background: #eaeaea;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  padding: 12px 10px;
  div {
    width: 80%;
  }
  span {
    color: #000;
    font-size: 10px;
    font-weight: 400;
  }
  input {
    color: #ff6f00;
    font-size: 12px;
    font-weight: 400;
    width: 100%;
    background: transparent;
    outline: none;
    border: 1px solid #00000030;
    border-radius: 4px;
    padding: 2px 3px;
    margin-top: 8px;
  }
  p {
    color: #ff6f00;
    font-size: 12px;
    font-weight: 400;
    -webkit-line-clamp: 1;
    width: 100%;
    padding: 2px 3px;
    margin-top: 8px;
    border: 1px solid #00000000;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  svg {
    cursor: pointer;
  }
`;

export const UploadModalBody = styled.div`
  flex: 1;
  overflow: auto;
`;

export const SaveButton = styled.div`
  display: flex;
  width: 85px;
  height: 40px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: auto;
  border-radius: 5px;
  background: #ff6f00;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  line-height: 20.4px; /* 145.714% */
`;
