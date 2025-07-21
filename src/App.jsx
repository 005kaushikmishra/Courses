import { useEffect, useState } from "react";
import "./App.css";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { apiUrl, filterData } from "./Data";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./Components/Spinner";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  function filterhandler(title) {
    setCategory(title);
  }

  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      setCourses(output.data);
      setLoading(false);
    } catch (error) {
      toast.error("Something went wrong");
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        {loading ? (
          <Spinner />
        ) : (
          <Cards
            courses={courses}
            category={category}
            filterHandler={filterhandler}
          />
        )}
      </div>
      {/* <Filter
        filterData={filterData}
        filterhandler={filterhandler}
        category={category}
      ></Filter> */}
      <ToastContainer position="top-center" autoClose={1500} />
    </div>
  );
}
export default App;
