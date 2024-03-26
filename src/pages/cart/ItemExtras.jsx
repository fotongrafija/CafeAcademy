
// ItemExtras.jsx

import React, { useState } from 'react'
import { PRODUCTS } from '../../products'



export const ItemExtras = () => {
    
    

    const [extras, setExtras] = useState('')
    const [beans, setBeans] = useState('')

    const handleExtrasChange = (e) => {
        setExtras(e.target.value)
    }

    const handleBeansChange = (e) => {
        setBeans(e.target.value)
    }
    

  return (
    <div className='itemExtras'>
        <label htmlFor="extras">Dodatak:</label>
            <select value={extras} onChange={handleExtrasChange} id="extras" name="extras">
            <option value={0}></option> 
            <option value={'mleko'}>Mleko</option>
            <option value={'bademovo'}>Bademovo</option>
            <option value={'sojino'}>Sojino</option>
            </select>
        <label htmlFor="beans">Zrno:</label>
            <select value={beans} onChange={handleBeansChange} id="beans" name="beans">
            <option value={'BRAZIL'}>Brazil</option>
            <option value={'KUBA'}>Kuba</option>
            <option value={'ETIOPIJA'}>Etiopija</option>
            </select>
    </div>
  )
}
