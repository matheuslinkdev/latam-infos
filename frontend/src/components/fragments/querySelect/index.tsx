"use client"

import React from 'react'

const QuerySelect = ({handleSelectChange}) => {
  return (
        <select onChange={handleSelectChange} className='bg-gray-700 p-2 rounded-md'>
        <option value="population">Population (highest to lowest)</option>
        <option value="area">Area (largest to smallest)</option>
        <option value="inflation">Inflation (lowest to highest)</option>
        <option value="gdp">Total GDP (highest to lowest)</option>
        <option value="latam_rank">
          Latin America GDP Rank (highest to lowest GDP)
        </option>
        <option value="global_rank">
          Global GDP Rank (highest to lowest GDP)
        </option>
        <option value="">Alphabetical (A-Z)</option>
      </select>
  )
}

export default QuerySelect