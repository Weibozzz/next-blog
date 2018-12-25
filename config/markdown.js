/** markdownConfig
 * 文档 https://marked.js.org/#/USING_ADVANCED.md
 * @type {{options: {gfm: boolean, tables: boolean, breaks: boolean, pedantic: boolean, smartLists: boolean, xhtml: boolean, smartypants: boolean, sanitize: (function(*): boolean)}, config: {tabReplace: string, classPrefix: string, languages: string[]}}}
 */
export const markdownConfig = {
  options:{
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    smartLists: true,
    xhtml:true,
    // If true, use "smart" typographic punctuation for things like quotes and dashes.
    smartypants: false,
    // If true, sanitize the HTML passed into markdownString with the sanitizer function.
    sanitize: true
  },
  config:{
    tabReplace: '  ',
    classPrefix: 'hljs-',
    languages: ['CSS', 'HTML, XML', 'JavaScript', 'PHP', 'Python', 'Stylus', 'TypeScript', 'Markdown']
  }
}
