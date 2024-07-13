import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import DescriptionPage from "./DescriptionPage";
import "./css/card.css";
import "./css/worklist.css";
import axios from "axios";

const Worklist = () => {
  const [totalRecords, setTotalRecords] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [firstPage, setFirstPage] = useState(0);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const[worklists,setWorklists]=useState([]);

  useEffect(()=>{
    fetchWorkList();
  },[]);
  const fetchWorkList=async()=>{
      const config = {
          headers: {
            
            "Content-Type": "application/json",
            "Authorization": `Bearer session_token`
          },
        };
    try{
      const response=await axios.get("http://api.bike-csecu.com/api/task",config);
      console.log(response.data);
      if (response.data && Array.isArray(response.data.tasks)) {
        setWorklists(response.data.tasks);
        setTotalRecords(response.data.total_records);
        setPageCount(response.data.page_count);
        setFirstPage(response.data.first_page);
        setNextPage(response.data.next);
        setPrevPage(response.data.previous);
        console.log(worklists.length)
      }
      else{
        console.log(response.status)
      }
    }catch(error){
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
          {worklists && worklists.map((work) => (
            <tr key={work.task_id}>
              <td>{work.task_id}</td>
              <td><Link to={`/description/${work.task_id}`}>{work.task_title}<DescriptionPage work={work}/></Link></td>
              <td>{work.assign_date ? new Date(work.assign_date).toLocaleDateString() : ''}</td>
              <td>{work.due_date ? new Date(work.due_date).toLocaleDateString() : ''}</td>
              <td>{work.first_name} {work.last_name}
              </td>
              <td >{work.task_status === 1 ? <i className="fa fa-check completed"/> : <i className="fa fa-times pending"/>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Worklist;
