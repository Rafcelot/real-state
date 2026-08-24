
import "./roof-info-modal.scss"

import CloseIcon from "../../../components/ui/x-icon/CloseIcon"

import RoofFloor from "@/assets/images/roof-floor.png"
import PlanRoof from "@/assets/images/plan-roof.png"

export default  function RoofInfoModal ({ floor, onClose }) {

    if(floor === null) return null

    return (
        <div className="modal grid">
            <div className="modal__container">



          

                <div className="modal__close-wrapper">
                            <button
                                className="modal__close-button"
                                onClick={onClose}
                            >
                                <CloseIcon />
                            </button>
                </div>
                
                <img
                    className="modal__img"
                    src={RoofFloor}
                    alt="first-floor"
                />  




                <div className="modal__characteristics">
                    <div className="modal__container-tipologia">
                        <div className="modal__text-title">
                            <p>Rooftop</p>  
                        </div>
                        <p className="modal__text-text">
                          A thoughtfully designed rooftop that combines 
                          functionality and comfort, featuring a meeting table,
                          a fully integrated kitchen, and a cozy lounge area with 
                          comfortable furniture. A versatile space designed for
                          gathering, working, and relaxing while enjoying the 
                         outdoor atmosphere.
                        </p>
                    </div>

                <div className="modal__plane-container">
                    <img src= {PlanRoof} alt="" className="modal__plane"/>
                </div>

                </div>


              


                <div className="modal__button-cantainer">
                    <button className="modal__button-touch">GET IN TOUCH</button>
                </div>
                
            </div>    
            
                        
        </div>
    )
}