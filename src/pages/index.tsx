import Head from 'next/head'
import Image from 'next/image'
import { Router, useRouter } from 'next/router'
import React, { ReactElement, useEffect } from 'react'
import CardBox from '../components/CardBox'
import LayoutGuest from '../layouts/Guest'
import SectionMain from '../components/SectionMain'
import { StyleKey } from '../interfaces'
import { gradientBgPurplePink } from '../colors'
import { appTitle } from '../config'
import { useAppDispatch } from '../stores/hooks'
import { setDarkMode, setStyle } from '../stores/styleSlice'
import LayoutAuthenticated from '../layouts/Authenticated'
import Dashboard from './dashboard'
import { useSession, signIn, signOut } from "next-auth/react"


const Home = () => {
  const dispatch = useAppDispatch()

  dispatch(setDarkMode(true))

  // const styles: StyleKey[] = ['white', 'basic']

  // const router = useRouter()

  // const handleStylePick = (e: React.MouseEvent, style: StyleKey) => {
  //   e.preventDefault()

  //   dispatch(setStyle(style))

  //   router.push('/dashboard')
  // }
  const router = useRouter();
  const { status , data: session } = useSession()
  console.log(status)

  useEffect(() => {
    if(status === "unauthenticated") router.push('/login')
  }, [status])

  return (
    <>
      <Head>
        <title>{appTitle}</title>
      </Head>
      <Dashboard />
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
      <LayoutAuthenticated>
        {page}
      </LayoutAuthenticated>
    )
}

export default Home
