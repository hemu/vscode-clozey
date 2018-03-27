import * as vscode from 'vscode';

export class ContentProvider implements vscode.TextDocumentContentProvider {
  
  public provideTextDocumentContent(uri: vscode.Uri): string {
    return `
      <body>
        <div>Hey!!!!!!!! It worked :)</div> 
        <button>Click Me</button>
      </body> 
    `;
  }
}
