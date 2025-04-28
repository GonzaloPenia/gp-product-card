import styles from '../styles/styles.module.css'

import { useProduct } from '../hooks';
import React, { createContext } from 'react';
import { ProductContextProp, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';
import { JSX } from 'react';


export const ProductContext = createContext( {} as ProductContextProp);
const {Provider} = ProductContext; 

export interface Props {
    product: Product;
    //children?: ReactElement | ReactElement[] ;
    children: (args : ProductCardHandlers) => JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args : onChangeArgs) => void;
    value ?: number;
    initialValues?: InitialValues;
}

export const ProductCard = ({children, product, className, style, onChange, value, initialValues}: Props) => {
    
    const {counter, increaseBy, maxCount, isMaxCountReached, reset} = useProduct({onChange,product, value, initialValues});

    return (
        <Provider value={{
                    maxCount,
                    counter,
                    increaseBy,
                    product
                }}>

                <div className={ `${styles.productCard} ${className}`} 
                     style = {style} >           
                    {
                    children({
                        count: counter,
                        isMaxCountReached,
                        maxCount: initialValues && initialValues.count,
                        product,
                        increaseBy,
                        reset,
                    })
                    }
                </div>
        </Provider>
  )
}
