#!/usr/bin/env node

const { execSync } = require("child_process")
const path = require("path")
const fs = require("fs")

if (process.argv.length < 3) {
	console.log("You have to provide a name for your app.")
	console.log("For example :")
	console.log("    npx create-nuxtus my-app")
	process.exit(1)
}

const projectName = process.argv[2]
const currentPath = process.cwd()
const projectPath = path.join(currentPath, projectName)
const git_repo = "https://github.com/nuxtus/nuxtus"

try {
	fs.mkdirSync(projectPath)
} catch (err) {
	if (err.code === "EEXIST") {
		console.log(
			`The folder ${projectName} already exist in the current directory, please try another name.`
		)
	} else {
		console.log(error)
	}
	process.exit(1)
}

async function main() {
	try {
		console.log("Downloading files...")
		execSync(`git clone --depth 1 ${git_repo} ${projectPath}`)

		process.chdir(projectPath)

		console.log("Installing dependencies...")
		execSync("cd server && npm install")
		execSync("cd client && npm install")

		console.log("Removing unused files...")
		execSync(
			"npx rimraf ./.git ./create-app.js ./package.json ./package-lock.json ./TODO ./node_modules"
		)
		fs.rmdirSync(path.join(projectPath, "bin"), { recursive: true })
		fs.appendFile(
			".gitignore",
			path.join("server", ".env") + "\n" + path.join("client", ".env"),
			function (err) {
				if (err) throw err
				console.log("Saved!")
			}
		)

		console.log(
			"Nuxtus site is ready for use! Edit server/.env then start Directus."
		)
	} catch (error) {
		console.log(error)
	}
}
main()
