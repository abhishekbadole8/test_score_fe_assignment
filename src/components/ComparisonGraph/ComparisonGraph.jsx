import Style from "./ComparisonGraph.module.css"

function ComparisonGraph() {
    return (
        <div className={Style.ComparisonGraph}>
            
            <div className={Style.ComparisonGraphTop}>

                <div className={Style.ComparisonGraphTopLeft}>
                    <h6>Comparison Graph</h6>
                    <p><span>You scored 37% percentile</span> which is lower than the
                        average percentile 72% of all the engineers who took this assessment</p>
                </div>

                <p className={Style.textIconTag}>📈</p>
            </div>

            <div className={Style.graphContainer}>
                {/* GRAPH */}
            </div>

        </div>
    )
}

export default ComparisonGraph;