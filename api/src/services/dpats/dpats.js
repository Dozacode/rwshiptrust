import { db } from 'src/lib/db'

export const dpats = () => {
  return db.dpat.findMany()
}

export const dpat = ({ id }) => {
  return db.dpat.findOne({
    where: { id },
  })
}

export const createDpat = ({ input }) => {
  return db.dpat.create({
    data: input,
  })
}

export const updateDpat = ({ id, input }) => {
  return db.dpat.update({
    data: input,
    where: { id },
  })
}

export const deleteDpat = ({ id }) => {
  return db.dpat.delete({
    where: { id },
  })
}
