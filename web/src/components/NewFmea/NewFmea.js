import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import FmeaForm from 'src/components/FmeaForm'

import { QUERY } from 'src/components/FmeasCell'

const CREATE_FMEA_MUTATION = gql`
  mutation CreateFmeaMutation($input: CreateFmeaInput!) {
    createFmea(input: $input) {
      id
    }
  }
`

const NewFmea = () => {
  const { addMessage } = useFlash()
  const [createFmea, { loading, error }] = useMutation(CREATE_FMEA_MUTATION, {
    onCompleted: () => {
      navigate(routes.fmeas())
      addMessage('Fmea created.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input) => {
    createFmea({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Fmea</h2>
      </header>
      <div className="rw-segment-main">
        <FmeaForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewFmea
