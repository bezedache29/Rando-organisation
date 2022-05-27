import usePrisma from '../../../hooks/usePrisma.js';

export default async function getSubscribers(req, res) {

  const { table } = req.query;
  const { checkPrimsaTable } = usePrisma();

  const prismaTable = await checkPrimsaTable(table);

  try {
    const results = await prismaTable.findMany();
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}