import React, { useRef } from "react";
import * as Styled from "./card.styles";
import { SERVER_UPLOAD_URI } from "@/config";
import Image from "next/image";
import { Rating } from "react-simple-star-rating";
import { MdLocationOn } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import { VideoPlayIcon } from "..";
import { calcCompareTime, getTimestamp } from "@/utils";
import { useRouter } from "next/router";

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
  postDate,
  duration = 0,
  title,
  viewCount,
}) => {
  const router = useRouter();
  const videoRef = useRef<any>(null);

  return (
    <Styled.CardItemWrapper>
      <Styled.VideoWrapper
        onMouseEnter={() => videoRef.current.play()}
        onMouseLeave={() => {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }}
        onClick={() => router.push(`/ads/${id}`)}
      >
        <video ref={videoRef} src={`${SERVER_UPLOAD_URI + link}`} muted></video>
        <VideoPlayIcon />
        <span>{getTimestamp(Number(duration))}</span>
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
