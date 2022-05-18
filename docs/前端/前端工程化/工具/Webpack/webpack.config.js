module.exports =   merge(baseWebpackConfig, {
    plugins: 
    [   
        // 稳定css hash
        new MiniCssExtractPlugin(
            {
                filename: '[name].[contenthash:8].css',
                chunkFilename: '[name].[contenthash:8].css'
            }
        ),   
    ],
    optimization: {
        // 稳定moduleID
        moduleIds: 'hashed',
        // 稳定chunkID
        chunkIds: 'named'
    },
    output: { 
        // 分离chunks 映射关系，避免chunk改动时主js hash变动
        runtimeChunk: true,
        // 稳定文件hash
        filename: '[name].[contenthash:8].js',
        // 稳定chunk hash
        chunkFilename: '[name].[contenthash:8].js'
    }, 
});