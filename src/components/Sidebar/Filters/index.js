import React, { useState, useReducer, useEffect } from 'react';
import { Manager, Popper, Reference } from 'react-popper';
import { withRouter } from 'react-router';
import produce from 'immer';

import * as C from './style';
import Icon from 'assets/icons';
import Input from 'components/shared/Input';
import RegionsFilter from 'containers/RegionsFilter';
import SegmentsFilter from 'containers/SegmentsFilter';
import GendersFilter from 'containers/GendersFilter';
import RetailersFilter from 'containers/RetailersFilter';
import BrandsFilter from 'containers/BrandsFilter';
import CategoriesFilter from 'containers/CategoriesFilter';
import KeywordsFilter from 'containers/KeywordsFilter';
import KeywordsIncludeFilter from 'containers/KeywordsIncludeFilter';
import KeywordsExcludeFilter from 'containers/KeywordsExcludeFilter';
import ColorsFilter from 'containers/ColorsFilter';
import StatusFilter from 'containers/StatusFilter';
import DiscountedFilter from 'containers/DiscountedFilter';
import ReplenishedFilter from 'containers/ReplenishedFilter';
import PriceRangeFilter from 'containers/PriceRangeFilter';
import MarkdownFilter from 'containers/MarkdownFilter';
import NewInFilter from 'containers/NewInFilter';
import FirstSellOutFilter from 'containers/FirstSellOutFilter';
import FirstDiscountedFilter from 'containers/FirstDiscountedFilter';
import { useRecoilState } from 'recoil';
import { filtersState } from 'state/filters';
import { getAllFilters } from 'services';
import { filtersData } from 'apollo/client';

// TODO: rework later
const filters = {
  regionsFilter: RegionsFilter,
  segmentsFilter: SegmentsFilter,
  gendersFilter: GendersFilter,
  retailersFilter: RetailersFilter,
  brandsFilter: BrandsFilter,
  productsFilter: SegmentsFilter,
  categoriesFilter: CategoriesFilter,
  // TODO: add back keywords when required
  // keywordsFilter: KeywordsFilter,
  // keywordsIncludeFilter: KeywordsIncludeFilter,
  // keywordsExcludeFilter: KeywordsExcludeFilter,
  colorsFilter: ColorsFilter,
  statusFilter: StatusFilter,
  discountedFilter: DiscountedFilter,
  replenishedFilter: ReplenishedFilter,
  priceRangeFilter: PriceRangeFilter,
  markdownFilter: MarkdownFilter,
  newInFilter: NewInFilter,
  firstSellOutFilter: FirstSellOutFilter,
  firstDiscountedFilter: FirstDiscountedFilter,
  byId: [
    'regionsFilter',
    'segmentsFilter',
    'gendersFilter',
    'retailersFilter',
    'brandsFilter',
    'productsFilter',
    'categoriesFilter',
    // TODO: add back keywords when required
    // 'keywordsFilter',
    // 'keywordsIncludeFilter',
    // 'keywordsExcludeFilter',
    'colorsFilter',
    'statusFilter',
    'discountedFilter',
    'replenishedFilter',
    'priceRangeFilter',
    'markdownFilter',
    'newInFilter',
    'firstSellOutFilter',
    'firstDiscountedFilter'
  ]
};

const sections = {
  markets: {
    id: 'markets',
    name: 'Markets',
    subSections: {
      regions: {
        id: 'regions',
        name: 'Regions',
        filterId: 'regionsFilter'
      },
      segments: {
        id: 'segments',
        name: 'Segments',
        filterId: 'segmentsFilter'
      },
      genders: {
        id: 'genders',
        name: 'Gender',
        filterId: 'gendersFilter'
      },
      byId: ['regions', 'segments', 'genders']
    }
  },
  competition: {
    id: 'competition',
    name: 'Competition',
    subSections: {
      retailers: {
        id: 'retailers',
        name: 'Retailers',
        filterId: 'retailersFilter'
      },
      brands: {
        id: 'brands',
        name: 'Brands',
        filterId: 'brandsFilter'
      },
      byId: ['retailers', 'brands']
    }
  },
  categories: {
    id: 'categories',
    name: 'Categories',
    subSections: {
      categoriesFilter: {
        id: 'categoriesFilter',
        name: 'Categories Filters',
        filterId: 'categoriesFilter'
      },
      byId: ['categoriesFilter']
    }
  },
  // TODO: add back keywords when required
  // keywords: {
  //   id: 'keywords',
  //   name: 'Keywords',
  //   subSections: {
  //     keywordsInclude: {
  //       id: 'keywordsInclude',
  //       name: 'Include Keywords',
  //       filterId: 'keywordsIncludeFilter'
  //     },
  //     keywordsExclude: {
  //       id: 'keywordsExclude',
  //       name: 'Exclude Keywords',
  //       filterId: 'keywordsExcludeFilter'
  //     },
  //     byId: ['keywordsInclude', 'keywordsExclude']
  //   }
  // },
  colors: {
    id: 'colors',
    name: 'Colors',
    subSections: {
      colors: {
        id: 'colors',
        name: 'Colors',
        filterId: 'colorsFilter'
      },
      byId: ['colors']
    }
  },
  priceAndStatus: {
    id: 'priceAndStatus',
    name: 'Price & Status',
    subSections: {
      status: {
        id: 'status',
        name: 'Status',
        filterId: 'statusFilter'
      },
      discounted: {
        id: 'discounted',
        name: 'Discounted',
        filterId: 'discountedFilter'
      },
      replenished: {
        id: 'replenished',
        name: 'Replenished',
        filterId: 'replenishedFilter'
      },
      priceRange: {
        id: 'priceRange',
        name: 'Price range',
        filterId: 'priceRangeFilter'
      },
      markdown: {
        id: 'markdown',
        name: 'Markdown',
        filterId: 'markdownFilter'
      },
      byId: ['status', 'discounted', 'replenished', 'priceRange', 'markdown']
    }
  },
  dateAndTime: {
    id: 'dateAndTime',
    name: 'Date & Time',
    subSections: {
      newIn: {
        id: 'newIn',
        name: 'New In',
        filterId: 'newInFilter'
      },
      firstSellOut: {
        id: 'firstSellOut',
        name: 'First Sell Out',
        filterId: 'firstSellOutFilter'
      },
      firstDiscounted: {
        id: 'firstDiscounted',
        name: 'First Discounted',
        filterId: 'firstDiscountedFilter'
      },
      byId: ['newIn', 'firstSellOut', 'firstDiscounted']
    }
  },
  byId: [
    'markets',
    'competition',
    'categories',
    // TODO: add back keywords when required
    // 'keywords',
    'colors',
    'priceAndStatus',
    'dateAndTime'
  ]
};

const getFilter = filterId =>
  filters[filters.byId.find(item => item === filterId)];

const Filters = ({ filterOpen, filterPinned, setFilterPinned, ...rest }) => {
  // new
  useEffect(() => {
    getAllFilters()
      .then(resp => {
        console.log(resp.data, 'all filters');
        filtersData({ ...resp.data });
      })
      .catch(err => console.log('error all filters', err));
  }, []);
  // new end

  const [openSections, setOpenSections] = useState([]);
  const [openFilter, setOpenFilter] = useState('');

  const initialState = {
    regions: [],
    segments: [],
    genders: [],
    retailers: [],
    brands: [],
    categoriesFilter: [],
    keywordsInclude: [],
    keywordsExclude: [],
    colors: [],
    status: ['All'],
    discounted: ['All'],
    replenished: ['All'],
    priceRange: [],
    markdown: [],
    newIn: ['All'],
    firstSellOut: ['All'],
    firstDiscounted: ['All']
  };

  const actions = {
    ADD_FILTER_VALUE: '[FILTER]: ADD_FILTER_VALUE',
    REMOVE_FILTER_VALUE: '[FILTER]: REMOVE_FILTER_VALUE',
    REPLACE_VALUE: '[FILTER]: REPLACE_VALUE'
  };

  const reducer = produce((draft, action) => {
    switch (action.type) {
      case actions.ADD_FILTER_VALUE:
        draft[action.filterValueId] = [
          action.value,
          ...draft[action.filterValueId]
        ];
        break;
      case actions.REMOVE_FILTER_VALUE:
        draft[action.filterValueId] = draft[action.filterValueId].filter(
          activeValue => activeValue !== action.value
        );
        break;
      case actions.REPLACE_VALUE:
        draft[action.filterValueId] = [action.value];
        break;
      default:
        throw new Error();
    }
  });

  const [state, dispatch] = useReducer(reducer, initialState);

  // Universal handler for handling filters' values
  const toggleFilterValueHandler = (filterValueId, value, type) => {
    switch (type) {
      case 'switch':
        if (state.filterValueId !== value) {
          dispatch({ type: actions.ADD_FILTER_VALUE, filterValueId, value });
        }
        break;
      case 'radioButton':
        dispatch({ type: actions.REPLACE_VALUE, filterValueId, value });
        break;
      default: {
        if (state[filterValueId].find(stateValue => stateValue === value)) {
          dispatch({ type: actions.REMOVE_FILTER_VALUE, filterValueId, value });
        } else {
          dispatch({ type: actions.ADD_FILTER_VALUE, filterValueId, value });
        }
      }
    }
  };

  // Handler for opening/closing filters' sections
  const toggleSectionHandler = sectionId => {
    // Close section if it's open already
    if (openSections.find(item => item === sectionId)) {
      setOpenSections(openSections.filter(section => section !== sectionId));
      // Open section
    } else {
      setOpenSections([...openSections, sectionId]);
    }
  };

  // Handler for opening/closing filters' popups
  const toggleFilterHandler = (e, ref, sectionId) => {
    e.stopPropagation();
    // close filter
    if (openFilter === sectionId) {
      setOpenFilter('');
      // open filter
    } else {
      setOpenFilter(sectionId);
    }
  };

  // Get filters for section by section ID
  const getSectionFilters = sectionId =>
    sections[sectionId].subSections.byId.map(subSectionId => {
      return React.createElement(
        getFilter(sections[sectionId].subSections[subSectionId].filterId),
        {
          filterValueId: subSectionId,
          value: state[subSectionId],
          onChangeHandler: toggleFilterValueHandler
        }
      );
    });

  useEffect(() => {
    setOpenFilter('');
  }, [location.pathname]);

  return (
    <C.Wrapper
      className={`${filterOpen || filterPinned ? 'active' : ''}
      ${filterPinned ? 'pinned' : ''}`}
    >
      {(filterOpen || filterPinned) &&
        sections.byId.map(sectionId => {
          const section = sections[sectionId];
          const subSections = sections[sectionId].subSections;
          return (
            <Manager>
              <C.FilterSection>
                <Reference>
                  {({ ref }) => (
                    <C.FilterSectionHeader ref={ref}>
                      <span
                        onClick={e => toggleFilterHandler(e, ref, sectionId)}
                      >
                        {section.name}
                      </span>
                      {section.subSections.byId.some(
                        item => state[item].length
                      ) && (
                        <div onClick={() => toggleSectionHandler(sectionId)}>
                          <Icon
                            name={
                              openSections.find(item => item === sectionId)
                                ? 'substract'
                                : 'plus'
                            }
                          />
                        </div>
                      )}
                    </C.FilterSectionHeader>
                  )}
                </Reference>

                <C.FilterSectionBody
                  className={
                    openSections.find(item => item === sectionId)
                      ? 'active'
                      : ''
                  }
                >
                  {Object.keys(subSections).length !== 0 &&
                    subSections.byId.map(subSectionId => {
                      if (state[subSectionId].length) {
                        return (
                          <C.FilterSubSection>
                            <span>{subSections[subSectionId].name}</span>
                            <Input
                              value={state[subSections[subSectionId].id].join(
                                ', '
                              )}
                            />
                          </C.FilterSubSection>
                        );
                      }
                    })}
                </C.FilterSectionBody>
              </C.FilterSection>
              {openFilter === sectionId && (
                <Popper placement="right-end" positionFixed>
                  {({ ref, style, placement, arrowProps }) => {
                    return (
                      <C.PopperContainer
                        ref={ref}
                        style={{ ...style, left: 260 }}
                        data-placement={placement}
                      >
                        {getSectionFilters(sectionId)}
                        <C.PopperArrowLeft
                          ref={arrowProps.ref}
                          style={arrowProps.style}
                        />
                        <C.PopperCloseButton
                          onClick={e => toggleFilterHandler(e, ref, sectionId)}
                        >
                          <Icon name="close" />
                        </C.PopperCloseButton>
                      </C.PopperContainer>
                    );
                  }}
                </Popper>
              )}
            </Manager>
          );
        })}

      <C.PinIconWrapper
        onClick={() => setFilterPinned(!filterPinned)}
        className={filterPinned ? 'active' : ''}
      >
        <Icon name="pin" />
      </C.PinIconWrapper>
    </C.Wrapper>
  );
};

export default withRouter(Filters);
