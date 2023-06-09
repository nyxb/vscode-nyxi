# 🔧 vscode-nyxi

The **vscode-nyxi** extension provides a set of commands that can be accessed through the command palette in Visual Studio Code. These commands allow you to perform various package management tasks using the functionality of the [@nyxb/nyxi](https://github.com/nyxb/nyxi) package.

## 📥 Installation

To use the **vscode-nyxi** extension, follow these steps:

1. Make sure you have Node.js installed on your system.
2. Install the extension from the Visual Studio Code marketplace by searching for "vscode-nyxi" and clicking the "Install" button.

## 💻 Usage

Once the extension is installed, you can access its commands through the Visual Studio Code command palette. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS) to open the command palette and start typing the command names listed below.

### 🛠️ Commands

- **Nyxi**: This command serves as the entry point for the **vscode-nyxi** extension. It provides access to the following commands:
  - **Install [nyxi]**: Installs project dependencies using the appropriate package manager for your project. It utilizes the [@nyxb/nyxi](https://github.com/nyxb/nyxi) package to perform the installation with the correct package manager based on your project's lockfile.
  - **Run [nyxr]**: Runs scripts defined in your project's `package.json` file.
  - **Execute [nyxlx]**: Downloads and executes a package.
  - **Upgrade [nyxu]**: Upgrades packages to their latest versions.
  - **Uninstall [nyxun]**: Uninstalls packages from your project.
  - **Clean Install [nyxci]**: Performs a clean installation of packages.

### 📜 Menus

The **vscode-nyxi** extension also adds menu items to the explorer and editor context menus for easier access to its commands. You can find these menu items under the "Nyxi" or "Nyxi Commands" group.

## ⚙️ Configuration

The **vscode-nyxi** extension automatically detects the package manager being used in your project based on the presence of a lockfile (`yarn.lock`, `pnpm-lock.yaml`, `package-lock.json`, or `bun.lockb`). It utilizes the corresponding package manager to execute the commands.

## ℹ️ How it works

The **vscode-nyxi** extension leverages the functionality provided by the [@nyxb/nyxi](https://github.com/nyxb/nyxi) package to execute the package manager commands directly within Visual Studio Code. It intelligently determines the appropriate package manager based on your project's lockfile and executes the corresponding commands when you invoke the commands from the command palette or the context menus.

By using the **vscode-nyxi** extension, you can seamlessly manage your project's dependencies, run scripts, upgrade packages, and perform other package management tasks without leaving the Visual Studio Code environment. The **Install [nyxi]** command ensures that the project dependencies are installed using the correct package manager for your project.
