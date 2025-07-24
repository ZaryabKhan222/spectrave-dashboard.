import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-50 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-yellow-600 mb-4">
        Welcome to Spectrave Solar Dashboard
      </h1>
      <p className="text-lg text-gray-700 mb-6 max-w-xl">
        Monitor solar plant performance, spot anomalies, and generate reports with our interactive dashboard.
      </p>
      <Button
        variant="contained"
        color="warning"
        size="large"
        onClick={() => navigate('/dashboard')}
        className="rounded-lg px-6 py-2"
      >
        Go to Dashboard
      </Button>
    </div>
  )
}

export default Home
