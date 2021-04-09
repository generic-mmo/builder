const { spawnSync } = require("child_process")
const npmrunpath = require("npm-run-path")



spawnSync(
    "grpc_tools_node_protoc",
    [
        "--plugin=../../node_modules/.bin/protoc-gen-ts_proto",
        "--ts_proto_opt=outputServices=grpc-js",
        "--ts_proto_out=. ./schema/schema.proto"
    ],
    {
        cwd: process.cwd(),
        shell: true,
        stdio: "inherit",
        env: npmrunpath.env()
    }
)