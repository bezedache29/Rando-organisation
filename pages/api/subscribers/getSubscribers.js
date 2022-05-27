import hookPrisma from '../../../hooks/hookPrisma.js';

export default async function getSubscribers(req, res) {

  const { table } = req.query;
  const { CheckPrimsaTable } = hookPrisma();

  const prismaTable = await CheckPrimsaTable(table);

  try {
    const results = await prismaTable.findMany();
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ message: error.message, prismatable: prismaTable });
  }
}