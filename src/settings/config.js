import React, { lazy } from 'react';

/* ICONS */
import busketLogo from '../assets/images/add-to-cart.svg';
import magnifierLogo from '../assets/images/filter-magnifier.svg';
import humanHeadLogo from '../assets/images/avatar.svg';
import humanHeadsLogo from '../assets/images/team.svg';
import instagramLogo from '../assets/images/instagram.svg';
import facebookLogo from '../assets/images/facebook.svg';
import twitterLogo from '../assets/images/twitter.svg';
import editLogo from '../assets/images/pencil.svg';
import shareLogo from '../assets/images/share.svg';
import alertLogo from '../assets/images/alarm.svg';
import deleteLogo from '../assets/images/delete.svg';
import menuLogo from '../assets/images/menu.svg';
import facebookLetterLogo from '../assets/images/facebook-letter.svg';
import twitterBirdLogo from '../assets/images/twitter-bird.svg';
import instagramOrangeLogo from '../assets/images/instagram-orange.svg';
import submitSymbol from '../assets/images/correct-symbol.svg';
import placeholderIcon from '../assets/images/btn-placeholder.svg';
import dashboardIcon from '../assets/images/dashboard.svg';
import brandsIcon from '../assets/images/brands.svg';
import trendsIcon from '../assets/images/trends.svg';
import marketIcon from '../assets/images/market.svg';
import merchandiserIcon from '../assets/images/merchandiser.svg';
import engFlag from '../assets/images/flags/eng-flag.svg';
import ruFlag from '../assets/images/flags/rus-flag.svg';
import SortArrows from '../assets/images/SVG/SortArrows';
import BrandsSVG from '../assets/images/SVG/Brands';
import RetailersSVG from '../assets/images/SVG/Retailers';
import FullPriceSVG from '../assets/images/SVG/FullPrice';
import SegmentsSVG from '../assets/images/SVG/Segments';
import ColorsSVG from '../assets/images/SVG/Colors';
import SizesSVG from '../assets/images/SVG/Sizes';
import SearchesSVG from '../assets/images/SVG/Searches';
import SocialSVG from '../assets/images/SVG/Social';

/* COMPONENTS */
import IntlMessages from '../components/utility/IntlMessages';
import Category from '../containers/Filter/Category/Category';
import Regions from '../containers/Filter/Regions/Regions';
import Retailers from '../containers/Filter/Retailers/Retailers';
import Colors from '../containers/Filter/Colors/Colors';
import Markdown from '../containers/Filter/Markdown/Markdown';
import Pricing from '../containers/Filter/Pricing/Pricing';
import Date from '../containers/Filter/Date/Date';
import AnalysisMarket from '../containers/Market/Content/Analysis/Analysis';
import BrandsOverview from '../components/Widgets/Brands/Content/BrandsOverview/Overview';
import DatePicker from '../components/DatePicker/DatePicker';
import DropdownWithDate from '../components/UI/Dropdowns/DropdownWithDate/DropdownWithDate';
import Posts from '../components/Posts/Posts';
import DropdownWithCheckboxes from '../components/UI/Dropdowns/DropdownWithCheckboxes/DropdownWithCheckboxes';
import ProductsFilter from '../containers/Filter/Filter';
import Share from '../components/Users/Share/Share';
import SingleTable from '../components/UI/Tables/SingleTable/SingleTable';
import PieTable from '../components/UI/Tables/PieTable/PieTable';
import ColumnChart from '../components/UI/Charts/ColumnChart/ColumnChart';
import BubbleChart from '../components/UI/Charts/BubbleChart/BubbleChart';
import Dashboard from '../containers/Dashboard/Dashboard';
import Trends from '../containers/Trends/Trends';
import BrandsFilter from '../containers/Filter/Brands/Brands';
import MarketWidget from '../containers/Market/Widget/Widget';
import BrandsWidget from '../components/Widgets/Brands/Widget/Widget';
import MyProfile from '../containers/Profile';

const Highcharts = require('highcharts');

/* COMPONENTS WITH LAZY LOADING */
const Market = lazy(() => import('../containers/Market/Market'));
const Brands = lazy(() => import('../components/Widgets/Brands/Brands'));

/* CONFIGS FOR TABLES */

/* BRANDS */

export const brandsTableDataConfig = [
  {
    _id: '5be82aa7523ca08c5fde1a79',
    brands: 'Prada',
    nProducts: 192,
    percOfTotal: 16.76,
    minPrice: 18.69,
    avgPrice: 105.01,
    maxPrice: 210.02,
    percFullPrice: 75.27,
    avgMarkdownRate: 41.68
  },
  {
    _id: '5be82aa7523ca08c5fde1a7b',
    brands: 'Fendi',
    nProducts: 291,
    percOfTotal: 11.45,
    minPrice: 18.16,
    avgPrice: 179.94,
    maxPrice: 359.87,
    percFullPrice: 72.69,
    avgMarkdownRate: 91.15
  },
  {
    _id: '5be82aa7523ca08c5fde1a7d',
    brands: 'Versace',
    nProducts: 245,
    percOfTotal: 17.28,
    minPrice: 10.97,
    avgPrice: 139.31,
    maxPrice: 278.61,
    percFullPrice: 57.08,
    avgMarkdownRate: 15.95
  },
  {
    _id: '5be82aa7523ca08c5fde1a7f',
    brands: 'Vetements',
    nProducts: 116,
    percOfTotal: 15.42,
    minPrice: 17.79,
    avgPrice: 105.78,
    maxPrice: 211.55,
    percFullPrice: 75.5,
    avgMarkdownRate: 92.33
  },
  {
    _id: '5be82aa7523ca08c5fde1a81',
    brands: 'Dolce & Gabbana',
    nProducts: 220,
    percOfTotal: 18.28,
    minPrice: 19.28,
    avgPrice: 120.26,
    maxPrice: 240.51,
    percFullPrice: 32.5,
    avgMarkdownRate: 92.64
  },
  {
    _id: '5be82aa7523ca08c5fde1a83',
    brands: 'Givenchy',
    nProducts: 80,
    percOfTotal: 19.41,
    minPrice: 13.83,
    avgPrice: 160.6,
    maxPrice: 321.2,
    percFullPrice: 26.96,
    avgMarkdownRate: 39.07
  },
  {
    _id: '5be82aa7523ca08c5fde1a85',
    brands: 'Balenciaga',
    nProducts: 202,
    percOfTotal: 14.23,
    minPrice: 19.74,
    avgPrice: 155.01,
    maxPrice: 310.01,
    percFullPrice: 73.45,
    avgMarkdownRate: 21.81
  },
  {
    _id: '5be82aa7523ca08c5fde1a87',
    brands: 'Off-White',
    nProducts: 212,
    percOfTotal: 19.73,
    minPrice: 15.85,
    avgPrice: 125.17,
    maxPrice: 250.33,
    percFullPrice: 63.54,
    avgMarkdownRate: 26.01
  },
  {
    _id: '5be82aa7523ca08c5fde1a89',
    brands: 'Kate Spade',
    nProducts: 245,
    percOfTotal: 11.75,
    minPrice: 15.6,
    avgPrice: 154.54,
    maxPrice: 309.08,
    percFullPrice: 85.74,
    avgMarkdownRate: 91.58
  },
  {
    _id: '5be82aa7523ca08c5fde1a8b',
    brands: 'Michael Kors',
    nProducts: 195,
    percOfTotal: 14.28,
    minPrice: 10.06,
    avgPrice: 181.18,
    maxPrice: 362.36,
    percFullPrice: 89.46,
    avgMarkdownRate: 41.07
  },
  {
    _id: '5be82aa7523ca08c5fde1a8d',
    brands: 'nike',
    nProducts: 231,
    percOfTotal: 15.33,
    minPrice: 14.89,
    avgPrice: 154.66,
    maxPrice: 309.31,
    percFullPrice: 48.91,
    avgMarkdownRate: 70.42
  },
  {
    _id: '5be82aa7523ca08c5fde1a8f',
    brands: 'adidas',
    nProducts: 95,
    percOfTotal: 19.35,
    minPrice: 13.5,
    avgPrice: 156.11,
    maxPrice: 312.22,
    percFullPrice: 40.4,
    avgMarkdownRate: 81.85
  },
  {
    _id: '5be82aa7523ca08c5fde1a91',
    brands: 'Alexander McQueen',
    nProducts: 255,
    percOfTotal: 19.77,
    minPrice: 12.43,
    avgPrice: 193.49,
    maxPrice: 386.98,
    percFullPrice: 12.49,
    avgMarkdownRate: 29.37
  },
  {
    _id: '5be82aa7523ca08c5fde1a93',
    brands: 'Yves Saint Laurent',
    nProducts: 248,
    percOfTotal: 15.36,
    minPrice: 15.05,
    avgPrice: 136.23,
    maxPrice: 272.45,
    percFullPrice: 32.03,
    avgMarkdownRate: 14.57
  },
  {
    _id: '5be82aa7523ca08c5fde1a95',
    brands: 'Celine',
    nProducts: 239,
    percOfTotal: 17.84,
    minPrice: 18.6,
    avgPrice: 182.38,
    maxPrice: 364.76,
    percFullPrice: 4.76,
    avgMarkdownRate: 3.85
  },
  {
    _id: '5be82aa7523ca08c5fde1a97',
    brands: 'Lana Marks',
    nProducts: 64,
    percOfTotal: 11.17,
    minPrice: 19.67,
    avgPrice: 115.51,
    maxPrice: 231.01,
    percFullPrice: 13.35,
    avgMarkdownRate: 3.84
  },
  {
    _id: '5be82aa7523ca08c5fde1a99',
    brands: 'Hilde Paladino',
    nProducts: 217,
    percOfTotal: 10.12,
    minPrice: 16.26,
    avgPrice: 193.23,
    maxPrice: 386.46,
    percFullPrice: 36.77,
    avgMarkdownRate: 56.36
  },
  {
    _id: '5be82aa7523ca08c5fde1a9b',
    brands: 'Judith Lieber',
    nProducts: 340,
    percOfTotal: 15.1,
    minPrice: 11.67,
    avgPrice: 140.36,
    maxPrice: 280.72,
    percFullPrice: 67.48,
    avgMarkdownRate: 51.42
  },
  {
    _id: '5be82aa7523ca08c5fde1a9d',
    brands: 'Marc Jacobs',
    nProducts: 101,
    percOfTotal: 13.65,
    minPrice: 15.42,
    avgPrice: 185.13,
    maxPrice: 370.25,
    percFullPrice: 49.1,
    avgMarkdownRate: 54
  },
  {
    _id: '5be82aa7523ca08c5fde1a9f',
    brands: 'Mouawad',
    nProducts: 96,
    percOfTotal: 18.31,
    minPrice: 19.81,
    avgPrice: 153.97,
    maxPrice: 307.94,
    percFullPrice: 88.16,
    avgMarkdownRate: 59.41
  }
];

export const brandsTableColumnsConfig = [
  {
    Header: (
      <>
        <IntlMessages id="market.table.header.brands" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'first-column-header',
    accessor: 'brands'
  },
  {
    Header: (
      <>
        <IntlMessages id="market.table.header.products" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: 'nProducts',
    style: { textAlign: 'right' }
  },
  {
    id: 'percOfTotal',
    Header: (
      <>
        <IntlMessages id="market.table.header.percentageOfTotal" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => `${d.percOfTotal} %`,
    style: { textAlign: 'right' }
  },
  {
    id: 'minPrice',
    Header: (
      <>
        <IntlMessages id="market.table.header.min" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => `$ ${d.minPrice}`,
    style: { textAlign: 'right' }
  },
  {
    id: 'avgPrice',
    Header: (
      <>
        <IntlMessages id="market.table.header.avg" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => `$ ${d.avgPrice}`,
    style: { textAlign: 'right' }
  },
  {
    id: 'maxPrice',
    Header: (
      <>
        <IntlMessages id="market.table.header.max" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => `$ ${d.maxPrice}`,
    style: { textAlign: 'right' }
  },
  {
    id: 'percFullPrice',
    Header: (
      <>
        <IntlMessages id="market.table.header.fullPrice" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => `${d.percFullPrice} %`,
    style: { textAlign: 'right' }
  },
  {
    id: 'avgMarkdownRate',
    Header: (
      <>
        <IntlMessages id="market.table.header.averageMarkdownRate" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => `${d.avgMarkdownRate} %`,
    style: { textAlign: 'right' }
  }
];

/* RETAILERS */

export const retailersTableDataConfig = [
  {
    _id: '5be82adb523ca08c5fde1aae',
    retailers: 'houseoffraser',
    nProducts: 271,
    percOfTotal: 19.63,
    minPrice: 11.02,
    avgPrice: 113.5,
    maxPrice: 226.99,
    percFullPrice: 63.04,
    avgMarkdownRate: 77.57
  },
  {
    _id: '5be82adb523ca08c5fde1ab0',
    retailers: 'newlook',
    nProducts: 386,
    percOfTotal: 17.54,
    minPrice: 14.02,
    avgPrice: 100.99,
    maxPrice: 201.97,
    percFullPrice: 52.25,
    avgMarkdownRate: 40.55
  },
  {
    _id: '5be82adb523ca08c5fde1ab2',
    retailers: 'jakeshoes',
    nProducts: 110,
    percOfTotal: 12.48,
    minPrice: 13.12,
    avgPrice: 171.54,
    maxPrice: 343.07,
    percFullPrice: 91.78,
    avgMarkdownRate: 46.78
  },
  {
    _id: '5be82adb523ca08c5fde1ab4',
    retailers: 'bonds',
    nProducts: 204,
    percOfTotal: 16.64,
    minPrice: 19.85,
    avgPrice: 144.69,
    maxPrice: 289.37,
    percFullPrice: 16.46,
    avgMarkdownRate: 34.29
  },
  {
    _id: '5be82adb523ca08c5fde1ab6',
    retailers: 'baukjen',
    nProducts: 126,
    percOfTotal: 10.83,
    minPrice: 14.08,
    avgPrice: 165.24,
    maxPrice: 330.48,
    percFullPrice: 29.43,
    avgMarkdownRate: 42.74
  },
  {
    _id: '5be82adb523ca08c5fde1ab8',
    retailers: 'boohoo',
    nProducts: 241,
    percOfTotal: 13.85,
    minPrice: 13.68,
    avgPrice: 183.2,
    maxPrice: 366.39,
    percFullPrice: 67.66,
    avgMarkdownRate: 6.23
  },
  {
    _id: '5be82adb523ca08c5fde1aba',
    retailers: 'asos',
    nProducts: 46,
    percOfTotal: 14.53,
    minPrice: 15.76,
    avgPrice: 149.59,
    maxPrice: 299.17,
    percFullPrice: 13.53,
    avgMarkdownRate: 27.97
  },
  {
    _id: '5be82adb523ca08c5fde1abc',
    retailers: 'net-a-porter',
    nProducts: 374,
    percOfTotal: 13.43,
    minPrice: 16.06,
    avgPrice: 152.17,
    maxPrice: 304.33,
    percFullPrice: 89.95,
    avgMarkdownRate: 84.95
  },
  {
    _id: '5be82adb523ca08c5fde1abe',
    retailers: 'nike',
    nProducts: 212,
    percOfTotal: 15.67,
    minPrice: 18.88,
    avgPrice: 161.65,
    maxPrice: 323.29,
    percFullPrice: 65.31,
    avgMarkdownRate: 93.46
  },
  {
    _id: '5be82adb523ca08c5fde1ac0',
    retailers: 'adidas',
    nProducts: 199,
    percOfTotal: 18.74,
    minPrice: 18.9,
    avgPrice: 117.16,
    maxPrice: 234.32,
    percFullPrice: 56.99,
    avgMarkdownRate: 46.58
  },
  {
    _id: '5be82adb523ca08c5fde1ac2',
    retailers: 'zara',
    nProducts: 173,
    percOfTotal: 11.44,
    minPrice: 19.64,
    avgPrice: 120.93,
    maxPrice: 241.86,
    percFullPrice: 71.98,
    avgMarkdownRate: 46.25
  },
  {
    _id: '5be82adb523ca08c5fde1ac4',
    retailers: 'prettylittlething',
    nProducts: 157,
    percOfTotal: 17.8,
    minPrice: 13.2,
    avgPrice: 113.83,
    maxPrice: 227.66,
    percFullPrice: 37.41,
    avgMarkdownRate: 43.17
  },
  {
    _id: '5be82adb523ca08c5fde1ac6',
    retailers: 'missselfridge',
    nProducts: 338,
    percOfTotal: 14.52,
    minPrice: 17.25,
    avgPrice: 153.31,
    maxPrice: 306.61,
    percFullPrice: 31.83,
    avgMarkdownRate: 49.95
  },
  {
    _id: '5be82adb523ca08c5fde1ac8',
    retailers: 'uniqlo',
    nProducts: 174,
    percOfTotal: 17.3,
    minPrice: 10.84,
    avgPrice: 168.38,
    maxPrice: 336.75,
    percFullPrice: 16.21,
    avgMarkdownRate: 72.98
  },
  {
    _id: '5be82adb523ca08c5fde1aca',
    retailers: 'hm',
    nProducts: 210,
    percOfTotal: 11.3,
    minPrice: 12.96,
    avgPrice: 163.03,
    maxPrice: 326.06,
    percFullPrice: 52.2,
    avgMarkdownRate: 60.97
  },
  {
    _id: '5be82adb523ca08c5fde1acc',
    retailers: 'missguided',
    nProducts: 319,
    percOfTotal: 15.04,
    minPrice: 15.86,
    avgPrice: 160.05,
    maxPrice: 320.09,
    percFullPrice: 80.34,
    avgMarkdownRate: 63.98
  },
  {
    _id: '5be82adb523ca08c5fde1ace',
    retailers: 'superdry',
    nProducts: 355,
    percOfTotal: 18.78,
    minPrice: 15.82,
    avgPrice: 114.21,
    maxPrice: 228.42,
    percFullPrice: 39.19,
    avgMarkdownRate: 15.63
  },
  {
    _id: '5be82adb523ca08c5fde1ad0',
    retailers: 'tedbaker',
    nProducts: 98,
    percOfTotal: 11,
    minPrice: 19.62,
    avgPrice: 121.25,
    maxPrice: 242.49,
    percFullPrice: 76.16,
    avgMarkdownRate: 54.46
  },
  {
    _id: '5be82adb523ca08c5fde1ad2',
    retailers: 'fatface',
    nProducts: 169,
    percOfTotal: 12.57,
    minPrice: 16.08,
    avgPrice: 168.16,
    maxPrice: 336.31,
    percFullPrice: 35.34,
    avgMarkdownRate: 37
  },
  {
    _id: '5be82adb523ca08c5fde1ad4',
    retailers: 'forever21',
    nProducts: 102,
    percOfTotal: 13,
    minPrice: 18.67,
    avgPrice: 141.39,
    maxPrice: 282.77,
    percFullPrice: 11.07,
    avgMarkdownRate: 49.3
  }
];

export const retailersTableColumnsConfig = [
  {
    Header: (
      <>
        <IntlMessages id="market.table.header.retailers" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'first-column-header',
    accessor: 'retailers'
  },
  {
    Header: (
      <>
        <IntlMessages id="market.table.header.products" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: 'nProducts',
    style: { textAlign: 'right' }
  },
  {
    id: 'percOfTotal',
    Header: (
      <>
        <IntlMessages id="market.table.header.percentageOfTotal" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => `${d.percOfTotal} %`,
    style: { textAlign: 'right' }
  },
  {
    id: 'minPrice',
    Header: (
      <>
        <IntlMessages id="market.table.header.min" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => `$ ${d.minPrice}`,
    style: { textAlign: 'right' }
  },
  {
    id: 'avgPrice',
    Header: (
      <>
        <IntlMessages id="market.table.header.avg" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => `$ ${d.avgPrice}`,
    style: { textAlign: 'right' }
  },
  {
    id: 'maxPrice',
    Header: (
      <>
        <IntlMessages id="market.table.header.max" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => `$ ${d.maxPrice}`,
    style: { textAlign: 'right' }
  },
  {
    id: 'percFullPrice',
    Header: (
      <>
        <IntlMessages id="market.table.header.fullPrice" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => `${d.percFullPrice} %`,
    style: { textAlign: 'right' }
  },
  {
    id: 'avgMarkdownRate',
    Header: (
      <>
        <IntlMessages id="market.table.header.averageMarkdownRate" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => `${d.avgMarkdownRate} %`,
    style: { textAlign: 'right' }
  }
];

/* FULL PRICE */

export const fullPriceTableDataConfig = [
  {
    _id: '5be83198523ca08c5fde22a4',
    markdownRange: '0-10%',
    nProducts: 345,
    percOfTotal: 14.73,
    minPrice: 18.01,
    avgPrice: 121.63,
    maxPrice: 243.26,
    avgMarkdownRate: 72.21
  },
  {
    _id: '5be83198523ca08c5fde22a6',
    markdownRange: '10-20%',
    nProducts: 353,
    percOfTotal: 19.13,
    minPrice: 11.02,
    avgPrice: 117.1,
    maxPrice: 234.19,
    avgMarkdownRate: 1.24
  },
  {
    _id: '5be83198523ca08c5fde22a8',
    markdownRange: '20-30%',
    nProducts: 337,
    percOfTotal: 11.6,
    minPrice: 14.15,
    avgPrice: 184.29,
    maxPrice: 368.58,
    avgMarkdownRate: 32.59
  },
  {
    _id: '5be83198523ca08c5fde22aa',
    markdownRange: '10-20%',
    nProducts: 65,
    percOfTotal: 17.48,
    minPrice: 16.9,
    avgPrice: 147.81,
    maxPrice: 295.62,
    avgMarkdownRate: 96.8
  },
  {
    _id: '5be83198523ca08c5fde22ac',
    markdownRange: '30-40%',
    nProducts: 311,
    percOfTotal: 15.77,
    minPrice: 11.86,
    avgPrice: 151.71,
    maxPrice: 303.42,
    avgMarkdownRate: 85.69
  },
  {
    _id: '5be83198523ca08c5fde22ae',
    markdownRange: '40-50%',
    nProducts: 110,
    percOfTotal: 11.39,
    minPrice: 11.75,
    avgPrice: 119.15,
    maxPrice: 238.3,
    avgMarkdownRate: 22.13
  },
  {
    _id: '5be83198523ca08c5fde22b0',
    markdownRange: '50-60%',
    nProducts: 116,
    percOfTotal: 19.4,
    minPrice: 14.5,
    avgPrice: 170.16,
    maxPrice: 340.31,
    avgMarkdownRate: 22.46
  },
  {
    _id: '5be83198523ca08c5fde22b2',
    markdownRange: '60-70%',
    nProducts: 170,
    percOfTotal: 12.17,
    minPrice: 17.56,
    avgPrice: 133.69,
    maxPrice: 267.37,
    avgMarkdownRate: 86.76
  },
  {
    _id: '5be83198523ca08c5fde22b4',
    markdownRange: '70-80%',
    nProducts: 272,
    percOfTotal: 14.81,
    minPrice: 15.89,
    avgPrice: 148.66,
    maxPrice: 297.32,
    avgMarkdownRate: 44.53
  },
  {
    _id: '5be83198523ca08c5fde22b6',
    markdownRange: '80-90%',
    nProducts: 350,
    percOfTotal: 14.35,
    minPrice: 12.97,
    avgPrice: 178.98,
    maxPrice: 357.96,
    avgMarkdownRate: 9.01
  },
  {
    _id: '5be83198523ca08c5fde22b8',
    markdownRange: '90-100%',
    nProducts: 399,
    percOfTotal: 16.07,
    minPrice: 18,
    avgPrice: 136.34,
    maxPrice: 272.67,
    avgMarkdownRate: 9.32
  }
];

export const fullPriceTableColumnsConfig = [
  {
    Header: (
      <>
        <IntlMessages id="market.table.header.markdowns" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'first-column-header',
    accessor: 'markdownRange'
  },
  {
    Header: (
      <>
        <IntlMessages id="market.table.header.products" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: 'nProducts',
    style: { textAlign: 'right' }
  },
  {
    id: 'percOfTotal',
    Header: (
      <>
        <IntlMessages id="market.table.header.percentageOfTotal" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => `${d.percOfTotal} %`,
    style: { textAlign: 'right' }
  },
  {
    id: 'minPrice',
    Header: (
      <>
        <IntlMessages id="market.table.header.min" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => `$ ${d.minPrice}`,
    style: { textAlign: 'right' }
  },
  {
    id: 'avgPrice',
    Header: (
      <>
        <IntlMessages id="market.table.header.avg" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => `$ ${d.avgPrice}`,
    style: { textAlign: 'right' }
  },
  {
    id: 'maxPrice',
    Header: (
      <>
        <IntlMessages id="market.table.header.max" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => `$ ${d.maxPrice}`,
    style: { textAlign: 'right' }
  },
  {
    id: 'avgMarkdownRate',
    Header: (
      <>
        <IntlMessages id="market.table.header.averageMarkdownRate" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => `${d.avgMarkdownRate} %`,
    style: { textAlign: 'right' }
  }
];

/* SEGMENTS */

export const segmentsTableDataConfig = [
  {
    _id: '5be831ba523ca08c5fde22ee',
    priceRange: '$0-10',
    nProducts: 94,
    percOfTotal: 13.89,
    minPrice: 11.12,
    avgPrice: 159.79,
    maxPrice: 319.58,
    percFullPrice: 94.46,
    avgMarkdownRate: 61.01
  },
  {
    _id: '5be831ba523ca08c5fde22f0',
    priceRange: '$10-25',
    nProducts: 181,
    percOfTotal: 11.88,
    minPrice: 10.97,
    avgPrice: 132.66,
    maxPrice: 265.31,
    percFullPrice: 93.06,
    avgMarkdownRate: 11.94
  },
  {
    _id: '5be831ba523ca08c5fde22f2',
    priceRange: '$25-50',
    nProducts: 68,
    percOfTotal: 15.01,
    minPrice: 19.82,
    avgPrice: 166.78,
    maxPrice: 333.55,
    percFullPrice: 67.51,
    avgMarkdownRate: 87.65
  },
  {
    _id: '5be831ba523ca08c5fde22f4',
    priceRange: '$50-100',
    nProducts: 266,
    percOfTotal: 11.85,
    minPrice: 12.81,
    avgPrice: 136.47,
    maxPrice: 272.93,
    percFullPrice: 50.38,
    avgMarkdownRate: 67.93
  },
  {
    _id: '5be831ba523ca08c5fde22f6',
    priceRange: '$100-150',
    nProducts: 99,
    percOfTotal: 18.69,
    minPrice: 12.98,
    avgPrice: 187.81,
    maxPrice: 375.61,
    percFullPrice: 59.76,
    avgMarkdownRate: 42.6
  },
  {
    _id: '5be831ba523ca08c5fde22f8',
    priceRange: '$150-200',
    nProducts: 110,
    percOfTotal: 13.45,
    minPrice: 17.29,
    avgPrice: 163.58,
    maxPrice: 327.16,
    percFullPrice: 95.03,
    avgMarkdownRate: 63.27
  },
  {
    _id: '5be831ba523ca08c5fde22fa',
    priceRange: '$250-300',
    nProducts: 105,
    percOfTotal: 17.81,
    minPrice: 19.59,
    avgPrice: 167.87,
    maxPrice: 335.74,
    percFullPrice: 1.79,
    avgMarkdownRate: 93.75
  },
  {
    _id: '5be831ba523ca08c5fde22fc',
    priceRange: '$300-500',
    nProducts: 399,
    percOfTotal: 19.05,
    minPrice: 18.47,
    avgPrice: 151.81,
    maxPrice: 303.62,
    percFullPrice: 80.58,
    avgMarkdownRate: 32.01
  },
  {
    _id: '5be831ba523ca08c5fde22fe',
    priceRange: '$500-1000',
    nProducts: 56,
    percOfTotal: 12.35,
    minPrice: 18.24,
    avgPrice: 121.29,
    maxPrice: 242.57,
    percFullPrice: 89.62,
    avgMarkdownRate: 71.79
  }
];

export const segmentsTableColumnsConfig = [
  {
    Header: (
      <>
        <IntlMessages id="market.table.header.price" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'first-column-header',
    accessor: 'priceRange'
  },
  {
    Header: (
      <>
        <IntlMessages id="market.table.header.products" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: 'nProducts',
    style: { textAlign: 'right' }
  },
  {
    id: 'percOfTotal',
    Header: (
      <>
        <IntlMessages id="market.table.header.percentageOfTotal" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => `${d.percOfTotal} %`,
    style: { textAlign: 'right' }
  },
  {
    id: 'minPrice',
    Header: (
      <>
        <IntlMessages id="market.table.header.min" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => `$ ${d.minPrice}`,
    style: { textAlign: 'right' }
  },
  {
    id: 'avgPrice',
    Header: (
      <>
        <IntlMessages id="market.table.header.avg" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => `$ ${d.avgPrice}`,
    style: { textAlign: 'right' }
  },
  {
    id: 'maxPrice',
    Header: (
      <>
        <IntlMessages id="market.table.header.max" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => `$ ${d.maxPrice}`,
    style: { textAlign: 'right' }
  },
  {
    id: 'percFullPrice',
    Header: (
      <>
        <IntlMessages id="market.table.header.fullPrice" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => `${d.percFullPrice} %`,
    style: { textAlign: 'right' }
  },
  {
    id: 'avgMarkdownRate',
    Header: (
      <>
        <IntlMessages id="market.table.header.averageMarkdownRate" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => `${d.avgMarkdownRate} %`,
    style: { textAlign: 'right' }
  }
];

/* COLOURS */

export const colorsTableDataConfig = [
  {
    _id: '5be884d8523ca08c5fdee7ff',
    nProducts: 309,
    percOfTotal: 12.59,
    minPrice: 16.81,
    avgPrice: 143.24,
    maxPrice: 286.48,
    percFullPrice: 90.91,
    colourRange: 'Red',
    avgMarkdownRate: 82.41
  },
  {
    _id: '5be884d8523ca08c5fdee801',
    nProducts: 113,
    percOfTotal: 10.26,
    minPrice: 15.78,
    avgPrice: 163.36,
    maxPrice: 326.72,
    percFullPrice: 97.61,
    colourRange: 'Brown',
    avgMarkdownRate: 48.22
  },
  {
    _id: '5be884d8523ca08c5fdee803',
    nProducts: 225,
    percOfTotal: 13.34,
    minPrice: 17.51,
    avgPrice: 165.15,
    maxPrice: 330.3,
    percFullPrice: 35.04,
    colourRange: 'Green',
    avgMarkdownRate: 48.9
  },
  {
    _id: '5be884d8523ca08c5fdee805',
    nProducts: 129,
    percOfTotal: 17.03,
    minPrice: 14.28,
    avgPrice: 193.41,
    maxPrice: 386.82,
    percFullPrice: 94.41,
    colourRange: 'Yellow',
    avgMarkdownRate: 72.88
  },
  {
    _id: '5be884d8523ca08c5fdee807',
    nProducts: 111,
    percOfTotal: 13.61,
    minPrice: 19.8,
    avgPrice: 148.88,
    maxPrice: 297.76,
    percFullPrice: 77.13,
    colourRange: 'Orange',
    avgMarkdownRate: 86.26
  },
  {
    _id: '5be884d8523ca08c5fdee809',
    nProducts: 281,
    percOfTotal: 11.94,
    minPrice: 19.13,
    avgPrice: 181.67,
    maxPrice: 363.33,
    percFullPrice: 37.53,
    colourRange: 'Black',
    avgMarkdownRate: 20.74
  },
  {
    _id: '5be884d8523ca08c5fdee80b',
    nProducts: 395,
    percOfTotal: 14.19,
    minPrice: 14.52,
    avgPrice: 172.67,
    maxPrice: 345.33,
    percFullPrice: 56.03,
    colourRange: 'Blue',
    avgMarkdownRate: 76.98
  },
  {
    _id: '5be884d8523ca08c5fdee80d',
    nProducts: 233,
    percOfTotal: 12.36,
    minPrice: 15.49,
    avgPrice: 158.99,
    maxPrice: 317.97,
    percFullPrice: 8.7,
    colourRange: 'Pink',
    avgMarkdownRate: 90.2
  },
  {
    _id: '5be884d8523ca08c5fdee80f',
    nProducts: 303,
    percOfTotal: 10.9,
    minPrice: 16.93,
    avgPrice: 109.36,
    maxPrice: 218.72,
    percFullPrice: 22.77,
    colourRange: 'White ',
    avgMarkdownRate: 65.69
  },
  {
    _id: '5be884d8523ca08c5fdee811',
    nProducts: 233,
    percOfTotal: 11.73,
    minPrice: 12.79,
    avgPrice: 186.89,
    maxPrice: 373.78,
    percFullPrice: 13.85,
    colourRange: 'Purple',
    avgMarkdownRate: 39.39
  }
];

export const colorsTableColumnsConfig = [
  {
    id: 'colourRange',
    Header: (
      <>
        <IntlMessages id="market.table.header.color" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'first-column-header',
    accessor: d => d.colourRange,
    Cell: props => (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>{props.value}</span>
      </div>
    )
  },
  {
    Header: (
      <>
        <IntlMessages id="market.table.header.products" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: 'nProducts',
    style: { textAlign: 'right' }
  },
  {
    id: 'percOfTotal',
    Header: (
      <>
        <IntlMessages id="market.table.header.percentageOfTotal" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => `${d.percOfTotal} %`,
    style: { textAlign: 'right' }
  },
  {
    id: 'minPrice',
    Header: (
      <>
        <IntlMessages id="market.table.header.min" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => `$ ${d.minPrice}`,
    style: { textAlign: 'right' }
  },
  {
    id: 'avgPrice',
    Header: (
      <>
        <IntlMessages id="market.table.header.avg" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => `$ ${d.avgPrice}`,
    style: { textAlign: 'right' }
  },
  {
    id: 'maxPrice',
    Header: (
      <>
        <IntlMessages id="market.table.header.max" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => `$ ${d.maxPrice}`,
    style: { textAlign: 'right' }
  },
  {
    id: 'percFullPrice',
    Header: (
      <>
        <IntlMessages id="market.table.header.fullPrice" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => `${d.percFullPrice} %`,
    style: { textAlign: 'right' }
  },
  {
    id: 'avgMarkdownRate',
    Header: (
      <>
        <IntlMessages id="market.table.header.averageMarkdownRate" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => `${d.avgMarkdownRate} %`,
    style: { textAlign: 'right' }
  }
];

/* SEARCH GROWTH */

export const searchGrowthTableDataConfig = [
  {
    _id: '5be94a5f523ca08c5fdeed05',
    searchVolume: '959',
    searchTerms: 'boyfriend jeans',
    socialEngagement: '2018-11-01',
    trendMaturity: 'Mature',
    growth_TYLY_current: 4.4411,
    growth_TYLY_3Month: 220.84,
    growthDelta: 3.4575,
    searchPatterns: ''
  },
  {
    _id: '5be94a5f523ca08c5fdeed07',
    searchVolume: '506',
    searchTerms: 'slim jeans',
    socialEngagement: '2018-11-01',
    trendMaturity: 'Mature',
    growth_TYLY_current: 4.2724,
    growth_TYLY_3Month: 68.48,
    growthDelta: 0.7851,
    searchPatterns: ''
  },
  {
    _id: '5be94a5f523ca08c5fdeed09',
    searchVolume: '451',
    searchTerms: 'boot cut jeans',
    socialEngagement: '2018-11-01',
    trendMaturity: 'Mature',
    growth_TYLY_current: 0.3382,
    growth_TYLY_3Month: 90.58,
    growthDelta: 2.7428,
    searchPatterns: ''
  },
  {
    _id: '5be94a5f523ca08c5fdeed0b',
    searchVolume: '413',
    searchTerms: 'Skinny Jeans',
    socialEngagement: '2018-11-01',
    trendMaturity: 'Mature',
    growth_TYLY_current: 0.2681,
    growth_TYLY_3Month: 225.3,
    growthDelta: 1.172,
    searchPatterns: ''
  },
  {
    _id: '5be94a5f523ca08c5fdeed0d',
    searchVolume: '600',
    searchTerms: 'mid-rise  jeans',
    socialEngagement: '2018-11-01',
    trendMaturity: 'Growing',
    growth_TYLY_current: 4.4428,
    growth_TYLY_3Month: 275.4,
    growthDelta: -0.4277,
    searchPatterns: ''
  },
  {
    _id: '5be94a5f523ca08c5fdeed0f',
    searchVolume: '420',
    searchTerms: 'straight cut jeans',
    socialEngagement: '2018-11-01',
    trendMaturity: 'Growing',
    growth_TYLY_current: 0.9978,
    growth_TYLY_3Month: 270.49,
    growthDelta: 1.5005,
    searchPatterns: ''
  },
  {
    _id: '5be94a5f523ca08c5fdeed11',
    searchVolume: '67',
    searchTerms: 'normal Jeans',
    socialEngagement: '2018-11-01',
    trendMaturity: 'Growing',
    growth_TYLY_current: 2.2266,
    growth_TYLY_3Month: 136.31,
    growthDelta: 0.8524,
    searchPatterns: ''
  },
  {
    _id: '5be94a5f523ca08c5fdeed13',
    searchVolume: '409',
    searchTerms: 'Ultra low rise jeans',
    socialEngagement: '2018-11-01',
    trendMaturity: 'Growing',
    growth_TYLY_current: 1.3682,
    growth_TYLY_3Month: 255.65,
    growthDelta: 2.3617,
    searchPatterns: ''
  },
  {
    _id: '5be94a5f523ca08c5fdeed15',
    searchVolume: '113',
    searchTerms: 'Printed jeans',
    socialEngagement: '2018-11-01',
    trendMaturity: 'Growing',
    growth_TYLY_current: 3.3283,
    growth_TYLY_3Month: 250.28,
    growthDelta: 0.5708,
    searchPatterns: ''
  },
  {
    _id: '5be94a5f523ca08c5fdeed17',
    searchVolume: '379',
    searchTerms: 'Crochet Jeans',
    socialEngagement: '2018-11-01',
    trendMaturity: 'Mature',
    growth_TYLY_current: 3.0143,
    growth_TYLY_3Month: 213.28,
    growthDelta: 2.791,
    searchPatterns: ''
  }
];

export const searchGrowthTableColumnsConfig = [
  {
    Header: (
      <>
        <IntlMessages id="market.table.header.searchPhrase" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'first-column-header',
    accessor: 'searchTerms'
  },
  {
    Header: (
      <>
        <IntlMessages id="market.table.header.currentTrendMaturity" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: 'trendMaturity',
    style: { textAlign: 'right' }
  },
  {
    Header: (
      <>
        <IntlMessages id="market.table.header.searchVolume" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: 'searchVolume',
    style: { textAlign: 'right' }
  },
  {
    id: 'growth_TYLY_current',
    Header: (
      <>
        <IntlMessages id="market.table.header.growthTYLYCurrent" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => `${d.growth_TYLY_current} %`,
    style: { textAlign: 'right' }
  },
  {
    id: 'growth_TYLY_3Month',
    Header: (
      <>
        <IntlMessages id="market.table.header.growthTYLY3Month" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => `${d.growth_TYLY_3Month} %`,
    style: { textAlign: 'right' }
  },
  {
    id: 'growthDelta',
    Header: (
      <>
        <IntlMessages id="market.table.header.growthDelta" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => `${d.growthDelta} %`,
    style: { textAlign: 'right' }
  },
  {
    Header: (
      <>
        <IntlMessages id="market.table.header.searchPatterns" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: 'SearchPatterns',
    style: { textAlign: 'right' }
  },
  {
    Header: (
      <>
        <IntlMessages id="market.table.header.adwordsBidCompetition" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: 'searchPatterns',
    style: { textAlign: 'right' }
  }
];

/* GROWTH DELTA */

export const growthDeltaTableDataConfig = [
  {
    _id: '5be94a5f523ca08c5fdeed05',
    searchVolume: '959',
    searchTerms: 'boyfriend jeans',
    socialEngagement: '2018-11-01',
    trendMaturity: 'Mature',
    growth_TYLY_current: 4.4411,
    growth_TYLY_3Month: 220.84,
    growthDelta: 3.4575,
    searchPatterns: ''
  },
  {
    _id: '5be94a5f523ca08c5fdeed07',
    searchVolume: '506',
    searchTerms: 'slim jeans',
    socialEngagement: '2018-11-01',
    trendMaturity: 'Mature',
    growth_TYLY_current: 4.2724,
    growth_TYLY_3Month: 68.48,
    growthDelta: 0.7851,
    searchPatterns: ''
  },
  {
    _id: '5be94a5f523ca08c5fdeed09',
    searchVolume: '451',
    searchTerms: 'boot cut jeans',
    socialEngagement: '2018-11-01',
    trendMaturity: 'Mature',
    growth_TYLY_current: 0.3382,
    growth_TYLY_3Month: 90.58,
    growthDelta: 2.7428,
    searchPatterns: ''
  },
  {
    _id: '5be94a5f523ca08c5fdeed0b',
    searchVolume: '413',
    searchTerms: 'Skinny Jeans',
    socialEngagement: '2018-11-01',
    trendMaturity: 'Mature',
    growth_TYLY_current: 0.2681,
    growth_TYLY_3Month: 225.3,
    growthDelta: 1.172,
    searchPatterns: ''
  },
  {
    _id: '5be94a5f523ca08c5fdeed0d',
    searchVolume: '600',
    searchTerms: 'mid-rise  jeans',
    socialEngagement: '2018-11-01',
    trendMaturity: 'Growing',
    growth_TYLY_current: 4.4428,
    growth_TYLY_3Month: 275.4,
    growthDelta: -0.4277,
    searchPatterns: ''
  },
  {
    _id: '5be94a5f523ca08c5fdeed0f',
    searchVolume: '420',
    searchTerms: 'straight cut jeans',
    socialEngagement: '2018-11-01',
    trendMaturity: 'Growing',
    growth_TYLY_current: 0.9978,
    growth_TYLY_3Month: 270.49,
    growthDelta: 1.5005,
    searchPatterns: ''
  },
  {
    _id: '5be94a5f523ca08c5fdeed11',
    searchVolume: '67',
    searchTerms: 'normal Jeans',
    socialEngagement: '2018-11-01',
    trendMaturity: 'Growing',
    growth_TYLY_current: 2.2266,
    growth_TYLY_3Month: 136.31,
    growthDelta: 0.8524,
    searchPatterns: ''
  },
  {
    _id: '5be94a5f523ca08c5fdeed13',
    searchVolume: '409',
    searchTerms: 'Ultra low rise jeans',
    socialEngagement: '2018-11-01',
    trendMaturity: 'Growing',
    growth_TYLY_current: 1.3682,
    growth_TYLY_3Month: 255.65,
    growthDelta: 2.3617,
    searchPatterns: ''
  },
  {
    _id: '5be94a5f523ca08c5fdeed15',
    searchVolume: '113',
    searchTerms: 'Printed jeans',
    socialEngagement: '2018-11-01',
    trendMaturity: 'Growing',
    growth_TYLY_current: 3.3283,
    growth_TYLY_3Month: 250.28,
    growthDelta: 0.5708,
    searchPatterns: ''
  },
  {
    _id: '5be94a5f523ca08c5fdeed17',
    searchVolume: '379',
    searchTerms: 'Crochet Jeans',
    socialEngagement: '2018-11-01',
    trendMaturity: 'Mature',
    growth_TYLY_current: 3.0143,
    growth_TYLY_3Month: 213.28,
    growthDelta: 2.791,
    searchPatterns: ''
  }
];

export const growthDeltaTableColumnsConfig = [
  {
    Header: (
      <>
        <IntlMessages id="market.table.header.searchPhrase" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'first-column-header',
    accessor: 'searchTerms'
  },
  {
    Header: (
      <>
        <IntlMessages id="market.table.header.currentTrendMaturity" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: 'trendMaturity',
    style: { textAlign: 'right' }
  },
  {
    Header: (
      <>
        <IntlMessages id="market.table.header.searchVolume" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: 'searchVolume',
    style: { textAlign: 'right' }
  },
  {
    id: 'growth_TYLY_current',
    Header: (
      <>
        <IntlMessages id="market.table.header.growthTYLYCurrent" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => `${d.growth_TYLY_current} %`,
    style: { textAlign: 'right' }
  },
  {
    id: 'growth_TYLY_3Month',
    Header: (
      <>
        <IntlMessages id="market.table.header.growthTYLY3Month" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => `${d.growth_TYLY_3Month} %`,
    style: { textAlign: 'right' }
  },
  {
    id: 'growthDelta',
    Header: (
      <>
        <IntlMessages id="market.table.header.growthDelta" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => `${d.growthDelta} %`,
    style: { textAlign: 'right' }
  },
  {
    Header: (
      <>
        <IntlMessages id="market.table.header.searchPatterns" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: 'SearchPatterns',
    style: { textAlign: 'right' }
  },
  {
    Header: (
      <>
        <IntlMessages id="market.table.header.adwordsBidCompetition" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: 'searchPatterns',
    style: { textAlign: 'right' }
  }
];

/* VOLUMES */

export const volumeTableDataConfig = [
  {
    _id: '5be94a5f523ca08c5fdeed05',
    searchVolume: '959',
    searchTerms: 'boyfriend jeans',
    socialEngagement: '2018-11-01',
    trendMaturity: 'Mature',
    growth_TYLY_current: 4.4411,
    growth_TYLY_3Month: 220.84,
    growthDelta: 3.4575,
    searchPatterns: ''
  },
  {
    _id: '5be94a5f523ca08c5fdeed07',
    searchVolume: '506',
    searchTerms: 'slim jeans',
    socialEngagement: '2018-11-01',
    trendMaturity: 'Mature',
    growth_TYLY_current: 4.2724,
    growth_TYLY_3Month: 68.48,
    growthDelta: 0.7851,
    searchPatterns: ''
  },
  {
    _id: '5be94a5f523ca08c5fdeed09',
    searchVolume: '451',
    searchTerms: 'boot cut jeans',
    socialEngagement: '2018-11-01',
    trendMaturity: 'Mature',
    growth_TYLY_current: 0.3382,
    growth_TYLY_3Month: 90.58,
    growthDelta: 2.7428,
    searchPatterns: ''
  },
  {
    _id: '5be94a5f523ca08c5fdeed0b',
    searchVolume: '413',
    searchTerms: 'Skinny Jeans',
    socialEngagement: '2018-11-01',
    trendMaturity: 'Mature',
    growth_TYLY_current: 0.2681,
    growth_TYLY_3Month: 225.3,
    growthDelta: 1.172,
    searchPatterns: ''
  },
  {
    _id: '5be94a5f523ca08c5fdeed0d',
    searchVolume: '600',
    searchTerms: 'mid-rise  jeans',
    socialEngagement: '2018-11-01',
    trendMaturity: 'Growing',
    growth_TYLY_current: 4.4428,
    growth_TYLY_3Month: 275.4,
    growthDelta: -0.4277,
    searchPatterns: ''
  },
  {
    _id: '5be94a5f523ca08c5fdeed0f',
    searchVolume: '420',
    searchTerms: 'straight cut jeans',
    socialEngagement: '2018-11-01',
    trendMaturity: 'Growing',
    growth_TYLY_current: 0.9978,
    growth_TYLY_3Month: 270.49,
    growthDelta: 1.5005,
    searchPatterns: ''
  },
  {
    _id: '5be94a5f523ca08c5fdeed11',
    searchVolume: '67',
    searchTerms: 'normal Jeans',
    socialEngagement: '2018-11-01',
    trendMaturity: 'Growing',
    growth_TYLY_current: 2.2266,
    growth_TYLY_3Month: 136.31,
    growthDelta: 0.8524,
    searchPatterns: ''
  },
  {
    _id: '5be94a5f523ca08c5fdeed13',
    searchVolume: '409',
    searchTerms: 'Ultra low rise jeans',
    socialEngagement: '2018-11-01',
    trendMaturity: 'Growing',
    growth_TYLY_current: 1.3682,
    growth_TYLY_3Month: 255.65,
    growthDelta: 2.3617,
    searchPatterns: ''
  },
  {
    _id: '5be94a5f523ca08c5fdeed15',
    searchVolume: '113',
    searchTerms: 'Printed jeans',
    socialEngagement: '2018-11-01',
    trendMaturity: 'Growing',
    growth_TYLY_current: 3.3283,
    growth_TYLY_3Month: 250.28,
    growthDelta: 0.5708,
    searchPatterns: ''
  },
  {
    _id: '5be94a5f523ca08c5fdeed17',
    searchVolume: '379',
    searchTerms: 'Crochet Jeans',
    socialEngagement: '2018-11-01',
    trendMaturity: 'Mature',
    growth_TYLY_current: 3.0143,
    growth_TYLY_3Month: 213.28,
    growthDelta: 2.791,
    searchPatterns: ''
  }
];

export const volumeTableColumnsConfig = [
  {
    Header: (
      <>
        <IntlMessages id="market.table.header.searchPhrase" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'first-column-header',
    accessor: 'searchTerms'
  },
  {
    Header: (
      <>
        <IntlMessages id="market.table.header.currentTrendMaturity" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: 'trendMaturity',
    style: { textAlign: 'right' }
  },
  {
    Header: (
      <>
        <IntlMessages id="market.table.header.searchVolume" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: 'searchVolume',
    style: { textAlign: 'right' }
  },
  {
    id: 'growth_TYLY_current',
    Header: (
      <>
        <IntlMessages id="market.table.header.growthTYLYCurrent" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => `${d.growth_TYLY_current} %`,
    style: { textAlign: 'right' }
  },
  {
    id: 'growth_TYLY_3Month',
    Header: (
      <>
        <IntlMessages id="market.table.header.growthTYLY3Month" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => `${d.growth_TYLY_3Month} %`,
    style: { textAlign: 'right' }
  },
  {
    id: 'growthDelta',
    Header: (
      <>
        <IntlMessages id="market.table.header.growthDelta" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => `${d.growthDelta} %`,
    style: { textAlign: 'right' }
  },
  {
    Header: (
      <>
        <IntlMessages id="market.table.header.searchPatterns" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: 'SearchPatterns',
    style: { textAlign: 'right' }
  },
  {
    Header: (
      <>
        <IntlMessages id="market.table.header.adwordsBidCompetition" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: 'searchPatterns',
    style: { textAlign: 'right' }
  }
];

/* FAN COUNT */

export const fanCountTableDataConfig = [
  {
    _id: '5be9f27f523ca08c5fdf6fc1',
    socialAccount: 'Prada',
    socialPostDate: '2018-11-01',
    socialSourceStats: [
      { socialSource: 'facebook', socialFanCount: 257393 },
      { socialSource: 'Total', socialFanCount: 956760 },
      { socialSource: 'instagram', socialFanCount: 56760 },
      { socialSource: 'twitter', socialFanCount: 250094 }
    ]
  },
  {
    _id: '5be9f27f523ca08c5fdf6fc3',
    socialAccount: 'Fendi',
    socialPostDate: '2018-11-01',
    socialSourceStats: [
      { socialSource: 'facebook', socialFanCount: 161570 },
      { socialSource: 'Total', socialFanCount: 9245715 },
      { socialSource: 'instagram', socialFanCount: 245715 },
      { socialSource: 'twitter', socialFanCount: 138031 }
    ]
  },
  {
    _id: '5be9f27f523ca08c5fdf6fc5',
    socialAccount: 'Versace',
    socialPostDate: '2018-11-01',
    socialSourceStats: [
      { socialSource: 'facebook', socialFanCount: 235060 },
      { socialSource: 'Total', socialFanCount: 963167 },
      { socialSource: 'instagram', socialFanCount: 63167 },
      { socialSource: 'twitter', socialFanCount: 90728 }
    ]
  },
  {
    _id: '5be9f27f523ca08c5fdf6fc7',
    socialAccount: 'Vetements',
    socialPostDate: '2018-11-01',
    socialSourceStats: [
      { socialSource: 'facebook', socialFanCount: 271316 },
      { socialSource: 'Total', socialFanCount: 9165425 },
      { socialSource: 'instagram', socialFanCount: 165425 },
      { socialSource: 'twitter', socialFanCount: 87691 }
    ]
  },
  {
    _id: '5be9f27f523ca08c5fdf6fc9',
    socialAccount: 'Dolce & Gabbana',
    socialPostDate: '2018-11-01',
    socialSourceStats: [
      { socialSource: 'facebook', socialFanCount: 307637 },
      { socialSource: 'Total', socialFanCount: 923030 },
      { socialSource: 'instagram', socialFanCount: 23030 },
      { socialSource: 'twitter', socialFanCount: 309022 }
    ]
  },
  {
    _id: '5be9f27f523ca08c5fdf6fcb',
    socialAccount: 'Givenchy',
    socialPostDate: '2018-11-01',
    socialSourceStats: [
      { socialSource: 'facebook', socialFanCount: 37134 },
      { socialSource: 'Total', socialFanCount: 9124747 },
      { socialSource: 'instagram', socialFanCount: 124747 },
      { socialSource: 'twitter', socialFanCount: 105332 }
    ]
  },
  {
    _id: '5be9f27f523ca08c5fdf6fcd',
    socialAccount: 'Balenciaga',
    socialPostDate: '2018-11-01',
    socialSourceStats: [
      { socialSource: 'facebook', socialFanCount: 32197 },
      { socialSource: 'Total', socialFanCount: 9222166 },
      { socialSource: 'instagram', socialFanCount: 222166 },
      { socialSource: 'twitter', socialFanCount: 165944 }
    ]
  },
  {
    _id: '5be9f27f523ca08c5fdf6fcf',
    socialAccount: 'Off-White',
    socialPostDate: '2018-11-01',
    socialSourceStats: [
      { socialSource: 'facebook', socialFanCount: 13443 },
      { socialSource: 'Total', socialFanCount: 962396 },
      { socialSource: 'instagram', socialFanCount: 62396 },
      { socialSource: 'twitter', socialFanCount: 31367 }
    ]
  },
  {
    _id: '5be9f27f523ca08c5fdf6fd1',
    socialAccount: 'Kate Spade',
    socialPostDate: '2018-11-01',
    socialSourceStats: [
      { socialSource: 'facebook', socialFanCount: 359127 },
      { socialSource: 'Total', socialFanCount: 9250172 },
      { socialSource: 'instagram', socialFanCount: 250172 },
      { socialSource: 'twitter', socialFanCount: 125097 }
    ]
  },
  {
    _id: '5be9f27f523ca08c5fdf6fd3',
    socialAccount: 'Michael Kors',
    socialPostDate: '2018-11-01',
    socialSourceStats: [
      { socialSource: 'facebook', socialFanCount: 142183 },
      { socialSource: 'Total', socialFanCount: 9122231 },
      { socialSource: 'instagram', socialFanCount: 122231 },
      { socialSource: 'twitter', socialFanCount: 174466 }
    ]
  },
  {
    _id: '5be9f27f523ca08c5fdf6fd5',
    socialAccount: 'nike',
    socialPostDate: '2018-11-01',
    socialSourceStats: [
      { socialSource: 'facebook', socialFanCount: 322267 },
      { socialSource: 'Total', socialFanCount: 960791 },
      { socialSource: 'instagram', socialFanCount: 60791 },
      { socialSource: 'twitter', socialFanCount: 95864 }
    ]
  }
];

export const fanCountTableColumnsConfig = [
  {
    Header: (
      <>
        <IntlMessages id="market.table.header.brand" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'first-column-header',
    accessor: 'socialAccount'
  },
  {
    id: 'facebook',
    Header: (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end'
        }}
      >
        <div
          style={{
            background: `url(${facebookLogo})`,
            width: '15px',
            height: '15px',
            margin: '0 3px 0 0'
          }}
        />
        <IntlMessages id="market.table.header.facebook" />
        <SortArrows
          height="10px"
          width="10px"
          style={{ margin: '0 0 0 3px' }}
        />
      </div>
    ),
    headerClassName: 'column-header',
    accessor: d => d.socialSourceStats[0].socialFanCount,
    Cell: props => (
      <span>{props.value.toLocaleString(props.tdProps.rest.localeId)}</span>
    ),
    style: { textAlign: 'right' }
  },
  {
    id: 'twitter',
    Header: (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end'
        }}
      >
        <div
          style={{
            background: `url(${twitterLogo})`,
            width: '15px',
            height: '15px',
            margin: '0 3px 0 0'
          }}
        />
        <IntlMessages id="market.table.header.twitter" />
        <SortArrows
          height="10px"
          width="10px"
          style={{ margin: '0 0 0 3px' }}
        />
      </div>
    ),
    headerClassName: 'column-header',
    accessor: d => d.socialSourceStats[3].socialFanCount,
    Cell: props => (
      <span>{props.value.toLocaleString(props.tdProps.rest.localeId)}</span>
    ),
    style: { textAlign: 'right' }
  },
  {
    id: 'instagram',
    Header: (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end'
        }}
      >
        <div
          style={{
            background: `url(${instagramLogo})`,
            width: '15px',
            height: '15px',
            margin: '0 3px 0 0'
          }}
        />
        <IntlMessages id="market.table.header.instagram" />
        <SortArrows
          height="10px"
          width="10px"
          style={{ margin: '0 0 0 3px' }}
        />
      </div>
    ),
    headerClassName: 'column-header',
    accessor: d => d.socialSourceStats[2].socialFanCount,
    Cell: props => (
      <span>{props.value.toLocaleString(props.tdProps.rest.localeId)}</span>
    ),
    style: { textAlign: 'right' }
  },
  {
    id: 'total',
    Header: (
      <>
        <IntlMessages id="market.table.header.total" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => d.socialSourceStats[1].socialFanCount,
    Cell: props => (
      <span>{props.value.toLocaleString(props.tdProps.rest.localeId)}</span>
    ),
    style: { textAlign: 'right' }
  }
];

/* SOCIAL ENGAGEMENT */

export const socialEngagementTableDataConfig = [
  {
    _id: '5be9f27f523ca08c5fdf6fc1',
    socialAccount: 'Prada',
    socialPostDate: '2018-11-01',
    socialSourceStats: [
      { socialSource: 'facebook', socialFanCount: 257393 },
      { socialSource: 'Total', socialFanCount: 956760 },
      { socialSource: 'instagram', socialFanCount: 56760 },
      { socialSource: 'twitter', socialFanCount: 250094 }
    ]
  },
  {
    _id: '5be9f27f523ca08c5fdf6fc3',
    socialAccount: 'Fendi',
    socialPostDate: '2018-11-01',
    socialSourceStats: [
      { socialSource: 'facebook', socialFanCount: 161570 },
      { socialSource: 'Total', socialFanCount: 9245715 },
      { socialSource: 'instagram', socialFanCount: 245715 },
      { socialSource: 'twitter', socialFanCount: 138031 }
    ]
  },
  {
    _id: '5be9f27f523ca08c5fdf6fc5',
    socialAccount: 'Versace',
    socialPostDate: '2018-11-01',
    socialSourceStats: [
      { socialSource: 'facebook', socialFanCount: 235060 },
      { socialSource: 'Total', socialFanCount: 963167 },
      { socialSource: 'instagram', socialFanCount: 63167 },
      { socialSource: 'twitter', socialFanCount: 90728 }
    ]
  },
  {
    _id: '5be9f27f523ca08c5fdf6fc7',
    socialAccount: 'Vetements',
    socialPostDate: '2018-11-01',
    socialSourceStats: [
      { socialSource: 'facebook', socialFanCount: 271316 },
      { socialSource: 'Total', socialFanCount: 9165425 },
      { socialSource: 'instagram', socialFanCount: 165425 },
      { socialSource: 'twitter', socialFanCount: 87691 }
    ]
  },
  {
    _id: '5be9f27f523ca08c5fdf6fc9',
    socialAccount: 'Dolce & Gabbana',
    socialPostDate: '2018-11-01',
    socialSourceStats: [
      { socialSource: 'facebook', socialFanCount: 307637 },
      { socialSource: 'Total', socialFanCount: 923030 },
      { socialSource: 'instagram', socialFanCount: 23030 },
      { socialSource: 'twitter', socialFanCount: 309022 }
    ]
  },
  {
    _id: '5be9f27f523ca08c5fdf6fcb',
    socialAccount: 'Givenchy',
    socialPostDate: '2018-11-01',
    socialSourceStats: [
      { socialSource: 'facebook', socialFanCount: 37134 },
      { socialSource: 'Total', socialFanCount: 9124747 },
      { socialSource: 'instagram', socialFanCount: 124747 },
      { socialSource: 'twitter', socialFanCount: 105332 }
    ]
  },
  {
    _id: '5be9f27f523ca08c5fdf6fcd',
    socialAccount: 'Balenciaga',
    socialPostDate: '2018-11-01',
    socialSourceStats: [
      { socialSource: 'facebook', socialFanCount: 32197 },
      { socialSource: 'Total', socialFanCount: 9222166 },
      { socialSource: 'instagram', socialFanCount: 222166 },
      { socialSource: 'twitter', socialFanCount: 165944 }
    ]
  },
  {
    _id: '5be9f27f523ca08c5fdf6fcf',
    socialAccount: 'Off-White',
    socialPostDate: '2018-11-01',
    socialSourceStats: [
      { socialSource: 'facebook', socialFanCount: 13443 },
      { socialSource: 'Total', socialFanCount: 962396 },
      { socialSource: 'instagram', socialFanCount: 62396 },
      { socialSource: 'twitter', socialFanCount: 31367 }
    ]
  },
  {
    _id: '5be9f27f523ca08c5fdf6fd1',
    socialAccount: 'Kate Spade',
    socialPostDate: '2018-11-01',
    socialSourceStats: [
      { socialSource: 'facebook', socialFanCount: 359127 },
      { socialSource: 'Total', socialFanCount: 9250172 },
      { socialSource: 'instagram', socialFanCount: 250172 },
      { socialSource: 'twitter', socialFanCount: 125097 }
    ]
  },
  {
    _id: '5be9f27f523ca08c5fdf6fd3',
    socialAccount: 'Michael Kors',
    socialPostDate: '2018-11-01',
    socialSourceStats: [
      { socialSource: 'facebook', socialFanCount: 142183 },
      { socialSource: 'Total', socialFanCount: 9122231 },
      { socialSource: 'instagram', socialFanCount: 122231 },
      { socialSource: 'twitter', socialFanCount: 174466 }
    ]
  },
  {
    _id: '5be9f27f523ca08c5fdf6fd5',
    socialAccount: 'nike',
    socialPostDate: '2018-11-01',
    socialSourceStats: [
      { socialSource: 'facebook', socialFanCount: 322267 },
      { socialSource: 'Total', socialFanCount: 960791 },
      { socialSource: 'instagram', socialFanCount: 60791 },
      { socialSource: 'twitter', socialFanCount: 95864 }
    ]
  }
];

export const socialEngagementTableColumnsConfig = [
  {
    Header: (
      <>
        <IntlMessages id="market.table.header.brand" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'first-column-header',
    accessor: 'socialAccount'
  },
  {
    id: 'facebook',
    Header: (
      <>
        <IntlMessages id="market.table.header.facebook" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => d.socialSourceStats[0].socialFanCount,
    Cell: props => (
      <span>{props.value.toLocaleString(props.tdProps.rest.localeId)}</span>
    ),
    style: { textAlign: 'right' }
  },
  {
    id: 'twitter',
    Header: (
      <>
        <IntlMessages id="market.table.header.twitter" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => d.socialSourceStats[3].socialFanCount,
    Cell: props => (
      <span>{props.value.toLocaleString(props.tdProps.rest.localeId)}</span>
    ),
    style: { textAlign: 'right' }
  },
  {
    id: 'instagram',
    Header: (
      <>
        <IntlMessages id="market.table.header.instagram" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => d.socialSourceStats[2].socialFanCount,
    Cell: props => (
      <span>{props.value.toLocaleString(props.tdProps.rest.localeId)}</span>
    ),
    style: { textAlign: 'right' }
  },
  {
    id: 'total',
    Header: (
      <>
        <IntlMessages id="market.table.header.total" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => d.socialSourceStats[1].socialFanCount,
    Cell: props => (
      <span>{props.value.toLocaleString(props.tdProps.rest.localeId)}</span>
    ),
    style: { textAlign: 'right' }
  },
  {
    id: 'percentage',
    Header: (
      <>
        <IntlMessages id="market.table.header.percentage" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: 'No data yet',
    style: { textAlign: 'right' }
  }
];

/* SOCIAL BUZZ */

export const socialBuzzTableDataConfig = [
  {
    _id: '5be9f27f523ca08c5fdf6fc1',
    socialAccount: 'Prada',
    socialPostDate: '2018-11-01',
    socialSourceStats: [
      { socialSource: 'facebook', socialFanCount: 257393 },
      { socialSource: 'Total', socialFanCount: 956760 },
      { socialSource: 'instagram', socialFanCount: 56760 },
      { socialSource: 'twitter', socialFanCount: 250094 }
    ]
  },
  {
    _id: '5be9f27f523ca08c5fdf6fc3',
    socialAccount: 'Fendi',
    socialPostDate: '2018-11-01',
    socialSourceStats: [
      { socialSource: 'facebook', socialFanCount: 161570 },
      { socialSource: 'Total', socialFanCount: 9245715 },
      { socialSource: 'instagram', socialFanCount: 245715 },
      { socialSource: 'twitter', socialFanCount: 138031 }
    ]
  },
  {
    _id: '5be9f27f523ca08c5fdf6fc5',
    socialAccount: 'Versace',
    socialPostDate: '2018-11-01',
    socialSourceStats: [
      { socialSource: 'facebook', socialFanCount: 235060 },
      { socialSource: 'Total', socialFanCount: 963167 },
      { socialSource: 'instagram', socialFanCount: 63167 },
      { socialSource: 'twitter', socialFanCount: 90728 }
    ]
  },
  {
    _id: '5be9f27f523ca08c5fdf6fc7',
    socialAccount: 'Vetements',
    socialPostDate: '2018-11-01',
    socialSourceStats: [
      { socialSource: 'facebook', socialFanCount: 271316 },
      { socialSource: 'Total', socialFanCount: 9165425 },
      { socialSource: 'instagram', socialFanCount: 165425 },
      { socialSource: 'twitter', socialFanCount: 87691 }
    ]
  },
  {
    _id: '5be9f27f523ca08c5fdf6fc9',
    socialAccount: 'Dolce & Gabbana',
    socialPostDate: '2018-11-01',
    socialSourceStats: [
      { socialSource: 'facebook', socialFanCount: 307637 },
      { socialSource: 'Total', socialFanCount: 923030 },
      { socialSource: 'instagram', socialFanCount: 23030 },
      { socialSource: 'twitter', socialFanCount: 309022 }
    ]
  },
  {
    _id: '5be9f27f523ca08c5fdf6fcb',
    socialAccount: 'Givenchy',
    socialPostDate: '2018-11-01',
    socialSourceStats: [
      { socialSource: 'facebook', socialFanCount: 37134 },
      { socialSource: 'Total', socialFanCount: 9124747 },
      { socialSource: 'instagram', socialFanCount: 124747 },
      { socialSource: 'twitter', socialFanCount: 105332 }
    ]
  },
  {
    _id: '5be9f27f523ca08c5fdf6fcd',
    socialAccount: 'Balenciaga',
    socialPostDate: '2018-11-01',
    socialSourceStats: [
      { socialSource: 'facebook', socialFanCount: 32197 },
      { socialSource: 'Total', socialFanCount: 9222166 },
      { socialSource: 'instagram', socialFanCount: 222166 },
      { socialSource: 'twitter', socialFanCount: 165944 }
    ]
  },
  {
    _id: '5be9f27f523ca08c5fdf6fcf',
    socialAccount: 'Off-White',
    socialPostDate: '2018-11-01',
    socialSourceStats: [
      { socialSource: 'facebook', socialFanCount: 13443 },
      { socialSource: 'Total', socialFanCount: 962396 },
      { socialSource: 'instagram', socialFanCount: 62396 },
      { socialSource: 'twitter', socialFanCount: 31367 }
    ]
  },
  {
    _id: '5be9f27f523ca08c5fdf6fd1',
    socialAccount: 'Kate Spade',
    socialPostDate: '2018-11-01',
    socialSourceStats: [
      { socialSource: 'facebook', socialFanCount: 359127 },
      { socialSource: 'Total', socialFanCount: 9250172 },
      { socialSource: 'instagram', socialFanCount: 250172 },
      { socialSource: 'twitter', socialFanCount: 125097 }
    ]
  },
  {
    _id: '5be9f27f523ca08c5fdf6fd3',
    socialAccount: 'Michael Kors',
    socialPostDate: '2018-11-01',
    socialSourceStats: [
      { socialSource: 'facebook', socialFanCount: 142183 },
      { socialSource: 'Total', socialFanCount: 9122231 },
      { socialSource: 'instagram', socialFanCount: 122231 },
      { socialSource: 'twitter', socialFanCount: 174466 }
    ]
  },
  {
    _id: '5be9f27f523ca08c5fdf6fd5',
    socialAccount: 'nike',
    socialPostDate: '2018-11-01',
    socialSourceStats: [
      { socialSource: 'facebook', socialFanCount: 322267 },
      { socialSource: 'Total', socialFanCount: 960791 },
      { socialSource: 'instagram', socialFanCount: 60791 },
      { socialSource: 'twitter', socialFanCount: 95864 }
    ]
  }
];

export const socialBuzzTableColumnsConfig = [
  {
    Header: <IntlMessages id="market.table.header.brand" />,
    resizable: false,
    headerStyle: { fontWeight: 'bold', boxShadow: 'none', textAlign: 'left' },
    accessor: 'socialAccount' // String-based value accessors!
  },
  {
    id: 'postCount',
    Header: <IntlMessages id="market.table.header.postCount" />,
    resizable: false,
    headerStyle: { fontWeight: 'bold', boxShadow: 'none', textAlign: 'right' },
    accessor: d => d.postCount,
    style: { textAlign: 'right' } // String-based value accessors!
  },
  {
    id: 'socialActions',
    Header: <IntlMessages id="market.table.header.socialActions" />,
    resizable: false,
    headerStyle: { fontWeight: 'bold', boxShadow: 'none', textAlign: 'right' },
    accessor: d => d.socialActions,
    style: { textAlign: 'right' } // String-based value accessors!
  },
  {
    id: 'socialActionsByPost',
    Header: <IntlMessages id="market.table.header.socialActionsByPost" />,
    resizable: false,
    headerStyle: { fontWeight: 'bold', boxShadow: 'none', textAlign: 'right' },
    accessor: 'No data yet',
    style: { textAlign: 'right' } // String-based value accessors!
  },
  {
    id: 'postCountPercent',
    Header: <IntlMessages id="market.table.header.postCountPercent" />,
    resizable: false,
    headerStyle: { fontWeight: 'bold', boxShadow: 'none', textAlign: 'right' },
    accessor: 'No data yet',
    style: { textAlign: 'right' } // String-based value accessors!
  },
  {
    id: 'socialActionsPercent',
    Header: <IntlMessages id="market.table.header.socialActionsPercent" />,
    resizable: false,
    headerStyle: { fontWeight: 'bold', boxShadow: 'none', textAlign: 'right' },
    accessor: 'No data yet',
    style: { textAlign: 'right' } // String-based value accessors!
  }
];

/* INSIGHTS */

export const insightsTableDataConfig = [
  {
    _id: '5bea9def523ca08c5fdf7c38',
    socialAccount: 'Prada',
    socialPostDate: '2018-11-01',
    socialActions: 14480,
    postCount: 182,
    socialSource: 'facebook',
    actionPosts: 15.03,
    postCountPerc: 12.02,
    socialActionPerc: 12.03,
    engagmentPerc: 15.14,
    socialEngagement: 39596
  },
  {
    _id: '5bea9def523ca08c5fdf7c3a',
    socialAccount: 'Fendi',
    socialPostDate: '2018-11-01',
    socialActions: 39582,
    postCount: 147,
    socialSource: 'facebook',
    actionPosts: 12.5,
    postCountPerc: 11.16,
    socialActionPerc: 13.36,
    engagmentPerc: 17.81,
    socialEngagement: 40922
  },
  {
    _id: '5bea9def523ca08c5fdf7c3c',
    socialAccount: 'Versace',
    socialPostDate: '2018-11-01',
    socialActions: 8346,
    postCount: 149,
    socialSource: 'facebook',
    actionPosts: 11.38,
    postCountPerc: 10.64,
    socialActionPerc: 13.56,
    engagmentPerc: 18.71,
    socialEngagement: 22103
  },
  {
    _id: '5bea9def523ca08c5fdf7c3e',
    socialAccount: 'Vetements',
    socialPostDate: '2018-11-01',
    socialActions: 28505,
    postCount: 90,
    socialSource: 'facebook',
    actionPosts: 13.18,
    postCountPerc: 12.81,
    socialActionPerc: 13.2,
    engagmentPerc: 15.4,
    socialEngagement: 13606
  },
  {
    _id: '5bea9def523ca08c5fdf7c40',
    socialAccount: 'Dolce & Gabbana',
    socialPostDate: '2018-11-01',
    socialActions: 24832,
    postCount: 126,
    socialSource: 'facebook',
    actionPosts: 17.93,
    postCountPerc: 14.13,
    socialActionPerc: 14.59,
    engagmentPerc: 10.57,
    socialEngagement: 17680
  },
  {
    _id: '5bea9def523ca08c5fdf7c42',
    socialAccount: 'Givenchy',
    socialPostDate: '2018-11-01',
    socialActions: 23415,
    postCount: 123,
    socialSource: 'facebook',
    actionPosts: 17.91,
    postCountPerc: 16.86,
    socialActionPerc: 18.16,
    engagmentPerc: 10.35,
    socialEngagement: 9077
  },
  {
    _id: '5bea9def523ca08c5fdf7c44',
    socialAccount: 'Balenciaga',
    socialPostDate: '2018-11-01',
    socialActions: 23884,
    postCount: 57,
    socialSource: 'facebook',
    actionPosts: 19.6,
    postCountPerc: 12.51,
    socialActionPerc: 16.04,
    engagmentPerc: 15.2,
    socialEngagement: 24616
  },
  {
    _id: '5bea9def523ca08c5fdf7c46',
    socialAccount: 'Off-White',
    socialPostDate: '2018-11-01',
    socialActions: 23610,
    postCount: 135,
    socialSource: 'facebook',
    actionPosts: 19.45,
    postCountPerc: 17.32,
    socialActionPerc: 12.55,
    engagmentPerc: 11.87,
    socialEngagement: 12001
  },
  {
    _id: '5bea9def523ca08c5fdf7c48',
    socialAccount: 'Kate Spade',
    socialPostDate: '2018-11-01',
    socialActions: 20154,
    postCount: 33,
    socialSource: 'facebook',
    actionPosts: 17.87,
    postCountPerc: 13.73,
    socialActionPerc: 10.11,
    engagmentPerc: 13.05,
    socialEngagement: 606
  },
  {
    _id: '5bea9def523ca08c5fdf7c4a',
    socialAccount: 'Michael Kors',
    socialPostDate: '2018-11-01',
    socialActions: 35556,
    postCount: 120,
    socialSource: 'facebook',
    actionPosts: 15.75,
    postCountPerc: 17.4,
    socialActionPerc: 15.26,
    engagmentPerc: 17.6,
    socialEngagement: 38426
  },
  {
    _id: '5bea9def523ca08c5fdf7c4c',
    socialAccount: 'nike',
    socialPostDate: '2018-11-01',
    socialActions: 4372,
    postCount: 71,
    socialSource: 'facebook',
    actionPosts: 12.82,
    postCountPerc: 14.33,
    socialActionPerc: 14.48,
    engagmentPerc: 15.81,
    socialEngagement: 13722
  },
  {
    _id: '5bea9def523ca08c5fdf7c4e',
    socialAccount: 'Prada',
    socialPostDate: '2018-11-01',
    socialActions: 30702,
    postCount: 97,
    socialSource: 'instagram',
    actionPosts: 14.12,
    postCountPerc: 18.92,
    socialActionPerc: 16.83,
    engagmentPerc: 15.65,
    socialEngagement: 7067
  },
  {
    _id: '5bea9def523ca08c5fdf7c50',
    socialAccount: 'Fendi',
    socialPostDate: '2018-11-01',
    socialActions: 16392,
    postCount: 52,
    socialSource: 'instagram',
    actionPosts: 12.06,
    postCountPerc: 13.71,
    socialActionPerc: 19.32,
    engagmentPerc: 18.16,
    socialEngagement: 29347
  },
  {
    _id: '5bea9def523ca08c5fdf7c52',
    socialAccount: 'Versace',
    socialPostDate: '2018-11-01',
    socialActions: 18136,
    postCount: 76,
    socialSource: 'instagram',
    actionPosts: 19.37,
    postCountPerc: 13.85,
    socialActionPerc: 13.51,
    engagmentPerc: 12.13,
    socialEngagement: 6486
  },
  {
    _id: '5bea9def523ca08c5fdf7c54',
    socialAccount: 'Vetements',
    socialPostDate: '2018-11-01',
    socialActions: 16279,
    postCount: 96,
    socialSource: 'instagram',
    actionPosts: 10.65,
    postCountPerc: 15.14,
    socialActionPerc: 11.5,
    engagmentPerc: 19.08,
    socialEngagement: 23480
  },
  {
    _id: '5bea9def523ca08c5fdf7c56',
    socialAccount: 'Dolce & Gabbana',
    socialPostDate: '2018-11-01',
    socialActions: 5638,
    postCount: 94,
    socialSource: 'instagram',
    actionPosts: 18.11,
    postCountPerc: 18.5,
    socialActionPerc: 15.2,
    engagmentPerc: 14.58,
    socialEngagement: 43745
  },
  {
    _id: '5bea9def523ca08c5fdf7c58',
    socialAccount: 'Givenchy',
    socialPostDate: '2018-11-01',
    socialActions: 30100,
    postCount: 140,
    socialSource: 'instagram',
    actionPosts: 14.35,
    postCountPerc: 16.62,
    socialActionPerc: 16.99,
    engagmentPerc: 18.66,
    socialEngagement: 4536
  },
  {
    _id: '5bea9def523ca08c5fdf7c5a',
    socialAccount: 'Balenciaga',
    socialPostDate: '2018-11-01',
    socialActions: 45219,
    postCount: 121,
    socialSource: 'instagram',
    actionPosts: 14.26,
    postCountPerc: 11.3,
    socialActionPerc: 11.42,
    engagmentPerc: 11.59,
    socialEngagement: 10229
  },
  {
    _id: '5bea9def523ca08c5fdf7c5c',
    socialAccount: 'Off-White',
    socialPostDate: '2018-11-01',
    socialActions: 26446,
    postCount: 189,
    socialSource: 'instagram',
    actionPosts: 14.76,
    postCountPerc: 19.55,
    socialActionPerc: 19.86,
    engagmentPerc: 18.08,
    socialEngagement: 36263
  },
  {
    _id: '5bea9def523ca08c5fdf7c5e',
    socialAccount: 'Kate Spade',
    socialPostDate: '2018-10-01',
    socialActions: 36447,
    postCount: 43,
    socialSource: 'instagram',
    actionPosts: 19.03,
    postCountPerc: 19.92,
    socialActionPerc: 17.85,
    engagmentPerc: 14.5,
    socialEngagement: 31301
  },
  {
    _id: '5bea9def523ca08c5fdf7c60',
    socialAccount: 'Michael Kors',
    socialPostDate: '2018-10-01',
    socialActions: 1585,
    postCount: 157,
    socialSource: 'instagram',
    actionPosts: 12.98,
    postCountPerc: 17.03,
    socialActionPerc: 15.66,
    engagmentPerc: 12.86,
    socialEngagement: 32778
  },
  {
    _id: '5bea9def523ca08c5fdf7c62',
    socialAccount: 'nike',
    socialPostDate: '2018-10-01',
    socialActions: 27796,
    postCount: 105,
    socialSource: 'instagram',
    actionPosts: 18.85,
    postCountPerc: 18.6,
    socialActionPerc: 16.4,
    engagmentPerc: 13.43,
    socialEngagement: 8215
  },
  {
    _id: '5bea9def523ca08c5fdf7c64',
    socialAccount: 'Prada',
    socialPostDate: '2018-10-01',
    socialActions: 38701,
    postCount: 130,
    socialSource: 'twitter',
    actionPosts: 14.62,
    postCountPerc: 18.22,
    socialActionPerc: 19.35,
    engagmentPerc: 12.64,
    socialEngagement: 4926
  },
  {
    _id: '5bea9def523ca08c5fdf7c66',
    socialAccount: 'Fendi',
    socialPostDate: '2018-10-01',
    socialActions: 8934,
    postCount: 87,
    socialSource: 'twitter',
    actionPosts: 12.31,
    postCountPerc: 10.42,
    socialActionPerc: 19.93,
    engagmentPerc: 10.25,
    socialEngagement: 33100
  },
  {
    _id: '5bea9def523ca08c5fdf7c68',
    socialAccount: 'Versace',
    socialPostDate: '2018-10-01',
    socialActions: 39617,
    postCount: 137,
    socialSource: 'twitter',
    actionPosts: 14.21,
    postCountPerc: 14.41,
    socialActionPerc: 19.44,
    engagmentPerc: 14.9,
    socialEngagement: 17574
  },
  {
    _id: '5bea9def523ca08c5fdf7c6a',
    socialAccount: 'Vetements',
    socialPostDate: '2018-10-01',
    socialActions: 15953,
    postCount: 161,
    socialSource: 'twitter',
    actionPosts: 14.4,
    postCountPerc: 14.44,
    socialActionPerc: 11.09,
    engagmentPerc: 14.76,
    socialEngagement: 21674
  },
  {
    _id: '5bea9def523ca08c5fdf7c6c',
    socialAccount: 'Dolce & Gabbana',
    socialPostDate: '2018-10-01',
    socialActions: 16027,
    postCount: 82,
    socialSource: 'twitter',
    actionPosts: 15.23,
    postCountPerc: 17.72,
    socialActionPerc: 16.24,
    engagmentPerc: 17.92,
    socialEngagement: 40598
  },
  {
    _id: '5bea9def523ca08c5fdf7c6e',
    socialAccount: 'Givenchy',
    socialPostDate: '2018-09-01',
    socialActions: 514,
    postCount: 133,
    socialSource: 'twitter',
    actionPosts: 14.55,
    postCountPerc: 19.22,
    socialActionPerc: 16.11,
    engagmentPerc: 13.12,
    socialEngagement: 35141
  },
  {
    _id: '5bea9def523ca08c5fdf7c70',
    socialAccount: 'Balenciaga',
    socialPostDate: '2018-09-01',
    socialActions: 29953,
    postCount: 186,
    socialSource: 'twitter',
    actionPosts: 13.78,
    postCountPerc: 15.36,
    socialActionPerc: 11.49,
    engagmentPerc: 17.22,
    socialEngagement: 16407
  },
  {
    _id: '5bea9def523ca08c5fdf7c72',
    socialAccount: 'Off-White',
    socialPostDate: '2018-09-01',
    socialActions: 34258,
    postCount: 135,
    socialSource: 'twitter',
    actionPosts: 12.68,
    postCountPerc: 19.06,
    socialActionPerc: 18.65,
    engagmentPerc: 10.73,
    socialEngagement: 22493
  },
  {
    _id: '5bea9def523ca08c5fdf7c74',
    socialAccount: 'Kate Spade',
    socialPostDate: '2018-09-01',
    socialActions: 35644,
    postCount: 44,
    socialSource: 'twitter',
    actionPosts: 15.26,
    postCountPerc: 19.31,
    socialActionPerc: 17.78,
    engagmentPerc: 11.25,
    socialEngagement: 9519
  },
  {
    _id: '5bea9def523ca08c5fdf7c76',
    socialAccount: 'Michael Kors',
    socialPostDate: '2018-09-01',
    socialActions: 44613,
    postCount: 168,
    socialSource: 'twitter',
    actionPosts: 11.86,
    postCountPerc: 15.73,
    socialActionPerc: 13.66,
    engagmentPerc: 15.94,
    socialEngagement: 2388
  },
  {
    _id: '5bea9def523ca08c5fdf7c78',
    socialAccount: 'nike',
    socialPostDate: '2018-09-01',
    socialActions: 29628,
    postCount: 181,
    socialSource: 'twitter',
    actionPosts: 11.92,
    postCountPerc: 10.84,
    socialActionPerc: 12.88,
    engagmentPerc: 18.4,
    socialEngagement: 6129
  }
];

export const insightsTableColumnsConfig = [
  {
    Header: (
      <>
        <IntlMessages id="market.table.header.brand" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'first-column-header',
    accessor: 'socialAccount'
  },
  {
    id: 'postCount',
    Header: (
      <>
        <IntlMessages id="market.table.header.postCount" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => d.postCount,
    Cell: props => (
      <span>{props.value.toLocaleString(props.tdProps.rest.localeId)}</span>
    ),
    style: { textAlign: 'right' }
  },
  {
    id: 'socialActions',
    Header: (
      <>
        <IntlMessages id="market.table.header.socialActions" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => d.socialActions,
    Cell: props => (
      <span>{props.value.toLocaleString(props.tdProps.rest.localeId)}</span>
    ),
    style: { textAlign: 'right' }
  },
  {
    id: 'actionPosts',
    Header: (
      <>
        <IntlMessages id="market.table.header.socialActionsByPost" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => d.actionPosts,
    Cell: props => (
      <span>{props.value.toLocaleString(props.tdProps.rest.localeId)}</span>
    ),
    style: { textAlign: 'right' }
  },
  {
    id: 'postCountPerc',
    Header: (
      <>
        <IntlMessages id="market.table.header.postCountPercent" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => d.postCountPerc,
    Cell: props => (
      <span>{props.value.toLocaleString(props.tdProps.rest.localeId)}</span>
    ),
    style: { textAlign: 'right' }
  },
  {
    id: 'socialActionPerc',
    Header: (
      <>
        <IntlMessages id="market.table.header.socialActionsPercent" />
        <SortArrows height="10px" width="10px" />
      </>
    ),
    headerClassName: 'column-header',
    accessor: d => d.socialActionPerc,
    Cell: props => (
      <span>{props.value.toLocaleString(props.tdProps.rest.localeId)}</span>
    ),
    style: { textAlign: 'right' }
  }
];

/* TEST DATA FOR POSTS MUST BE REPLACED LATER WITH HTTP REQUEST */

export const postsCf = [
  {
    _id: '5be6e191523ca08c5fdd9e49',
    postUrlImage: 'https://pbs.twimg.com/media/DewUu77X0AAXAEu.jpg',
    postUrl: 'https//t.co/eiBViEbL34',
    socialAccount: 'Prada',
    socialPostDate: '2018-11-01',
    logo: instagramLogo,
    socialEngagement: 17467
  },
  {
    _id: '5be6e191523ca08c5fdd9e4b',
    postUrlImage: 'https://pbs.twimg.com/media/DewUu77X0AAXAEu.jpg',
    postUrl: 'https//t.co/8EYR0DPcxZ',
    socialAccount: 'Fendi',
    socialPostDate: '2018-11-01',
    logo: instagramLogo,
    socialEngagement: 26148
  },
  {
    _id: '5be6e191523ca08c5fdd9e4d',
    postUrlImage: 'https://pbs.twimg.com/media/DewUu77X0AAXAEu.jpg',
    postUrl: 'https//t.co/4trrrRicHQ',
    socialAccount: 'Versace',
    socialPostDate: '2018-11-01',
    logo: instagramLogo,
    socialEngagement: 12467
  },
  {
    _id: '5be6e191523ca08c5fdd9e4f',
    postUrlImage: 'https://pbs.twimg.com/media/DewUu77X0AAXAEu.jpg',
    postUrl: 'https//t.co/dRo5GZH7SV',
    socialAccount: 'Vetements',
    socialPostDate: '2018-11-01',
    logo: instagramLogo,
    socialEngagement: 11698
  },
  {
    _id: '5be6e191523ca08c5fdd9e51',
    postUrlImage: 'https://pbs.twimg.com/media/DewUu77X0AAXAEu.jpg',
    postUrl: 'https//t.co/43hAUyoCms',
    socialAccount: 'Dolce & Gabbana',
    socialPostDate: '2018-11-01',
    logo: instagramLogo,
    socialEngagement: 21832
  },
  {
    _id: '5be6e191523ca08c5fdd9e53',
    postUrlImage: 'https://pbs.twimg.com/media/DewUu77X0AAXAEu.jpg',
    postUrl: 'https//t.co/g1B2y17AxH',
    socialAccount: 'Givenchy',
    socialPostDate: '2018-11-01',
    logo: instagramLogo,
    socialEngagement: 28599
  },
  {
    _id: '5be6e191523ca08c5fdd9e55',
    postUrlImage: 'https://pbs.twimg.com/media/DewUu77X0AAXAEu.jpg',
    postUrl: 'https//t.co/ddrgR3wnWJ',
    socialAccount: 'Balenciaga',
    socialPostDate: '2018-11-01',
    logo: instagramLogo,
    socialEngagement: 1780
  },
  {
    _id: '5be6e191523ca08c5fdd9e57',
    postUrlImage: 'https://pbs.twimg.com/media/DewUu77X0AAXAEu.jpg',
    postUrl: 'https//t.co/cRPNODBLfh',
    socialAccount: 'Off-White',
    socialPostDate: '2018-11-01',
    logo: instagramLogo,
    socialEngagement: 7654
  },
  {
    _id: '5be6e191523ca08c5fdd9e59',
    postUrlImage: 'https://pbs.twimg.com/media/DewUu77X0AAXAEu.jpg',
    postUrl: 'https//t.co/afIeusBGg3',
    socialAccount: 'Kate Spade',
    socialPostDate: '2018-11-01',
    logo: instagramLogo,
    socialEngagement: 31429
  },
  {
    _id: '5be6e191523ca08c5fdd9e5b',
    postUrlImage: 'https://pbs.twimg.com/media/DewUu77X0AAXAEu.jpg',
    postUrl: 'https//t.co/HuI8yOg31t',
    socialAccount: 'Michael Kors',
    socialPostDate: '2018-11-01',
    logo: instagramLogo,
    socialEngagement: 21961
  },
  {
    _id: '5be6e191523ca08c5fdd9e5d',
    postUrlImage: 'https://pbs.twimg.com/media/DewUu77X0AAXAEu.jpg',
    postUrl: 'https//t.co/0SU9vf8CZW',
    socialAccount: 'nike',
    socialPostDate: '2018-11-01',
    logo: instagramLogo,
    socialEngagement: 38335
  },
  {
    _id: '5be6e191523ca08c5fdd9e5f',
    postUrlImage: 'https://pbs.twimg.com/media/DewUu77X0AAXAEu.jpg',
    postUrl: 'https//t.co/7WDOrnh59c',
    socialAccount: 'Prada',
    socialPostDate: '2018-11-01',
    logo: instagramLogo,
    socialEngagement: 30468
  },
  {
    _id: '5be6e191523ca08c5fdd9e61',
    postUrlImage: 'https://pbs.twimg.com/media/DewUu77X0AAXAEu.jpg',
    postUrl: 'https//t.co/LYfc8qdMov',
    socialAccount: 'Fendi',
    socialPostDate: '2018-11-01',
    logo: instagramLogo,
    socialEngagement: 25876
  },
  {
    _id: '5be6e191523ca08c5fdd9e63',
    postUrlImage: 'https://pbs.twimg.com/media/DewUu77X0AAXAEu.jpg',
    postUrl: 'https//t.co/8yq2frpCCf',
    socialAccount: 'Versace',
    socialPostDate: '2018-11-01',
    logo: instagramLogo,
    socialEngagement: 12379
  },
  {
    _id: '5be6e191523ca08c5fdd9e65',
    postUrlImage: 'https://pbs.twimg.com/media/DewUu77X0AAXAEu.jpg',
    postUrl: 'https//t.co/mWDQMjZBBi',
    socialAccount: 'Vetements',
    socialPostDate: '2018-11-01',
    logo: instagramLogo,
    socialEngagement: 18416
  },
  {
    _id: '5be6e191523ca08c5fdd9e67',
    postUrlImage: 'https://pbs.twimg.com/media/DewUu77X0AAXAEu.jpg',
    postUrl: 'https//t.co/wLMuc7f7KX',
    socialAccount: 'Dolce & Gabbana',
    socialPostDate: '2018-11-01',
    logo: instagramLogo,
    socialEngagement: 24885
  },
  {
    _id: '5be6e191523ca08c5fdd9e69',
    postUrlImage: 'https://pbs.twimg.com/media/DewUu77X0AAXAEu.jpg',
    postUrl: 'https//t.co/Ss9eHxl6PF',
    socialAccount: 'Givenchy',
    socialPostDate: '2018-11-01',
    logo: instagramLogo,
    socialEngagement: 24350
  },
  {
    _id: '5be6e191523ca08c5fdd9e6b',
    postUrlImage: 'https://pbs.twimg.com/media/DewUu77X0AAXAEu.jpg',
    postUrl: 'https//t.co/S3kFRiWu23',
    socialAccount: 'Balenciaga',
    socialPostDate: '2018-11-01',
    logo: instagramLogo,
    socialEngagement: 22886
  },
  {
    _id: '5be6e191523ca08c5fdd9e6d',
    postUrlImage: 'https://pbs.twimg.com/media/DewUu77X0AAXAEu.jpg',
    postUrl: 'https//t.co/DhMkza8ukw',
    socialAccount: 'Off-White',
    socialPostDate: '2018-11-01',
    logo: instagramLogo,
    socialEngagement: 22462
  },
  {
    _id: '5be6e191523ca08c5fdd9e6f',
    postUrlImage: 'https://pbs.twimg.com/media/DewUu77X0AAXAEu.jpg',
    postUrl: 'https//t.co/rvqvAXq0rg',
    socialAccount: 'Kate Spade',
    socialPostDate: '2018-10-01',
    logo: instagramLogo,
    socialEngagement: 9019
  },
  {
    _id: '5be6e191523ca08c5fdd9e71',
    postUrlImage: 'https://pbs.twimg.com/media/DewUu77X0AAXAEu.jpg',
    postUrl: 'https//t.co/G72io3EsTW',
    socialAccount: 'Michael Kors',
    socialPostDate: '2018-10-01',
    logo: instagramLogo,
    socialEngagement: 5536
  },
  {
    _id: '5be6e191523ca08c5fdd9e73',
    postUrlImage: 'https://pbs.twimg.com/media/DewUu77X0AAXAEu.jpg',
    postUrl: 'https//t.co/GSYLOR7eNW',
    socialAccount: 'nike',
    socialPostDate: '2018-10-01',
    logo: instagramLogo,
    socialEngagement: 36134
  },
  {
    _id: '5be6e191523ca08c5fdd9e75',
    postUrlImage: 'https://pbs.twimg.com/media/DewUu77X0AAXAEu.jpg',
    postUrl: 'https//t.co/KdRiERR8TI',
    socialAccount: 'Prada',
    socialPostDate: '2018-10-01',
    logo: instagramLogo,
    socialEngagement: 16076
  },
  {
    _id: '5be6e191523ca08c5fdd9e77',
    postUrlImage: 'https://pbs.twimg.com/media/DewUu77X0AAXAEu.jpg',
    postUrl: 'https//t.co/ruSeQitS05',
    socialAccount: 'Fendi',
    socialPostDate: '2018-10-01',
    logo: instagramLogo,
    socialEngagement: 38837
  },
  {
    _id: '5be6e191523ca08c5fdd9e79',
    postUrlImage: 'https://pbs.twimg.com/media/DewUu77X0AAXAEu.jpg',
    postUrl: 'https//t.co/77sOBXupCQ',
    socialAccount: 'Versace',
    socialPostDate: '2018-10-01',
    logo: instagramLogo,
    socialEngagement: 1549
  },
  {
    _id: '5be6e191523ca08c5fdd9e7b',
    postUrlImage: 'https://pbs.twimg.com/media/DewUu77X0AAXAEu.jpg',
    postUrl: 'https//t.co/K0E4GiR2uI',
    socialAccount: 'Vetements',
    socialPostDate: '2018-10-01',
    logo: instagramLogo,
    socialEngagement: 5150
  },
  {
    _id: '5be6e191523ca08c5fdd9e7d',
    postUrlImage: 'https://pbs.twimg.com/media/DewUu77X0AAXAEu.jpg',
    postUrl: 'https//t.co/lhlg3JxTcs',
    socialAccount: 'Dolce & Gabbana',
    socialPostDate: '2018-10-01',
    logo: instagramLogo,
    socialEngagement: 26731
  },
  {
    _id: '5be6e191523ca08c5fdd9e7f',
    postUrlImage: 'https://pbs.twimg.com/media/DewUu77X0AAXAEu.jpg',
    postUrl: 'https//t.co/ymJ3Any5pr',
    socialAccount: 'Givenchy',
    socialPostDate: '2018-09-01',
    logo: instagramLogo,
    socialEngagement: 14157
  },
  {
    _id: '5be6e191523ca08c5fdd9e81',
    postUrlImage: 'https://pbs.twimg.com/media/DewUu77X0AAXAEu.jpg',
    postUrl: 'https//t.co/1tp6hd9fnu',
    socialAccount: 'Balenciaga',
    socialPostDate: '2018-09-01',
    logo: instagramLogo,
    socialEngagement: 2316
  },
  {
    _id: '5be6e191523ca08c5fdd9e83',
    postUrlImage: 'https://pbs.twimg.com/media/DewUu77X0AAXAEu.jpg',
    postUrl: 'https//t.co/kVujVVPfU6',
    socialAccount: 'Off-White',
    socialPostDate: '2018-09-01',
    logo: instagramLogo,
    socialEngagement: 28913
  },
  {
    _id: '5be6e191523ca08c5fdd9e85',
    postUrlImage: 'https://pbs.twimg.com/media/DewUu77X0AAXAEu.jpg',
    postUrl: 'https//t.co/H14uqAg47H',
    socialAccount: 'Kate Spade',
    socialPostDate: '2018-09-01',
    logo: instagramLogo,
    socialEngagement: 22948
  },
  {
    _id: '5be6e191523ca08c5fdd9e87',
    postUrlImage: 'https://pbs.twimg.com/media/DewUu77X0AAXAEu.jpg',
    postUrl: 'https//t.co/cRYLUQxVXx',
    socialAccount: 'Michael Kors',
    socialPostDate: '2018-09-01',
    logo: instagramLogo,
    socialEngagement: 12933
  },
  {
    _id: '5be6e191523ca08c5fdd9e89',
    postUrlImage: 'https://pbs.twimg.com/media/DewUu77X0AAXAEu.jpg',
    postUrl: 'https//t.co/oUvQPxB9cf',
    socialAccount: 'nike',
    socialPostDate: '2018-09-01',
    socialEngagement: 17195
  }
];

/* TEST DATA FOR POSTS MUST BE REPLACED LATER WITH HTTP REQUEST */

export const postsCfTwo = [
  {
    name: 'Net-a-Porter',
    brandName: "L'AGENCE",
    viewsOrPrice: '£230',
    logo: null,
    img:
      'https://cache.net-a-porter.com/images/products/1059733/1059733_in_pp.jpg',
    link:
      'https://www.net-a-porter.com/gb/en/product/1059733/LAgence/margot-cropped-high-rise-skinny-jeans'
  },
  {
    name: 'Net-a-Porter',
    brandName: "L'AGENCE",
    viewsOrPrice: '£230',
    logo: null,
    img:
      'https://cache.net-a-porter.com/images/products/1059733/1059733_in_pp.jpg',
    link:
      'https://www.net-a-porter.com/gb/en/product/1059733/LAgence/margot-cropped-high-rise-skinny-jeans'
  },
  {
    name: 'Net-a-Porter',
    brandName: "L'AGENCE",
    viewsOrPrice: '£230',
    logo: null,
    img:
      'https://cache.net-a-porter.com/images/products/1059733/1059733_in_pp.jpg',
    link:
      'https://www.net-a-porter.com/gb/en/product/1059733/LAgence/margot-cropped-high-rise-skinny-jeans'
  },
  {
    name: 'Net-a-Porter',
    brandName: "L'AGENCE",
    viewsOrPrice: '£230',
    logo: null,
    img:
      'https://cache.net-a-porter.com/images/products/1059733/1059733_in_pp.jpg',
    link:
      'https://www.net-a-porter.com/gb/en/product/1059733/LAgence/margot-cropped-high-rise-skinny-jeans'
  },
  {
    name: 'Net-a-Porter',
    brandName: "L'AGENCE",
    viewsOrPrice: '£230',
    logo: null,
    img:
      'https://cache.net-a-porter.com/images/products/1059733/1059733_in_pp.jpg',
    link:
      'https://www.net-a-porter.com/gb/en/product/1059733/LAgence/margot-cropped-high-rise-skinny-jeans'
  },
  {
    name: 'Net-a-Porter',
    brandName: "L'AGENCE",
    viewsOrPrice: '£230',
    logo: null,
    img:
      'https://cache.net-a-porter.com/images/products/1059733/1059733_in_pp.jpg',
    link:
      'https://www.net-a-porter.com/gb/en/product/1059733/LAgence/margot-cropped-high-rise-skinny-jeans'
  },
  {
    name: 'Net-a-Porter',
    brandName: "L'AGENCE",
    viewsOrPrice: '£230',
    logo: null,
    img:
      'https://cache.net-a-porter.com/images/products/1059733/1059733_in_pp.jpg',
    link:
      'https://www.net-a-porter.com/gb/en/product/1059733/LAgence/margot-cropped-high-rise-skinny-jeans'
  },
  {
    name: 'Net-a-Porter',
    brandName: "L'AGENCE",
    viewsOrPrice: '£230',
    logo: null,
    img:
      'https://cache.net-a-porter.com/images/products/1059733/1059733_in_pp.jpg',
    link:
      'https://www.net-a-porter.com/gb/en/product/1059733/LAgence/margot-cropped-high-rise-skinny-jeans'
  }
];

/* TEMPORARY CONFIG THAT MUST BE REPLACED AFTER WITH API */

export const folderConfig = [
  {
    name: <IntlMessages id="dashboard.folder.options.edit" />,
    logo: editLogo,
    modalType: 'edit'
  },
  {
    name: <IntlMessages id="dashboard.folder.options.share" />,
    logo: shareLogo,
    modalType: 'share'
  },
  {
    name: <IntlMessages id="dashboard.folder.options.alert" />,
    logo: alertLogo,
    modalType: 'alert'
  },
  {
    name: <IntlMessages id="dashboard.folder.options.delete" />,
    logo: deleteLogo,
    modalType: 'delete'
  }
];

export const folderAlertEmailOptions = [
  {
    name: <IntlMessages id="dashboard.modal.alert.never" />,
    logo: submitSymbol
  },
  {
    name: <IntlMessages id="dashboard.modal.alert.daily" />,
    logo: submitSymbol
  },
  {
    name: <IntlMessages id="dashboard.modal.alert.weekly" />,
    logo: submitSymbol
  },
  {
    name: <IntlMessages id="dashboard.modal.alert.monthly" />,
    logo: submitSymbol
  }
];

/* OPTIONS FOR USERS IN SHARE MODAL DROPDOWN */

const shareModalDropdownOptions = [
  {
    name: <IntlMessages id="dashboard.modal.share.none" />
  },
  {
    name: <IntlMessages id="dashboard.modal.share.canRead" />
  },
  {
    name: <IntlMessages id="dashboard.modal.share.canEdit" />
  }
];

/* TEMPORARY CONFIG THAT MUST BE REPLACED AFTER WITH API */

export const folderShareModalTabs = [
  {
    name: <IntlMessages id="dashboard.modal.share.users" />,
    content: <Share optionsForDropdown={shareModalDropdownOptions} />
  }
];

/* TEMPORARY CONFIG THAT MUST BE REPLACED AFTER WITH API */

export const dashboardConfig = [
  {
    dashboardName: 'DASHBOARD NAME',
    viewsNumber: '9.999'
  },
  {
    dashboardName: 'DASHBOARD NAME',
    viewsNumber: '9.999'
  },
  {
    dashboardName: 'DASHBOARD NAME',
    viewsNumber: '9.999'
  },
  {
    dashboardName: 'DASHBOARD NAME',
    viewsNumber: '9.999'
  }
];

export const dropdownCf = [
  {
    content: <IntlMessages id="market.datepicker.sevenDays" />,
    clickable: true
  },
  {
    content: <IntlMessages id="market.datepicker.thirtyDays" />,
    clickable: true
  },
  {
    content: <IntlMessages id="market.datepicker.ninetyDays" />,
    clickable: true
  },
  {
    content: <IntlMessages id="market.datepicker.oneYear" />,
    clickable: true
  },
  {
    content: <IntlMessages id="market.datepicker.lastWeek" />,
    clickable: true
  },
  {
    content: <IntlMessages id="market.datepicker.thisWeek" />,
    clickable: true
  },
  {
    content: <IntlMessages id="market.datepicker.lastMonth" />,
    clickable: true
  },
  {
    content: <IntlMessages id="market.datepicker.thisMonth" />,
    clickable: true
  },
  {
    content: <DatePicker />,
    clickable: false
  }
];

export const platformsCf = [
  {
    name: <IntlMessages id="dropdownlist.all" />,
    value: 'all'
  },
  {
    name: 'Facebook',
    value: 'a'
  },
  {
    name: 'Twitter',
    value: 'b'
  },
  {
    name: 'Instagram',
    value: 'c'
  },
  {
    name: 'Pinterest',
    value: 'd'
  }
];

export const orderByCf = [
  {
    name: <IntlMessages id="dropdownlist.postingDate" />,
    value: 'a'
  },
  {
    name: <IntlMessages id="dropdownlist.priceLowToHigh" />,
    value: 'b'
  },
  {
    name: <IntlMessages id="dropdownlist.priceLowToHigh" />,
    value: 'c'
  }
];

/* ANALYSIS UI DOC
	Analysys widget consists of navigation tabs and tab panels, also it has nested tabs inside it.

	Structure:

	{
		tabName: "Name of navigation tab",
		// Nested tabs array //
		childTabs: [
			{
				name: "Name of child tab",
				controls:
				// Can be different controls that is used for filtering etc. //
				<React.Fragment>
					<DropdownWithDate config={dropdownCf}/>
					<DropdownWithCheckboxes
						controlName={<IntlMessages id='market.checkboxDropdown.platforms'/>}
						dropdownConfig={platformsCf}/>
				</React.Fragment>,
				content: "Content that will displayed inside child tab panel"
			}
		],
		logo: "Link to logo for navigation tab",
		color: "Color of the tab that can be used for styling purposes"
	}

	If you want to add new tab, just use provided structure and add newly created object to the existing configuration array and
	new tab will be added after page reload.

*/

export const analysisConfig = [
  {
    tabName: <IntlMessages id="market.analysis.tabName" />,
    childTabs: [
      {
        name: <IntlMessages id="market.analysis.childTabName1" />,
        controls: (
          <React.Fragment>
            <DropdownWithDate config={dropdownCf} />
            <DropdownWithCheckboxes
              controlName={
                <IntlMessages id="market.checkboxDropdown.platforms" />
              }
              dropdownConfig={platformsCf}
            />
          </React.Fragment>
        ),
        content: <Posts posts={postsCf} />
      },
      {
        name: <IntlMessages id="market.analysis.childTabName2" />,
        content: (
          <React.Fragment>
            <ColumnChart id="insights" data={insightsTableDataConfig} />
            <SingleTable
              data={insightsTableDataConfig}
              columns={insightsTableColumnsConfig}
            />
          </React.Fragment>
        )
      }
    ],
    logo: humanHeadLogo,
    color: '#D80027'
  },
  {
    tabName: <IntlMessages id="market.analysis.tabName" />,
    childTabs: [
      {
        name: <IntlMessages id="market.analysis.childTabName1" />,
        controls: (
          <React.Fragment>
            <DropdownWithDate config={dropdownCf} />
            <DropdownWithCheckboxes
              controlName={
                <IntlMessages id="market.checkboxDropdown.platforms" />
              }
              dropdownConfig={platformsCf}
            />
          </React.Fragment>
        ),
        content: <Posts posts={postsCf} />
      },
      {
        name: <IntlMessages id="market.analysis.childTabName2" />,
        content: (
          <React.Fragment>
            <ColumnChart id="insights" data={insightsTableDataConfig} />
            <SingleTable
              data={insightsTableDataConfig}
              columns={insightsTableColumnsConfig}
            />
          </React.Fragment>
        )
      }
    ],
    logo: humanHeadsLogo,
    color: '#000'
  },
  {
    tabName: <IntlMessages id="market.analysis.tabName" />,
    childTabs: [
      {
        name: <IntlMessages id="market.analysis.childTabName1" />,
        content: 'No content here yet'
      },
      {
        name: <IntlMessages id="market.analysis.childTabName2" />,
        content: 'No content here yet'
      }
    ],
    logo: busketLogo,
    color: '#933EC5'
  }
];

export const brandsOverviewConfig = [
  {
    name: <IntlMessages id="brands.overview.tabs.fanCount" />,
    content: (
      <React.Fragment>
        <ColumnChart id="fan-count" data={fanCountTableDataConfig} />
        <SingleTable
          data={fanCountTableDataConfig}
          columns={fanCountTableColumnsConfig}
        />
      </React.Fragment>
    )
  },
  {
    name: <IntlMessages id="brands.overview.tabs.postEngagement" />,
    content: (
      <React.Fragment>
        <ColumnChart id="post-engagement" data={fanCountTableDataConfig} />
        <SingleTable
          data={fanCountTableDataConfig}
          columns={fanCountTableColumnsConfig}
        />
      </React.Fragment>
    )
  },
  {
    name: <IntlMessages id="brands.overview.tabs.socialStream" />,
    controls: (
      <React.Fragment>
        <DropdownWithDate config={dropdownCf} />
        <DropdownWithCheckboxes
          controlName={<IntlMessages id="market.checkboxDropdown.platforms" />}
          dropdownConfig={platformsCf}
        />
      </React.Fragment>
    ),
    content: <Posts posts={postsCf} />
  },
  {
    name: <IntlMessages id="brands.overview.tabs.socialBuzz" />,
    content: (
      <React.Fragment>
        <BubbleChart id="social-buzz" data={insightsTableDataConfig} />
        <SingleTable
          data={insightsTableDataConfig}
          columns={insightsTableColumnsConfig}
        />
      </React.Fragment>
    )
  }
];

export const searchesConfig = [
  {
    tabName: <IntlMessages id="market.analysis.tabName" />,
    childTabs: [
      {
        name: <IntlMessages id="market.searches.searchGrowth" />,
        content: (
          <React.Fragment>
            <BubbleChart
              id="search-growth"
              data={searchGrowthTableDataConfig}
            />
            <SingleTable
              data={searchGrowthTableDataConfig}
              columns={searchGrowthTableColumnsConfig}
            />
          </React.Fragment>
        )
      },
      {
        name: <IntlMessages id="market.searches.growthDelta" />,
        content: (
          <React.Fragment>
            <BubbleChart id="growth-delta" data={searchGrowthTableDataConfig} />
            <SingleTable
              data={searchGrowthTableDataConfig}
              columns={searchGrowthTableColumnsConfig}
            />
          </React.Fragment>
        )
      },
      {
        name: <IntlMessages id="market.searches.volume" />,
        content: (
          <React.Fragment>
            <ColumnChart id="volume" data={searchGrowthTableDataConfig} />
            <SingleTable
              data={searchGrowthTableDataConfig}
              columns={searchGrowthTableColumnsConfig}
            />
          </React.Fragment>
        )
      }
    ],
    logo: magnifierLogo,
    color: '#91DC5A'
  }
  /* {
        tabName: <IntlMessages id='market.analysis.tabName'/>,
        childTabs: [
            {
                controls: <DropdownWithCheckboxes
                    controlName={<IntlMessages id='market.checkboxDropdown.orderBy'/>}
                    dropdownConfig={orderByCf}/>,
                content: <Posts posts={postsCf}/>
            },
        ],
        logo: humanHeadsLogo,
        color: '#000'
    },
    {
        tabName: <IntlMessages id='market.analysis.tabName'/>,
        childTabs: [
            {
                name: <IntlMessages id='market.analysis.childTabName1'/>,
                content: 'No content here yet'
            },
            {
                name: <IntlMessages id='market.analysis.childTabName2'/>,
                content: 'No content here yet'
            }
        ],
        logo: busketLogo,
        color: '#933EC5'
    } */
];

/* MARKET UI DOC

	Widget widget consists of navigation tabs and tab panels and using the following structure.

	{
		name: "NAME OF THE NAVIGATION TAB",
		content: "CONTENT THAT WILL BE DISPLAYED INSIDE TAB PANEL",
		logo: "LOGO OF THE NAVIGATION TAB",
		color: 'COLOR OF THE NAVIGATION TAB THAT CAN BE USED FOR STYLING',
		decorationStyle: {
			width: "THIS IS USED FOR STYLING, THE WIDTH MUST BE SET DEPEMDING FROM THE ORDER OF THE NAVIGATION TAB"
		}
	}

	If you want to add new tab, just use provided structure and add newly created object to the existing configuration array and
	new tab will be added after page reload.

*/
export const marketWidgetConfig = [
  {
    name: <IntlMessages id="productfilter.filtered.brands" />,
    content: (
      <SingleTable
        data={brandsTableDataConfig}
        columns={brandsTableColumnsConfig}
      />
    ),
    logo: <BrandsSVG fill="#006DF0" />,
    color: '#006DF0'
  },
  {
    name: <IntlMessages id="productfilter.filtered.retailers" />,
    content: (
      <SingleTable
        data={retailersTableDataConfig}
        columns={retailersTableColumnsConfig}
      />
    ),
    logo: <RetailersSVG fill="#D80027" />,
    color: '#D80027'
  },
  {
    name: <IntlMessages id="productfilter.filtered.fullprice" />,
    content: (
      <PieTable
        data={fullPriceTableDataConfig}
        columns={fullPriceTableColumnsConfig}
      />
    ),
    logo: <FullPriceSVG fill="#933EC5" />,
    color: '#933EC5'
  },
  {
    name: <IntlMessages id="productfilter.filtered.segments" />,
    content: (
      <PieTable
        data={segmentsTableDataConfig}
        columns={segmentsTableColumnsConfig}
      />
    ),
    logo: <SegmentsSVG fill="#f1684e" />,
    color: '#f1684e'
  },
  {
    name: <IntlMessages id="productfilter.filtered.colors" />,
    content: (
      <PieTable
        data={colorsTableDataConfig}
        columns={colorsTableColumnsConfig}
      />
    ),
    logo: <ColorsSVG />,
    color: '#00a1f1'
  },
  {
    name: <IntlMessages id="productfilter.filtered.sizes" />,
    content: 'No content here yet',
    logo: <SizesSVG fill="#000" />,
    color: '#000'
  },
  /* {
        name: <IntlMessages id='productfilter.filtered.searches'/>,
        content: <AnalysisMarket config={searchesConfig}/>,
        logo: <SearchesSVG fill='#91DC5A'/>,
        color: '#91DC5A'
    }, */
  {
    name: <IntlMessages id="productfilter.filtered.posts" />,
    content: <AnalysisMarket config={analysisConfig} />,
    logo: <SocialSVG fill="#f2f23e" />,
    color: '#f2f23e'
  },
  {
    name: <IntlMessages id="brands.tabs.busket" />,
    content: 'No content here yet',
    // Todo: add appropriate icon later
    logo: <SegmentsSVG fill="#D80027" />,
    color: '#D80027'
  }
];

export const brandsWidgetConfig = [
  {
    name: <IntlMessages id="brands.tabs.overview" />,
    content: <BrandsOverview config={brandsOverviewConfig} color="#000" />,
    logo: menuLogo,
    color: '#000'
  },
  {
    name: <IntlMessages id="brands.tabs.facebook" />,
    content: <BrandsOverview config={brandsOverviewConfig} color="#3b5998" />,
    logo: facebookLetterLogo,
    color: '#3b5998'
  },
  {
    name: <IntlMessages id="brands.tabs.twitter" />,
    content: <BrandsOverview config={brandsOverviewConfig} color="#1dcaff" />,
    logo: twitterBirdLogo,
    color: '#1dcaff'
  },
  {
    name: <IntlMessages id="brands.tabs.instagram" />,
    content: <BrandsOverview config={brandsOverviewConfig} color="#fbad50" />,
    logo: instagramOrangeLogo,
    color: '#fbad50'
  },
  {
    name: <IntlMessages id="brands.tabs.search" />,
    content: <AnalysisMarket config={searchesConfig} />,
    logo: magnifierLogo,
    color: '#91DC5A'
  }
];

export const trendsConfig = [
  {
    name: <IntlMessages id="trends.tab.main.name" />,
    content: 'No content yet'
  }
];

export const marketConfig = [
  {
    name: <IntlMessages id="market.tab.main.name" />,
    content: <MarketWidget config={marketWidgetConfig} />
  }
];

export const brandsConfig = [
  {
    name: <IntlMessages id="brands.tab.main.name" />,
    content: <BrandsWidget config={brandsWidgetConfig} />
  }
];

export const layoutConfig = [
  {
    content: <Dashboard />,
    routePath: '/dashboard'
  },
  {
    content: <Brands config={brandsConfig} />,
    routePath: '/dashboard/brands'
  },
  {
    content: <Trends config={trendsConfig} />,
    routePath: '/dashboard/trends'
  },
  {
    content: <Market config={marketConfig} />,
    routePath: '/dashboard/markets'
  },
  {
    content: <MyProfile />,
    routePath: '/dashboard/my-profile'
  }
];

/* SIDEBAR UI DOC
   Sidebar is a list of navigation tabs and consists of bottom and top part. In order to add new navigation tab, use this structure:

   {
	   name: "NAME OF NAVIGATION TAB",
	   icon: "LINK TO ICON FOR NAVIGATION TAB",
	   path: "PATH FOR ROUTING, FOR EXAMPLE /example"
   }

   After you created a new object with provided params, you can add it to current configuration file. If you want to add navigation tab
   inside the top part, then add you object to array named "top" or array named "bottom" for bottom part. After that reload the page and
   you will see new navigation tab was added.
*/

export const sidebarConfig = {
  top: [
    {
      name: <IntlMessages id="sidebar.dashboard" />,
      icon: dashboardIcon,
      path: '/dashboard'
    },
    {
      name: <IntlMessages id="sidebar.brands" />,
      icon: brandsIcon,
      path: '/dashboard/brands'
    },
    {
      name: <IntlMessages id="sidebar.trends" />,
      icon: trendsIcon,
      path: '/dashboard/trends'
    },
    {
      name: <IntlMessages id="sidebar.markets" />,
      icon: marketIcon,
      path: '/dashboard/markets'
    },
    {
      name: <IntlMessages id="sidebar.merchandiser" />,
      icon: merchandiserIcon,
      path: '/dashboard/merchandiser'
    }
  ],
  bottom: [
    /* {
      name: <IntlMessages id="sidebar.myProfile" />,
      icon: placeholderIcon,
      path: "/dashboard/my-profile"
    } */
  ]
};

/* PRODUCTS FILTER UI DOC

	Products filter consists of navigation tabs and tab panels and using the following structure:

	{
		name: "NAME OF THE NAVIGATION TAB",
		content: "CONTENT THAT WILL BE DISPLAYED INSIDE TAB PANEL",
		firstTab: "Set this to "true" if your navigation tab is the first tab in the array" (Used for correct styling),
		lastTab: "Set this to "true" if your navigation tab is the last tab in the array" (Used for correct styling),
	}

	If you want to add new tab, just use provided structure and add newly created object to the existing configuration array.
	New tab will appear after page reload.
*/

export const productsFilterConfig = [
  {
    name: <IntlMessages id="navbar.markets.regions" />,
    content: <Regions />,
    firstTab: true
  },
  {
    name: <IntlMessages id="navbar.markets.category" />,
    content: <Category />
  },
  {
    name: <IntlMessages id="navbar.markets.retailers" />,
    content: <Retailers />
  },
  {
    name: <IntlMessages id="navbar.markets.brands" />,
    content: <BrandsFilter />
  },
  {
    name: <IntlMessages id="navbar.markets.colours" />,
    content: <Colors />
  },
  {
    name: <IntlMessages id="navbar.markets.markdown" />,
    content: <Markdown />
  },
  {
    name: <IntlMessages id="navbar.markets.pricing" />,
    content: <Pricing />
  },
  {
    name: <IntlMessages id="navbar.markets.date" />,
    content: <Date />,
    lastTab: true
  }
];

export const colorsConfig = [
  {
    name: <IntlMessages id="trends.colors.black" />,
    color: 'black'
  },
  {
    name: <IntlMessages id="trends.colors.brown" />,
    color: 'brown'
  },
  {
    name: <IntlMessages id="trends.colors.red" />,
    color: 'red'
  },
  {
    name: <IntlMessages id="trends.colors.fuchsia" />,
    color: 'fuchsia'
  },
  {
    name: <IntlMessages id="trends.colors.purple" />,
    color: 'purple'
  },
  {
    name: <IntlMessages id="trends.colors.blue" />,
    color: 'blue'
  },
  {
    name: <IntlMessages id="trends.colors.teal" />,
    color: 'teal'
  },
  {
    name: <IntlMessages id="trends.colors.lime" />,
    color: 'lime'
  },
  {
    name: <IntlMessages id="trends.colors.neutral" />,
    color: '#ebe9e7'
  },
  {
    name: <IntlMessages id="trends.colors.copper" />,
    color: '#b87333'
  },
  {
    name: <IntlMessages id="trends.colors.white" />,
    color: 'white'
  },
  {
    name: <IntlMessages id="trends.colors.grey" />,
    color: 'grey'
  },
  {
    name: <IntlMessages id="trends.colors.orange" />,
    color: 'orange'
  },
  {
    name: <IntlMessages id="trends.colors.maroon" />,
    color: 'maroon'
  },
  {
    name: <IntlMessages id="trends.colors.pink" />,
    color: 'pink'
  },
  {
    name: <IntlMessages id="trends.colors.navy" />,
    color: 'navy'
  },
  {
    name: <IntlMessages id="trends.colors.aqua" />,
    color: 'aqua'
  },
  {
    name: <IntlMessages id="trends.colors.green" />,
    color: 'green'
  },
  {
    name: <IntlMessages id="trends.colors.yellow" />,
    color: 'yellow'
  },
  {
    name: <IntlMessages id="trends.colors.silver" />,
    color: 'silver'
  },
  {
    name: <IntlMessages id="trends.colors.gold" />,
    color: 'gold'
  }
];

export const markdownConfig = [
  {
    name: <IntlMessages id="trends.markdown.fullprice" />
  },
  {
    name: <IntlMessages id="trends.markdown.totalNonFullPrice" />
  },
  {
    name: '0% — 10%'
  },
  {
    name: '10% — 20%'
  },
  {
    name: '20% — 30%'
  },
  {
    name: '30% — 40%'
  },
  {
    name: '40% — 50%'
  },
  {
    name: '50% — 60%'
  },
  {
    name: '60% — 70%'
  },
  {
    name: '70% — 80%'
  },
  {
    name: '80% — 90%'
  },
  {
    name: '90% — 100%'
  }
];

export const languageConfig = {
  defaultLanguage: 'english',
  options: [
    {
      languageId: 'english',
      locale: 'en',
      localeId: 'en-US',
      text: 'English',
      icon: engFlag,
      changeHighchartsLocale: {}
    },
    {
      languageId: 'russian',
      locale: 'ru',
      localeId: 'ru-RU',
      text: 'Russian',
      icon: ruFlag,
      changeHighchartsLocale: {
        lang: {
          loading: 'Загрузка...',
          months: [
            'Январь',
            'Февраль',
            'Март',
            'Апрель',
            'Май',
            'Июнь',
            'Июль',
            'Август',
            'Сентябрь',
            'Октябрь',
            'Ноябрь',
            'Декабрь'
          ],
          weekdays: [
            'Воскресенье',
            'Понедельник',
            'Вторник',
            'Среда',
            'Четверг',
            'Пятница',
            'Суббота'
          ],
          shortMonths: [
            'Янв',
            'Фев',
            'Март',
            'Апр',
            'Май',
            'Июнь',
            'Июль',
            'Авг',
            'Сент',
            'Окт',
            'Нояб',
            'Дек'
          ],
          exportButtonTitle: 'Экспорт',
          printButtonTitle: 'Печать',
          rangeSelectorFrom: 'С',
          rangeSelectorTo: 'По',
          rangeSelectorZoom: 'Период',
          downloadPNG: 'Скачать PNG',
          downloadJPEG: 'Скачать JPEG',
          downloadPDF: 'Скачать PDF',
          downloadSVG: 'Скачать SVG',
          printChart: 'Напечатать график',
          thousandsSep: ',',
          decimalPoint: ','
        }
      }
    }
  ]
};

export const highchartLocales = {
  ru: {
    id: 'ru',
    options: {
      lang: {
        loading: 'Загрузка...',
        months: [
          'Январь',
          'Февраль',
          'Март',
          'Апрель',
          'Май',
          'Июнь',
          'Июль',
          'Август',
          'Сентябрь',
          'Октябрь',
          'Ноябрь',
          'Декабрь'
        ],
        weekdays: [
          'Воскресенье',
          'Понедельник',
          'Вторник',
          'Среда',
          'Четверг',
          'Пятница',
          'Суббота'
        ],
        shortMonths: [
          'Янв',
          'Фев',
          'Март',
          'Апр',
          'Май',
          'Июнь',
          'Июль',
          'Авг',
          'Сент',
          'Окт',
          'Нояб',
          'Дек'
        ],
        exportButtonTitle: 'Экспорт',
        printButtonTitle: 'Печать',
        rangeSelectorFrom: 'С',
        rangeSelectorTo: 'По',
        rangeSelectorZoom: 'Период',
        downloadPNG: 'Скачать PNG',
        downloadJPEG: 'Скачать JPEG',
        downloadPDF: 'Скачать PDF',
        downloadSVG: 'Скачать SVG',
        printChart: 'Напечатать график',
        thousandsSep: ',',
        decimalPoint: ','
      }
    }
  },
  en: {
    id: 'en',
    options: {
      lang: {
        loading: 'Loading...',
        months: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ],
        weekdays: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        shortMonths: [
          'Jan',
          'Feb',
          'March',
          'Apr',
          'May',
          'June',
          'July',
          'Aug',
          'Sept',
          'Oct',
          'Nov',
          'Dec'
        ],
        exportButtonTitle: 'Export',
        printButtonTitle: 'Print',
        rangeSelectorFrom: 'From',
        rangeSelectorTo: 'To',
        rangeSelectorZoom: 'Period',
        downloadPNG: 'Download PNG',
        downloadJPEG: 'Download JPEG',
        downloadPDF: 'Download PDF',
        downloadSVG: 'Download SVG',
        printChart: 'Print chart',
        thousandsSep: '.',
        decimalPoint: '.'
      }
    }
  }
};

/* FUNCTIONS */
export function getCurrentLanguage(lang) {
  let selectedLanguage = languageConfig.options[0];
  languageConfig.options.forEach(language => {
    if (language.languageId === lang) {
      selectedLanguage = language;
    }
  });
  return selectedLanguage;
}

export const structureConfig = {
  tabs: {
    dashboard: {
      id: 'dashboard',
      name: 'Dashboard',
      contentId: 'dashboard'
    },
    brands: {
      id: 'brands',
      name: 'Brands',
      subTabs: {
        main: {
          id: 'main',
          name: 'Main',
          subTabs: {
            overview: {
              id: 'overview',
              name: 'Overview',
              color: '#000',
              subTabs: {
                fanCount: {
                  id: 'fanCount',
                  name: 'Fan Count',
                  contentId: 'columnChartWithTable'
                },
                postEngagement: {
                  id: 'postEngagement',
                  name: 'Post Engagement',
                  contentId: 'columnChartWithTable'
                },
                socialStream: {
                  id: 'socialStream',
                  name: 'Social Stream',
                  contentId: 'posts'
                },
                socialBuzz: {
                  id: 'socialBuzz',
                  name: 'Social Buzz',
                  contentId: 'bubbleChartWithTable'
                }
              }
            },
            facebook: {
              id: 'facebook',
              name: 'Facebook',
              color: '#3b5998',
              subTabs: {
                fanCount: {
                  id: 'fanCount',
                  name: 'Fan Count',
                  contentId: 'columnChartWithTable'
                },
                postEngagement: {
                  id: 'postEngagement',
                  name: 'Post Engagement',
                  contentId: 'columnChartWithTable'
                },
                socialStream: {
                  id: 'socialStream',
                  name: 'Social Stream',
                  contentId: 'posts'
                },
                socialBuzz: {
                  id: 'socialBuzz',
                  name: 'Social Buzz',
                  contentId: 'bubbleChartWithTable'
                }
              }
            },
            twitter: {
              id: 'twitter',
              name: 'Twitter',
              color: '#1dcaff',
              subTabs: {
                fanCount: {
                  id: 'fanCount',
                  name: 'Fan Count',
                  contentId: 'columnChartWithTable'
                },
                postEngagement: {
                  id: 'postEngagement',
                  name: 'Post Engagement',
                  contentId: 'columnChartWithTable'
                },
                socialStream: {
                  id: 'socialStream',
                  name: 'Social Stream',
                  contentId: 'posts'
                },
                socialBuzz: {
                  id: 'socialBuzz',
                  name: 'Social Buzz',
                  contentId: 'bubbleChartWithTable'
                }
              }
            },
            instagram: {
              id: 'instagram',
              name: 'Instagram',
              color: '#fbad50',
              subTabs: {
                fanCount: {
                  id: 'fanCount',
                  name: 'Fan Count',
                  contentId: 'columnChartWithTable'
                },
                postEngagement: {
                  id: 'postEngagement',
                  name: 'Post Engagement',
                  contentId: 'columnChartWithTable'
                },
                socialStream: {
                  id: 'socialStream',
                  name: 'Social Stream',
                  contentId: 'posts'
                },
                socialBuzz: {
                  id: 'socialBuzz',
                  name: 'Social Buzz',
                  contentId: 'bubbleChartWithTable'
                }
              }
            },
            searches: {
              id: 'searches',
              name: 'Searches',
              color: '#91DC5A',
              subTabs: {
                searchGrowth: {
                  id: 'searchGrowth',
                  name: 'Search Growth',
                  contentId: 'bubbleChartWithTable'
                },
                growthDelta: {
                  id: 'growthDelta',
                  name: 'Growth Delta',
                  contentId: 'bubbleChartWithTable'
                },
                volume: {
                  id: 'volume',
                  name: 'Volume',
                  contentId: 'columnChartWithTable'
                }
              }
            }
          }
        }
      }
    },
    trends: {
      id: 'trends',
      name: 'Trends',
      subTabs: {
        main: {
          id: 'main',
          name: 'Main'
        }
      }
    },
    market: {
      id: 'market',
      name: 'Market',
      subTabs: {
        main: {
          id: 'main',
          name: 'Main',
          subTabs: {
            brands: {
              id: 'brands',
              name: 'Brands',
              color: '#006DF0',
              contentId: 'table'
            },
            retailers: {
              id: 'retailers',
              name: 'Retailers',
              color: '#D80027',
              contentId: 'table'
            },
            fullPrice: {
              id: 'fullPrice',
              name: 'FullPrice',
              color: '#933EC5',
              contentId: 'pieTable'
            },
            segments: {
              id: 'segments',
              name: 'Segments',
              color: '#f1684e',
              contentId: 'pieTable'
            },
            colors: {
              id: 'colors',
              name: 'Colors',
              color: '#00a1f1',
              contentId: 'pieTable'
            },
            sizes: {
              id: 'sizes',
              name: 'Sizes',
              color: '#000',
              contentId: 'empty'
            },
            social: {
              id: 'social',
              name: 'Social',
              color: '#f2f23e',
              subTabs: {
                socialStream: {
                  id: 'socialStream',
                  name: 'Social Stream',
                  contentId: 'posts'
                },
                insights: {
                  id: 'insights',
                  name: 'Insights',
                  contentId: 'columnChartWithTable'
                }
              }
            },
            market: {
              id: 'market',
              name: 'Market',
              color: '#D80027',
              contentId: 'empty'
            }
          }
        }
      }
    }
  }
};
