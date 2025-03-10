import CoffeForm from "./components/CoffeForm"
import Hero from "./components/Hero"
import History from "./components/History"
import Layout from "./components/Layout"
import Stats from "./components/Stats"

function App() {

  const isAuthenticated = false

  const authenticatedContent = (
    <>
      <Stats />
      <History />
    </>
  )

  return (
    <Layout>
      <Hero />
      <CoffeForm />
      {isAuthenticated && (authenticatedContent)}
    </Layout>
  )
}

export default App
