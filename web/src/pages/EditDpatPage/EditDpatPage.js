import DpatsLayout from 'src/layouts/DpatsLayout'
import EditDpatCell from 'src/components/EditDpatCell'

const EditDpatPage = ({ id }) => {
  return (
    <DpatsLayout>
      <EditDpatCell id={id} />
    </DpatsLayout>
  )
}

export default EditDpatPage
