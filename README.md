# VSCode Kanayago

[![Visual Studio Marketplace](https://img.shields.io/visual-studio-marketplace/v/S-H-GAMELINKS.vscode-kanayago)](https://marketplace.visualstudio.com/items?itemName=S-H-GAMELINKS.vscode-kanayago)
[![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/S-H-GAMELINKS.vscode-kanayago)](https://marketplace.visualstudio.com/items?itemName=S-H-GAMELINKS.vscode-kanayago)
[![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/S-H-GAMELINKS.vscode-kanayago)](https://marketplace.visualstudio.com/items?itemName=S-H-GAMELINKS.vscode-kanayago)

Visual Studio Code extension for Kanayago Language Server Protocol.

## Features

- Real-time Ruby syntax checking
- Integration with Kanayago parser
- Lightweight and fast syntax validation

## Requirements

- [Kanayago](https://github.com/S-H-GAMELINKS/kanayago) gem installed and available in PATH
- Ruby 3.4 or higher

## Installation

### From VSIX (Manual Installation)

1. Install Kanayago gem:
   ```bash
   gem install kanayago
   ```

2. Install the extension:
   - Download the `.vsix` file
   - In VSCode, press `Ctrl+Shift+P` and run `Extensions: Install from VSIX...`
   - Select the downloaded `.vsix` file

### From Marketplace

Install from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=S-H-GAMELINKS.vscode-kanayago) or search for "VSCode Kanayago" in the VSCode extensions marketplace.

## Configuration

You can configure the extension through VSCode settings:

- `kanayago.serverPath`: Path to the kanayago executable (default: `"kanayago"`)
- `kanayago.trace.server`: Trace communication between VSCode and the language server (default: `"off"`)

Example `.vscode/settings.json`:

```json
{
  "kanayago.serverPath": "kanayago",
  "kanayago.trace.server": "verbose"
}
```

## Usage

Once installed, the extension automatically activates when you open Ruby files (`.rb`). Syntax errors will be highlighted in real-time as you type.

## Building

1. Install dependencies:
   ```bash
   npm install
   ```

2. Package the extension:
   ```bash
   npx vsce package
   ```

This will create a `.vsix` file that can be installed in VSCode.

## License

MIT
