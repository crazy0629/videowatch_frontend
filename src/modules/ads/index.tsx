import React, { useContext, useEffect, useState } from "react";
import * as Styled from "./ads.styles";
import { SERVER_UPLOAD_URI, SERVER_URI } from "@/config";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { Auth as AuthContext } from "@/context/contexts";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const AdsDetailsSection: React.FC = () => {
  const router = useRouter();
  const { id, shared } = router.query;
  const [data, setData] = useState<any>(null);
  const { authContext } = useContext<any>(AuthContext);

  useEffect(() => {
    if (id) {
      if (authContext.user) {
        localStorage.removeItem("shared");
        getData();
      } else {
        if (shared) {
          localStorage.setItem("shared", `/ads/${id}?shared=${shared}`);
        }
        router.push("/auth/login");
        // toast.warn("Please sign in first.");
      }
    }
  }, [authContext, id]);

  const getData = async () => {
    console.log({
      videoId: id,
      userId: authContext.user.id,
      shared: shared || "",
    });
    const res = await axios.post(`${SERVER_URI}/video/getDetailInfo`, {
      videoId: id,
      userId: authContext.user.id,
      shared: shared || "",
    });
    console.log(res.data);
    if (res.data.success) {
      setData(res.data.data);
    } else {
      toast.error(res.data.error);
    }
  };

  const handleCopyClick = () => {
    toast.success("Copied Link.");
  };

  return (
    <Styled.AdsDetailsSectionWrapper>
      {data ? (
        <Styled.AdsDetailsContainer>
          <Styled.AdsDetailsVideoInfoWrapper>
            <Styled.VideoWrapper>
              <video
                src={`${SERVER_UPLOAD_URI + data?.adFileName}`}
                controls
              ></video>
            </Styled.VideoWrapper>
          </Styled.AdsDetailsVideoInfoWrapper>
          <Styled.AdsDetailsThumbWrapper>
            <Styled.VideoInfoWrapper>
              <h1>
                <span>{data?.title}</span>
                <div>
                  <p>
                    <MdOutlineCalendarMonth size={20} />{" "}
                    <span>{new Date(data?.uploadDate).toDateString()}</span>
                  </p>
                  <p>
                    {data?.viewCount > 999
                      ? data?.viewCount / 1000 + "K"
                      : data?.viewCount}{" "}
                    views
                  </p>
                </div>
                <h2>
                  Share Link:{" "}
                  <CopyToClipboard
                    text={`http://3.89.134.159:3001/ads/${id}?shared=${authContext?.user?.id}`}
                    onCopy={handleCopyClick}
                  >
                    <span>
                      http://3.89.134.159:3001/ads/{id}?shared=
                      {authContext?.user?.id}
                    </span>
                  </CopyToClipboard>
                </h2>
              </h1>
              <p>{data?.description}</p>
            </Styled.VideoInfoWrapper>
          </Styled.AdsDetailsThumbWrapper>
        </Styled.AdsDetailsContainer>
      ) : (
        <Styled.AdsDetailsContainer>Loading...</Styled.AdsDetailsContainer>
      )}
    </Styled.AdsDetailsSectionWrapper>
  );
};
