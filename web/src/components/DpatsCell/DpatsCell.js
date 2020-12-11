import { Link, routes } from '@redwoodjs/router'

import Dpats from 'src/components/Dpats'

export const QUERY = gql`
  query DPATS {
    dpats {
      id
      Owner
      vesselname
      title
      date
      author
      findings
      anyAFindings
      aFindings
      anyBFindings
      bFindings
      anyCFindings
      cFindings
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
      {'No dpats yet. '}
      <Link to={routes.newDpat()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ dpats }) => {
  return <Dpats dpats={dpats} />
}
