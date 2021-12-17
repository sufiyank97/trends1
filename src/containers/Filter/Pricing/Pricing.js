import React, { Component } from 'react';
import IntlMessages from '../../../components/utility/IntlMessages';
import * as Comps from './Pricing.style';

class Pricing extends Component {
  state = {
    selectedStockValue: 'a',
    selectedDiscountValue: 'a',
    selectedReplValue: 'a',
    selectedFlashValue: 'a',
    selectedOutletValue: 'a',
    currency: 'USD'
  };

  handleStockChange = event => {
    this.setState({ selectedStockValue: event.target.value });
  };

  handleDiscountChange = event => {
    this.setState({ selectedDiscountValue: event.target.value });
  };

  handleReplChange = event => {
    this.setState({ selectedReplValue: event.target.value });
  };

  handleFlashChange = event => {
    this.setState({ selectedFlashValue: event.target.value });
  };

  handleOutletChange = event => {
    this.setState({ selectedOutletValue: event.target.value });
  };

  handleCurrencyChange = event => {
    this.setState({ currency: event.target.value });
  };

  render() {
    return (
      <Comps.Wrapper>
        <Comps.Headbar>
          <Comps.CategoryFilter>
            <h3>
              <IntlMessages id="trends.pricing.status" />
            </h3>
          </Comps.CategoryFilter>
        </Comps.Headbar>
        <Comps.ContentWrapper>
          <div>
            <h3>
              <IntlMessages id="trends.pricing.stock" />
            </h3>
            <div className="radio-group-wrapper">
              <Comps.StyledRadio
                checked={this.state.selectedStockValue === 'a'}
                onChange={this.handleStockChange}
                value="a"
              />
              <p>
                <IntlMessages id="trends.pricing.all" />
              </p>
              <Comps.StyledRadio
                checked={this.state.selectedStockValue === 'b'}
                onChange={this.handleStockChange}
                value="b"
              />
              <p>
                <IntlMessages id="trends.pricing.inStock" />
              </p>
              <Comps.StyledRadio
                checked={this.state.selectedStockValue === 'c'}
                onChange={this.handleStockChange}
                value="c"
              />
              <p>
                <IntlMessages id="trends.pricing.outOfStock" />
              </p>
            </div>
            <p>
              <IntlMessages id="trends.pricing.discountedProducts" />
            </p>
            <div className="radio-group-wrapper">
              <Comps.StyledRadio
                checked={this.state.selectedDiscountValue === 'a'}
                onChange={this.handleDiscountChange}
                value="a"
              />
              <p>
                <IntlMessages id="trends.pricing.all" />
              </p>
              <Comps.StyledRadio
                checked={this.state.selectedDiscountValue === 'b'}
                onChange={this.handleDiscountChange}
                value="b"
              />
              <p>
                <IntlMessages id="trends.pricing.excludeDiscounted" />
              </p>
              <Comps.StyledRadio
                checked={this.state.selectedDiscountValue === 'c'}
                onChange={this.handleDiscountChange}
                value="c"
              />
              <p>
                <IntlMessages id="trends.pricing.discountedOnly" />
              </p>
            </div>
            <p>
              <IntlMessages id="trends.pricing.replenishment" />
            </p>
            <div className="radio-group-wrapper bordered">
              <Comps.StyledRadio
                checked={this.state.selectedReplValue === 'a'}
                onChange={this.handleReplChange}
                value="a"
              />
              <p>
                <IntlMessages id="trends.pricing.all" />
              </p>
              <Comps.StyledRadio
                checked={this.state.selectedReplValue === 'b'}
                onChange={this.handleReplChange}
                value="b"
              />
              <p>
                <IntlMessages id="trends.pricing.never" />
              </p>
              <Comps.StyledRadio
                checked={this.state.selectedReplValue === 'c'}
                onChange={this.handleReplChange}
                value="c"
              />
              <p>
                <IntlMessages id="trends.pricing.atLeastOnce" />
              </p>
              <Comps.StyledRadio
                checked={this.state.selectedReplValue === 'd'}
                onChange={this.handleReplChange}
                value="d"
              />
              <p>
                <IntlMessages id="trends.pricing.atLeastTwice" />
              </p>
            </div>
            <h3>
              <IntlMessages id="trends.pricing.channel" />
            </h3>
            <p>
              <IntlMessages id="trends.pricing.flashSales" />
            </p>
            <div className="radio-group-wrapper">
              <Comps.StyledRadio
                checked={this.state.selectedFlashValue === 'a'}
                onChange={this.handleFlashChange}
                value="a"
              />
              <p>
                <IntlMessages id="trends.pricing.all" />
              </p>
              <Comps.StyledRadio
                checked={this.state.selectedFlashValue === 'b'}
                onChange={this.handleFlashChange}
                value="b"
              />
              <p>
                <IntlMessages id="trends.pricing.excludeFlashSales" />
              </p>
              <Comps.StyledRadio
                checked={this.state.selectedFlashValue === 'c'}
                onChange={this.handleFlashChange}
                value="c"
              />
              <p>
                <IntlMessages id="trends.pricing.onlyFlashSales" />
              </p>
            </div>
            <p>
              <IntlMessages id="trends.pricing.outlet" />
            </p>
            <div className="radio-group-wrapper">
              <Comps.StyledRadio
                checked={this.state.selectedOutletValue === 'a'}
                onChange={this.handleOutletChange}
                value="a"
              />
              <p>
                <IntlMessages id="trends.pricing.all" />
              </p>
              <Comps.StyledRadio
                checked={this.state.selectedOutletValue === 'b'}
                onChange={this.handleOutletChange}
                value="b"
              />
              <p>
                <IntlMessages id="trends.pricing.excludeOutlet" />
              </p>
              <Comps.StyledRadio
                checked={this.state.selectedOutletValue === 'c'}
                onChange={this.handleOutletChange}
                value="c"
              />
              <p>
                <IntlMessages id="trends.pricing.onlyOutlet" />
              </p>
            </div>
          </div>
          <div className="right-side">
            <h3>
              <IntlMessages id="trends.pricing.price" />
            </h3>
            <p>
              <IntlMessages id="trends.pricing.priceRange" />
            </p>
            <div className="price-range">
              <span>
                <IntlMessages id="trends.pricing.from" />
              </span>
              <input type="text" />
              <span>
                <IntlMessages id="trends.pricing.to" />
              </span>
              <input type="text" />
              <select onChange={this.handleCurrencyChange}>
                <option value="USD">USD</option>
                <option value="EURO">EURO</option>
                <option value="RUB">RUB</option>
              </select>
            </div>
            <Comps.PriceChangesWrapper>
              <div className="price-changes-wrapper">
                <p>
                  <IntlMessages id="trends.pricing.priceChanges" />
                </p>
                <div className="price-checkbox-wrapper">
                  <Comps.StyledCheckbox />
                  <p>
                    <IntlMessages id="trends.pricing.allProducts" />
                  </p>
                </div>
                <div style={{ border: 'none', padding: '10px 0 0 0' }}>
                  <div className="price-checkbox-wrapper more-width">
                    <Comps.StyledCheckbox />
                    <p>
                      <IntlMessages id="trends.pricing.discounted" />
                    </p>
                  </div>
                  <div style={{ border: 'none', padding: '0 0 0 10px' }}>
                    <p>
                      <IntlMessages id="trends.pricing.selectDiscount" />
                    </p>
                    <div className="price-range bottom">
                      <span>
                        <IntlMessages id="trends.pricing.from" />
                      </span>
                      <input type="text" placeholder="0%" />
                      <span>
                        <IntlMessages id="trends.pricing.to" />
                      </span>
                      <input type="text" placeholder="100%" />
                    </div>
                  </div>
                  <div className="price-checkbox-wrapper more-width-padding">
                    <Comps.StyledCheckbox />
                    <p>
                      <IntlMessages id="trends.pricing.notDiscounted" />
                    </p>
                  </div>
                  <div className="price-checkbox-wrapper more-width-padding">
                    <Comps.StyledCheckbox />
                    <p>
                      <IntlMessages id="trends.pricing.priceIncreased" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="price-changes-wrapper">
                <p>
                  <IntlMessages id="trends.pricing.advertisedDiscounts" />
                </p>
                <div className="price-checkbox-wrapper">
                  <Comps.StyledCheckbox />
                  <p>
                    <IntlMessages id="trends.pricing.allProducts" />
                  </p>
                </div>
                <div style={{ border: 'none', padding: '10px 0 0 0' }}>
                  <div className="price-checkbox-wrapper width-47">
                    <Comps.StyledCheckbox />
                    <p>
                      <IntlMessages id="trends.pricing.advertisedDiscount" />
                    </p>
                  </div>
                  <div style={{ border: 'none', padding: '0 0 0 10px' }}>
                    <p>
                      <IntlMessages id="trends.pricing.selectDiscount" />
                    </p>
                    <div className="price-range bottom">
                      <span>
                        <IntlMessages id="trends.pricing.from" />
                      </span>
                      <input type="text" placeholder="0%" />
                      <span>
                        <IntlMessages id="trends.pricing.to" />
                      </span>
                      <input type="text" placeholder="100%" />
                    </div>
                  </div>
                  <div className="price-checkbox-wrapper width-52">
                    <Comps.StyledCheckbox />
                    <p>
                      <IntlMessages id="trends.pricing.noAdvertisedDiscount" />
                    </p>
                  </div>
                </div>
              </div>
            </Comps.PriceChangesWrapper>
          </div>
        </Comps.ContentWrapper>
      </Comps.Wrapper>
    );
  }
}

export default Pricing;
