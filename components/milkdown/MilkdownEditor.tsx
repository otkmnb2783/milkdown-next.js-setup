import React, { useState, useEffect, RefObject } from 'react'

import { defaultValueCtx, Editor, rootCtx } from '@milkdown/core'
import { nord } from '@milkdown/theme-nord'
import { ReactEditor, useEditor } from '@milkdown/react'
import { gfm } from '@milkdown/preset-gfm'
import { emoji } from '@milkdown/plugin-emoji'
import { indent, indentPlugin } from '@milkdown/plugin-indent'
import { menu } from '@milkdown/plugin-menu'
import { clipboard } from '@milkdown/plugin-clipboard'
import { slash } from '@milkdown/plugin-slash'
import { history } from '@milkdown/plugin-history'
import { cursor } from '@milkdown/plugin-cursor'

const MilkdownEditor = ({
  content,
}: { content: string }) => {
  const editor = useEditor(
    (root, renderReact) => {
      return Editor.make()
        .config((ctx) => {
          ctx.set(rootCtx, root)
          ctx.set(defaultValueCtx, content)
        })
        .use(nord)
        .use(emoji)
        .use(gfm)
        .use(menu)
        .use(clipboard)
        .use(slash)
        .use(history)
        .use(cursor)
        .use(
          indent.configure(indentPlugin, {
            type: 'space',
            size: 2,
          }),
        )
    },
  )
  return (
    <ReactEditor editor={editor} />
  )
}

export default MilkdownEditor
