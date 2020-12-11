import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/FmeasCell'

const DELETE_FMEA_MUTATION = gql`
  mutation DeleteFmeaMutation($id: Int!) {
    deleteFmea(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Fmea = ({ fmea }) => {
  const { addMessage } = useFlash()
  const [deleteFmea] = useMutation(DELETE_FMEA_MUTATION, {
    onCompleted: () => {
      navigate(routes.fmeas())
      addMessage('Fmea deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete fmea ' + id + '?')) {
      deleteFmea({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Fmea {fmea.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{fmea.id}</td>
            </tr>
            <tr>
              <th>Owner</th>
              <td>{fmea.Owner}</td>
            </tr>
            <tr>
              <th>Vesselname</th>
              <td>{fmea.vesselname}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{fmea.title}</td>
            </tr>
            <tr>
              <th>Date</th>
              <td>{timeTag(fmea.date)}</td>
            </tr>
            <tr>
              <th>Author</th>
              <td>{fmea.author}</td>
            </tr>
            <tr>
              <th>Classed</th>
              <td>{checkboxInputTag(fmea.classed)}</td>
            </tr>
            <tr>
              <th>Classsociety</th>
              <td>{fmea.classsociety}</td>
            </tr>
            <tr>
              <th>Reviewed</th>
              <td>{checkboxInputTag(fmea.reviewed)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editFmea({ id: fmea.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(fmea.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Fmea
