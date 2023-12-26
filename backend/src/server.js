import express from 'express';
import cors from 'cors';
import menuRouter from './routers/menu.router.js';
import restaurantRouter from './routers/restaurant.router.js'

const app = express();

app.use(cors()) 
// use cors to communicate bw two ports
app.use(
    cors({
        credentials: true,
        origin: ['http://localhost/3000'],
    })
);

app.use('/api/menu', menuRouter);
app.use('/api/restaurant', restaurantRouter)

const PORT = 5000;
app.listen(PORT, () => {
    console.log('listening to port no. ' + PORT)
})