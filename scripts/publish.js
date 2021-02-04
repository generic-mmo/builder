const { spawnSync } = require("child_process")
const npmrunpath = require("npm-run-path")

const package = require("../package.json")



const options =
    {
        cwd: process.cwd(),
        shell: true,
        stdio: "inherit",
        env: npmrunpath.env()
    }


spawnSync(
    "git",
    [
        "checkout",
        "--track origin/artifactory"
    ],
    options
)

spawnSync(
    "npm",
    [
        "run",
        "build"
    ],
    options
)

spawnSync(
    "git",
    [
        "reset"
    ],
    options
)

for (const file of package.files) {
    spawnSync(
        "git",
        [
            "add",
            file
        ],
        options
    )
}

spawnSync(
    "git",
    [
        "commit",
        "--amend",
        "--no-edit"
    ],
    options
)