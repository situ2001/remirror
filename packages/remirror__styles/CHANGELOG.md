# @remirror/styles

## 1.1.3

> 2022-02-09

### Patch Changes

- Fix Ctrl+Click making the selected text invisible on Windows

## 1.1.2

> 2021-08-30

### Patch Changes

- Reset some CSS on IMG separator nodes.

## 1.1.1

> 2021-08-29

### Patch Changes

- Override the default browser style about the nested list, so that users can tell the different between two adjacent nested lists.

## 1.1.0

> 2021-08-10

### Minor Changes

- [#1031](https://github.com/remirror/remirror/pull/1031) [`fccb1a68c`](https://github.com/remirror/remirror/commit/fccb1a68c15c8f1c56c5c2561e0573b9932e8cbb) Thanks [@ocavue](https://github.com/ocavue)! - Add styles for `@remirror/extension-file`.

## 1.0.1

> 2021-07-21

### Patch Changes

- [#1010](https://github.com/remirror/remirror/pull/1010) [`0464a6810`](https://github.com/remirror/remirror/commit/0464a68101bc4f64fe31a87dbba937008e17358b) Thanks [@ifiokjr](https://github.com/ifiokjr)! - Add support for `react@18` in peer dependencies.

## 1.0.0

> 2021-07-17

##### Major Changes

For information on what's changed in this release see the [`v1.0.0` release](https://github.com/remirror/remirror/releases/tag/v1.0.0).

### Minor Changes

- [#980](https://github.com/remirror/remirror/pull/980) [`3e0925f1d`](https://github.com/remirror/remirror/commit/3e0925f1dc38096dd66f42a808177889cac01418) Thanks [@Gaaaga](https://github.com/Gaaaga)! - - Added configurable emoji to the start of the `CalloutExtension`.
  - Added a new type 'blank' to the `CalloutExtension`.

* [#877](https://github.com/remirror/remirror/pull/877) [`033144c84`](https://github.com/remirror/remirror/commit/033144c849b861587a28d1de94b314e02571264a) Thanks [@ocavue](https://github.com/ocavue)! - Add new style for `@remirror/extension-react-tables`.

- [#991](https://github.com/remirror/remirror/pull/991) [`5befadd0d`](https://github.com/remirror/remirror/commit/5befadd0d490cc11e4d16a66d66356ae0a8ed98c) Thanks [@Gaaaga](https://github.com/Gaaaga)! - Improved the behavior of setting emoji in callout.

* [#920](https://github.com/remirror/remirror/pull/920) [`9c496262b`](https://github.com/remirror/remirror/commit/9c496262bd09ff21f33de5ae8e5b6b51709021d0) Thanks [@ocavue](https://github.com/ocavue)! - Implement list item with checkbox.

### Patch Changes

- [#912](https://github.com/remirror/remirror/pull/912) [`9096de83f`](https://github.com/remirror/remirror/commit/9096de83f50e6c14cde9df920521b274d98e6d87) Thanks [@ocavue](https://github.com/ocavue)! - Remove the `margin-top` style for first chilld.

* [#973](https://github.com/remirror/remirror/pull/973) [`5f4ea1f1e`](https://github.com/remirror/remirror/commit/5f4ea1f1e245b10f1dc1bfc7a3245cdcf05cf012) Thanks [@ifiokjr](https://github.com/ifiokjr)! - Fix the styles copied from `prosemirror-view` for hiding the `text-cursor` when the `GapCursor` selection is active.

- [#706](https://github.com/remirror/remirror/pull/706) [`28b81a858`](https://github.com/remirror/remirror/commit/28b81a8580670c4ebc06ad04db088a4b684237bf) Thanks [@ifiokjr](https://github.com/ifiokjr)! - Fix `GapCursorExtension` styles

## 1.0.0-next.60

> 2020-12-17

### Patch Changes

- Forced update in pre-release mode.

## 1.0.0-next.59

> 2020-12-12

### Patch Changes

- Forced update in pre-release mode.

## 1.0.0-next.58

> 2020-11-29

### Patch Changes

- Forced update in pre-release mode.

## 1.0.0-next.57

> 2020-11-25

### Patch Changes

- Forced update in pre-release mode.

## 1.0.0-next.56

> 2020-11-24

### Patch Changes

- Forced update in pre-release mode.

## 1.0.0-next.55

> 2020-11-20

### Patch Changes

- Forced update in pre-release mode.

## 1.0.0-next.54

> 2020-11-19

### Patch Changes

- Forced update in pre-release mode.

## 1.0.0-next.53

> 2020-11-12

### Patch Changes

- Forced update in pre-release mode.

## 1.0.0-next.52

> 2020-11-06

### Minor Changes

- [`bdaa6af7`](https://github.com/remirror/remirror/commit/bdaa6af7d4daf365bd13c491420ce3e04add571e) [#767](https://github.com/remirror/remirror/pull/767) Thanks [@whawker](https://github.com/whawker)! - 🎉 New extension `@remirror/extension-callout`

  This extension adds support for a new callout node.

  These can be used to add `info`, `warning`, `error` or `success` banners to your document.

  The default callout type is `info`, but this can be changed by using the `defaultType` option of `CalloutExtension`.

  ```ts
  import { RemirrorManager } from 'remirror/core';
  import { CalloutExtension } from 'remirror/extension/callout';
  import { CorePreset } from 'remirror/preset/core';

  // Create the callout extension
  const calloutExtension = new CalloutExtension();
  const corePreset = new CorePreset();

  // Create the Editor Manager with the callout extension passed through.
  const manager = RemirrorManager.create([calloutExtension, corePreset]);

  // Pass the dom element to the editor. If you are using `@remirror/react` or
  // other framework wrappers then this is handled for you.
  const element = document.createElement('div');
  document.body.append(element);

  // Add the view to the editor manager.
  manager.addView(element);

  // Wrap with an error callout at the current selection
  manager.store.commands.toggleCallout({ type: 'error' });
  ```

## 1.0.0-next.51

> 2020-10-27

### Patch Changes

- Forced update in pre-release mode.

## 1.0.0-next.50

> 2020-10-15

### Patch Changes

- [`bd8ac67d`](https://github.com/remirror/remirror/commit/bd8ac67da57c85e67f84cf41e04900f99f4f0455) Thanks [@ifiokjr](https://github.com/ifiokjr)! - Upgrade package dependencies.

## 1.0.0-next.49

> 2020-10-10

### Patch Changes

- Forced update in pre-release mode.

## 1.0.0-next.42

> 2020-09-26

### Patch Changes

- [`d33f43bf`](https://github.com/remirror/remirror/commit/d33f43bfcb8d7f578f05434b42c938b4132b544a) [#717](https://github.com/remirror/remirror/pull/717) Thanks [@ifiokjr](https://github.com/ifiokjr)! - Improve type inference for `@remirror/styles/emotion`, `@remirror/styles/dom` and `@remirror/styles/styled-components`.

## 1.0.0-next.40

> 2020-09-24

### Minor Changes

- [`07aab2e8`](https://github.com/remirror/remirror/commit/07aab2e85f79eab332a3f561274e97d9746be65d) [#700](https://github.com/remirror/remirror/pull/700) Thanks [@ifiokjr](https://github.com/ifiokjr)! - Improve style output and fix CSS output issues.

### Patch Changes

- [`fd694d61`](https://github.com/remirror/remirror/commit/fd694d610e12bef9e43682074f71ef3097f6ea6e) [#700](https://github.com/remirror/remirror/pull/700) Thanks [@ifiokjr](https://github.com/ifiokjr)! - Upgrade external dependencies.

## 1.0.0-next.34

> 2020-09-10

### Patch Changes

- [`db7165f1`](https://github.com/remirror/remirror/commit/db7165f15c3161e1e51faae4f85571b4319c61be) [#665](https://github.com/remirror/remirror/pull/665) Thanks [@ifiokjr](https://github.com/ifiokjr)! - Refactor `RemirrorManager` and rename `EditorWrapper` to `Framework`.

  - New `BaseFramework` interface which is implemented by the abstract `Framework` class and used by the `RemirrorManager` to keep hold of an instance of the `Framework`.
  - New `attachFramework` method on the manager.
  - Update `doc` property to `document` throughout the codebase. `doc` could be confused with the `doc` node or the actual document. Now it's clearer. Any time `doc` is mentioned in the code base it refers to the `ProseMirror` node. Any time `document` is mentioned it is referring to the DOM.
  - Remove `SocialEditorWrapperComponent` export from `@remirror/react-social`.

## 1.0.0-next.32

> 2020-09-05

### Patch Changes

- [`5786901c`](https://github.com/remirror/remirror/commit/5786901c58d717c0921415f7bfd1f480c39a44f3) [#645](https://github.com/remirror/remirror/pull/645) Thanks [@ifiokjr](https://github.com/ifiokjr)! - Fix broken styles for firefox as raised on **discord**.

## 1.0.0-next.27

> 2020-08-25

### Minor Changes

- a7436f03: 🎉 Add support for consuming styles with `styled-components` and `emotion` as requested by a sponsor - [#550](https://github.com/remirror/remirror/issues/550).

  💥 BREAKING CHANGE - Remove exports from `@remirror/theme`.

  - ❌ `createAtomClasses`
  - ❌ `defaultRemirrorAtoms`

## 1.0.0-next.15

> 2020-07-31

### Major Changes

- 0ff4fd5c: Default to inserting a new paragraph node after the `HorizontalRuleExtension`.

  BREAKING: 💥 Rename `horizonalRule` command to `insertHorizontalRule`.

  Add a new option `insertionNode` to the `HorizontalRuleExtension` which sets the default node to automatically append after insertion.

  Update the css styles for the default `hr` tag.

  Closes #417

## 1.0.0-next.4

> 2020-07-16

### Patch Changes

- 5d5970ae: Update repository and website field to point to HEAD rather than a specific branch.

## 1.0.0-next.1

> 2020-07-05

### Patch Changes

- Fix missing dist files from previous publish.

## 1.0.0-next.0

> 2020-07-05

### Major Changes

- The whole API for remirror has completely changed. These pre-release versions are a breaking change across all packages. The best way to know what's changed is to read the documentaion on the new documentation site `https://remirror.io`.
