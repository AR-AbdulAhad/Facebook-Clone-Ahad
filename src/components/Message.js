import Image from "next/image";
import React, { useRef, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import LiveVideo from '../Assets/img/live-video.png'
import PhotoVideo from '../Assets/img/photo-video.png'
import FeelingActivity from '../Assets/img/feeling-activity.png'
import Button from "./Button"
import { useSession } from "next-auth/react";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

export default function Message() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);

  const fPicker = useRef(null);

  const { data: session } = useSession();

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  const sendPost = async () => {
    if (loading) return;

    setLoading(true);

    const docRef = await addDoc(collection(db, "posts"), {
      id: session.user.uid,
      username: session.user.name,
      userImg: session.user.image,
      text: input,
      timestamp: serverTimestamp(),
    });

    const imageRef = ref(storage, `posts/${docRef.id}/image`);

    if (selectedFile) {
      await uploadString(imageRef, selectedFile, "data_url").then(async () => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadURL,
        });
      });
    }

    setLoading(false);
    setInput("");
    setSelectedFile(null);
  };

  return (
    <div
      className={`w-[500px] px-4 py-6 bg-[#242526] rounded-lg mt-5 ${
        loading && "opacity-50"
      }`}
    >
      <div className="flex gap-4 border-b border-[#3a3b3c] pb-4">
        <img
          className="w-[44px] h-[44px] object-cover rounded-full"
          src={session?.user?.image}
          alt="dp"
        />

        <input
          className="outline-none bg-[#3a3b3c] rounded-[30px] text-[#e4e6eb] border-none w-[100%] text-[16px] px-[15px] placeholder:text-[#b0b3b8]"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What's on your mind?"
        />
      </div>

      {selectedFile && (
        <div className="relative">
          <img src={selectedFile} alt="pic" />
          <div
            className="bg-gray-300 text-gray-500 absolute top-0 right-0 m-[10px] text-[18px] h-[30px] w-[30px] rounded-full cursor-pointer grid place-items-center"
            onClick={() => {
              setSelectedFile(null);
              fPicker.current.value = "";
            }}
          >
            <MdOutlineClose />
          </div>
        </div>
      )}

      <div className="flex justify-center items-center mt-[15px] mb-[15px]">
        <div className="w-[156px] hover:bg-[#3a3b3c] p-[8px] rounded-lg flex justify-center items-center cursor-pointer">
          <Image
            src={LiveVideo}
            width={24}
            height={24}
            alt="Live Video"
            className="mr-[10px]"
            />
          <p className="text-[#b0b3b8] font-medium text-[15px]">Live Video</p>
        </div>

        <label htmlFor="filePicker">
          <div className="w-[156px] hover:bg-[#3a3b3c] p-[8px] rounded-lg flex justify-center items-center cursor-pointer">
            <Image
            src={PhotoVideo}
            width={24}
            height={24}
            alt="Photo Video"
            className="mr-[10px]"
            />
            <p className="text-[#b0b3b8] font-medium text-[15px]">Photo/video</p>
          </div>

          <input
            type="file"
            name="filePicker"
            id="filePicker"
            accept="image/*"
            onChange={addImageToPost}
            ref={fPicker}
            hidden
          />
        </label>

        <div className="w-[170px] hover:bg-[#3a3b3c] p-[8px] rounded-lg flex justify-center items-center cursor-pointer">
          <Image
            src={FeelingActivity}
            width={24}
            height={24}
            alt="Feeling Activity"
            className="mr-[10px]"
            />
          <p className="text-[#b0b3b8] font-medium text-[15px]">Feeling/activity</p>
        </div>
      </div>

      <Button input={input} selectedFile={selectedFile} onClick={sendPost} />
    </div>
  );
};
 