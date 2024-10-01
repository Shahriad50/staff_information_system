import React, { useContext, useEffect,useState } from "react";
import { Link } from "react-router-dom";
import "./css/card.css";
import "./css/worklist.css";
import axios from "axios";
import { WorklistContext } from './WorklistContext';

const session_token=process.env.REACT_APP_SESSION_TOKEN
const Worklist = () => {
  const { worklists, setWorklists } = useContext(WorklistContext);

  const [totalRecords, setTotalRecords] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [firstPage, setFirstPage] = useState(0);
  const [nextPage, setNextPage] = useState(0);
  const [prevPage, setPrevPage] = useState(0);

  useEffect(()=>{
    fetchWorkList(firstPage);
  },[]);
  const fetchWorkList=async(pageNumber)=>{
      const config = {
          headers: {
            
            "Content-Type": "application/json",
            "Authorization": `Bearer ${session_token}`
          },
        };
    try{
      const response=await axios.get(`${process.env.REACT_APP_API_URL}/task?page=${pageNumber.page}`);
      // console.log(response.data);
      if (response.data && Array.isArray(response.data.data)) {
        setWorklists(response.data.data);
        setTotalRecords(response.data.total_records);
        setPageCount(response.data.page_count);
        setFirstPage(response.data.first_page);
        setNextPage(response.data.next);
        setPrevPage(response.data.previous);
        // console.log(worklists.length)
      }
      else{
        console.log(response.status);
      }
    }
    catch(error){
      console.log(error.message);
    }
  }
  return (
    <div className="card-container">
      <h3>Worklist</h3>
      <table className="worklist-table">
        <thead>
          <tr>
            <th>SL</th>
            <th>Title</th>
            <th>Date</th>
            <th>Due Date</th>
            <th>Assigned by</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {worklists && worklists.map((work, index) => (
            <tr key={work.task_id}>
              <td>{index + 1}</td>
              <td>
                <Link to={{ pathname: `/description/${work.task_id}`, state: { work: work } }}>
                  {work.task_title}
                </Link>
              </td>
              <td>{work.assign_date ? new Date(work.assign_date).toLocaleDateString() : ''}</td>
              <td>{work.due_date ? new Date(work.due_date).toLocaleDateString() : ''}</td>
              <td>{work.first_name} {work.last_name}</td>
              <td>{work.task_status === 1 ? <i className="fa fa-check completed" /> : <i className="fa fa-times pending" />}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination mx-3">
        <button className="btn btn-primary mx-3" onClick={() => fetchWorkList(prevPage)} disabled={!prevPage}>
          Previous
        </button>
        <button className="btn btn-primary mx-3" onClick={() => fetchWorkList(nextPage)} disabled={!nextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Worklist;
