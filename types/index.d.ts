// Tell TS that your scoped paths use pdfmake's types
declare module '@pareshgami/pdfmake/build/pdfmake' {
  import pdfMake from 'pdfmake/build/pdfmake';
  export default pdfMake;
}

declare module '@pareshgami/pdfmake/build/vfs_fonts' {
  import vfsFonts from 'pdfmake/build/vfs_fonts';
  export default vfsFonts;
}
