import ShinyText from "../../../components/ShinyText/ShinyText"
import './NewArrivals.css'
export default function NewArrivals() {
    return (
        <>
            <div className="catego">
                <h1>
                    <ShinyText
                        text="New Arrivals"
                        speed={3}
                        className='shiny-heading'
                    />
                </h1>
            </div>
        </>
    )
}
