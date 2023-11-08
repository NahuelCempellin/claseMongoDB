import express, {Request, Response, NextFunction} from 'express'
import userRoutes from './routes/user.routes'


const app = express()


app.set('port', process.env.PORT || 3000);

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/',( req: Request, res: Response, next: NextFunction)=>{
    res.send(`Te api is in the port: 3000`)
})

app.use(userRoutes)


export default app