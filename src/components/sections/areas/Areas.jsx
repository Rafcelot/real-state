import ExperienceIcon from '../../ui/experience-icon/ExperienceIcon'
import BuildingIcon from '../../ui/building-icon/BuildingIcon'
import Ongoing from '../../ui/ongoing/Ongoing'


import './areas.scss'
import MedalIcon from '../../ui/medal-icon/MedalIcon'
import ParkingIcon from '../../ui//parking-icon/ParkingIcon'
import LougeIcon from '../../ui/lounge-icon/LoungeIcon'
import KitchenIcon from '../../ui/kitchen-icon/Kitchen'
import TerraceIcon from '../../ui/terrace-icon/Terrace'
import ParkIcon from '../../ui/park-icon/ParkIcon'
import GymIcon from '../../ui/gym-icon/GymIcon'
import ClinicIcon from '../../ui/clinic-icon/ClinicIcon'
import MallIcon from '../../ui/mall-icon/MallIcon'

export default function Areas () {


    return (
        <>
            <div className="areas grid">


                

                <div className="areas__floating-card">
                    <div className='areas__info'>
                        <div className='areas__icon'>
                            <ExperienceIcon className="experience-icon"/>
                        </div>
                        <div className='areas__texts'>
                            <div className='areas__text-top'>15+</div>
                            <div className='areas__text-button'>Years of experience</div>
                        </div>
                    </div>

                    <div className='areas__line'></div>

                    <div className='areas__info'>
                        <div className='areas__icon'>
                            <BuildingIcon className="building-icon"/>
                        </div>
                        <div className='areas__texts'>
                            <div className='areas__text-top'>110+</div>
                            <div className='areas__text-button'>Projects completed</div>
                        </div>
                    </div>

                    <div className='areas__line areas__info--off'></div>

                    <div className='areas__info areas__info--off'>
                        <div className='areas__icon'>
                            <Ongoing className="ongoing-icon"/>
                        </div>
                        <div className='areas__texts'>
                            <div className='areas__text-top'>12+</div>
                            <div className='areas__text-button'>Ongoing projects</div>
                        </div>
                    </div>

                    <div className='areas__line areas__info--off'></div>

                    <div className='areas__info areas__info--off'>
                        <div className='areas__icon'>
                            <MedalIcon className="medal-icon"/>  
                        </div>
                        <div className='areas__texts'>
                            <div className='areas__text-top'>5+</div>
                            <div className='areas__text-button'>Design awards</div>
                        </div>
                    </div>

                </div>






                <div className="areas__main">
                    <div className='areas__container'>

                        <div className='areas__main-texts'>
                            <p className='areas__main-text-top'>Everything You Need, All in One Place</p>
                            <p className='areas__main-text-bot'>Enjoy premium amenities within the building
                                and convenient access to shopping, dining, parks, 
                                and essential services just minutes away.
                            </p>
                        </div>

                        <div className='areas__common'>

                            <p className='areas__common-title'>Common areas</p>
                           
                            <div className='areas__main-icons'>
                                <div className='areas__main-icon'>
                                    <ParkingIcon />
                                    <p className='areas__main-icon-text'>Parking</p>
                                </div>
                                <div className='areas__main-icon'>
                                    <LougeIcon />
                                    <p className='areas__main-icon-text'>Lounge</p>
                                </div>
                                <div className='areas__main-icon'>
                                    <KitchenIcon />
                                    <p className='areas__main-icon-text'>Kitchen</p>
                                </div>
                                <div className='areas__main-icon'>
                                    <TerraceIcon />
                                    <p className='areas__main-icon-text'>Terrace</p>
                                </div>
                            </div>

                        </div>

                        <div className='areas__nearby'>

                            <p className='areas__common-title'>Nearby places</p>
                           
                            <div className='areas__main-icons'>
                                <div className='areas__main-icon'>
                                    <ParkIcon width={45} height={45} />
                                    <p className='areas__main-icon-text'>Park</p>
                                </div>
                                <div className='areas__main-icon'>
                                    <GymIcon width={45} height={45} />
                                    <p className='areas__main-icon-text'>Gym</p>
                                </div>
                                <div className='areas__main-icon'>
                                    <ClinicIcon width={45} height={45} />
                                    <p className='areas__main-icon-text'>Clinic</p>
                                </div>
                                <div className='areas__main-icon'>
                                    <MallIcon width={45} height={45} />
                                    <p className='areas__main-icon-text'>Mall</p>
                                </div>
                            </div>

                        </div>
    
                    </div>
                      
                   
                    
                </div>
            </div>
        </>
    )
}