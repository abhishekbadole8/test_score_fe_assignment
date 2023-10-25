import Style from "./SyllabusAnalysis.module.css"

function SyllabusAnalysis() {

    const syllabus = [
        { id: 1, background: "#438AF6", paragraph: "HTML Tools, Forms, History", percentage: 80 },
        { id: 2, background: "#FF9142", paragraph: "Tags & References in HTML", percentage: 60 },
        { id: 3, background: "#FB5E5E", paragraph: "Tables & CSS Basics", percentage: 24 },
        { id: 4, background: "#2EC971", paragraph: "Tables & CSS Basics", percentage: 96 },]

    return (
        <div className={Style.SyllabusAnalysis}>
            <h6>Syllabus wise Analysis</h6>

            <ul>

                {syllabus.map((item) => (
                    <li key={item.id}>
                        <p>{item.paragraph}</p>

                        <div className={Style.progressBarContainer}>

                            <div className={Style.progressBar}>
                                <div className={Style.backGrey} style={{ background: `${item.background}` }} />
                                <div className={Style.steps} style={{ background: `${item.background}`, width: `${item.percentage}%` }} />
                            </div>

                            <h5 style={{ color: `${item.background}` }}>{item.percentage}%</h5>
                        </div>

                    </li>
                ))}
                
            </ul>
        </div>
    )
}

export default SyllabusAnalysis;