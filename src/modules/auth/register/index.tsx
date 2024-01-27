import React, { useState } from "react";
import Link from "next/link";
import * as Styled from "../auth.styles";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { SERVER_URI } from "@/config";
import axios from "axios";

export const RegisterForm: React.FC = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    username: "",
    password: "",
    rPassword: "",
  });

  const handleRegister = async () => {
    if (!form.username || !form.password || !form.rPassword) {
      toast.error("Please complete all inputs.");
    } else if (form.password !== form.rPassword) {
      toast.error("Confirm password is not match.");
    } else {
      const res = await axios.post(`${SERVER_URI}/auth/signup`, {
        username: form.username,
        password: form.password,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        router.push(`/auth/login`);
      } else {
        toast.error(res.data.message);
      }
    }
  };

  return (
    <Styled.LoginFormWrapper>
      <h1>App Logo</h1>
      <p>Create one account.</p>
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={form.rPassword}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, rPassword: e.target.value }))
          }
        />
      </Styled.LoginFormGroup>
      <Styled.SignInButton onClick={handleRegister}>
        Sign Up
      </Styled.SignInButton>
      <h6>
        {"Already have an account? Please "}
        <Link href={"/auth/login"}>Sign in</Link>
        {" now."}
      </h6>
    </Styled.LoginFormWrapper>
  );
};
