import Dpat from 'src/components/Dpat'

export const QUERY = gql`
  query FIND_DPAT_BY_ID($id: Int!) {
    dpat: dpat(id: $id) {
      id
      Owner
      vesselname
      title
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

export const Empty = () => <div>Dpat not found</div>

export const Success = ({ dpat }) => {
  return <Dpat dpat={dpat} />
}
