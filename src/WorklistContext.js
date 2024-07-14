import React, { createContext, useState } from 'react';

export const WorklistContext = createContext();

export const WorklistProvider = ({ children }) => {
  const [worklists, setWorklists] = useState([]);

  const handleStatusUpdate = (taskId, newStatus) => {
    console.log(`Updating task ${taskId} to status ${newStatus}`);
    setWorklists((prevWorklists) =>
      prevWorklists.map((work) =>
        work.task_id === taskId ? { ...work, task_status: newStatus } : work
      )
    );
  };

  return (
    <WorklistContext.Provider value={{ worklists, setWorklists, handleStatusUpdate }}>
      {children}
    </WorklistContext.Provider>
  );
};
