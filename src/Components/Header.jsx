export function Header(props) {
  return (
    <>
        <section>
            <div className="headerContainer">
                <h1 className="headerText">
                    {props.text}
                </h1>
            </div>
        </section>
    </>
  )
}
