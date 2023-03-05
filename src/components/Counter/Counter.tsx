import React, {FC} from 'react';
import s from "./counter.module.css"

type DesktopType = {
    count: number | string
    error: boolean
}

export const Counter: FC<DesktopType> = ({count, error}) => {
    return (

        <span
            className={`${typeof count === 'string' ? (s.string + ' ' + s.overCount) : ''} ${error ? s.overCount : s.counter}`}>{count}</span>

    );
};

// ${error ? s.overCount : s.counter} ${typeof count==="string"}?