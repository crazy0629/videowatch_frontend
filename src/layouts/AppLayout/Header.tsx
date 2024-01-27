import React, { useEffect, useRef, useState, useContext } from "react";
import { IoMdMenu } from "react-icons/io";
import { PiUploadSimple } from "react-icons/pi";
import { TbLogin, TbUserPlus, TbUser, TbLogout, TbUsers } from "react-icons/tb";
import * as Styled from "./layout.styles";
import Link from "next/link";
import { Auth as AuthContext } from "@/context/contexts";
import { useRouter } from "next/router";
import { ADMIN_INFO, SERVER_URI } from "@/config";
import { toast } from "react-toastify";
import { UploadModal } from "@/modules/upload";
import { ConfirmModal } from "@/components";
import axios from "axios";

export const Header: React.FC = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [uploadModal, setUploadModal] = useState(false);
  const [uploadCancelModal, setUploadCancelModal] = useState(false);
  const [uploadInfo, setUploadInfo] = useState({ adId: "", adType: "" });
  const { authContext, setAuthContext } = useContext<any>(AuthContext);
  const wrapperRef = useRef<any>(null);
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (event: any) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setVisible(false);
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    if (authContext.user) {
      setCurrentUser(authContext.user);
    } else {
      setCurrentUser(null);
    }
  }, [authContext]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuthContext((prev: any) => ({ ...prev, user: null }));
    router.push("/");
  };

  const handleUploadClick = () => {
    setUploadModal(true);
  };

  const handleUploadCancel = async () => {
    if (uploadInfo.adId) {
      const res = await axios.post(`${SERVER_URI}/upload/cancel`, uploadInfo);
      if (res.data.success) {
        setUploadModal(false);
      } else {
        toast.error(res.data.message);
      }
      setUploadCancelModal(false);
    } else {
      setUploadModal(false);
      setUploadCancelModal(false);
    }
  };

  return (
    <Styled.HeaderWrapper>
      <ConfirmModal
        onCancel={() => setUploadCancelModal(false)}
        open={uploadCancelModal}
        cancelText="No"
        okText="Yes"
        onOk={handleUploadCancel}
        type="warning"
        description="If you close this modal, all data will be reset. Are you sure you want to close it?"
        title="Are you sure?"
      />
      <UploadModal
        open={uploadModal}
        onClose={(adId, adType) => {
          setUploadInfo({ adId, adType });
          setUploadCancelModal(true);
        }}
        onFinish={() => setUploadModal(false)}
      />
      <Styled.HeaderLogoWrapper onClick={() => router.push("/")}>
        <h1>App Logo</h1>
      </Styled.HeaderLogoWrapper>
      <Styled.HeaderNavWrapper>
        {currentUser?.username === ADMIN_INFO && (
          <div className="icon-wrapper">
            <PiUploadSimple size={24} onClick={handleUploadClick} />
          </div>
        )}
        {/* {currentUser?.username === ADMIN_INFO && (
          <div className="icon-wrapper">
            <TbUsers size={24} />
          </div>
        )} */}
        <Styled.AuthActionWrapper ref={wrapperRef}>
          <Styled.AuthActionButton onClick={() => setVisible((prev) => !prev)}>
            {currentUser ? (
              currentUser?.username[0].toString().toUpperCase()
            ) : (
              <TbUser size={16} />
            )}
          </Styled.AuthActionButton>
          {currentUser ? (
            <Styled.AuthListWrapper visible={visible ? "true" : undefined}>
              <Link href={"/profile"}>
                <TbUser size={24} />
                <span>Profile</span>
              </Link>
              <p onClick={handleLogout}>
                <TbLogout size={24} />
                <span>Logout</span>
              </p>
            </Styled.AuthListWrapper>
          ) : (
            <Styled.AuthListWrapper visible={visible ? "true" : undefined}>
              <Link href={"/auth/login"}>
                <TbLogin size={24} />
                <span>Sign In</span>
              </Link>
              <Link href={"/auth/register"}>
                <TbUserPlus size={24} />
                <span>Sign Up</span>
              </Link>
            </Styled.AuthListWrapper>
          )}
        </Styled.AuthActionWrapper>
      </Styled.HeaderNavWrapper>
    </Styled.HeaderWrapper>
  );
};
