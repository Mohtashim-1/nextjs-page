import Link from 'next/link'
export default function Home({ params }: { params: { product: string } }) {
  return (
    <>
      <h1>Home</h1>
      <Link href={'/about'}>About</Link>
      <div>the product name is : {params.product}</div>
    </>
  )
}
