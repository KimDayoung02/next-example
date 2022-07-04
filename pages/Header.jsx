import Link from 'next/link'
const Header=()=>{
    return (
        <div>
            <Link href='/'>리엑트는 to , next는 href home</Link>
            <Link href='/post'>post</Link>
            <Link href='/about'>about</Link>
        </div>
    )
}
export default Header;