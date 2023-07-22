import React from "react";
import "./AddProjectForm.scss";

const AddProjectForm = () => {
  return (
    <form className="Add-Projectform">
    <h2 className="form-heading">Add a New Project</h2>

    <div className="form-group">
      <label htmlFor="name">Project Name:</label>
      <input type="text" id="name" name="name" required />
    </div>

    <div className="form-group">
      <label htmlFor="teamLead">Choose Team Lead:</label>
      <select id="teamLead" name="teamLead">
        <option value="user1">user1</option>
        <option value="user2">user2</option>
        <option value="user3">user3</option>
      </select>
    </div>

    <div className="form-group">
      <label htmlFor="members">Choose Members:</label>
      <select id="members" name="members">
        <option value="user1">user1</option>
        <option value="user2">user2</option>
        <option value="user3">user3</option>
      </select>
    </div>

    <div className="form-group">
      <label htmlFor="description">Description:</label>
      <textarea id="description" name="description" cols="30" rows="5"></textarea>
    </div>

    <div className="form-group">
      <label htmlFor="deadline">Deadline:</label>
      <input type="date" id="deadline" name="deadline" />
    </div>

    <button type="submit" className="submit-button">Submit</button>
  </form>
  );
};

export default AddProjectForm;
