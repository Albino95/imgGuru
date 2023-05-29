"use client";

import Link from "next/link"
import Image from "next/image";
import { useState, useEffect } from "react";

// To be removed if I do not comlete Login in time
import { signIn, signOut, useSession, getProviders } from "next-auth/react"


const Nav = () => {
  // To be handeled with Redux
  const [providers, setProviders] = useState(null)
  const [toggleDropdown, setToggleDropdown] = useState(false) 
  
  const {data: session} = useSession();
  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders()
      setProviders(response)
    }
    setUpProviders()
  }, [])
  // **** To be removed if the login is not completed ****
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className="flex gap-2 flex-center">
        <Image 
        src="/assets/images/logo.svg"
        alt="image_guru logo"
        className="object-contain"
        width={30}
        height={30}
        />
        <p className="logo_text">Image Guru</p>
      </Link>

      {/* Desktop */}
      <div className="sm:flex hidden">
        { session?.user ? 
        <div className="flex gap-3 md:gap-5" >
          <Link href="/create-post" className="black_btn" >
            Create a Post
          </Link>
          <button className="outline_btn" onClick={signOut}>
            Sign Out
          </button>

          <Link href="/profile">
            <Image 
              src={session.user.image}
              width={35}
              height={35}
              alt="Profile"              
              />
          </Link>
        </div>
        :
        <>
          {providers && 
            Object.values(providers).map((provider) => (
              <button
              type='button'
              key={provider.name}
              onClick={() => signIn(provider.id)}
              className="black_btn"
              >
                Sign In
              </button>
            ))
          }
        </>}
      </div>

      {/* MOBILE */}

      <div className="sm:hidden flex relative">
          {session?.user ?

          (<div className="flex">
            <Image 
              src={session?.user.image}
              width={35}
              height={35}
              alt="Profile"
              onClick={() => setToggleDropdown((previous) => !previous)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                href="/profile" 
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                href="/upload-image" 
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
                >
                  Upload an Image
                </Link>
                <button
                type="button"
                onClick={() => {
                  setToggleDropdown(false)
                  signOut() }}
                  className="mt-5 w-full black_btn"
                >
                  Log Out
                </button>
              </div>
            )}
          </div> ) :

          (<>
            {providers && 
              Object.values(providers).map((provider) => (
                <button
                type='button'
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>)}

      </div>
    </nav>
  )
}

export default Nav