import Style from "./UpdateScoreModal.module.css"
import htmlLogo from "../../assets/image4.svg"
import { useContext, useRef, useState } from "react";
import { UserContext } from "../../App";

function UpdateScoreModal() {

    const outsideClick = useRef()

    const { setUpdateScoreModal, userData, setUserData } = useContext(UserContext)

    const [userDataUpdate, setUserDataUpdate] = useState({ ...userData })

    // outside click close modal
    const handleOutsideClick = (e) => {
        if (e.target === outsideClick.current) {
            setUpdateScoreModal(prev => !prev)
        }
    }

    // handleInputValue
    const handleChange = (e) => {
        setUserDataUpdate((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = () => {
        setUserData(prev => ({ ...prev, ...userDataUpdate }))
        setUpdateScoreModal(prev => !prev)
    }

    const handleCancel = () => {
        setUpdateScoreModal(prev => !prev)
    }

    return (
        <>
            <div className={Style.UpdateScoreModal} ref={outsideClick} onClick={(e) => handleOutsideClick(e)}>

                <div className={Style.updateScoreBox}>

                    <div className={Style.updateScoreBoxTop}>
                        <h2>Update Scores</h2>
                        <img src={htmlLogo} alt="" />
                    </div>

                    <div className={Style.updateScoreInputBox}>
                        <ul>
                            <li>
                                <div className={Style.updateScoreContent}>
                                    <span className={Style.updateScoreSerialNum}>1</span>
                                    <p>Update your <span>rank</span></p>
                                </div>
                                <input type="text" name="rank" value={userDataUpdate.rank} className={Style.updateScoreInput} onChange={handleChange} />
                            </li>

                            <li >
                                <div className={Style.updateScoreContent}>
                                    <span className={Style.updateScoreSerialNum}>2</span>
                                    <p>Update your <span>percentile</span> </p>
                                </div>
                                <input type="text" name="percentile" value={userDataUpdate.percentile} className={Style.updateScoreInput} onChange={handleChange} />
                            </li>

                            <li >
                                <div className={Style.updateScoreContent}>
                                    <span className={Style.updateScoreSerialNum}>3</span>
                                    <p>Update your <span>current score (out of 15)</span></p>
                                </div>
                                <input type="text" name="current_score" value={userDataUpdate.current_score} className={Style.updateScoreInput} onChange={handleChange} />
                            </li>
                        </ul>

                    </div>

                    <div className={Style.updateScoreBoxButtons}>
                        <button onClick={handleCancel}> Cancel</button>
                        <button className={Style.activeButton} onClick={handleSubmit}>Save
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <path d="M3.33325 8.28415H12.6666" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8 3.61751L12.6667 8.28417L8 12.9508" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                        </button>
                    </div>

                </div>


            </div>
        </>
    )
}

export default UpdateScoreModal;