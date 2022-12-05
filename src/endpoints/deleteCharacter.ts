import { Request, Response } from "express";
import { connection } from "../connection";

export default async function deleteCharacter(req: Request, res: Response): Promise<void> {
    
    try {
        const { id } = req.params

    // const index: number = characters.findIndex(
    //     character => character.id === Number(id)
    // )
    // Para fazer o splice apenas quando o índice for maior que -1
    // if (index > -1) characters.splice(index, 1)

    // Query builder
    await connection("character").delete().where({id})
    res.status(200).end()
    } catch (error) {
        res.status(500).send("Unexpected server error")
    }
}