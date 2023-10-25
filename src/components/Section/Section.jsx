import Style from "./Section.module.css"
import ComparisonGraph from "../ComparisonGraph/ComparisonGraph"
import htmlImg from "../../assets/image4.svg"
import SyllabusAnalysis from "../SyllabusAnalysis/SyllabusAnalysis";
import QuestionAnalysis from "../QuestionAnalysis/QuestionAnalysis";

function Section({ setUpdateScoreModal, userData }) {

    const { rank, percentile, current_score } = userData;

    return (
        <section className={Style.Section}>

            <p className={Style.pageTitle}>Skill Test</p>

            <div style={{ marginTop: "1.87rem", display: "flex", gap: "30px" }}>

                <div className={Style.SectionLeft}>

                    <div className={Style.skillLanguageContainer}>

                        <div className={Style.skillLanguageLeft}>
                            <img src={htmlImg} alt="" className={Style.skillLanguageIcon} />

                            <div className={Style.skillLanguageContainerContext}>
                                <h6>Hypertext Markup Language</h6>
                                <p> Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021  </p>
                            </div>
                        </div>

                        <button onClick={() => setUpdateScoreModal(prev => !prev)}>Update</button>
                    </div>

                    <div className={Style.quickStatistics}>
                        <h6>Quick Statistics</h6>

                        <ul>
                            <li>
                                <p className={Style.textIconTag}>📋</p>
                                <div>
                                    <h5>{rank}</h5>
                                    <p>YOUR RANK</p>
                                </div>
                            </li>

                            <li>
                                <p className={Style.textIconTag}>📋</p>
                                <div>
                                    <h5>{percentile}%</h5>
                                    <p>PERCENTILE</p>
                                </div>
                            </li>

                            <li>
                                <p className={Style.textIconTag}>✅</p>
                                <div>
                                    <h5>{current_score < 10 ? '0' + current_score : current_score} / 15</h5>
                                    <p>CORRECT ANSWER</p>
                                </div>
                            </li>
                        </ul>

                    </div>

                    <ComparisonGraph />

                </div>

                <div className={Style.SectionRight}>

                    <SyllabusAnalysis />

                    <QuestionAnalysis />
                </div>

            </div>
        </section>
    )
}

export default Section;