const MODE = 'development'; // 'development' or 'production'

const devProductPrices = {
  'hoodie-s': 'price_1QCCLkH5WejaCk0DDPwPnzG4',
  'hoodie-m': 'price_1QCCMiH5WejaCk0D8z1L5gDm',
  'hoodie-l': 'price_1QCCLAH5WejaCk0DYAltrTZ0',
  'hoodie-xl': 'price_1QCCNUH5WejaCk0DvgrmARJu',
  't-shirt-s': 'price_1QCCJRH5WejaCk0DSoSZPAWb',
  't-shirt-m': 'price_1QCCH8H5WejaCk0D0ECnR4Zp',
  't-shirt-l': 'price_1QCCFJH5WejaCk0DZhnNLJ0c',
  't-shirt-xl': 'price_1QCCIjH5WejaCk0DfocegqXv',
};

const prodProductPrices = {
  'hoodie-s': 'price_1QCCPMH5WejaCk0DvCbf5mRp',
  'hoodie-m': 'price_1QCCPLH5WejaCk0DVULOkSDY',
  'hoodie-l': 'price_1QCCPOH5WejaCk0DRNX0wx3E',
  'hoodie-xl': 'price_1QCCPHH5WejaCk0DT3XWtkwZ',
  't-shirt-s': 'price_1QCCPPH5WejaCk0DmZrjlKAB',
  't-shirt-m': 'price_1QCCPRH5WejaCk0DZxUsflLs',
  't-shirt-l': 'price_1QCCPTH5WejaCk0DfZqldqRp',
  't-shirt-xl': 'price_1QCCPQH5WejaCk0DUN7JKMAA',
};


import Ant2 from '$lib/assets/Ant2.jpg';
import Ant3 from '$lib/assets/Ant3.jpg';

const productPrices = MODE === 'development' ? devProductPrices : prodProductPrices;

export const getProductInfo = (itemSizeId: string): {
  checkoutName: string;
  priceId: string;
  image: string;
  size: string;
} => {

  switch (itemSizeId) {
    case 'hoodie-s':
      return {
        checkoutName: 'Hoodie - Small',
        priceId: productPrices[itemSizeId],
        image: Ant2,
        size: 's'
      };

    case 'hoodie-m':
      return {
        checkoutName: 'Hoodie - Medium',
        priceId: productPrices[itemSizeId],
        image: Ant2,
        size: 'm'
      };

    case 'hoodie-l':
      return {
        checkoutName: 'Hoodie - Large',
        priceId: productPrices[itemSizeId],
        image: Ant2,
        size: 'l'
      };

    case 'hoodie-xl':
      return {
        checkoutName: 'Hoodie - XL',
        priceId: productPrices[itemSizeId],
        image: Ant2,
        size: 'xl'
      };

    case 't-shirt-s':
      return {
        checkoutName: 'T-Shirt - Small',
        priceId: productPrices[itemSizeId],
        image: Ant3,
        size: 's'
      };

    case 't-shirt-m':
      return {
        checkoutName: 'T-Shirt - MD',
        priceId: productPrices[itemSizeId],
        image: Ant3,
        size: 'm'
      };

    case 't-shirt-l':
      return {
        checkoutName: 'T-Shirt - Large',
        priceId: productPrices[itemSizeId],
        image: Ant3,
        size: 'l'
      };

    case 't-shirt-xl':
      return {
        checkoutName: 'T-Shirt - XL',
        priceId: productPrices[itemSizeId],
        image: Ant3,
        size: 'xl'
      };

    default:
      throw new Error('Invalid item size ID');
  }
};
