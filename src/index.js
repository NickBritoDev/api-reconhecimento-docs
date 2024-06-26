import express from 'express'
import bodyParser from 'body-parser'
import rg from './routes/rg/rgRoutes.js'
import cpf from './routes/cpf/cpfRoutes.js'
import cnh from './routes/cnh/cnhRoutes.js'
import comprovanteEndereco from './routes/comprovanteEndereco/comprovanteEnderecoRoutes.js'
import { monitorarRecursos } from './utils/monitoramento.js'

const app = express()
const PORT = 5555

app.use(bodyParser.json())

app.use('/reconhecimento', rg)
app.use('/reconhecimento', cpf)
app.use('/reconhecimento', cnh)
app.use('/reconhecimento', comprovanteEndereco)


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))

monitorarRecursos()