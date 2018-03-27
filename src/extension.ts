'use strict';
import * as vscode from 'vscode';

import { ContentProvider } from './provider';

export function activate(context: vscode.ExtensionContext) {
  let clozeDeleteCmd = vscode.commands.registerCommand(
    'extension.clozeDelete',
    () => {
      const editor = vscode.window.activeTextEditor;
      if (editor == null) {
        return; // No open text editor
      }

      editor.edit((editBuilder) => {
        const selections = editor.selections;
        if (selections && selections.length > 0) {
          const selection: vscode.Selection = selections[0];
          console.log(selection);
          editBuilder.replace(selection, '[...]');
          // context.workspaceState.update('testKey', 'Did this work?');
          // console.log(context.workspaceState.get('testKey'));
        }
      });
    },
  );

  // let clozeListCmd = vscode.commands.registerCommand(
  //   'extension.clozeList',
  //   () => {
  //     return vscode.commands
  //       .executeCommand(
  //         'vscode.previewHtml',
  //         previewUri,
  //         vscode.ViewColumn.Two,
  //         'Cloze List',
  //       )
  //       .then(
  //         (success) => {},
  //         (reason) => {
  //           vscode.window.showErrorMessage(reason);
  //         },
  //       );
  //   },
  // );

  // let previewUri = vscode.Uri.parse('test-preview://authority/test-preview');
  // let provider = new ContentProvider();
  // let registration = vscode.workspace.registerTextDocumentContentProvider(
  //   'test-preview',
  //   provider,
  // );

  // const disposables = [clozeDeleteCmd, registration, clozeListCmd];
  const disposables = [clozeDeleteCmd];
  context.subscriptions.push(...disposables);
}

// this method is called when your extension is deactivated
export function deactivate() {}
