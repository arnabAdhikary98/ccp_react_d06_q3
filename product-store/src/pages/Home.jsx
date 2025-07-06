import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortOrder, setSortOrder] = useState('')

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products)
        setFilteredProducts(data.products)
        const cats = ['all', ...new Set(data.products.map(p => p.category))]
        setCategories(cats)
      })
  }, [])

  useEffect(() => {
    let updated = [...products]
    if (selectedCategory !== 'all') {
      updated = updated.filter(p => p.category === selectedCategory)
    }
    if (sortOrder === 'lowToHigh') {
      updated.sort((a, b) => a.price - b.price)
    } else if (sortOrder === 'highToLow') {
      updated.sort((a, b) => b.price - a.price)
    }
    setFilteredProducts(updated)
  }, [selectedCategory, sortOrder, products])

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Product Store</h2>

      <div style={{ marginBottom: '1rem' }}>
        <label>Category: </label>
        <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
          {categories.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <label style={{ marginLeft: '1rem' }}>Sort by price: </label>
        <select value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
          <option value="">None</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {filteredProducts.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '1rem', width: '200px' }}>
            <img src={product.thumbnail} alt={product.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <h4>{product.title}</h4>
            <p>${product.price}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
