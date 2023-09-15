import Content from "./Content";
import Message from "./Message";
import Story from "./Story";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import React, { useEffect, useState } from "react";

export default function MidSideBar() {
    const [posts, setPosts] = useState([]);

  useEffect(() =>
    onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    )
  );
    return (
        <div className="w-[763px] absolute pb-[80px] flex flex-col items-center pt-[15px]">
            <Story />
            <Message />
            {posts.map((post) => {
             return <Content key={post.id} id={post.id} data={post.data()} />;
            })}
        </div>
    )
}