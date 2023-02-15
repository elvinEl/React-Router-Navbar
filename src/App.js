import React from 'react'
import { Menu } from 'antd'
import { Route, Routes, useNavigate } from 'react-router-dom'
import {
  DashboardOutlined,
  HomeOutlined,
  PoweroffOutlined,
  UnorderedListOutlined,
  UserOutlined
} from '@ant-design/icons'

const App = () => {
  return (
    <div className='flex flex-col flex-1 h-screen'>
      <Header />
      <div className='flex flex-row flex-1'>
        <SideMenu />
        <Content />
      </div>
      <Footer />
    </div>
  )
}
function Header() {
  return <div className='h-16 bg-blue-300 flex justify-center items-center text-white'>Header</div>
}
function Footer() {
  return <div className='h-16 bg-blue-300 flex justify-center items-center text-white'>Footer</div>
}
function SideMenu() {
  const navigate = useNavigate()

  return (<div className='flex flex-row'>
    <Menu
      onClick={({ key }) => {
        if (key === 'signout') {
          // Hamsinnan cixis
        }
        else {
          navigate(key)
        }
      }}
      items={[{ label: "Home", key: '/', icon: <HomeOutlined /> },
      { label: 'Dashboard', key: '/dashboard', icon: <DashboardOutlined /> },
      {
        label: 'User List', key: '/userList', icon: <UnorderedListOutlined />,
        children: [{
          label: 'Active Users', key: '/activeUsers'
        },
        { label: 'Disabled Users', key: '/disabledUsers' },
]
      },
      { label: 'Profil', key: '/profile', icon: <UserOutlined /> },
      { label: 'Signout', key: 'signout', icon: <PoweroffOutlined />, danger: true }
      ]}></Menu>
  </div>)
}

function Home() {
  return <div>Home component</div>
}

function Content() {
  return <div>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/dashboard' element={<div>Dashboard</div>}></Route>
      <Route path='/activeUsers' element={<div>Active User List</div>}></Route>
      <Route path='/disabledUsers' element={<div>Disabled User List</div>}></Route>
      <Route path='/profile' element={<div>Profile</div>}></Route>
    </Routes>
  </div>
}
  
export default App