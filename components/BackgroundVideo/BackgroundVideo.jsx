import "./backgroundVideo.css";
export default function BackgroundVideo() {
  return (
    <div className="background-video-container">
      <video className="background-video" muted autoPlay loop playsInline>
        <source src="/90_video/VID_20250608_051409.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
