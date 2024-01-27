import React, { useState } from "react";
import * as Styled from "./details.styles";
import { toast } from "react-toastify";

type Props = {
  onSave: (data: any) => void;
};

export const ForSaleForm: React.FC<Props> = ({ onSave }) => {
  const [form, setForm] = useState({
    title: "",
    subTitle: "",
    description: "",
    itemCategory: "",
    itemCondition: "",
    brandName: "",
    manufacturer: "",
    itemColor: "",
    dimensionW: "",
    dimensionH: "",
    dimensionUnit: "meter",
    itemWeight: "",
    itemUnit: "gram",
  });

  const handleSave = () => {
    if (!form.title) {
      toast.error("Enter the title!");
    } else if (!form.description) {
      toast.error("Enter the description!");
    } else {
      onSave(form);
    }
  };

  return (
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
  );
};
