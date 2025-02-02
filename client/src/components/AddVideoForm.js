import React, { useState } from "react";

const AddVideoForm = ({
  showAddVideoForm,
  extractVideoId,
  videoList,
  setVideoList,
}) => {
  const [videoTitle, setVideoTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const videoId = extractVideoId(videoUrl);
    if (videoId !== null && videoTitle !== "") {
      let newVideo = {
        title: videoTitle,
        url: videoUrl,
        rating: 0,
      };
      /*
     videoList.push(newVideo) returns the index of the new element
     and thus cannot be used in setVideoList function
    */
      setVideoList(() => [...videoList, newVideo]);
    } else {
      alert("Enter a valid Video Title and URL!");
    }

    setVideoTitle("");
    setVideoUrl("");
  };

  const handleVideoTitleChange = (event) => {
    setVideoTitle(event.target.value);
  };

  const handleVideoUrlChange = (event) => {
    setVideoUrl(event.target.value);
  };

  return (
    <>
      {showAddVideoForm && (
        <form onSubmit={handleSubmit}>
          <label>
            Title
            <input
              type="text"
              name="title"
              placeholder="Add a Video Title"
              value={videoTitle}
              onChange={handleVideoTitleChange}
            />
          </label>
          <label>
            URL
            <input
              type="url"
              name="url"
              placeholder="Add the Video URL"
              value={videoUrl}
              onChange={handleVideoUrlChange}
            />
          </label>
          <button>Submit</button>
        </form>
      )}
    </>
  );
};

export default AddVideoForm;
