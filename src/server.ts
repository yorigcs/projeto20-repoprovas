import app from './configExpress/app'
import { env } from './env'

app.listen(env.port, () => console.log(`Express server listening on port ${env.port}`))
