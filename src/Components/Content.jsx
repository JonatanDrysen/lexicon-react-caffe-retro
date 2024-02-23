export function Content({ props }) {
    return (
        <>
            <section className="content">
                <div className="subheader1Container">
                   <span className="subheader1Text">{props.text1}</span>
                </div>
                <div className="subheader2Container">
                    <span className="subheader2Text">{props.text2}</span>
                </div>

                <div className="tableContainer">
                    
                </div>
            </section>
        </>
    )
}
