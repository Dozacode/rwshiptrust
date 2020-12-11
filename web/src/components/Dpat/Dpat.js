import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/DpatsCell'

const DELETE_DPAT_MUTATION = gql`
  mutation DeleteDpatMutation($id: Int!) {
    deleteDpat(id: $id) {
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

const Dpat = ({ dpat }) => {
  const { addMessage } = useFlash()
  const [deleteDpat] = useMutation(DELETE_DPAT_MUTATION, {
    onCompleted: () => {
      navigate(routes.dpats())
      addMessage('Dpat deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete dpat ' + id + '?')) {
      deleteDpat({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Dpat {dpat.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{dpat.id}</td>
            </tr>
            <tr>
              <th>Owner</th>
              <td>{dpat.Owner}</td>
            </tr>
            <tr>
              <th>Vesselname</th>
              <td>{dpat.vesselname}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{dpat.title}</td>
            </tr>
            <tr>
              <th>Date</th>
              <td>{dpat.date}</td>
            </tr>
            <tr>
              <th>Author</th>
              <td>{dpat.author}</td>
            </tr>
            <tr>
              <th>Findings</th>
              <td>{checkboxInputTag(dpat.findings)}</td>
            </tr>
            <tr>
              <th>Any a findings</th>
              <td>{checkboxInputTag(dpat.anyAFindings)}</td>
            </tr>
            <tr>
              <th>A findings</th>
              <td>{dpat.aFindings}</td>
            </tr>
            <tr>
              <th>Any b findings</th>
              <td>{checkboxInputTag(dpat.anyBFindings)}</td>
            </tr>
            <tr>
              <th>B findings</th>
              <td>{dpat.bFindings}</td>
            </tr>
            <tr>
              <th>Any c findings</th>
              <td>{checkboxInputTag(dpat.anyCFindings)}</td>
            </tr>
            <tr>
              <th>C findings</th>
              <td>{dpat.cFindings}</td>
            </tr>
            <tr>
              <th>Classed</th>
              <td>{checkboxInputTag(dpat.classed)}</td>
            </tr>
            <tr>
              <th>Classsociety</th>
              <td>{dpat.classsociety}</td>
            </tr>
            <tr>
              <th>Reviewed</th>
              <td>{checkboxInputTag(dpat.reviewed)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editDpat({ id: dpat.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(dpat.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Dpat
