import prisma from "../../../utils/pisma";

export default async function test(req, res) {
  try {
    const results = await prisma.vendredi.findMany();
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}