import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import FmeaForm from 'src/components/FmeaForm'

export const QUERY = gql`
  query FIND_FMEA_BY_ID($id: Int!) {
    fmea: fmea(id: $id) {
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
const UPDATE_FMEA_MUTATION = gql`
  mutation UpdateFmeaMutation($id: Int!, $input: UpdateFmeaInput!) {
    updateFmea(id: $id, input: $input) {
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

export const Success = ({ fmea }) => {
  const { addMessage } = useFlash()
  const [updateFmea, { loading, error }] = useMutation(UPDATE_FMEA_MUTATION, {
    onCompleted: () => {
      navigate(routes.fmeas())
      addMessage('Fmea updated.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input, id) => {
    updateFmea({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Fmea {fmea.id}</h2>
      </header>
      <div className="rw-segment-main">
        <FmeaForm fmea={fmea} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
