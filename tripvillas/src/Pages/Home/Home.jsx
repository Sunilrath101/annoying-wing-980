import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
import { Box, Heading } from "@chakra-ui/react";
import Searchbar from "../../Components/Searchbar/Searchbar";
import BoxSlider from "./BoxSlider";
import HomeImageBox from "../../Components/HomeImageBox/HomeImageBox";
import HomeCard from "../../Components/HomeCard/HomeCard";
import Footer from "../../Components/Footer/Footer.jsx";
import axios from "axios";

const Home = () => {
  const [bodyData, setBodyData] = useState();

  const fetchBodyData = () => {
    axios
      .get("https://long-plum-mite-cape.cyclic.app/bodySection")
      .then((res) => setBodyData(res.data))
      .catch((err) => console.log(err));
  };


  useEffect(() => {
    fetchBodyData();
  }, []);

  return (
    <>
      <div className={style.main}>
        {/* Sectio 1 */}

        <div className={style.section1}>
          <div className={style.box}>
            <h1>Book <strike>Hotels</strike> Vacation Rentals</h1>
            <h1>op Holiday Homes - Villas, Apartments & Homestays</h1>
            <Searchbar />
          </div>
        </div>

        {/* HomeImageBox Slider */}

        <Box p="40px">
          <Heading as="h2" m="10px 0">
            Top Destination
          </Heading>
          <BoxSlider q="topDestinations"/>
        </Box>

        {/* Section - 3 */}

        <div className={style.section3}>
          <div className={style.left}>
            <h2>Fully Managed Communities By Tripvillas</h2>
            <div>
              <div>
                <img
                  src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/housekeeper.svg"
                  alt=""
                />
                <p>High Quality housekeeping</p>
              </div>
              <div>
                <img
                  src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/towel.svg"
                  alt=""
                />
                <p>Comfortable Linen and Toiletries</p>
              </div>
              <div>
                <img
                  src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/bed.svg"
                  alt=""
                />
                <p>Quality Furniture & Fittings</p>
              </div>
              <div>
                <img
                  src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/dinner.svg"
                  alt=""
                />
                <p>Food Delivery Or Central Restaurant</p>
              </div>
            </div>
          </div>
          <div className={style.right}>
            {bodyData &&
              bodyData.map((item) => {
                return (
                  <HomeImageBox
                    name={item.name}
                    img={item.img}
                    location={item.location}
                  />
                );
              })}
          </div>
        </div>

        {/* Sectio - 4 */}

        <div className={style.section4}>
          <HomeCard />
          <HomeCard />
        </div>

        <Box p="40px">
          <Heading as="h2" m="10px 0">
            Vacation Ideas
          </Heading>
          <BoxSlider q="vacationIdeas"/>
        </Box>
      </div>

      <footer>
        <h2>Holiday Homes Across The Globe</h2>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
