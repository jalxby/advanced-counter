import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {Button} from './components/Button/Button';
import {Counter} from './components/Counter/Counter';
import {Settings} from './components/Settings/Settings';
import {Stand} from "./components/Stand/Stand";
import {useLocalStorage} from "./hooks/useLocalStorage";

export function App() {
    const init = {
        startValue: 0,
        maxValue: 5
    }
    const [settings, setSettings] = useLocalStorage(init)
    const [count, setCount] = useState(settings.startValue)
    const [changeValueSettings, setChangeValueSettings] = useState(settings)
    const [error, setError] = useState<string>('')
    useEffect(() => setCount(settings.startValue), [settings])

    const increment = () => {
        count !== settings.maxValue && setCount(count + 1)
    }

    const reset = () => setCount(settings.startValue)
    const isDisabledInc = count === settings.maxValue
    const isDisabledReset = count === settings.startValue

    const getSettings = (startValue: number, maxValue: number) => {
        setChangeValueSettings({startValue, maxValue})
        setError('enter values and press "set"')

    }

    const setSettingsCallback = () => {
        if (changeValueSettings.startValue < 0 || changeValueSettings.maxValue < 0) {
            setError('values can\'t be negative!')
        } else if (changeValueSettings.startValue === changeValueSettings.maxValue) {
            setError('values can\'t be equal!')
        } else if (changeValueSettings.startValue > changeValueSettings.maxValue) {
            setError('startValue can\'t be more than maxValue')
        } else {
            setSettings(changeValueSettings)
            setError('')
        }
    }

    return (
        <span className={s.wrapper}>
            <Stand>
                <Settings
                    getSettings={getSettings}
                    changeValueSettings={changeValueSettings}
                />
                    <Button title={'set'} callback={setSettingsCallback} disabled={!error}/>
            </Stand>
                <Stand>
                    <Counter count={error ? error : count} error={isDisabledInc}/>
                    <Button callback={increment} title={'inc'} disabled={error ? true : isDisabledInc}/>
                    <Button callback={reset} title={'reset'} disabled={error ? true : isDisabledReset}/>
            </Stand>
        </span>
    );
}

