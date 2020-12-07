import { Link, routes } from '@redwoodjs/router'

const RoadmapPage = () => {
  return (
    <>
      <h1>RoadmapPage</h1>
      <p>
        Find me in <code>./web/src/pages/RoadmapPage/RoadmapPage.js</code>
      </p>
      <p>
        My default route is named <code>roadmap</code>, link to me with `
        <Link to={routes.roadmap()}>Roadmap</Link>`
      </p>
    </>
  )
}

export default RoadmapPage
