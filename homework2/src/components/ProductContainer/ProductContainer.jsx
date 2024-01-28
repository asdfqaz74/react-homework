import {
  ProductTitle,
  ProductSubTitle,
  ProductState,
  ProductPrice,
  ProductImage,
} from '../index';

import productData from '../../data/products.json';

export default function ProductContainer() {
  return (
    <>
      <h1 className="sr-only">거래 게시판</h1>
      {productData.products.map(
        ({ images, alt, title, id, created, price, state }) => (
          <div
            key={id}
            className="border-t border-Contents-contentSecondary flex items-center py-3 pl-3"
          >
            <ProductImage images={images} alt={alt} />
            <div className="ml-2 text-base sm:text-xl flex-grow">
              <ProductTitle title={title} />
              <div className="flex flex-col">
                <ProductSubTitle time={created} />
              </div>
              <div className="mb-2 flex items-center gap-2">
                <ProductState state={state} />
                <ProductPrice price={price} />
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
}
