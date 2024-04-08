import React from "react";
import Card from "./Card";
import "./css/card.css";
import "./css/worklist.css";

const Worklist = () => {
  return (
    <div className="card-container">
      
        <h3>Worklist</h3>
        <table className="worklist-table">
          <thead>
            <tr>
              <th>SL</th>
              <th>Title</th>
              <th>Description</th>
              <th>Date</th>
              <th>Due Date</th>
              <th>Assigned by</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Attendance List</td>
              <td>For publishing 6 th semester result we need attendance sheet.Send me 6th semester attendance sheet within due date.</td>
              <td>2024-04-03</td>
              <td>2024-04-10</td>
              <td>Dr. Abu Nowshed</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>2</td>
              <td>ITEE Student list </td>
              <td>BCC are asked to me to send student list who are enroll the itee exam. Now you will send me all student list who will enroll in itee exam.</td>
              <td>2024-04-04</td>
              <td>2024-04-12</td>
              <td>Dr. Sanaullah Chowdury</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Seat Planing </td>
              <td>The 4th-semester exams will commence on April 17th. Please arrange seat planing  in the  room number 314 for the exams before April 16th.</td>
              <td>2024-04-08</td>
              <td>2024-04-16</td>
              <td>Dr. Rudro Protap Debnath</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>4</td>
              <td>3rd semester mark sheet </td>
              <td>

The 3rd semester results are ready. Please send these mark sheets to the exam controller by the due date.</td>
              <td>2024-04-16</td>
              <td>2024-04-20</td>
              <td>Dr. Rokun Uddin Faruqi</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>5</td>
              <td>2nd Semester Lab exam </td>
              <td>The 2nd semester CSE 212 lab exam will start on April 18th. On this day, Room 414, the lab room, must be open from 9 am to 4 pm.</td>
              <td>2024-04-15</td>
              <td>2024-04-18</td>
              <td>Dr. Abu Nowshed Chowdhury</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Collect Admit Card </td>
              <td>The admit cards for the 4th semester are ready. Please collect them from the exam controller before the due date.</td>
              <td>2024-04-12</td>
              <td>2024-04-15</td>
              <td>Dr. Rudro Protap Debnath</td>
              <td>Pending</td>
            </tr>
            {/* Add more rows for additional tasks */}
          </tbody>
        </table>
      
    </div>
  );
};

export default Worklist;
