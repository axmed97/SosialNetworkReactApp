import React, { useEffect, useState } from "react";
import {   useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Post from "../components/Post";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { BASE_URL } from "../config/config";

const HomePage = () => {
  const [sharePost, setSharePost] = useState("");
  const { userinfo } = useSelector((x) => x.user);
  const navigate = useNavigate();

  if (!userinfo.success) {
    navigate("/");
  }

  useEffect(() => {}, [userinfo]);

  const postHandler = async () => {
    const token = localStorage.getItem("token");
    await fetch(`${BASE_URL}/Post/share`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        content: sharePost,
        photoUrl: "string",
      }),
    }).then(x => x.json()).then(x => console.log(x));
    setSharePost('')
  };

  const getDatas = async () => {
    const result = await fetch("https://localhost:7002/api/Post/GetAllPost",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }).then(x => x.json());
    return result
  }

  return (
    <div className="container mx-auto">
      <div className="flex justify-center my-5">
        <TextField
          className="w-full"
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={sharePost}
          onChange={(e) => setSharePost(e.target.value)}
        />
        <Button
          onClick={() => postHandler()}
          variant="contained"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </div>

      <div className="flex justify-center flex-wrap">
        <Post />
      </div>
    </div>
  );
};

export default HomePage;
