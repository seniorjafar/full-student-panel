import { useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";

const Students = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchStudents = async () => {
    try {
      const res = await fetch("http://localhost:3000/students");
      const data = await res.json();
      setAllPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  useEffect(() => {
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    const displayedStudents = allPosts.slice(startIndex, endIndex);
    setStudents(displayedStudents);
    setTotalPages(Math.ceil(allPosts.length / 10));
  }, [allPosts, currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderStudentsTable = () => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.ID}>
              <td scope="col">{student.ID}</td>
              <td scope="col">{student.Name}</td>
              <td scope="col">{student.Class}</td>
              <td scope="col">{student.Gender}</td>
              <td scope="col">
                <button
                  className="btn btn-outline-success me-3"
                  onClick={() => handleEdit(student.ID)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleDelete(student.ID)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const renderPagination = () => {
    const items = [];
    for (let number = 1; number <= totalPages; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => handlePageChange(number)}
        >
          {number}
        </Pagination.Item>
      );
    }
    return (
      <Pagination size="sm">
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {items}
        <Pagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    );
  };

  return (
    <div className="container">
      <ul className="p-5">
        {renderStudentsTable()}
      </ul>
      {renderPagination()}
    </div>
  );
};

export default Students;