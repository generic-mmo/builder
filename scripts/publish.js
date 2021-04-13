const { spawnSync } = require("child_process")
const npmrunpath = require("npm-run-path")



const { CI = "", GITHUB_REF = "" } = process.env

spawnSync(
    "lerna",
    [
        "publish", "from-git", ...process.argv.slice(2),

        ...
            CI
                ? [ "--yes" ]
                :
                [],

        ...
            /master$/.test(GITHUB_REF)
                ? [ "--dist-tag", "next" ]
                :
                /stable$/.test(GITHUB_REF)
                    ? [ "--dist-tag", "latest" ]
                    :
                    []
    ],
    {
        cwd: process.cwd(),
        shell: true,
        stdio: "inherit",
        env: npmrunpath.env()
    }
)