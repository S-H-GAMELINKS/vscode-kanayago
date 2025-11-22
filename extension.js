const { LanguageClient, TransportKind } = require('vscode-languageclient/node');
const vscode = require('vscode');

let client;

function activate(context) {
  const config = vscode.workspace.getConfiguration('kanayago');
  const serverPath = config.get('serverPath', 'kanayago');

  const serverOptions = {
    command: serverPath,
    args: ['--lsp'],
    transport: TransportKind.stdio
  };

  const clientOptions = {
    documentSelector: [{ scheme: 'file', language: 'ruby' }],
    synchronize: {
      fileEvents: vscode.workspace.createFileSystemWatcher('**/*.rb')
    }
  };

  client = new LanguageClient(
    'kanayago',
    'Kanayago Language Server',
    serverOptions,
    clientOptions
  );

  client.start();
}

function deactivate() {
  if (!client) {
    return undefined;
  }
  return client.stop();
}

module.exports = {
  activate,
  deactivate
};
