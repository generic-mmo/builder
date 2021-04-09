const { spawnSync } = require("child_process")
const npmrunpath = require("npm-run-path")



spawnSync(
    "tsc",
    [
        "--build"
    ],
    {
        cwd: process.cwd(),
        shell: true,
        stdio: "inherit",
        env: npmrunpath.env()
    }
)