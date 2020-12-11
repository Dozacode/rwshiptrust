import DpatsLayout from 'src/layouts/DpatsLayout'
import DpatCell from 'src/components/DpatCell'

const DpatPage = ({ id }) => {
  return (
    <DpatsLayout>
      <DpatCell id={id} />
    </DpatsLayout>
  )
}

export default DpatPage
