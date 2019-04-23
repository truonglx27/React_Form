import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default class FormInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      descript: "",
      sltGender: 1,
      rdLang: "ja",
      cbStatus: true
    };
  }
  onHandleChange = event => {
    // console.log(event.target);
    let target = event.target;
    let name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
    //  console.log(name) ;
  };

  onhandleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    const {
      username,
      password,
      sltGender,
      descript,
      rdLang,
      cbStatus
    } = this.state;
    return (
      <Form onSubmit={this.onhandleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Username : </Label>
          <Input
            type="text"
            name="username"
            id="exampleEmail"
            placeholder="xuantruong"
            onChange={this.onHandleChange}
            value={username}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="**********"
            onChange={this.onHandleChange}
            value={password}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input
            type="textarea"
            name="descript"
            onChange={this.onHandleChange}
            value={descript}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Gender:</Label>
          <Input
            type="select"
            name="sltGender"
            id="exampleSelect"
            value={sltGender}
            onChange={this.onHandleChange}
          >
            <option value={0}>Nữ</option>
            <option value={1}>Nam</option>
            <option value={2}>Khác</option>
          </Input>
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Language</legend>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="rdLang"
                value="en"
                onChange={this.onHandleChange}
                checked={rdLang === "en"}
              />
              English
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="rdLang"
                value="ja"
                onChange={this.onHandleChange}
                checked={rdLang === "ja"}
              />
              Japan
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              name="cbStatus"
              value={true}
              onChange={this.onHandleChange}
              checked={cbStatus === true}
            />{" "}
            Status
          </Label>
        </FormGroup>
        <Button className="mr-2">Submit</Button>
        <Button type="reset" color="light">
          Xoa Trang
        </Button>
      </Form>
    );
  }
}
