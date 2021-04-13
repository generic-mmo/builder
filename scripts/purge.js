const { spawnSync } = require("child_process")
const npmrunpath = require("npm-run-path")



spawnSync(
    "git clean",
    [
        "-fdx --exclude .env"
    ],
    {
        cwd: process.cwd(),
        shell: true,
        stdio: "inherit",
        env: npmrunpath.env()
    }
)