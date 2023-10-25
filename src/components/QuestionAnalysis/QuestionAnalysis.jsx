import { useContext } from "react";
import Style from "./QuestionAnalysis.module.css"
import CircularProgress from "../CircularProgress/CircularProgress";
import { UserContext } from "../../App";

function QuestionAnalysis() {

    const { userData } = useContext(UserContext)

    const { current_score, total_score } = userData

    return (
        <div className={Style.QuestionAnalysis}>

            <div className={Style.QuestionAnalysisTop}>
                <div>
                    <h6>Question Analysis</h6>
                    <p>{current_score < 10 ? '0' + current_score : current_score} / {total_score}</p>
                </div>
                <p><span> You scored {current_score} question correct out of {total_score}.</span> However it still needs some improvements</p>
            </div>

            <CircularProgress current_score={current_score} total_score={total_score} />

        </div>
    )
}

export default QuestionAnalysis;