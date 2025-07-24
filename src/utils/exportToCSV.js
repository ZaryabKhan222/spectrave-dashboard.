export function exportToCSV(filename, rows) {
  const csvContent =
    'data:text/csv;charset=utf-8,' +
    rows.map((e) => e.join(',')).join('\n')

  const encodedUri = encodeURI(csvContent)
  const link = document.createElement('a')
  link.setAttribute('href', encodedUri)
  link.setAttribute('download', filename)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
