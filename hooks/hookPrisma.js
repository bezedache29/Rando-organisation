import prisma from '../utils/pisma'

export default function hookPrisma() {

  const CheckPrimsaTable = (table) => {

    let prismaTable

    switch (table) {
      case 'vendredi':
        prismaTable = prisma.vendredi
        break;
      case 'samedi':
        prismaTable = prisma.samedi
        break;
      case 'ouverture':
        prismaTable = prisma.ouverture
        break;
      case 'cochon':
        prismaTable = prisma.cochon
        break;
      case 'inscriptions':
        prismaTable = prisma.inscriptions
        break;
      case 'lavage':
        prismaTable = prisma.lavage
        break;
      case 'parking':
        prismaTable = prisma.parking
        break;
      case 'ravito1':
        prismaTable = prisma.ravito1
        break;
      case 'ravito2':
        prismaTable = prisma.ravito2
        break;
      case 'ravito3':
        prismaTable = prisma.ravito3
        break;
      case 'sandwich':
        prismaTable = prisma.sandwich
        break;
      case 'securitysite':
        prismaTable = prisma.securitySite
        break;
      case 'securitycircuits':
        prismaTable = prisma.securityCircuits
        break;
      case 'securitypassages':
        prismaTable = prisma.securityPassages
        break;
      default:
        console.log(`problème nom de table : ${table}`)
    }

    return prismaTable
  }

  return {
    CheckPrimsaTable
  }

}
