export const insert = (input: HTMLInputElement, text: string) => {
  input.focus()
  document.execCommand('insertText', false, text)
}

export const remove = (input: HTMLInputElement) => {
  const idx = input.value.length - 1
  input.focus()
  input.setSelectionRange(idx, idx)
  document.execCommand('forwardDelete')
}

export const rmeoveAll = (input: HTMLInputElement) => {
  input.focus()
  document.execCommand('selectAll')
  document.execCommand('delete')
}