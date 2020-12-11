import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import DpatForm from 'src/components/DpatForm'

import { QUERY } from 'src/components/DpatsCell'

const CREATE_DPAT_MUTATION = gql`
  mutation CreateDpatMutation($input: CreateDpatInput!) {
    createDpat(input: $input) {
      id
    }
  }
`

const NewDpat = () => {
  const { addMessage } = useFlash()
  const [createDpat, { loading, error }] = useMutation(CREATE_DPAT_MUTATION, {
    onCompleted: () => {
      navigate(routes.dpats())
      addMessage('Dpat created.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input) => {
    createDpat({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Dpat</h2>
      </header>
      <div className="rw-segment-main">
        <DpatForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewDpat
