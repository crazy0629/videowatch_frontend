import React, { useState, useEffect } from "react";
import * as Styled from "./upload.styles";
import { MdClose } from "react-icons/md";
import { Details } from "./Details";

type Props = {
  open: boolean;
  onClose: () => void;
  onFinish: () => void;
};

export const UploadModal: React.FC<Props> = ({ open, onClose, onFinish }) => {
  const [refresh, setRefresh] = useState(false);
  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    setRefresh((prev) => !prev);
  }, [open]);

  return (
    <Styled.UploadModalWrapper className={open ? "open" : ""}>
      <Styled.UploadModalContainer>
        <Styled.UploadModalHeader>
          <h3>{"Upload your youtube link."}</h3>
          <MdClose size={20} color="#AFAFAF" onClick={handleClose} />
        </Styled.UploadModalHeader>
        <Styled.UploadModalBody>
          <Details onSave={onFinish} refresh={refresh} />
        </Styled.UploadModalBody>
      </Styled.UploadModalContainer>
      <Styled.UploadModalOverlay onClick={handleClose} />
    </Styled.UploadModalWrapper>
  );
};
