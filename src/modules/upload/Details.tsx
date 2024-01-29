import React, { useEffect, useState } from "react";
import * as Styled from "./upload.styles";
import { SERVER_URI } from "@/config";
import { MdOutlineContentCopy, MdCheck } from "react-icons/md";
import { toast } from "react-toastify";
import axios from "axios";

type Props = {
  onSave: () => void;
  refresh: boolean;
};

export const Details: React.FC<Props> = ({ onSave, refresh }) => {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    videoLink: "",
    title: "",
    description: "",
  });

  useEffect(() => {
    setForm({ videoLink: "", title: "", description: "" });
    setCopied(false);
  }, [refresh]);

  const handleCopyClick = () => {
    setCopied((prev) => !prev);
  };

  const handleSave = async () => {
    if (!form.title) {
      toast.error("Enter the title!");
    } else if (!form.description) {
      toast.error("Enter the description!");
    } else if (!form.videoLink) {
      toast.error("Paste your youtube video link.");
      setCopied(true);
    } else {
      const res = await axios.post(`${SERVER_URI}/upload/detail`, form);
      if (res.data.success) {
        toast.success(res.data.message);
        onSave();
      } else {
        toast.error(res.data.message);
      }
    }
  };

  return (
    <Styled.DetailsWrapper>
      <Styled.DetailsFormWrapper>
        <Styled.FormContainer>
          <Styled.TextAreaFormItem height={80}>
            <p>{"Title (required)"}</p>
            <textarea
              placeholder="Tell viewer about the video title."
              onChange={(e) =>
                e.target.value.length <= 100 &&
                setForm((prev) => ({ ...prev, title: e.target.value }))
              }
              value={form.title}
            ></textarea>
            <span>{form.title.length} / 100</span>
          </Styled.TextAreaFormItem>
          <Styled.TextAreaFormItem height={120}>
            <p>{"Description"}</p>
            <textarea
              placeholder="Tell viewer about the video."
              onChange={(e) =>
                e.target.value.length <= 100 &&
                setForm((prev) => ({ ...prev, description: e.target.value }))
              }
              value={form.description}
            ></textarea>
            <span>{form.description.length} / 5000</span>
          </Styled.TextAreaFormItem>
          <Styled.SaveButton onClick={handleSave}>Save</Styled.SaveButton>
        </Styled.FormContainer>
      </Styled.DetailsFormWrapper>
      <Styled.DetailsPreviewWrapper>
        <Styled.VideoWrapper>
          <video src={form.videoLink} controls />
          <Styled.VideoInfoWrapper>
            <div>
              <span>Paste here your youtube link</span>
              {!copied ? (
                <p>{form.videoLink}</p>
              ) : (
                <input
                  type="text"
                  placeholder="https://"
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, videoLink: e.target.value }))
                  }
                  value={form.videoLink}
                />
              )}
            </div>
            {copied ? (
              <MdCheck size={20} onClick={handleCopyClick} />
            ) : (
              <MdOutlineContentCopy size={20} onClick={handleCopyClick} />
            )}
          </Styled.VideoInfoWrapper>
        </Styled.VideoWrapper>
      </Styled.DetailsPreviewWrapper>
    </Styled.DetailsWrapper>
  );
};
