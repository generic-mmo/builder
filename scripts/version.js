const { spawnSync } = require("child_process"),
    { join } = require("path")
const npmrunpath = require("npm-run-path")



spawnSync(
    "git-conventional-commits",
    [
        "version",
        `--config ${join(process.cwd(), "configuration", "conventional-commits.json")}`,
    ],
    {
        cwd: process.cwd(),
        shell: true,
        stdio: "inherit",
        env: npmrunpath.env()
    }
)