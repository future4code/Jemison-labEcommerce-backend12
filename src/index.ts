import { app } from './app'
import createCharacter from './endpoints/createCharacter'
import getAllCharacters from './endpoints/getAllCharacters'
import deleteCharacter from './endpoints/deleteCharacter'

app.get("/character", getAllCharacters)

app.put("/character/new", createCharacter)

app.delete("/character/:id", deleteCharacter)