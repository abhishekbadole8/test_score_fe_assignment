import { useContext, useEffect, useState } from "react";
import Style from "./CircularProgress.module.css"

function CircularProgress({ current_score, total_score }) {

    const [degree, setDegree] = useState(0)

    const calculateProgress = () => {
        const progress = (current_score / total_score) * 360;
        return progress;
    };

    const circularProgressStyle = {
        background: `conic-gradient(#438AF6 ${degree}deg, #438AF61A 0deg)`
    };

    useEffect(() => {
        const conicGradientDegree = calculateProgress();
        setDegree(conicGradientDegree);
    }, [current_score]);

    return (
        <>
            <div class={Style.CircularProgressContainer}>

                <div class={Style.circularProgress} >

                    <div class={Style.circularProgressInside} style={circularProgressStyle}>

                        <span class={Style.progressValue}>🎯</span>

                    </div>

                </div>

            </div>
        </>
    )
}

export default CircularProgress;