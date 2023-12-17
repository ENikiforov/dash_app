import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import {useSelector,useDispatch} from "react-redux";
import {selectFilters} from "../store/filters/filter-selector";
import {removeFilter,clearFilter} from "../store/filters/filter-actions";

const FilterPanel = () => {
  const dispatch = useDispatch()
  const curFilters = useSelector(selectFilters)
  if (curFilters.length === 0){
    return null
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {curFilters.map(filter =>(
              <Badge
                  key ={filter}
                  variant="clearable"
                  onClear={()=> dispatch(removeFilter(filter))}
              >{filter}
              </Badge>
          ))}

        </Stack>

        <button
            className='link'
            onClick={() => dispatch(clearFilter)}
        >Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};