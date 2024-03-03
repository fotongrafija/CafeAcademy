
// ItemExtras.jsx

import React, { useState } from 'react'
import { PRODUCTS } from '../../products'



export const ItemExtras = (props) => {
    
    
    const [extras, setExtras] = useState('')
    const [beans, setBeans] = useState('')
    
    const handleExtrasChange = (e) => {
        setExtras(e.target.value)
    }

    const handleBeansChange = (e) => {
        setBeans(e.target.value)
    }
    console.log(Number(extras))
    console.log(beans)

  return (
    <div className='itemExtras'>
        <label htmlFor="extras">Dodatak:</label>
            <select value={extras} onChange={handleExtrasChange} id="extras" name="extras">
            <option value={0}>-</option> 
            <option value={1}>Mleko</option>
            <option value={2}>Bademovo mleko</option>
            <option value={3}>Sojino mleko</option>
            </select>
        <label htmlFor="beans">Zrno:</label>
            <select value={beans} onChange={handleBeansChange} id="beans" name="beans">
            <option value={4}>Brazil</option>
            <option value={5}>Kuba</option>
            <option value={6}>Etiopija</option>
            </select>
    </div>
  )
}
