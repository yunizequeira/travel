const VideoComponnt = () => {
  return (
    <div className="h-full w-full justify-center flex items-center  ">
      <div className="p-2 lg:py-10 bg-black flex justify-center items-center min-h-96 lg:h-1/2 lg:w-1/2 rounded z-10 ">
        <video autoPlay={true} loop controls className="w-full h-full inline-block rounded">
          <source src="/video/beach.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default VideoComponnt;
