module.exports = {
    entry: {
        entry_file: './src/Entry.js',
        m1: './src/Module_1.js',
        m1: './src/Module_2.js'
    },
    output: {
        path: resolve(__dirname,'dist'),
        filename: '[name].bundle.js'
    }, 
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}