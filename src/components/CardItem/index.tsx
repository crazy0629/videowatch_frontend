import React, { useRef } from "react";
import * as Styled from "./card.styles";
import { VideoPlayIcon } from "..";
import { getTimestamp } from "@/utils";
import { useRouter } from "next/router";
import YouTube from "react-youtube";

type Props = {
  link: string;
  title: string;
  viewCount: number;
  postDate: string;
  id: string;
  duration: number;
};

export const CardItem: React.FC<Props> = ({
  link,
  id,
  duration = 0,
  title,
  viewCount,
}) => {
  const router = useRouter();
  const videoRef = useRef<any>(null);

  return (
    <Styled.CardItemWrapper onClick={() => router.push(`/ads/${id}`)}>
      <Styled.VideoWrapper>
        {/* <video ref={videoRef} src={`${link}`} muted></video> */}
        <YouTube
          videoId={link.split("v=")[1]}
          onReady={() => {}}
        />
        {/* <VideoPlayIcon /> */}
        <div className="video-overlay"></div>
      </Styled.VideoWrapper>
      <Styled.VideoInfoWrapper>
        <div>
          <h1>
            <b>{title}</b>
          </h1>
          <div className="">
            <span>
              {viewCount > 999 ? viewCount / 1000 + "K" : viewCount} views
            </span>
          </div>
        </div>
      </Styled.VideoInfoWrapper>
    </Styled.CardItemWrapper>
  );
};
