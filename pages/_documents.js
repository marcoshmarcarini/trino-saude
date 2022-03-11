import Document, { Html, Head, Main } from 'next/document'



export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head/>
        <body className='bg-orange-600 dark:bg-purple-800'>
          <Main />
        </body>
      </Html>
    )
  }
}