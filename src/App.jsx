import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RouterPrincipal from './router/routerPrincipal'
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {
  
  const client = new QueryClient();
  return (
      <QueryClientProvider client={client} >
            <RouterPrincipal/>
      </QueryClientProvider>
    
  )
}

export default App
