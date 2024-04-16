
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { RiCompassFill } from "react-icons/ri";

import './index.css'

const SideBar = props => {
    const {sideBarToggle, onClickSideBarToggle} = props

    const onClicSideBar = () => {
        onClickSideBarToggle(sideBarToggle)
    }

    const isShowSidebarLg = sideBarToggle ? 'large-device-side-bar-container' : 'not-show-side-bar'

    const isShowSidebarSm = sideBarToggle === false ? 'small-device-side-bar-container' : 'not-show-side-bar'
    
    return (
        <>
            <>
                {sideBarToggle === false ? 
                (
                <HiMiniBars3BottomLeft size={20} color="black" className="lg-navbar-icon" onClick={onClicSideBar}/>
                ):(
                    <div className={isShowSidebarLg} >
                        <div>
                            <div className="character-ai-text-container">
                                <h3 className="character-ai-text">character.ai</h3>
                            <FaAngleDoubleLeft size={17} color="gray" onClick={onClicSideBar} />
                            </div>   
                            <div className="create-btn-container">
                                <AiOutlinePlus size={20} color="rgb(87, 84, 84)" />
                                <p className="create-btn-text">Create</p>
                            </div>
                            <div className="discover-container">
                                <RiCompassFill size={28}  />
                                <p className="discover-text">Discover</p>
                            </div>
                            <p className="Chats-heading">Chats</p>
                            <p className="today-text">Today</p>
                            <ul className="today-chats-container">
                                <li className="today-chat-item">
                                    <img src="https://characterai.io/i/80/static/avatars/LibrarianLinda.png?webp=true&anim=0" className="today-chat-profile-image" alt="profile" />
                                    <p className="tody-chat-profile-name" >Gojo Satoru</p>
                                </li>
                                <li className="today-chat-item">
                                    <img src="https://characterai.io/i/80/static/avatars/uploaded/2023/1/30/OpqG-QJWMMyTmkL9gI9496fevfGeJjfNj5aoyGtLqtQ.webp?webp=true&anim=0" className="today-chat-profile-image" alt="profile" />
                                    <p className="tody-chat-profile-name" >Arjuna</p>
                                </li>
                                <li className="today-chat-item">
                                    <img src="https://characterai.io/i/80/static/avatars/uploaded/2022/10/19/UHMcO-dD720KcZuxmWjNnuDzYGrhjrulXic0c-nZWBY.webp?webp=true&anim=0" className="today-chat-profile-image" alt="profile" />
                                    <p className="tody-chat-profile-name" >HyperGlot</p>
                                </li>
                            </ul>
                        </div>
                        <div className="sign-buttons-container">
                            <button type="button" className="sign-in-button">Sign in</button>
                            <button type="button" className="sign-up-button">Sign Up</button>
                        </div>
                    </div>
                )
                }
            </>
            <>
                <div className={isShowSidebarSm} >
                    <div>
                        <div className="character-ai-text-container">
                            <h3 className="character-ai-text">character.ai</h3>
                        <FaAngleDoubleLeft size={17} color="gray" onClick={onClicSideBar} />
                        </div>   
                        <div className="create-btn-container">
                            <AiOutlinePlus size={20} color="rgb(87, 84, 84)" />
                            <p className="create-btn-text">Create</p>
                        </div>
                        <div className="discover-container">
                            <RiCompassFill size={28}  />
                            <p className="discover-text">Discover</p>
                        </div>
                        <p className="Chats-heading">Chats</p>
                        <p className="today-text">Today</p>
                        <ul className="today-chats-container">
                            <li className="today-chat-item">
                                <img src="https://characterai.io/i/80/static/avatars/LibrarianLinda.png?webp=true&anim=0" className="today-chat-profile-image" alt="profile" />
                                <p className="tody-chat-profile-name" >Gojo Satoru</p>
                            </li>
                            <li className="today-chat-item">
                                <img src="https://characterai.io/i/80/static/avatars/uploaded/2023/1/30/OpqG-QJWMMyTmkL9gI9496fevfGeJjfNj5aoyGtLqtQ.webp?webp=true&anim=0" className="today-chat-profile-image" alt="profile" />
                                <p className="tody-chat-profile-name" >Arjuna</p>
                            </li>
                            <li className="today-chat-item">
                                <img src="https://characterai.io/i/80/static/avatars/uploaded/2022/10/19/UHMcO-dD720KcZuxmWjNnuDzYGrhjrulXic0c-nZWBY.webp?webp=true&anim=0" className="today-chat-profile-image" alt="profile" />
                                <p className="tody-chat-profile-name" >HyperGlot</p>
                            </li>
                        </ul>
                    </div>
                    <div className="sign-buttons-container">
                        <button type="button" className="sign-in-button">Sign in</button>
                        <button type="button" className="sign-up-button">Sign Up</button>
                    </div>
                </div>
            
            </>
        </>
    )
}


export default SideBar