const { spawnSync } = require("child_process")
const npmrunpath = require("npm-run-path")
const path = require("path")



const { DOCKERHUB_TOKEN } = process.env

const package = require(path.resolve(process.cwd(), "package.json")),
    [ organization, name ] = package.name.split("/")
const user = organization.replace(/\W/g, ""),
    repository = name


spawnSync(
    `docker build`,
    [
        "--tag"
        `${user}/${repository}:${package.version}`
    ],
    {
        cwd: process.cwd(),
        shell: true,
        stdio: "inherit",
        env: npmrunpath.env()
    }
)

if (process.argv.slice(2).includes("--publish")) {
    spawnSync(
        `docker login`,
        [
            `--username ${user}`
            `--password ${DOCKERHUB_TOKEN}`
        ],
        {
            cwd: process.cwd(),
            shell: true,
            stdio: "inherit",
            env: npmrunpath.env()
        }
    )

    spawnSync(
        `docker push`,
        [
            `${user}/${repository}:${package.version}`
        ],
        {
            cwd: process.cwd(),
            shell: true,
            stdio: "inherit",
            env: npmrunpath.env()
        }
    )
}