/** @jsx h */

import h from '../../../helpers/h'

export default function(editor) {
  editor.moveToEnd()
}

export const input = (
  <value>
    <document>
      <paragraph>
        on<cursor />e
      </paragraph>
    </document>
  </value>
)

export const output = (
  <value>
    <document>
      <paragraph>
        on<cursor />e
      </paragraph>
    </document>
  </value>
)
