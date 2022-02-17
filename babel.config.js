module.exports = {
    presets:[
            '@babel/preset-env',
            ['@babel/preset-react',{
                    runtime: "automatic", // pra n precisar importar o react no index.jsx
            }]
    ]    
}