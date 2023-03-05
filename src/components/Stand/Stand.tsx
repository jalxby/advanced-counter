import React, {ReactNode} from 'react';
import s from "./stand.module.css";

type PropsType = {
    // monitorChild: React.ReactNode
    children: ReactNode[]
}

export const Stand = ({children}: PropsType) => {
    return (
        <span className={s.stand}>
            <div className={s.desktop}>
                {children[0]}
            </div>
            <div className={s.buttons}>
                {children[1]}
                {children[2]}
                </div>
        </span>
    );
};

