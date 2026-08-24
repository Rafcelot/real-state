import { floorData } from "@/experience/model/modal/floorData.js"
// console.log(floorData)

import "./floor-info-modal.scss"
import BedIcon from "../../../components/ui/bedroom-icon/BedroomIcon"
import BathroomIcon from "../../../components/ui/bathroom-icon/Bathroom"
import Parking2Icon from "../../../components/ui/parking2-icon/Parking2Icon"
import CloseIcon from "../../../components/ui/x-icon/CloseIcon"

export default function FloorInfoModal({floor, onClose }) {
    
    // Esto es lo que hace que no se muestre el modal.
    if (floor === null) return null

    //aca deberia enviar al useState que esta abierto el modal 


    const currentData = floorData[floor]
    // console.log(currentData)
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
                    src={currentData.image}
                    alt="first-floor"
                />  
                    

                
                <div className="modal__characteristics">

                    <div className="modal__container-tipologia">
                        <div className="modal__text-title">
                            <p>Tipologia</p>  <p>{currentData.tipologia}</p>
                        </div>
                        <p className="modal__text-text">
                          {currentData.description}
                        </p>
                    </div>

                    <div className="modal__line"></div>

                    <div className="modal__areas-container">

                        <div className="modal__area">
                            <div className="modal__area-info">
                                <p className="modal__area-info-title">Area</p>
                                <div className="modal__area-info-text modal__cuadrado"> 
                                    <p>
                                        {currentData.area}    
                                    </p>
                                    <p className="modal__m2">m<sup>2</sup></p>
                                </div>
                            </div>
                            <div className="modal__vertical-line"></div>
                        </div>



                        <div className="modal__area">
                            <div className="modal__area-info">
                                <p className="modal__area-info-title">Bedrooms</p>
                                <div className="modal__area-info-text"> 
                                    <p>1</p>
                                    <BedIcon />
                                </div>
                            </div>
                            <div className="modal__vertical-line modal__special-line"></div>
                        </div>


                        <div className="modal__area">
                            <div className="modal__area-info">
                                <p className="modal__area-info-title">Bathrooms</p>
                                <div className="modal__area-info-text"> 
                                    <p>1</p>
                                    <BathroomIcon />
                                </div>
                            </div>
                            <div className="modal__vertical-line"></div>
                        </div>

                        <div className="modal__area">
                            <div className="modal__area-info">
                                <p className="modal__area-info-title">Parking</p>
                                <div className="modal__area-info-text"> 
                                    <p>1</p>
                                    <Parking2Icon />
                                </div>
                            </div>
                         
                        </div>    

                    </div>


                    
                    <div className="modal__plane-container">
                        <img src= {currentData.plan} alt="" className="modal__plane"/>
                    </div>

                    <p className="modal__price">
                        Price range: $ {currentData.price}
                    </p>

                 
                

                </div>

                <div className="modal__button-cantainer">
                    <button className="modal__button-touch">GET IN TOUCH</button>
                </div>               
                
            </div>
        </div>

        
     )
}


