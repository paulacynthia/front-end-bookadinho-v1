import axios from 'axios'
import { useEffect, useState } from 'react'
import Home from '../../pages/home'

export default function InputPattern() {
  const [query, setQuery] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:4000/change_book/${query}`)
      setData(res.data)
    }
    if (query.length === 0 || query.length > 2) fetchData()
  }, [query])

  return (
    <div className="app">
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
    </div>
  )
}
