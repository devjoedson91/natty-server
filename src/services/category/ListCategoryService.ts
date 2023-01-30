import prismaClient from "../../prisma";

class ListCategoryService {

    async execute() {

        const category = await prismaClient.category.findMany({
            orderBy: {
                name: 'asc'
            },
            include: { 
                services: true          
            }
        });

        return category;

    }

}

export { ListCategoryService }