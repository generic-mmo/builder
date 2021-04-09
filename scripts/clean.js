const { spawnSync } = require("child_process")
const npmrunpath = require("npm-run-path")



spawnSync(
    "tsc",
    [
        "--build",
        "--clean"
    ],
    {
        cwd: process.cwd(),
        shell: true,
        stdio: "inherit",
        env: npmrunpath.env()
    }
)

spawnSync(
    "shx rm",
    [
        "./schema/**/*.ts"
    ],
    {
        cwd: process.cwd(),
        shell: true,
        stdio: "inherit",
        env: npmrunpath.env()
    }
)