import { NextFunction, Request, Response } from "express"
import JWT from "jsonwebtoken"
import ForbiddenError from "../models/errors/forbidden.error.model"
import userRepository from "../repositories/user.repository"


const jwtAuthenticationMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const authorizationHeader = req.headers['authorization']

        if (!authorizationHeader) {
            throw new ForbiddenError('Credenciais não informados')
        }

        const [authenticationType, token] = authorizationHeader.split(' ')

        if(authenticationType != 'Bearer' || !token) {
            throw new ForbiddenError('Tipo de autenticação inválido')
        }

        try {
            const tokenPayload = JWT.verify(token, 'U4Zp9tpXUJ7BHbCm')
    
            if(typeof tokenPayload !== 'object' || !tokenPayload.sub) {
                throw new ForbiddenError('Token inválido')
            }
    
            const user = {
                uuid: tokenPayload.sub,
                username: tokenPayload.username
            }
    
            req.user = user
            next()
        } catch (error) {
            next(error)
        }
    } catch (error) {
        next(error)
    }
}

export default jwtAuthenticationMiddleware
