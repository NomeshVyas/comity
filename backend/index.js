import dbConnect from '../backend/dbConnect.js'
import { app } from '../backend/app.js'
import { authRouter } from '../backend/router/auth.router.js'
import { aboutRouter } from '../backend/router/about.router.js'

const PORT = 4000

app.use('/auth', authRouter)
app.use('/about', aboutRouter)

dbConnect()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on PORT: ${PORT}`);
    })
})
.catch( err => 
    console.log("MongoDB Connection failed...!", err)
)