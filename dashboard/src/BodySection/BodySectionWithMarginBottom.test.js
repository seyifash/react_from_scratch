import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('BodySectionWithMarginBottom Component', () => {
  it('should render BodySection component with correct props', () => {
    // Define test props
    const title = 'test title';
    const children = <p>test children node</p>;

    // Shallow render the component with test props
    const wrapper = shallow(
      <BodySectionWithMarginBottom title={title}>{children}</BodySectionWithMarginBottom>
    );

    // Check if BodySection component renders within BodySectionWithMarginBottom
    expect(wrapper.find(BodySection).exists()).toEqual(true);

    // Check if props are passed correctly to BodySection component
    const bodySectionProps = wrapper.find(BodySection).props();
    expect(bodySectionProps.title).toEqual(title);
    expect(bodySectionProps.children).toEqual(children);
  });
});