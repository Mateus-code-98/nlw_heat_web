import React from 'react';
import { InputBaseProps } from '@material-ui/core';
import {
    forwardRef,
    useCallback,
    useRef,
    useState,
    useImperativeHandle
} from 'react';
import {
    Container,
    InputBase,
    Label
} from './style';

export interface InputRefProps {
    getInputValue: () => string;
}

interface InputProps extends InputBaseProps {
    id: string;
    attr: string;
    lostFocus?: Function;
    getFocus?: Function;
}

const InputMultiline: React.ForwardRefRenderFunction<InputRefProps, InputProps> = ({ id, disabled, attr, value, defaultValue, getFocus = () => { }, lostFocus = () => { }, ...props }, ref) => {
    const [inputFocus, setInputFocus] = useState<boolean>(false)
    const [inputChecked, setInputChecked] = useState<boolean>(!!value || !!defaultValue)
    const inputRef = useRef<HTMLDivElement>(null)

    const getInputValue = useCallback(() => {
        return inputRef.current?.getElementsByTagName('textarea')[0].value ? inputRef.current?.getElementsByTagName('textarea')[0].value : ""
    }, [inputRef])

    useImperativeHandle(ref, () => {
        return {
            getInputValue
        };
    });
    return (
        <Container ref={(ref: any) => ref = ref} isFocused={inputFocus}>
            <div style={{ marginLeft: "0.75rem", width: "100%", display: "flex", flexDirection: "row" }}>
                <InputBase
                    {...props}
                    id={id}
                    ref={inputRef}
                    value={value}
                    disabled={disabled}
                    defaultValue={defaultValue}
                />
            </div>
        </Container>
    )
}

export default forwardRef(InputMultiline);