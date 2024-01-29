import React, { useEffect, useRef, useState, useContext } from "react";
import { PiUploadSimple } from "react-icons/pi";
import { TbLogin, TbUserPlus, TbUser, TbLogout } from "react-icons/tb";
import * as Styled from "./layout.styles";
import Link from "next/link";
import { Auth as AuthContext } from "@/context/contexts";
import { useRouter } from "next/router";
import { ADMIN_INFO } from "@/config";
import { UploadModal } from "@/modules/upload";
import { ConfirmModal } from "@/components";

export const Header: React.FC = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [uploadModal, setUploadModal] = useState(false);
  const [uploadCancelModal, setUploadCancelModal] = useState(false);
  const { authContext, setAuthContext } = useContext<any>(AuthContext);
  const wrapperRef = useRef<any>(null);
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
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
    setUploadModal(false);
    setUploadCancelModal(false);
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
        onClose={() => {
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
        {currentUser?.point && <p>Score: {currentUser?.point}</p>}
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
