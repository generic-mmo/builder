const { spawnSync } = require("child_process")
const npmrunpath = require("npm-run-path")



spawnSync(
    "lerna",
    [
        "bootstrap",
    ],
    {
        cwd: process.cwd(),
        shell: true,
        stdio: "inherit",
        env: npmrunpath.env()
    }
)


spawnSync(
    "link-parent-bin",
    [],
    {
        cwd: process.cwd(),
        shell: true,
        stdio: "inherit",
        env: npmrunpath.env()
    }
)