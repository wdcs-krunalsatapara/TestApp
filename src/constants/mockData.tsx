import {Strings} from './strings';

interface MockStokesType {
  id: number;
  itemType: string;
  itemTitleName: string;
  itemSubTitleName: string;
  itemTotalAmount: number;
  itemTotalProfitLossAmount: number;
  itemTotalProfitLossPercent: number;
  subItemsArray: Array<SubMockStokesType>;
}

interface SubMockStokesType {
  id: number;
  subItemsTitleName: string;
  subItemsQty: number;
  subItemsLtp: number;
  subItemsVal: number;
  subItemProfitLossAmount: number;
}

export const MockStokesData: MockStokesType[] = [
  {
    id: 1,
    itemType: 'live',
    itemTitleName: 'GSA BNF Directional',
    itemSubTitleName: Strings.str_live_entered,
    itemTotalAmount: 310000,
    itemTotalProfitLossAmount: 0,
    itemTotalProfitLossPercent: 0,
    subItemsArray: [
      {
        id: 1,
        subItemsTitleName: 'OPTIDX_BANKNIFTY_04MAY2023_CE_45000',
        subItemsQty: 0.0,
        subItemsLtp: 2.3,
        subItemsVal: 0,
        subItemProfitLossAmount: 0,
      },
      {
        id: 2,
        subItemsTitleName: 'OPTIDX_BANKNIFTY_04MAY2023_PE_45000',
        subItemsQty: 0,
        subItemsLtp: 3.2,
        subItemsVal: 160,
        subItemProfitLossAmount: 0,
      },
      {
        id: 3,
        subItemsTitleName: 'OPTIDX_BANKNIFTY_04MAY2023_CE_45000',
        subItemsQty: 0,
        subItemsLtp: 301.45,
        subItemsVal: 0,
        subItemProfitLossAmount: 0,
      },
      {
        id: 4,
        subItemsTitleName: 'OPTIDX_BANKNIFTY_04MAY2023_PE_45000',
        subItemsQty: 0,
        subItemsLtp: 241.45,
        subItemsVal: -12072,
        subItemProfitLossAmount: 0,
      },
    ],
  },
  {
    id: 2,
    itemType: 'exited',
    itemTitleName: 'GSA Nifty Directional',
    itemSubTitleName: Strings.str_exited,
    itemTotalAmount: 30000,
    itemTotalProfitLossAmount: 0,
    itemTotalProfitLossPercent: 0,
    subItemsArray: [
      {
        id: 1,
        subItemsTitleName: 'OPTIDX_BANKNIFTY_04MAY2023_CE_45000',
        subItemsQty: 0.0,
        subItemsLtp: 2.3,
        subItemsVal: 0,
        subItemProfitLossAmount: 0,
      },
      {
        id: 2,
        subItemsTitleName: 'OPTIDX_BANKNIFTY_04MAY2023_PE_45000',
        subItemsQty: 0,
        subItemsLtp: 3.2,
        subItemsVal: 160,
        subItemProfitLossAmount: 0,
      },
      {
        id: 3,
        subItemsTitleName: 'OPTIDX_BANKNIFTY_04MAY2023_CE_45000',
        subItemsQty: 0,
        subItemsLtp: 301.45,
        subItemsVal: 0,
        subItemProfitLossAmount: 0,
      },
      {
        id: 4,
        subItemsTitleName: 'OPTIDX_BANKNIFTY_04MAY2023_PE_45000',
        subItemsQty: 0,
        subItemsLtp: 241.45,
        subItemsVal: -12072,
        subItemProfitLossAmount: 0,
      },
    ],
  },
  {
    id: 3,
    itemType: 'live',
    itemTitleName: 'Banknifty Fighter Lite Positional',
    itemSubTitleName: Strings.str_live_entered,
    itemTotalAmount: 100000,
    itemTotalProfitLossAmount: 0,
    itemTotalProfitLossPercent: 0,
    subItemsArray: [
      {
        id: 1,
        subItemsTitleName: 'OPTIDX_BANKNIFTY_04MAY2023_CE_45000',
        subItemsQty: 0.0,
        subItemsLtp: 2.3,
        subItemsVal: 0,
        subItemProfitLossAmount: 0,
      },
      {
        id: 2,
        subItemsTitleName: 'OPTIDX_BANKNIFTY_04MAY2023_PE_45000',
        subItemsQty: 0,
        subItemsLtp: 3.2,
        subItemsVal: 160,
        subItemProfitLossAmount: 0,
      },
      {
        id: 3,
        subItemsTitleName: 'OPTIDX_BANKNIFTY_04MAY2023_CE_45000',
        subItemsQty: 0,
        subItemsLtp: 301.45,
        subItemsVal: 0,
        subItemProfitLossAmount: 0,
      },
      {
        id: 4,
        subItemsTitleName: 'OPTIDX_BANKNIFTY_04MAY2023_PE_45000',
        subItemsQty: 0,
        subItemsLtp: 241.45,
        subItemsVal: -12072,
        subItemProfitLossAmount: 0,
      },
    ],
  },
  {
    id: 4,
    itemType: 'live',
    itemTitleName: 'Banknift Fighter Positional',
    itemSubTitleName: Strings.str_live_entered,
    itemTotalAmount: 150000,
    itemTotalProfitLossAmount: 0,
    itemTotalProfitLossPercent: 0,
    subItemsArray: [
      {
        id: 1,
        subItemsTitleName: 'OPTIDX_BANKNIFTY_04MAY2023_CE_45000',
        subItemsQty: 0.0,
        subItemsLtp: 2.3,
        subItemsVal: 0,
        subItemProfitLossAmount: 0,
      },
      {
        id: 2,
        subItemsTitleName: 'OPTIDX_BANKNIFTY_04MAY2023_PE_45000',
        subItemsQty: 0,
        subItemsLtp: 3.2,
        subItemsVal: 160,
        subItemProfitLossAmount: 0,
      },
      {
        id: 3,
        subItemsTitleName: 'OPTIDX_BANKNIFTY_04MAY2023_CE_45000',
        subItemsQty: 0,
        subItemsLtp: 301.45,
        subItemsVal: 0,
        subItemProfitLossAmount: 0,
      },
      {
        id: 4,
        subItemsTitleName: 'OPTIDX_BANKNIFTY_04MAY2023_PE_45000',
        subItemsQty: 0,
        subItemsLtp: 241.45,
        subItemsVal: -12072,
        subItemProfitLossAmount: 0,
      },
    ],
  },
  {
    id: 5,
    itemType: 'exited',
    itemTitleName: 'Overnight Miner',
    itemSubTitleName: Strings.str_exited,
    itemTotalAmount: 50000,
    itemTotalProfitLossAmount: 0,
    itemTotalProfitLossPercent: 0,
    subItemsArray: [
      {
        id: 1,
        subItemsTitleName: 'OPTIDX_BANKNIFTY_04MAY2023_CE_45000',
        subItemsQty: 0.0,
        subItemsLtp: 2.3,
        subItemsVal: 0,
        subItemProfitLossAmount: 0,
      },
      {
        id: 2,
        subItemsTitleName: 'OPTIDX_BANKNIFTY_04MAY2023_PE_45000',
        subItemsQty: 0,
        subItemsLtp: 3.2,
        subItemsVal: 160,
        subItemProfitLossAmount: 0,
      },
      {
        id: 3,
        subItemsTitleName: 'OPTIDX_BANKNIFTY_04MAY2023_CE_45000',
        subItemsQty: 0,
        subItemsLtp: 301.45,
        subItemsVal: 0,
        subItemProfitLossAmount: 0,
      },
      {
        id: 4,
        subItemsTitleName: 'OPTIDX_BANKNIFTY_04MAY2023_PE_45000',
        subItemsQty: 0,
        subItemsLtp: 241.45,
        subItemsVal: -12072,
        subItemProfitLossAmount: 0,
      },
    ],
  },
  {
    id: 6,
    itemType: 'exited',
    itemTitleName: 'Overnight Miner Nifty',
    itemSubTitleName: Strings.str_exited,
    itemTotalAmount: 15000,
    itemTotalProfitLossAmount: 0,
    itemTotalProfitLossPercent: 0,
    subItemsArray: [
      {
        id: 1,
        subItemsTitleName: 'OPTIDX_BANKNIFTY_04MAY2023_CE_45000',
        subItemsQty: 0.0,
        subItemsLtp: 2.3,
        subItemsVal: 0,
        subItemProfitLossAmount: 0,
      },
      {
        id: 2,
        subItemsTitleName: 'OPTIDX_BANKNIFTY_04MAY2023_PE_45000',
        subItemsQty: 0,
        subItemsLtp: 3.2,
        subItemsVal: 160,
        subItemProfitLossAmount: 0,
      },
      {
        id: 3,
        subItemsTitleName: 'OPTIDX_BANKNIFTY_04MAY2023_CE_45000',
        subItemsQty: 0,
        subItemsLtp: 301.45,
        subItemsVal: 0,
        subItemProfitLossAmount: 0,
      },
      {
        id: 4,
        subItemsTitleName: 'OPTIDX_BANKNIFTY_04MAY2023_PE_45000',
        subItemsQty: 0,
        subItemsLtp: 241.45,
        subItemsVal: -12072,
        subItemProfitLossAmount: 0,
      },
    ],
  },
];

// its generate random number between -10000 to 10000
export const generateRandomNumber = () => {
  var plusOrMinus =
    Math.ceil(Math.random() * 10000) * (Math.round(Math.random()) ? 1 : -1);
  return plusOrMinus;
};

// It take number as a argument and returns formatted amount
export const formatAmount = (value: number) => {
  const val = Math.abs(value);
  if (val >= 10000000) return `${(value / 10000000).toFixed(2)} Cr`;
  if (val >= 100000) return `${(value / 100000).toFixed(2)} L`;
  if (val >= 1000) return `${(value / 1000).toFixed(2)} K`;
  return value;
};
