import { extensionValidityTest, renderEditor } from 'jest-remirror';
import { BulletListExtension } from '@remirror/extension-list';

import { NodeFormattingExtension } from '../';

extensionValidityTest(NodeFormattingExtension);

describe('keybindings', () => {
  const extensions = [new NodeFormattingExtension()];
  const editor = renderEditor(extensions);
  const {
    nodes: { doc },
    attributeNodes: { paragraph: p },
  } = editor;

  it('can increase and decrease indent', () => {
    editor.add(doc(p()('hello')));

    editor.press('Tab');
    expect(editor.state.doc).toEqualRemirrorDocument(doc(p({ nodeIndent: 1 })('hello')));
    editor.press('Tab');
    expect(editor.state.doc).toEqualRemirrorDocument(doc(p({ nodeIndent: 2 })('hello')));

    editor.press('Shift-Tab');
    expect(editor.state.doc).toEqualRemirrorDocument(doc(p({ nodeIndent: 1 })('hello')));
    editor.press('Shift-Tab');
    expect(editor.state.doc).toEqualRemirrorDocument(doc(p({ nodeIndent: 0 })('hello')));
  });
});

describe('keybindings with list extensions', () => {
  const extensions = [new NodeFormattingExtension(), new BulletListExtension()];
  const editor = renderEditor(extensions);
  const {
    nodes: { doc, listItem: li, bulletList: ul },
    attributeNodes: { paragraph: p },
  } = editor;

  it('can increase and decrease indent', () => {
    const doc1 = doc(
      ul(
        //
        li(p()('A')),
        li(p()('B')),
        li(p({ nodeIndent: 0 })('C<cursor>')),
        li(p()('D')),
      ),
    );

    const doc2 = doc(
      ul(
        //
        li(p()('A')),
        li(
          //
          p()('B'),
          ul(
            //
            li(p({ nodeIndent: 0 })('C<cursor>')),
          ),
        ),
        li(p()('D')),
      ),
    );

    const doc3 = doc(
      ul(
        //
        li(p()('A')),
        li(
          //
          p()('B'),
          ul(
            //
            li(p({ nodeIndent: 1 })('C<cursor>')),
          ),
        ),
        li(p()('D')),
      ),
    );

    editor.add(doc1);

    // List indent should has higher priority than node formatting indent.
    editor.press('Tab');
    expect(editor.state.doc).toEqualRemirrorDocument(doc2);
    editor.press('Tab');
    expect(editor.state.doc).toEqualRemirrorDocument(doc3);

    // List dedent should has lower priority than node formatting dedent.
    editor.press('Shift-Tab');
    expect(editor.state.doc).toEqualRemirrorDocument(doc2);
    editor.press('Shift-Tab');
    expect(editor.state.doc).toEqualRemirrorDocument(doc1);
  });
});
