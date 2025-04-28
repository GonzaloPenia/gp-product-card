import * as React from 'react';
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from './components';
import { createRoot } from 'react-dom/client';

const product = {
    id: '1',
    title: 'Coffe-Process',
    img: './coffee-mug.png'
}

const App = () => { 
    
    return(
        <ProductCard 
                key={ product.id }
                product={ product }
                initialValues={{
                  count: 4,
                  maxCount: 10
                }}
            >

              {
                  (/*{reset, count, isMaxCountReached, maxCount, increaseBy}*/) => (
                      <>
                        <ProductImage/>
                        <ProductTitle/>
                        <ProductButtons/>
                      </>
                  )
              }
          </ProductCard> 
    );
 };

 const root = createRoot(document.getElementById('root')!);
 root.render(<App />);