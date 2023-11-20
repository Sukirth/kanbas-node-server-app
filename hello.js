console.log("hello world!");

const helloRoutes = (app) =>{
    app.get('/hello', (req, res)=>{res.send('Life is good ^_^')});
    app.get('/', (req, res) => {res.send('Welcome to fullstack web dev!')});
    
}
export default helloRoutes;