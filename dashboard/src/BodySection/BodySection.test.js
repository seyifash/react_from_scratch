import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection Component', () => {
  it('should render correctly with children and title', () => {
    // Define test props
    const title = 'test title';
    const children = <p>test children node</p>;

    // Shallow render the component with test props
    const wrapper = shallow(<BodySection title={title}>{children}</BodySection>);

    // Check if h2 element renders with the correct title
    expect(wrapper.find('h2').text()).toEqual(title);

    // Check if children render correctly
    expect(wrapper.containsMatchingElement(children)).toEqual(true);
  });
});