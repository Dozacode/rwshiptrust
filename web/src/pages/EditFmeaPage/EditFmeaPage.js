import FmeasLayout from 'src/layouts/FmeasLayout'
import EditFmeaCell from 'src/components/EditFmeaCell'

const EditFmeaPage = ({ id }) => {
  return (
    <FmeasLayout>
      <EditFmeaCell id={id} />
    </FmeasLayout>
  )
}

export default EditFmeaPage
