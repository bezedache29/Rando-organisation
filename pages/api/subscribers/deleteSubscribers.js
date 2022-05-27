import hookPrisma from '../../../hooks/hookPrisma.js';

export default async function deleteSubscribers(req, res) {

  const { data, table } = req.body;
  const { CheckPrimsaTable } = hookPrisma();

  const prismaTable = await CheckPrimsaTable(table);

  try {
    const results = await prismaTable.delete({
      where: {
        id: data.id
      },
    });
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}