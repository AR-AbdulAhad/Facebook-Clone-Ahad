import React, { useState } from "react";

export default function Button({ input, selectedFile, onClick }) {
    return (
        <div>
            <button
                className="bg-[#2374e1] text-white w-[100%] py-2 px-5 rounded-lg disabled:bg-[#ffffff]/20 disabled:text-[#ffffff]/30 disabled:cursor-not-allowed"
                disabled={!input.trim() && !selectedFile}
                onClick={onClick}
            >
                Post
            </button>
        </div>
    )
}
