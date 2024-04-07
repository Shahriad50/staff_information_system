import React from "react";
// import Card from "./Card";
import "../css/card.css";

const notices = [
  {
    id: 1,
    type: "General",
    title: "Meeting Scheduled",
    uploadedDate: "2023-07-14T09:30:00",
    fileUrl: "#",
  },
  {
    id: 2,
    type: "General",
    title: "New Policy",
    uploadedDate: "2023-07-12T17:00:00",
    fileUrl: "#",
  },
  {
    id: 3,
    type: "General",
    title: "Annual Leave",
    uploadedDate: "2023-06-29T10:45:00",
    fileUrl: "https://www.ripublication.com/ijaer17/ijaerv12n5_12.pdf",
  },
  {
    id: 4,
    type: "Important",
    title: "End of Quarter Reporting",
    uploadedDate: "2023-07-05T15:30:00",
    fileUrl: "#",
  },
  {
    id: 5,
    type: "Important",
    title: "System Maintenance",
    uploadedDate: "2023-07-02T09:00:00",
    fileUrl: "#",
  },
  {
    id: 6,
    type: "Academic",
    title: "System Maintenance",
    uploadedDate: "2023-07-02T09:00:00",
    fileUrl: "#",
  },
  {
    id: 7,
    type: "Examination",
    title: "System Maintenance",
    uploadedDate: "2023-07-02T09:00:00",
    fileUrl: "#",
  },
  {
    id: 8,
    type: "General",
    title: "Our University wants some papers from students",
    uploadedDate: "2023-07-02T09:00:00",
    fileUrl: "#",
  },
  {
    id: 9,
    type: "Others",
    title: "System Maintenance",
    uploadedDate: "2023-07-02T09:00:00",
    fileUrl: "#",
  },
];
const NoticeBoard = () => {
  return (
    <div className="row card-container">
      <div className="col-8">
        <div
          className="add-notice-btn"
          data-bs-toggle="modal"
          data-bs-target="#noticeModal"
        >
          <div className="add-icon">
            <button type="button" class="btn btn-success">
              <i className="fas fa-plus"> Add New Notice</i>
            </button>
          </div>
        </div>

        <div className="col-12 notice-board-content my-5">
          <h3> All Notices</h3>
          <div className="input-group search-bar">
            <div className="form-outline flex-fill">
              <input
                type="search"
                id="searchInput"
                className="form-control form-control-lg"
                placeholder="Search notice as type"
              />
            </div>
            <button type="button" className="btn btn-primary">
              <i className="fas fa-search"></i>
            </button>
          </div>

          <div className="notice-list">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Type</th>
                  <th>Title</th>
                  <th>Uploaded Date</th>
                  <th>View File</th>
                </tr>
              </thead>
              <tbody>
                {notices.map((notice) => (
                  <tr key={notice.id}>
                    <td>{notice.id}</td>
                    <td>{notice.type}</td>
                    <td>{notice.title}</td>
                    <td>{new Date(notice.uploadedDate).toLocaleString()}</td>
                    <td>
                      <a href={notice.fileUrl}>
                        {" "}
                        <i className="fas fa-file"></i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="filter-container">
          <h4>Filter Notices</h4>
          <div className="form-group my-3">
            <label htmlFor="typeFilter">Type:</label>
            <select id="typeFilter" className="form-select">
              <option value="">All</option>
              {Array.from(new Set(notices.map((notice) => notice.type))).map(
                (type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                )
              )}
            </select>
          </div>
          <div className="form-group my-3">
            <label htmlFor="dateFilter">Uploaded Date:</label>
            <input type="date" id="dateFilter" className="form-control" />
          </div>
          <div className="form-group my-3">
            <label htmlFor="titleFilter">Title:</label>
            <input type="text" id="titleFilter" className="form-control" />
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="noticeModal"
        tabindex="-1"
        aria-labelledby="noticeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="noticeModalLabel">
                Add New Notice
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form method="POST" type="enctype/multi-part">
                <div>
                  <label htmlFor="title">Title:</label>
                  <input type="text" id="title" name="title" required />
                  <br />
                </div>
                <div>
                  <label htmlFor="category">Type:</label>
                  <select
                    className="form-select my-2"
                    id="dropdownMenuButton"
                    aria-label="contained"
                  >
                    <option selected>Academic</option>
                    <option value="1">Registrar</option>
                    <option value="2">Exam Controller</option>
                    <option value="3">Special</option>
                    <option value="4">Others</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="description">Description:</label>
                  <input id="description" name="description"></input>
                  <br />
                </div>
                <div>
                  <label htmlFor="uploadDate">Upload Date:</label>
                  <input
                    type="date"
                    id="uploadDate"
                    name="uploadDate"
                    required
                  />
                  <br />
                </div>
                <div>
                  <label htmlFor="expiryDate">Expiry Date:</label>
                  <input
                    type="date"
                    id="expiryDate"
                    name="expiryDate"
                    required
                  />
                  <br />
                </div>
                <div className="file-upload-container">
                  <label htmlFor="file">Add File</label>
                  <input type="file" id="file" name="file" accept="image/*" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary "
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                form="noticeModal"
                className="btn btn-success"
              >
                Add Notice
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
