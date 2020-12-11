import Fmea from 'src/components/Fmea'

export const QUERY = gql`
  query FIND_FMEA_BY_ID($id: Int!) {
    fmea: fmea(id: $id) {
      id
      Owner
      vesselname
      title
      date
      author
      classed
      classsociety
      reviewed
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Fmea not found</div>

export const Success = ({ fmea }) => {
  return <Fmea fmea={fmea} />
}
