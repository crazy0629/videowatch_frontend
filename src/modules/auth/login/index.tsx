import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import * as Styled from "../auth.styles";
import { SERVER_URI } from "@/config";
import { setCurrentUser } from "@/utils/authentication";

export const LoginForm: React.FC = () => {
  const router = useRouter();
  const [form, setForm] = useState({ username: "", password: "" });
  const [isRemember, setIsRemember] = useState(false);

  useEffect(() => {
    if (localStorage.remember) {
      setIsRemember(true);
      setForm((prev) => ({ ...prev, username: localStorage.remember }));
    }
  }, []);

  const handleLogin = async () => {
    if (!form.username || !form.password) {
      toast.error("Please complete all inputs.");
    } else {
      const res = await axios.post(`${SERVER_URI}/auth/signin`, {
        username: form.username,
        password: form.password,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        const isSet = await setCurrentUser(
          form.username,
          res.data.token,
          isRemember
        );
        if (isSet) {
          // console.log(localStorage.shared, localStorage.token);
          // if (localStorage.shared) {
          //   router.push(localStorage.shared);
          // } else {
          router.push("/");
          // }
        }
      } else {
        toast.error(res.data.message);
      }
    }
  };

  return (
    <Styled.LoginFormWrapper>
      <h1>App Logo</h1>
      <p>Welcome back! Please enter your details.</p>
      <Styled.LoginFormGroup>
        <input
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, username: e.target.value }))
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, password: e.target.value }))
          }
        />
      </Styled.LoginFormGroup>
      <Styled.SignInButton onClick={handleLogin}>Sign In</Styled.SignInButton>
      <h6>
        {"Don’t have account? Please "}
        <Link href={"/auth/register"}>Sign up</Link>
        {" now."}
      </h6>
    </Styled.LoginFormWrapper>
  );
};
