--
-- @Project: FivemTools
-- @Author: Samuelds
-- @Source: https://github.com/FivemTools/ft_core
--

resource_manifest_version "44febabe-d386-4d18-afbe-5e627f4af937"

client_scripts {
    -- ft_core
    "node_module/@fivemtools/ft_core/dist/client.js",

    -- Local files
    "src/example.client.js",
}

server_scripts {}