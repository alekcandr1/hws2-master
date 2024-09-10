import React from 'react'
import downIcon from '../../../../assets/sort-down-svgrepo-com.svg'
import upIcon from '../../../../assets/sort-up-svgrepo-com.svg'
import noneIcon from '../../../../assets/sort-svgrepo-com.svg'

// добавить в проект иконки и импортировать
// const downIcon = '[\\/]'
// const upIcon = '[/\\]'
// const noneIcon = '[--]'
// const downIcon = '../../../../assets/sort-desc-sortable-anchor-table-order-desc-asc-svgrepo-com.svg'
// const upIcon = '../../../../assets/sort-asc-sortable-anchor-table-order-desc-asc-svgrepo-com.svg'
// const noneIcon = '../../../../assets/sort-sortable-anchor-table-order-desc-asc-svgrepo-com.svg'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...

    if (sort === down) {
        return up;
    } else if (sort === up) {
        return '';
    } else {
        return down;
    }
    // return up // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <img
                width={'20px'}
                id={id + '-icon-' + sort}
                src={icon}
            />

            {/*{icon} /!*а это убрать*!/*/}
        </span>
    )
}

export default SuperSort
