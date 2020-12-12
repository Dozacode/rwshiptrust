import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/FmeasCell'

const DELETE_FMEA_MUTATION = gql`
  mutation DeleteFmeaMutation($id: Int!) {
    deleteFmea(id: $id) {
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

const FmeasList = ({ fmeas }) => {
  const { addMessage } = useFlash()
  const [deleteFmea] = useMutation(DELETE_FMEA_MUTATION, {
    onCompleted: () => {
      addMessage('Fmea deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete fmea ' + id + '?')) {
      deleteFmea({ variables: { id } })
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
            <th>Author</th>
            <th>Classed</th>
            <th>Classsociety</th>
            <th>Reviewed</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {fmeas.map((fmea) => (
            <tr key={fmea.id}>
              <td>{truncate(fmea.id)}</td>
              <td>{truncate(fmea.Owner)}</td>
              <td>{truncate(fmea.vesselname)}</td>
              <td>{truncate(fmea.title)}</td>
              <td>{truncate(fmea.author)}</td>
              <td>{checkboxInputTag(fmea.classed)}</td>
              <td>{truncate(fmea.classsociety)}</td>
              <td>{checkboxInputTag(fmea.reviewed)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.fmea({ id: fmea.id })}
                    title={'Show fmea ' + fmea.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editFmea({ id: fmea.id })}
                    title={'Edit fmea ' + fmea.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete fmea ' + fmea.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(fmea.id)}
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

export default FmeasList
