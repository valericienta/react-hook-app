import React, { useState, useEffect } from 'react'

const localCache = {};
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

        if (localCache[url]) {
         
            setState({
                data: localCache[url],
                isLoading: false,
                hasErrors: false,
                error: null
            })
           
            return;
        } 

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

        setState({
            data: data,
            isLoading: false,
            hasErrors: false,
            error: null
        })
        localCache[url] = data;
    }

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasErrors: state.hasErrors
    }
}

