const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production';//cria uma variavel para dizer se estamos no desenvovimento ou producao

module.exports =
{
        mode: isDevelopment ? 'development':'production',
        devtool:isDevelopment ? 'eval-source-map': 'source-map',//varios tipos de source map para conseguir entender melhor o codigo em js puro
        entry: path.resolve(__dirname, 'src','index.jsx'), //qual o arquivo inicial da nossa aplicacao
        output: { //onde vai o resultado da nossa aplicacao
                path: path.resolve(__dirname,'dist'),
                filename: 'bundle.js'
                },
        resolve:{
                extensions: ['.js', '.jsx'] //que tipos de arquivos nossa aplicacao vai receber
                },
                devServer: {//pra n precisar fazer toda hora o yarn webpack
                        static: path.resolve(__dirname, 'public'),
                      },
                plugins: [//monstrar sempre onde esta a aplicacao
                        new HtmlWebpackPlugin({
                                template: path.resolve(__dirname,'public','index.html')
                        })
                ],
        module: //como a nossa aplicacao vai se comportarquando estivermos importando cada tipo de arquivo
        {
                rules:
                [
                        {
                        test: /\.jsx$/, //cifrao diz que o arquivo deve terminar em ~ 
                        exclude: /node_modules/,//o mode faz o trabalho que o webpack faria entao eu tiro essa funcionalidade
                        use: 'babel-loader',//integracao entre o babel e webpack
                        },
                        {
                        test: /\.scss$/, //cifrao diz que o arquivo deve terminar em ~ 
                        exclude: /node_modules/,//o mode faz o trabalho que o webpack faria entao eu tiro essa funcionalidade
                        use: ['style-loader', 'css-loader', 'sass-loader'] //integracao entre o babel e webpack
                        },

                ]
                
        }

}
