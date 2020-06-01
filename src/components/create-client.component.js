import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import * as Constants from '../constants'

export default class CreateClient extends Component {
    constructor(props) {
        super(props)

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeNationality = this.onChangeNationality.bind(this);
        this.onChangeDob = this.onChangeDob.bind(this);
        this.onChangeEducationBackground = this.onChangeEducationBackground.bind(this);
        this.onChangePreferedContactMode = this.onChangePreferedContactMode.bind(this);
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            name: '',
            gender: 'MALE',
            phone: '',
            email: '',
            address: '',
            nationality: 'Nepalese',
            dob: new Date(),
            education_background: 'NONE',
            prefered_contact_mode: null
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeGender(e) {
        this.setState({
            gender: e.target.value
        });
    }

    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        });
    }

    onChangeNationality(e) {
        this.setState({
            nationality: e.target.value
        });
    }

    onChangeDob(date) {
        this.setState({
            dob: date
        });
    }

    onChangeEducationBackground(e) {
        this.setState({
            education_background: e.target.value
        });
    }

    onChangePreferedContactMode(e) {
        this.setState({
            prefered_contact_mode: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault()

        const client = {
            name: this.state.name,
            gender: this.state.gender,
            phone: this.state.phone,
            email: this.state.email,
            address: this.state.address,
            nationality: this.state.nationality,
            dob: this.state.dob,
            education_background: this.state.education_background,
            prefered_contact_mode: this.state.prefered_contact_mode
        }

        console.log(client);


        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };
        axios.post(Constants.SERVER_URL +'/clients', client, axiosConfig).then(res => console.log(res.data));

        // window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Add New Client</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>


                    <div className="form-group">
                    <label>Education Background:
                        <select
                                required
                                className="form-control"
                                value={this.state.gender}
                                onChange={this.onChangeGender}
                            >
                                <option value="MALE">Male</option>
                                <option value="FEMALE">Female</option>
                    
                            </select>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>Phone Number: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.phone}
                            onChange={this.onChangePhone}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label>Address: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.address}
                            onChange={this.onChangeAddress}
                        />
                    </div>
                    <div className="form-group">
                        <label>Nationality: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.nationality}
                            onChange={this.onChangeNationality}
                        />
                    </div>
                    <div className="form-group">
                        <label>Dob: </label>
                        <div>
                            <DatePicker
                                dateFormat="dd/MM/yyyy"
                                selected={this.state.dob}
                                onChange={this.onChangeDob}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Education Background:
                        <select
                                required
                                className="form-control"
                                value={this.state.education_background}
                                onChange={this.onChangeEducationBackground}
                            >
                                <option value="NONE">None</option>
                                <option value="TENTH">Tenth</option>
                                <option value="HIGHSCHOOL">Highschool</option>
                                <option value="UNDERGRAD">Undergrad</option>
                                <option value="POSTGRAD">Postgrad</option>
                                <option value="DOCTORATE">Doctorate</option>
                            </select>
                        </label>
                    </div>

                    <div className="form-group">
                        <label>Preferred Contact Mode:
                        <select
                                required
                                className="form-control"
                                value={this.state.prefered_contact_mode}
                                onChange={this.onChangePreferedContactMode}>
                                <option value="PHONE">Phone</option>
                                <option value="EMAIL">Email</option>
                                <option value={null}>NONE</option>
                            </select>
                        </label>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Client" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}