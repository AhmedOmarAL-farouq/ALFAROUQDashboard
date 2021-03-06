import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>ALFAROUQ | Dashboard</title>
      </Head>
      <section className={styles.dashboard_home}>
        Hello From Home
      </section>
    </>
  )
}

/*
  ==> Dashboard For Tech Company Which Make Websites
    => Pages
      // Dashboard
      // Projects
      // Our Cutomers
      // Profile
      // 404 Page
      // Log In

    => Components
        * Header
          >>> Bg Image
          >>> Search Box
          >>> Breadcrumb
          >>> Date
        * Side Navbar
        * Footer
      // Dashboard Page
        ** Cart States
            >>> Total Projects
            >>> New Clients
            >>> Sales
            >>> Month Projects
        ** Performance Chart
            && Bar Chart With Hover Effect To Show Details
            >>> Horizontal Line --> Months
            >>> Vertical Line   --> Num Of Sales
        ** Projects Chart
            && Line Chart With Hover Effect To Show Details
            >>> Horizontal Line --> Months
            >>> Vertical Line   --> Num Of Projects
        ** Table Of Workers
            >>> Name
            >>> Position
            >>> Age
            >>> Start Date
            >>> Salary
            >>> Status
            >>> Action
              --> Delete Or Change Details
          * Add New
        ** Table Of Current Projects
            >>> Project Name
            >>> Who Works On It
            >>> Start Date
            >>> Deadline
            >>> Price
            >>> Action
              --> Delete Or Change Details
          * Add New
      // Projects Page
        * Header & Date
        * Table Of All Projects
          >>> Project Name
          >>> Client Name
          >>> Price
          >>> DeadLine
          >>> Status
        * Add New
      // Our Cutomers Page
        * Header
        * Table
          >>> Client Name
          >>> Num Of Projects
          >>> Total Price
          >>> Paid
          >>> indebtedness
        * Add New
      // Profile Page
        * Header
        * Card Details
          >>> Edit Details
          >>> User Name
          >>> Email
          >>> Phone Number
          >>> Phone Number For Money Transfers
          >>> Address
          >>> City
          >>> Country
          >>> Postal Code
          >>> Target
        * Slide Card
          >>> Image
          >>> Position
          >>> Num Of Projects
          >>> Salary
          >>> Start Date
          >>> Status --> Full Time
      // 404 Page 
        * 404 Page Is Not Found With  Electric Effect & Clip Property
      // Log In Pags
        * Form
          >>> Name 
          >>> Email
          >>> Password
        * Text --> If You do not have an account yet. You have to call support
*/