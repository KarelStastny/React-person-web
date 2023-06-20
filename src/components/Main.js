import "./Main.css"
import person1 from"../images/1.jpg"

const Main = () => {
  return <section className="main-container">
    <div className="main-left">
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem maxime corrupti saepe ab. Placeat, accusantium magni? Neque dicta facilis suscipit enim totam hic vel dolores, molestias in animi ad nostrum?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tempora ea deserunt modi, perspiciatis ipsa ipsum natus pariatur quam odio nihil atque, molestias aliquam, illum eos praesentium sunt cupiditate sint.
        </p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo quaerat, quia nemo molestiae nostrum veritatis voluptas repudiandae ipsam enim officiis. Hic pariatur doloremque dolore nobis id dolor sunt similique doloribus?
        Ad omnis odio nisi necessitatibus veritatis. Neque placeat sit corrupti sunt, soluta dolorum obcaecati architecto? Ipsa impedit non exercitationem facere minima deserunt aliquam accusantium ipsum veritatis? Laudantium quas neque quo?</p>
        <button>More</button>
    </div>
    <div className="main-right">
        <img src={person1}/>
    </div>
  </section>
}

export default Main