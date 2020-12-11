import { db } from 'src/lib/db'

export const fmeas = () => {
  return db.fmea.findMany()
}

export const fmea = ({ id }) => {
  return db.fmea.findOne({
    where: { id },
  })
}

export const createFmea = ({ input }) => {
  return db.fmea.create({
    data: input,
  })
}

export const updateFmea = ({ id, input }) => {
  return db.fmea.update({
    data: input,
    where: { id },
  })
}

export const deleteFmea = ({ id }) => {
  return db.fmea.delete({
    where: { id },
  })
}
