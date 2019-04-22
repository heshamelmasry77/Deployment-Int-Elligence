import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
import Table from 'react-bootstrap/Table';
import { Button, Container } from 'react-bootstrap';
import 'mdbreact/dist/css/mdb.css';
import Card from '../form/Card';
import GetAllUserForms from '../form/GetAllUserForms';
import { Dropdown } from 'react-bootstrap';
var $ = require('jquery')(window);

// tabRow(){
//   return this.state.companies.map(function(company,i){
//       return <GetAllUserForms company={company} key={i} />;
//   });
// }

class Companies extends Component {
	state = {
		companies: []
	};
	componentDidMount() {
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
		axios
			.get('/routes/api/userDynamicForms/getLawyerInProgressCases/', {
				headers: { Authorization: localStorage.getItem('jwtToken') }
			})
			.then((res) => {
				if (Array.isArray(res.data.data)) {
					this.setState({ companies: res.data.data });
				}
			});
	}

	sort = () => {
		axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
		axios
			.get('/routes/api/users/SpecificFormSortedByFormId', {
				headers: { Authorization: localStorage.getItem('jwtToken') }
			})
			.then((res) => {
				this.setState({ companies: res.data.data });
				alert('Cases have been sorted');
			})
			.catch((err) => {
				console.log(err);
			});
	};
	sortByCreationDate = () => {
		axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
		axios
			.get('/routes/api/user/SpecificformsSortedByformDate', {
				headers: { Authorization: localStorage.getItem('jwtToken') }
			})
			.then((res) => {
				this.setState({ companies: res.data.data });
				alert('Cases have been sorted');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	tabRow = () => {
		return this.state.companies.map((company, i) => {
			return <Card company={company} key={i} />;
		});
	};

	render() {
		return (
			<div>
				<div>
					<div
						style={{
							backgroundColor: '#a3dbf1',
							marginTop: '80px',
							textAlign: 'center',
							fontSize: '50px',
							color: 'dark',
							paddingLeft: '60px',
							flexDirection: 'row',
							justifyContent: 'flex-end'
						}}
					>
						<h2 style={{ fontSize: '50px' }}>Lawyer SPC Cases</h2>
						<Dropdown>
							<Dropdown.Toggle variant="dark dark" id="dropdown-basic" style={{ width: '150px' }}>
								Sort the Cases
							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item onClick={() => this.sort()} style={{ textAlign: 'left' }}>
									By ID
								</Dropdown.Item>
								<Dropdown.Divider />
								<Dropdown.Item
									onClick={() => this.sortByCreationDate()}
									style={{ textAlign: 'center' }}
								>
									By Creation Date
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>
				</div>
				{this.tabRow()}
			</div>
		);
	}
}
export default Companies;
