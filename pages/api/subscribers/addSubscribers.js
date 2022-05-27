import hookPrisma from '../../../hooks/hookPrisma.js';

export default async function addSubscribers(req, res) {

  const { pseudo, comment, table } = req.body;

  const { CheckPrimsaTable } = hookPrisma();

  const prismaTable = await CheckPrimsaTable(table);

  const checkIfPseudoExists = await prismaTable.findUnique({ where: { pseudo } })
  if(checkIfPseudoExists) return res.status(400).send({message: "Cette personne est déjà inscrite"})

  let data = {
    pseudo
  }

  if (comment) {
    data = {
      ...data,
      comment
    }
  }
  try {
    const results = await prismaTable.create({
      data
    });
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}