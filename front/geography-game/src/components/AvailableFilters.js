import React from 'react'
import FilterLink from '../containers/FilterLink'

const AvailableFilters = () => (
    <p className="available-filters">
        <FilterLink filter="SHOW_ALL">
            All
        </FilterLink>
        <FilterLink filter="SHOW_ACTIVE">
            Active
        </FilterLink>
        <FilterLink filter="SHOW_COMPLETED">
            Marked
        </FilterLink>
    </p>
)

export default AvailableFilters
