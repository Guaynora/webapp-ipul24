import { useContext, useEffect, useState } from "react";
import AddButton from "../../components/button/AddButton";
import Table from "../../components/table/Table";
import TopComponent from "../../components/navTop/TopComponent";
import AuthContext from "../../context/AuthContext";
import { Redirect } from "react-router-dom";
import useData from "../../hooks/useData";
import "../../styles/pages.css";
import Pagination from "../../components/Pagination";
import { getData } from "../../lib/api";

function Members() {
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [postPerPage, setPostPerPage] = useState(5);
  const [data, setData] = useState([]);
  const { token } = useContext(AuthContext);

  const onChangePage = (pageChange) => {
    setCurrentPage(pageChange);
  };

  const lasPostIndex = currentPage * postPerPage;
  const firstPostIndex = lasPostIndex - postPerPage;

  useEffect(() => {
    const getCount = async () => {
      const response = await getData(
        `${process.env.REACT_APP_APIURL}/members/count`,
        token
      );

      setCount(response);
    };

    getCount();
  }, []);

  useEffect(() => {
    const getMembers = async () => {
      const response = await getData(
        `${process.env.REACT_APP_APIURL}/members?_start=${firstPostIndex}&_limit=${postPerPage}`,
        token
      );

      setData(response);
    };
    getMembers();
  }, [currentPage]);

  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
    <section className="container">
      <TopComponent back={false} />
      <div className="title-button mx-6 mt-4">
        <h3 className="title is-4 m-0">Miembros</h3>
        <AddButton text="miembro" />
      </div>

      <div className="table-container p-6">
        <Pagination
          currentPage={currentPage}
          onChangePage={onChangePage}
          count={count}
          postPerPage={postPerPage}
        />
        <Table datas={data} type="member" />
      </div>
    </section>
  );
}

export default Members;
