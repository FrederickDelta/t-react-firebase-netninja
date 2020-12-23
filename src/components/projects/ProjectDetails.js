function ProjectDetails(props) {
  const id = props.match.params.id
  return (
    <div className="project-details section">
      <div className="container">
        <div className="card">
          <div className="card-header">
            <div className="card-header-title">
              <p className="title">Project Title - {id}</p>
            </div>
          </div>
          <div className="card-content">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt repellat magnam sit eligendi quo officia placeat nemo praesentium deleniti vitae! Cumque possimus eaque dicta id voluptate culpa, laborum quibusdam. Fugit temporibus minus sunt hic rerum libero atque, nostrum, vitae et tempora alias ipsa. Tenetur optio sint dolore ullam at dolorem.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aut quae quibusdam veniam dignissimos veritatis. Delectus, temporibus quia sed in magni esse dolorem! Alias consequatur, assumenda et consectetur iusto iure quam ut aliquam nesciunt eum culpa quisquam nulla excepturi nobis dolorem laboriosam. Unde alias eius repellendus eos eum quibusdam ad ipsum beatae dolor! Ratione maxime pariatur quam ipsum reprehenderit. Consequatur esse totam ad maxime delectus, recusandae, enim sapiente non perspiciatis ullam adipisci possimus accusantium amet explicabo iure temporibus et doloribus rem, eaque laborum alias? Nobis deserunt quod omnis, fugit quaerat dolores sint qui nisi, tenetur, itaque voluptatum. Dolorem, consequuntur qui?</p>
            <hr/>
            <p>2020-12-23 10:56</p>
            <p>Posted by Eric</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
