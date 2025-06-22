
const makeScreenReaderOnly = () => ({
  'position': 'absolute',
  'width': '1px',
  'height': '1px',
  'padding': '0',
  'border': '0',
  'margin': '-1px',
  'white-space': 'nowrap',
  'overflow': 'hidden',
  'clip-path': 'inset(100%)',
})

export const RULES_DISPLAY_UNOCSS = {
  // -- Display
  'block': () => ({ display: 'block' }),
  'inline-block': () => ({ display: 'inline-block' }),
  'inline': () => ({ display: 'inline' }),
  'inline-flex': () => ({ display: 'inline-flex' }),
  'table': () => ({ display: 'table' }),
  'inline-table': () => ({ display: 'inline-table' }),
  'table-caption': () => ({ display: 'table-caption' }),
  'table-cell': () => ({ display: 'table-cell' }),
  'table-column': () => ({ display: 'table-column' }),
  'table-column-group': () => ({ display: 'table-column-group' }),
  'table-footer-group': () => ({ display: 'table-footer-group' }),
  'table-header-group': () => ({ display: 'table-header-group' }),
  'table-row-group': () => ({ display: 'table-row-group' }),
  'table-row': () => ({ display: 'table-row' }),
  'flow-root': () => ({ display: 'flow-root' }),
  'contents': () => ({ display: 'contents' }),
  'list-item': () => ({ display: 'list-item' }),

  // Visibility
  'none': () => ({ display: 'none' }),
  'hidden': () => ({ visibility: 'hidden' }),
  'invisible': () => ({ visibility: 'hidden' }),

  'blind': () => makeScreenReaderOnly(),
  'sr-only': () => makeScreenReaderOnly(),
  'gone': () => makeScreenReaderOnly(),

  // OverFlow
  'clip': () => ({ overflow: 'hidden' }),
}
