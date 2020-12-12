import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import DpatForm from 'src/components/DpatForm'

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
const UPDATE_DPAT_MUTATION = gql`
  mutation UpdateDpatMutation($id: Int!, $input: UpdateDpatInput!) {
    updateDpat(id: $id, input: $input) {
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

export const Success = ({ dpat }) => {
  const { addMessage } = useFlash()
  const [updateDpat, { loading, error }] = useMutation(UPDATE_DPAT_MUTATION, {
    onCompleted: () => {
      navigate(routes.dpats())
      addMessage('Dpat updated.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input, id) => {
    updateDpat({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Dpat {dpat.id}</h2>
      </header>
      <div className="rw-segment-main">
        <DpatForm dpat={dpat} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
