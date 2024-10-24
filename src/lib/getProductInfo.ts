const productPrices = {
  'hoodie-s': 'price_1QCCLkH5WejaCk0DDPwPnzG4',
  'hoodie-m': 'price_1QCCMiH5WejaCk0D8z1L5gDm',
  'hoodie-l': 'price_1QCCLAH5WejaCk0DYAltrTZ0',
  'hoodie-xl': 'price_1QCCNUH5WejaCk0DvgrmARJu',
  't-shirt-s': 'price_1QCCJRH5WejaCk0DSoSZPAWb',
  't-shirt-m': 'price_1QCCH8H5WejaCk0D0ECnR4Zp',
  't-shirt-l': 'price_1QCCFJH5WejaCk0DZhnNLJ0c',
  't-shirt-xl': 'price_1QCCIjH5WejaCk0DfocegqXv',
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
