import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '../modules/dashboard'
import { ItemDetails } from '../modules/ItemDetails'
import { Search } from '../modules/Search'

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />}>
        <Route path='items' element={<Search />} />
        <Route path='items/:productId' element={<ItemDetails />} />
        <Route path='*' element={<h1>404 not found</h1>} />
      </Route>
    </Routes>
  )
}
