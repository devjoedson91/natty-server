import prismaClient from '../../prisma';
import { hash } from 'bcryptjs';

interface UserRequest { 

    name: string;
    email: string;
    password: string

}

class CreateUserService {

    async execute({name, email, password}: UserRequest) {

        function validateEmail() {

            const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    
            return regex.test(email) ;

        }

        const isValidateEmail = validateEmail();

        if (!email || !isValidateEmail) { 

            throw new Error('Email incorrect');
        }

        const userAlreadyExists = await prismaClient.user.findFirst({

            where: {

                email: email

            }

        })

        if (userAlreadyExists) {

            throw new Error('User already exists');

        }

        const passwordHash = await hash(password, 8);

        const user = await prismaClient.user.create({

            data: {
                name: name,
                email: email,
                password: passwordHash
            },
            select: { 

                id: true,
                name: true,
                email: true

            }

        });

        return user;
    }

}

export { CreateUserService }