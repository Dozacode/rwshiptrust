import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/DpatsCell'

const DELETE_DPAT_MUTATION = gql`
  mutation DeleteDpatMutation($id: Int!) {
    deleteDpat(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const DpatsList = ({ dpats }) => {
  const { addMessage } = useFlash()
  const [deleteDpat] = useMutation(DELETE_DPAT_MUTATION, {
    onCompleted: () => {
      addMessage('Dpat deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete dpat ' + id + '?')) {
      deleteDpat({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Owner</th>
            <th>Vesselname</th>
            <th>Title</th>
            <th>Date</th>
            <th>Author</th>
            <th>Findings</th>
            <th>Any a findings</th>
            <th>A findings</th>
            <th>Any b findings</th>
            <th>B findings</th>
            <th>Any c findings</th>
            <th>C findings</th>
            <th>Classed</th>
            <th>Classsociety</th>
            <th>Reviewed</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {dpats.map((dpat) => (
            <tr key={dpat.id}>
              <td>{truncate(dpat.id)}</td>
              <td>{truncate(dpat.Owner)}</td>
              <td>{truncate(dpat.vesselname)}</td>
              <td>{truncate(dpat.title)}</td>
              <td>{truncate(dpat.date)}</td>
              <td>{truncate(dpat.author)}</td>
              <td>{checkboxInputTag(dpat.findings)}</td>
              <td>{checkboxInputTag(dpat.anyAFindings)}</td>
              <td>{truncate(dpat.aFindings)}</td>
              <td>{checkboxInputTag(dpat.anyBFindings)}</td>
              <td>{truncate(dpat.bFindings)}</td>
              <td>{checkboxInputTag(dpat.anyCFindings)}</td>
              <td>{truncate(dpat.cFindings)}</td>
              <td>{checkboxInputTag(dpat.classed)}</td>
              <td>{truncate(dpat.classsociety)}</td>
              <td>{checkboxInputTag(dpat.reviewed)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.dpat({ id: dpat.id })}
                    title={'Show dpat ' + dpat.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editDpat({ id: dpat.id })}
                    title={'Edit dpat ' + dpat.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete dpat ' + dpat.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(dpat.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DpatsList
