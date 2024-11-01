const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end(`
            <h1>Glad you are back!</h1>
            <p>Interested knowing about my wife?</p>
            <a href="/about"> Reizel Santos </a>`)
    }
    else if(req.url === '/about'){
        res.end(`
            <h1> The Woman of my Dreams</h1>
            <p> Let me tell you about her.</p>
            <a href="/my-love"> Click Here.</a>
            `)
        
    }
    else if(req.url === '/my-love'){
        res.end(`
            <h1> My Love </h1>
            <p>This woman is everything to me. 
            I love her with all my heart and 
            I will always make her happy.</p>
            `)
    }
    else {
        res.end(`
    <h1>My bad!</h1>  
    <p>ERROR 404</p>
    <a href="/">Go Home.</a>
    `);
        }
});

server.listen(8080, () => {
    console.log('Server runs smoothly on localhost:8080')
});