import {FilterTypes} from '../../constants';
import React from 'react';
import Link from './link.js';
import './style.css'
// 被导出的filter视图
const Filters =()=>{
    return (
        <p className="filters">
            <Link filter={FilterTypes.ALL} >{FilterTypes.ALL} </Link>
            <Link filter={FilterTypes.COMPLETED} >{FilterTypes.COMPLETED} </Link>
            <Link filter={FilterTypes.UNCONPLETED} >{FilterTypes.UNCONPLETED} </Link>
        </p>
    )
}

export default Filters;