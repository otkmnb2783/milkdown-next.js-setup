import React, { useState, useEffect, RefObject } from 'react'

import { defaultValueCtx, Editor, rootCtx } from '@milkdown/core'
import { nord } from '@milkdown/theme-nord'
import { ReactEditor, useEditor } from '@milkdown/react'
import { commonmark } from '@milkdown/preset-commonmark'
import { emoji } from '@milkdown/plugin-emoji'

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
        .use(commonmark)
    },
  )
  return (
    <ReactEditor editor={editor} />
  )
}

export default MilkdownEditor
