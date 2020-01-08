import React, { Component } from 'react';
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            poster: '',
            comment: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    };
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    submitForm(e) {
        e.preventDefault();
        alert('Message envoyé');
    }


render() {

   

    

    return (

        <div className="FormContact">
            <h1>Contact</h1>

            <form onSubmit={this.submitForm}>
                <div>

                    <div className="form-data">
                        <label htmlFor="name"> Nom :</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            onChange={this.onChange}
                            value={this.state.name}
                        />
                    </div>

                    <div className="form-data">
                        <label htmlFor="poster">Email :</label>
                        <input
                            type="text"
                            id="poster"
                            name="poster"
                            onChange={this.onChange}
                            value={this.state.poster}
                        />
                    </div>

                    <div className="form-data">
                        <label htmlFor="comment">Message :</label>
                        <input
                            type="textarea"
                            id="comment"
                            name="comment"
                            onChange={this.onChange}
                            value={this.state.comment}
                        />
                    </div>
                    
                    <div className="form-send">
                        <input type="submit" value="Envoyer" input/>
                    </div>
                </div>
            </form>
        </div>

    )
}
}


export default Contact;