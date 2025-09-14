import ShinyText from "../../../components/ShinyText/ShinyText"
import './NewArrivals.css'
import { SplitText } from "../../../components"
export default function NewArrivals() {
    const videos = [
        {
            url: "https://90nutrition-uk.com/images/omega/Export_Video_2025-09-14.mp4",
            title: "FISH OIL OMEGA 3"
        },
        {
            url: "https://90nutrition-uk.com/images/multi/Export_Video_2025-09-14.mp4",
            title: "Multivitamin + Mineral"
        }
    ]

    return (
        <section className="arrive new-arrivals-section">
            <div className="section-header">
                <div className="catgeo mb-5">

                    <h1>
                        <ShinyText
                            text="New Arrivals"
                            speed={3}
                            className='shiny-heading'
                        />
                    </h1>
                </div>
            </div>

            <div className="videos-container">
                {videos.map((video, index) => (
                    <div key={index} className="video-card">
                        <div className="video-wrapper">
                            <video
                                src={video.url}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="product-video"
                                preload="metadata"
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <h3 className="video-title p-0 pt-4">
                            <SplitText
                                text={video.title}
                                className="title-text"
                                delay={300}
                                duration={0.9}
                                ease="power3.out"
                                splitType="words"
                                from={{ opacity: 0, y: 20 }}
                                to={{ opacity: 1, y: 0 }}
                                threshold={0.1}
                                rootMargin="-50px"
                            />
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    )
}
