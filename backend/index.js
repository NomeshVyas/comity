import dbConnect from '../backend/dbConnect.js'
import { app } from '../backend/app.js'
import { authRouter } from '../backend/router/auth.router.js'
import { aboutRouter } from '../backend/router/about.router.js'
import { industryRouter } from '../backend/router/industry.router.js'

const PORT = 4000

app.use('/auth', authRouter)
app.use('/about', aboutRouter)
app.use('/industry', industryRouter)

dbConnect()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on PORT: ${PORT}`);
    })
})
.catch( err => 
    console.log("MongoDB Connection failed...!", err)
)