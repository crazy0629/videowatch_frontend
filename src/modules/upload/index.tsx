import React, { useState, useEffect } from "react";
import * as Styled from "./upload.styles";
import { MdClose } from "react-icons/md";
import { categories, kinds, modalTitle } from "./data";
import { UploadAsset } from "./UploadAsset";
import { Details } from "./Details";

type Props = {
  open: boolean;
  onClose: (adId: string, adType: string) => void;
  onFinish: () => void;
};

export const UploadModal: React.FC<Props> = ({ open, onClose, onFinish }) => {
  const [kind, setKind] = useState(kinds[0].key);
  const [category, setCategory] = useState(categories[0].key);
  const [uploadStep, setUploadStep] = useState("upload");
  const [adLink, setAdLink] = useState("");
  const [adId, setAdId] = useState("");

  useEffect(() => {
    if (open) {
      setKind(kinds[0].key);
      setCategory(categories[0].key);
      setUploadStep("upload");
      setAdId("");
      setAdLink("");
    }
  }, [open]);

  const handleClose = () => {
    onClose(adId, category);
  };

  return (
    <Styled.UploadModalWrapper className={open ? "open" : ""}>
      <Styled.UploadModalContainer>
        <Styled.UploadModalHeader>
          <h3>{modalTitle[uploadStep]}</h3>
          <MdClose size={20} color="#AFAFAF" onClick={handleClose} />
        </Styled.UploadModalHeader>
        <Styled.UploadModalBody>
          {uploadStep === "upload" && (
            <UploadAsset
              fileType={kind}
              onNext={(adLink: string, adId: string) => {
                setUploadStep("detail");
                setAdLink(adLink);
                setAdId(adId);
              }}
            />
          )}
          {uploadStep === "detail" && (
            <Details
              adLink={adLink}
              adId={adId}
              category={category}
              onNext={onFinish}
            />
          )}
        </Styled.UploadModalBody>
      </Styled.UploadModalContainer>
      <Styled.UploadModalOverlay onClick={handleClose} />
    </Styled.UploadModalWrapper>
  );
};
