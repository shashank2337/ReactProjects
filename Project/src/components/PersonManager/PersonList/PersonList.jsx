import React from "react";
import { connect } from "react-redux";

import { Table, Button } from "reactstrap";
import { removeTaskAction } from "../../../actions/taskActions";

const PersonList = (props) => {
  const { tasks } = props;

  const handleDelete = (id) => {
    props.deleteTask(id);
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>pinCode</th>
          <th>Country</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((rowData, index) => (
          <tr>
            <th scope="row">{index + 1}</th>
            <td>{rowData.name}</td>
            <td>{rowData.age}</td>
            <td>{rowData.address}</td>
            <td>{rowData.pinCode}</td>
            <td>{rowData.country}</td>
            <td>
              {
                <Button
                  close
                  onClick={(e) =>
                    window.confirm("Are you sure you want to delete") &&
                    handleDelete(rowData.id)
                  }
                />
              }
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const mapStateToProps = (state) => {
  //state is store.getState()
  return {
    tasks: state.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask: (id) => {
      dispatch(removeTaskAction(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonList);
