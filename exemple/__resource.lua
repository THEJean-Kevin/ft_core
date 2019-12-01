resource_manifest_version "44febabe-d386-4d18-afbe-5e627f4af937"

-- Not edit zone
webpack_config 'client.config.js'

dependencys {
    "webpack",
    "yarn"
}
--

client_scripts {
    "dist/index.js"
}

server_scripts {
    'src/server/server.js'
}