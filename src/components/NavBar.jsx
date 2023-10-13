import Link from "next/link";


export const NavBar = () => {
  return (
    <header className="flex justify-between p-6">
        <Link href='/news-web'>News Web</Link>
        <Link href='/news-web/about'>About</Link>
    </header>
  )
}