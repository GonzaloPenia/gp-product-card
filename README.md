# GP-Product-Card

## Paquete de pruebas de despliegue en NPM

### Gonzalo Pena

## Ejemplo

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'gp-product-card';
```

```
<ProductCard 
                key={ product.id }
                product={ product 
                initialValues={{
                  count: 4,
                  maxCount: 10
                }}
            >

              {
                  ({reset,count, isMaxCountReached,maxCount,increaseBy}) => (
                      <>
                        <ProductImage/>
                        <ProductTitle/>
                        <ProductButtons/>
                      </>
                  )
              }
          </ProductCard> 
```