import React from 'react'
import Link from 'next/link'
import LayoutD from '../components/Layout'

const Index = () => (
  <LayoutD>
    <Link href="/devices?query={}">
      <a>About Page</a>
    </Link>
    <p>Hello Next.js</p>
  </LayoutD>
)

export default Index
