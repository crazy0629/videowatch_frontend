import React, { useEffect, useState } from "react";
import * as Styled from "./main.styles";
import { CardItem } from "@/components";
import axios from "axios";
import { SERVER_URI } from "@/config";
import { toast } from "react-toastify";
import InfiniteScroll from "react-infinite-scroll-component";
import { TbUser, TbUsers } from "react-icons/tb";
import { useRouter } from "next/router";

export const MainPageSection: React.FC = () => {
  const router = useRouter();
  const [getIndex, setGetIndex] = useState(0);
  const [data, setData] = useState<any>([]);
  const [hasMore, setHasMore] = useState(true);

  const [topUsers, setTopUsers] = useState<any>([]);

  useEffect(() => {
    getData(0);
    getTopRatedUsers();
    if (localStorage.shared) {
      router.push(localStorage.shared);
    }
  }, []);

  const getData = async (index: number) => {
    const res = await axios.post(`${SERVER_URI}/video/getMoreVideos`, {
      index,
    });
    if (res.data.success) {
      if (index > 0) {
        setData((prev: any) => [...prev, ...res.data.data]);
      } else {
        setData([...res.data.data]);
      }
      if (res.data.data.length < 50) {
        setHasMore(false);
      }
      setGetIndex((prev) => prev + 1);
    } else {
      toast.error(res.data.message);
    }
  };

  const getTopRatedUsers = async () => {
    const res = await axios.post(`${SERVER_URI}/auth/getTopRatedUsers`);
    if (res.data.success) {
      setTopUsers(res.data.data);
    }
  };

  return (
    <Styled.MainPageSectionWrapper>
      <Styled.MainGridWrapper>
        <InfiniteScroll
          dataLength={data.length}
          next={() => getData(getIndex)}
          hasMore={hasMore}
          endMessage={<h4></h4>}
          scrollableTarget="community-list"
          loader={<h4>Loading...</h4>}
        >
          {data.length > 0 &&
            data.map((item: any, key: number) => (
              <CardItem
                id={item._id}
                key={key}
                link={item.adFileName}
                postDate={item.uploadDate}
                title={item.title}
                viewCount={item?.viewCount}
                duration={item.duration}
              />
            ))}
        </InfiniteScroll>
        <Styled.TopUsersWrapper>
          <h1>
            <TbUsers /> <span>Top Rated Users</span>
          </h1>
          <Styled.TopUsersList>
            {topUsers.map((item: any, index: number) => (
              <div key={index}>
                <span>
                  <TbUser size={18} />
                </span>
                <p>{item.username}</p>
                <b>Score: {item.point}</b>
              </div>
            ))}
          </Styled.TopUsersList>
        </Styled.TopUsersWrapper>
      </Styled.MainGridWrapper>
    </Styled.MainPageSectionWrapper>
  );
};
