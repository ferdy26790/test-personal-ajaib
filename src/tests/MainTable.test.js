
import Table from '../components/MainTable';
import * as React from 'react';
import { mount } from 'enzyme';
import '../setupTests';
import { mappingListData } from '../helper';

const mockData = [
    {
		"gender": "female",
		"name": {
			"title": "Mrs",
			"first": "Audrey",
			"last": "Hipburn"
		},
		"location": {
			"street": {
				"number": 4205,
				"name": "شهید بهشتی"
			},
			"city": "قدس",
			"state": "خراسان شمالی",
			"country": "Iran",
			"postcode": 66189,
			"coordinates": {
				"latitude": "20.9668",
				"longitude": "110.8729"
			},
			"timezone": {
				"offset": "+4:30",
				"description": "Kabul"
			}
		},
		"email": "audrey@test.com",
		"login": {
			"uuid": "487a66a5-9b78-4ce3-aaf6-9e3011f4be6e",
			"username": "heavymeercat912",
			"password": "working",
			"salt": "SBHU6p5M",
			"md5": "e2b279b9c7155d9306bab2a5e67fe8c8",
			"sha1": "fa0b54951b4369848f5f4b03ae7c7813e8227045",
			"sha256": "aa3e07af9c7153d164cac957ebdd9998c98e199fef36cb7148320a0e16e7363d"
		},
		"dob": {
			"date": "1955-05-08T16:36:27.945Z",
			"age": 67
		},
		"registered": {
			"date": "2003-04-21T16:19:26.275Z",
			"age": 19
		},
		"phone": "009-37838507",
		"cell": "0961-806-6206",
		"id": {
			"name": "",
			"value": null
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/women/7.jpg",
			"medium": "https://randomuser.me/api/portraits/med/women/7.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/women/7.jpg"
		},
		"nat": "IR"
	},
    {
		"gender": "male",
		"name": {
			"title": "Mr",
			"first": "Frank",
			"last": "Sinatra"
		},
		"location": {
			"street": {
				"number": 1234,
				"name": "Sesame street"
			},
			"city": "New York",
			"state": "United State",
			"country": "United State",
			"postcode": 123456,
			"coordinates": {
				"latitude": "20.9668",
				"longitude": "110.8729"
			},
			"timezone": {
				"offset": "+0:00",
				"description": "US"
			}
		},
		"email": "frankey@test.com",
		"login": {
			"uuid": "798a66a5-9b78-4ce3-abf6-9e3011f4be6f",
			"username": "frankiewitch",
			"password": "witchcraft",
			"salt": "SBHU6p5L",
			"md5": "e2b279b9c7155d9306bab2a5e67fe8c8",
			"sha1": "fa0b54951b4369848f5f4b03ae7c7813e8227045",
			"sha256": "aa3e07af9c7153d164cac957ebdd9998c98e199fef36cb7148320a0e16e7363d"
		},
		"dob": {
			"date": "1955-05-08T16:36:27.945Z",
			"age": 67
		},
		"registered": {
			"date": "2003-04-21T16:19:26.275Z",
			"age": 32
		},
		"phone": "009-37838507",
		"cell": "0961-806-6206",
		"id": {
			"name": "",
			"value": null
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/women/7.jpg",
			"medium": "https://randomuser.me/api/portraits/med/women/7.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/women/7.jpg"
		},
		"nat": "IR"
	}
]


describe('Test <MainTable />', () => {
	it("Should render table with empty data", () => {
        const wrapper = mount(<Table data={[]} loading={true}/>);
        expect(wrapper.props().data.length).toBe(0);
		expect(wrapper.children().props().children.props.rows.length).toEqual(0);
		expect(wrapper.children().props().children.props.rows).toEqual([]);
    });

    it("Should render table with given mock data", () => {
        const wrapper = mount(<Table data={mappingListData(mockData)} loading={true}/>);
        expect(wrapper.props().data.length).toBe(2);
		expect(wrapper.children().props().children.props.rows.length).toEqual(mockData.length);
		expect(wrapper.children().props().children.props.rows).toEqual(mappingListData(mockData));
    });
});

