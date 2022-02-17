const path = require('path')
module.exports =
{
        entry: path.resolve(__dirname, 'src','index.jsx'), //qual o arquivo inicial da nossa aplicacao
        output: { //onde vai o resultado da nossa aplicacao
                path: path.resolve(__dirname,'dist'),
                filename: 'bundle.js'
                },
        resolve:{
                extensions: ['.js', '.jsx'] //que tipos de arquivos nossa aplicacao vai receber
                },
        module: //como a nossa aplicacao vai se comportarquando estivermos importando cada tipo de arquivo
        {
                rules:
                [
                        {
                        test: /\.jsx$/, //cifrao diz que o arquivo deve terminar em ~ 
                        exclude: /node_modules/,//o mode faz o trabalho que o webpack faria entao eu tiro essa funcionalidade
                        use: 'babel-loader',//integracao entre o babel e webpack
                        },

                ]
                
        }

}