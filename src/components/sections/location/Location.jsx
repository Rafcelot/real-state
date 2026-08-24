import "./location.scss"
import locationImage from "@/assets/images/location.png"

export default function Location () {
    
    console.log(locationImage)

    return (
        <div className="location grid">
            <div className="location__container">
                <div className="location__texts">
                    <h2 className="location__title">CALEDOM</h2>

                    <div className="location__texts-bottom">
                        <p className="location__subtitle">Location</p>
                        <p className="location__text">Enjoy quick access to shopping, 
                        dining, healthcare, schools, and
                        everything you need for everyday living.
                        </p>
                    </div>
                </div>
                <img className="location__img" src={locationImage} alt="Location" />
                
            </div>
        </div>
    )
}