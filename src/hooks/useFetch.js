import React, { useState, useEffect } from 'react'

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasErrors: false,
        error: null
    });

    useEffect(() => {
        getFetch();
    }, [url])

    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasErrors: false,
            error: null
        }
        )
    }
    const getFetch = async () => {
        setLoadingState();
        const response = await fetch(url);
        if (!response.ok) {
            setState({
                data: null,
                isLoading: false,
                hasErrors: true,
                error: {
                    code: response.status,
                    message: response.statusText
                }
            })
            return;
        }
        const data = await response.json();
        console.log(data)
        setState({
            data: data,
            isLoading: false,
            hasErrors: false,
            error: null
        })
    }

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasErrors: state.hasErrors
    }
}

