import React,{useState,useEffect} from "react";
// import Card from "./Card";
import "../css/card.css";
import axios from 'axios'

const noticesArray = [
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
  const [noticeData, setNoticeData] = useState({
    notice_title: "",
    notice_type: "",
    notice_description:"",
    notice_attachment: "",
    // notice_uploaded_Date: "",
    notice_created_by:"93712a07-0304-11ef-a96d-3c5282764ceb"
  });

  const [notices,setNotices]=useState([])
  const [totalRecords, setTotalRecords] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [firstPage, setFirstPage] = useState(0);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);


  const onChange = (e) => {
    e.preventDefault();
    setNoticeData({ ...noticeData, [e.target.name]: e.target.value });
    console.log(e.target.value)
  };

  const resetNotice = () => {
    setNoticeData({
    notice_title: "",
    notice_type: "",
    notice_description:"",
    notice_attachment: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(noticeData)
      const response = await axios.post("http://localhost:5000/api/notice/add/", noticeData);
      if (response.status === 200) {
        const data = await response.data;
        if (data.success) {
          setNotices((prevNotices) => [...prevNotices, noticeData]);
          resetNotice();
          fetchNotices();
        } else {
          alert(data.message);
        }
      } else {
        console.error(`Error occurred: ${response.status}`);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.error("Request failed with status code 400");
      } else {
        console.error(error);
      }
    }
  };
  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/notice/allnotice');
      if (response.data && Array.isArray(response.data.data)) {
        setNotices(response.data.data);
        setTotalRecords(response.data.total_records);
        setPageCount(response.data.page_count);
        setFirstPage(response.data.first_page);
        setNextPage(response.data.next);
        setPrevPage(response.data.previous);
      }
    } catch (error) {
      console.error('Error fetching notices:', error);
      setNotices([]); // Set notices to an empty array on error
    }
  };
  return (
    <div className="row card-container">
      <div className="col-8">
        <div
          className="add-notice-btn"
          data-bs-toggle="modal"
          data-bs-target="#noticeModal"
        >
          <div className="add-icon">
            <button type="button" className="btn btn-success">
              <i className="fas fa-plus"> </i>Add New Notice
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
                  <th>Description</th>
                  <th>Uploaded Date</th>
                  <th>View File</th>
                </tr>
              </thead>
              <tbody>
                {notices && notices.map((notice) => (
                  <tr key={notice.notice_id}>
                    <td>{notice.notice_id}</td>
                    <td>{notice.notice_type}</td>
                    <td>{notice.notice_title}</td>
                    <td>{notice.notice_description}</td>
                    <td>{(new Date(notice.notice_uploaded_time)).toLocaleString()}</td>
                    <td>
                      <a href={process.env.PUBLIC_URL + "/" + notice.notice_attachment}>
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
          <div>
        <button onClick={() => fetchNotices(prevPage)} disabled={!prevPage}>
          Previous
        </button>
        <button onClick={() => fetchNotices(nextPage)} disabled={!nextPage}>
          Next
        </button>
      </div>
        </div>
    
      <div className="col-4">
        <div className="filter-container">
          <h4>Filter Notices</h4>
          <div className="form-group my-3">
            <label htmlFor="typeFilter">Type:</label>
            <select id="typeFilter" className="form-select">
              <option value="">All</option>
              {Array.from(new Set(notices.map((notice) => notice.notice_type))).map(
                (type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                )
              )}
            </select>
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
        tabIndex="-1"
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
              <form >
                <div>
               
                  <label htmlFor="title">Title:</label>
                  <input type="text" id="title" name="notice_title" value={noticeData.notice_title} onChange={onChange}  required /> 
                  <br />
                </div>
                <div>
                  <label htmlFor="category">Type:</label>
                  <select
                    className="form-select my-2"
                    id="dropdownMenuButton"
                    name="notice_type"
                    aria-label="contained"
                    onChange={onChange}
                    value={noticeData.notice_type}
                  >
                    <option value="Academic">Academic</option>
                    <option value="Register">Registrar</option>
                    <option value="Exam Controller">Exam Controller</option>
                    <option value="Special">Special</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="description">Description:</label>
                  <input id="description" name="notice_description"  value={noticeData.notice_description} onChange={onChange}></input>
                  <br />
                </div>
                <div className="file-upload-container">
                  <label htmlFor="file">Add File</label>
                  <input type="file" id="file" name="notice_attachment" accept="*/*" value={noticeData.notice_attachment} onChange={onChange}/>
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
                onClick={handleSubmit}
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
