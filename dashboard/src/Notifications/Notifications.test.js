import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';

const listNotifications = [
	{ id: 1, type: 'default', value: 'New course available' },
	{ id: 2, type: 'urgent', value: 'New resume available' },
	{ id: 3, type: 'urgent', html: getLatestNotification() },
];


describe('Notifications Component', () => {
  it('should render without crashing', () => {
    shallow(<Notifications />);
  });

  it('verify that Notifications renders ul', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('ul')).toBeDefined();
  });

  it('should display menu item when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.menuItem').text()).toEqual('Your notifications');
  });

  it('should not display div.Notifications when displaydrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.Notifications').exists()).toBeFalsy();
  });

  it('should display menu item when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.menuItem').text()).toEqual('Your notifications');
  });

  it('should not display div.Notifications when displaydrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications').exists()).toBeTruthy();
  });

  it('renders correctly when listCourses is not passed', () => {
		const wrapper = shallow(<Notifications displayDrawer={true} />);

		expect(
			wrapper.containsMatchingElement(
				<li data-notification-type='default'>No new notification for now</li>
			)
		);
	});

	it('renders correctly when empty array is passed', () => {
		const wrapper = shallow(
			<Notifications displayDrawer={true} listNotifications={[]} />
		);

		expect(
			wrapper.containsMatchingElement(
				<li data-notification-type='default'>No new notification for now</li>
			)
		);
	});

  it('renders "No new notifications for now" instead of "Here is the list of notifications" when listNotifications is empty', () => {
		const wrapper = shallow(
			<Notifications displayDrawer={true} listNotifications={[]} />
		);

		expect(
			wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)
		).toBe(false);

		expect(
			wrapper.containsMatchingElement(
				<li data-notification-type='default'>No new notification for now</li>
			)
		);
	});

  it('renders correctly when listNotifications is passed and with the right number of notifications', () => {
		const wrapper = shallow(
			<Notifications
				displayDrawer={true}
				listNotifications={listNotifications}
			/>
		);

		expect(wrapper.find('ul').children()).toHaveLength(3);
		wrapper.find('ul').forEach((node) => {
			expect(node.equals(<NotificationItem />));
		});
	});

	it('doesnt re-render when the list passed as prop is the same', () => {
		const wrapper = shallow(
			<Notifications
				displayDrawer={true}
				listNotifications={listNotifications}
			/>
		);

		expect(wrapper.instance().shouldComponentUpdate(listNotifications)).toBe(
			false
		);
	});

	it('re-renders if listNotifications if listNotifications is changed', () => {
		const newListNotifications = [
			{ id: 1, type: 'default', value: 'New course available' },
			{ id: 2, type: 'urgent', value: 'New resume available' },
			{ id: 3, type: 'default', html: getLatestNotification() },
			{ id: 4, type: 'default', value: 'Foo' },
		];

		const wrapper = shallow(
			<Notifications
				displayDrawer={true}
				listNotifications={listNotifications}
			/>
		);

		expect(wrapper.instance().shouldComponentUpdate(newListNotifications)).toBe(
			true
		);
	});
	const listNotifications = [
		{ id: 1, type: 'default', value: 'New course available' },
		{ id: 2, type: 'urgent', value: 'New resume available' },
		{ id: 3, type: 'default', html: getLatestNotification() },
	];
	const mockFn = jest.fn();
	const wrapper = shallow(
		<Notifications
			listNotifications={listNotifications}
			handleDisplayDrawer={mockFn}
		/>
	);
	const spy = jest.spyOn(wrapper.instance().props, 'handleDisplayDrawer');

	wrapper.find('.menuItem').simulate('click');
	expect(spy).toBeCalled();
	spy.mockRestore();
});

it('should call handleHideDrawer when close button is clicked', () => {
	const listNotifications = [
		{ id: 1, type: 'default', value: 'New course available' },
		{ id: 2, type: 'urgent', value: 'New resume available' },
		{ id: 3, type: 'default', html: getLatestNotification() },
	];
	const mockFn = jest.fn();
	const wrapper = shallow(
		<Notifications
			displayDrawer={true}
			listNotifications={listNotifications}
			handleHideDrawer={mockFn}
		/>
	);
	const spy = jest.spyOn(wrapper.instance().props, 'handleHideDrawer');
	wrapper.find('button').simulate('click');

	expect(spy).toBeCalled();
	spy.mockRestore();

});