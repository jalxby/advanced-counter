import {Dispatch, useEffect, useState} from "react";

export type StorageType = {
    startValue: number
    maxValue: number
}

function getValue(key: string, initSettings: StorageType) {
    let existValue = localStorage.getItem(key)
    if (existValue) {
        return JSON.parse(existValue)
    }
    return initSettings
}

export const useLocalStorage = (initSettings: StorageType): [StorageType, Dispatch<StorageType>] => {
    const [value, setValue] = useState<StorageType>(getValue('settings', initSettings))
    useEffect(() => {
        localStorage.setItem('settings', JSON.stringify(value))
    }, [value])
    return [value, setValue]
}

// import {useEffect, useState} from "react";
//
// export type StorageType = {
//     startValue: number
//     maxValue: number
// }
//
// export const useLocalStorage = (initSettings:StorageType) => {
// const settings = {
//     startValue: initSettings.startValue,
//     maxValue: initSettings.maxValue
// }

// function getValue(key: string) {
//     let existValue = localStorage.getItem(key)
//     if (existValue) {
//         return JSON.parse(existValue)
//     }
//     return settings
// }

// console.log('settings: ', getValue('settings'))

// const [value, setValue] = useState<StorageType>(getValue('settings'))
//
// // useEffect(() => {
// //     localStorage.setItem('settings', JSON.stringify(value))
// // }, [value])
//
// return [value, setValue]
// }









































