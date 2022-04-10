import { Router, Request, Response } from 'express'

const routes = Router()

routes.get('/', (req: Request, res: Response) => {
  console.log(req)
  res.send('hola')
})

export default routes
