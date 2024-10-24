const productPrices = {
  'hoodie-s': 'price_1QCCPMH5WejaCk0DvCbf5mRp',
  'hoodie-m': 'price_1QCCPLH5WejaCk0DVULOkSDY',
  'hoodie-l': 'price_1QCCPOH5WejaCk0DRNX0wx3E',
  'hoodie-xl': 'price_1QCCPHH5WejaCk0DT3XWtkwZ',
  't-shirt-s': 'price_1QCCPPH5WejaCk0DmZrjlKAB',
  't-shirt-m': 'price_1QCCPRH5WejaCk0DZxUsflLs',
  't-shirt-l': 'price_1QCCPTH5WejaCk0DfZqldqRp',
  't-shirt-xl': 'price_1QCCPQH5WejaCk0DUN7JKMAA',
};

import Hoodie from '$lib/assets/merch/tshirtfront.png';
import TShirt from '$lib/assets/merch/hoodiefront.png';

export const getProductInfo = (itemSizeId: string): {
  checkoutName: string;
  priceId: string;
  image: string;
  size: string;
} => {

  switch (itemSizeId) {
    case 'hoodie-s':
      return {
        checkoutName: 'Hoodie',
        priceId: productPrices[itemSizeId],
        image: Hoodie,
        size: 's'
      };

    case 'hoodie-m':
      return {
        checkoutName: 'Hoodie',
        priceId: productPrices[itemSizeId],
        image: Hoodie,
        size: 'm'
      };

    case 'hoodie-l':
      return {
        checkoutName: 'Hoodie',
        priceId: productPrices[itemSizeId],
        image: Hoodie,
        size: 'l'
      };

    case 'hoodie-xl':
      return {
        checkoutName: 'Hoodie',
        priceId: productPrices[itemSizeId],
        image: Hoodie,
        size: 'xl'
      };

    case 't-shirt-s':
      return {
        checkoutName: 'T-Shirt',
        priceId: productPrices[itemSizeId],
        image: TShirt,
        size: 's'
      };

    case 't-shirt-m':
      return {
        checkoutName: 'T-Shirt',
        priceId: productPrices[itemSizeId],
        image: TShirt,
        size: 'm'
      };

    case 't-shirt-l':
      return {
        checkoutName: 'T-Shirt',
        priceId: productPrices[itemSizeId],
        image: TShirt,
        size: 'l'
      };

    case 't-shirt-xl':
      return {
        checkoutName: 'T-Shirt',
        priceId: productPrices[itemSizeId],
        image: TShirt,
        size: 'xl'
      };

    default:
      throw new Error('Invalid item size ID');
  }
};
