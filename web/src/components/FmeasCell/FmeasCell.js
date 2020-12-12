import { Link, routes } from '@redwoodjs/router'

import Fmeas from 'src/components/Fmeas'

export const QUERY = gql`
  query FMEAS {
    fmeas {
      id
      Owner
      vesselname
      title
      author
      classed
      classsociety
      reviewed
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No fmeas yet. '}
      <Link to={routes.newFmea()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ fmeas }) => {
  return <Fmeas fmeas={fmeas} />
}
