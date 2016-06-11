module.exports = {
    "entry": "./src/app.js",
    "output": {
        "filename": "bundle.js",
        "sourceMapFilename": "bundle.js.map",
        "path": "./debug"
    },
    "devtool": "source-map",
    "module": {
        "loaders": [
            {
                "test": {},
                "loader": "babel-loader"
            },
            {
                "test": {},
                "loaders": [
                    "style",
                    "css",
                    "sass"
                ]
            }
        ]
    }
}