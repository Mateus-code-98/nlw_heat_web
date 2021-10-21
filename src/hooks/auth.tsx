import React, { createContext, useCallback, useContext, useState } from 'react';
import { api } from './../services/api';

interface UserProps {
    id: string;
    name: string;
    avatar_url: string;
    github_id: number;
    login: string;
}

interface DataProps {
    token: string;
    user: UserProps;
}

interface credentialsProps {
    code: string;
}

interface AuthContextData {
    user: UserProps;
    signIn(credentials: credentialsProps): Promise<void>;
    signOut(): void;
    loadingSignIn: boolean;
    setLoadingSignIn(value: boolean): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
    const [loadingSignIn, setLoadingSignIn] = useState<boolean>(false)

    const [data, setData] = useState<DataProps>(() => {
        const token = localStorage.getItem('@NLW_HEAT:token')
        const user = localStorage.getItem('@NLW_HEAT:user')
        if (token && user) return { token, user: JSON.parse(user) }
        return {} as DataProps
    })

    const signIn = useCallback(async ({ code }: credentialsProps) => {
        try {
            setLoadingSignIn(true)
            const res = await api.post<DataProps>('/authenticate', { code })
            const { token, user } = res.data
            localStorage.setItem('@NLW_HEAT:token', token)
            localStorage.setItem('@NLW_HEAT:user', JSON.stringify(user))
            setData({ token, user })
            setLoadingSignIn(false)
        } catch (err) {
            setLoadingSignIn(false)
        }
    }, [])

    const signOut = useCallback(() => {
        localStorage.removeItem('@NLW_HEAT:token')
        localStorage.removeItem('@NLW_HEAT:user')
        setData({} as DataProps)
    }, [])

    return (
        <AuthContext.Provider value={{ signIn, signOut, user: data.user, loadingSignIn, setLoadingSignIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(): AuthContextData {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context;
}