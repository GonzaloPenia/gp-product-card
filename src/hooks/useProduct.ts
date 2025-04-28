import { useEffect, useRef, useState } from 'react'
import { onChangeArgs, Product, InitialValues } from '../interfaces/interfaces';


interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues ?: InitialValues;
}


export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {

    const [ counter, setCounter ] = useState<number>( initialValues && initialValues.count ? initialValues.count : value );

    const isMounted = useRef(false); //Maneja una variable que me permite manejarla sin disparar nuevos renderizados

    const increaseBy = ( value: number ) => {
        
        if(initialValues && initialValues.maxCount !== 0 && counter >= (initialValues.maxCount || 0)){
            return
        }
        const newValue = Math.max( counter + value, 0 )
        setCounter( newValue );

        onChange && onChange({ count: newValue, product });
    }

    const reset = () => { 
        setCounter(initialValues && initialValues.count ? initialValues.count : value)
     }

    useEffect(() => {
        if(!isMounted.current) return;

    }, [ value ])


    useEffect(() => {
        isMounted.current = true;
    }, [])
    
    return {
        counter,
        increaseBy,
        maxCount: initialValues && initialValues.maxCount,
        isMaxCountReached: !!(initialValues && initialValues.count) && initialValues && initialValues.maxCount === counter,
        reset,
    }
    }
