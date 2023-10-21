import prodStyles from "./proceed.module.css";
import { Outlet, Link } from "react-router-dom";
import { ProgressBar } from "primereact/progressbar";
import "./primereactMod.css";

function LinkedInURL() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');


  const runAPICall = async (userInput) => {
      const response = await fetch(`${API_URL}&s=${userInput}`);
      const data = await response.json();

      setMovies(data.Search);
      const options = {
          method: 'GET',
          url: 'https://fresh-linkedin-profile-data.p.rapidapi.com/get-linkedin-profile',
          params: {
              linkedin_url: userInput
          },
          headers: {
              'X-RapidAPI-Key': '8ab75dc3a8msha344a040be8951fp1dec19jsn10dadc3792131',
              'X-RapidAPI-Host': 'fresh-linkedin-profile-data.p.rapidapi.com'
          }
      };

      try {
          const response = await axios.request(options);
          setMovies(response.data);
      } catch (error) {
          console.error(error);
      }
    
  };
  return (
    <>
      <div className={prodStyles.proceed}>
        <h1>Insert your LinkedIn URL</h1>
        <p style={{ color: "gray", margin: "0px 0 20px", fontSize: "14px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          nobis, aliquid quia, quasi totam eligendi debitis itaque eaque
        </p>
        <div className={prodStyles.progressBar}>
          <span style={{ color: "gray", fontSize: "14px" }}>80% Completed</span>
          <ProgressBar style={{ height: "15px" }} value={80}></ProgressBar>
        </div>

        <form id="linkedin" className={prodStyles.eduList}>
          <div className={prodStyles.fields}>
          <div>
            <span style={{ marginLeft: "10px" }}>
              LinkedIn URL <span style={{ color: "#f85500" }}>*</span>
            </span>
            <label htmlFor="linkedinURL">
              <input
                type="url"
                name="linkedinURL"
                id="linkedinURL"
                placeholder="Enter your LinkedIn Profile URL"
                required
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>
          </div>
          </div>
        </form>

        <div className={prodStyles.BackNextBtn}>
          <button style={{ border: "2px solid lightgray" }}>
            <Link to="/proceed" style={{ textDecoration: "none" }}>
              Go Back
            </Link>
          </button>
          <button
            form="others"
            type="submit"
            onClick={() => runAPICall(search)}
            style={{
              color: "white",
              border: "none",
              backgroundColor: "#1E1E1E",
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default LinkedInURL;
