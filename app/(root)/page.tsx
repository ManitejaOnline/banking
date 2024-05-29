import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const loggedIn = {firstName: 'Mani', lastName: 'P', email: 'mani@gmail.com'};
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                type= "greeting"
                title = "Welcome"
                user= {loggedIn?.firstName || 'Guest'}
                subtext ="Acess and manage your account and transcations."
                />
                <TotalBalanceBox
                accounts = {[]}
                totalBanks = {1}
                totalCurrentBalance ={1250.4}
                />

            </header>

            RECENT TRANSCATIONS
        </div>
    <RightSidebar
    user={loggedIn}
    transactions={[]}
    banks ={[{currentBalance: 123.50}, {currentBalance:12.1}]} 
    />
    </section>
  )
}

export default Home