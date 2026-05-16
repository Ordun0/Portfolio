import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Practices } from './components/Practices'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Practices />
      </main>
    </div>
  )
}

export default App