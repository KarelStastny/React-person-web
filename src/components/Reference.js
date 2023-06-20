import "./Reference.css"
import data from "../data/reference"

const Reference = () => {

  return <section className="section-reference">
    <h2>Reference</h2>
    <div className="reference">
        
        {/* Zjistí všechny reference */
            data.map( (oneReference) => {
                const {id, name, text, image} = oneReference
                return(
                    <div key={id} className="oneReference">
                        <img src={image} alt="" />
                        
                        <p>{text}</p>
                        <h4>{name}</h4>
                    </div>
                )
            })

        }

    </div>
  </section>
}

export default Reference