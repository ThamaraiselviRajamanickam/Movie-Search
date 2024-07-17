import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Image,
  Text,
  Button,
  Input,
} from "@chakra-ui/react";

export default function Samplefectch() {
  const apiKey = "3fe90cecfcc38ef67d50ec03aad99141";
  let [movie, setmovie] = useState([]);
  let [search, setSearch] = useState("");
  let [searchMovieData, setSearchMovieData] = useState([]);
  const fetchData = (q) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${q} `
    )
      .then((res) => res.json())
      .then((data) => {
        setmovie(data.results);
        setSearchMovieData(data.results);
        console.log(data);
      });
  };



  useEffect(() => {
    fetchData("a");
  }, []);



  const filterData = () => {
    let filterTitle = movie.filter((prod) => {
      return prod.title.toLowerCase().includes(search.toLowerCase());
    });
    setSearchMovieData([...filterTitle]);
    fetchData(search);
    console.log(filterTitle);
  };

  
  return (
    <div className="containter">
      <Input
        type="text"
        placeholder="Search Movie Name"
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginTop: "50px", marginBottom: "20px" }}
      />
      <Button variant="solid" colorScheme="blue" onClick={() => filterData()}>
        Search
      </Button>

      {searchMovieData.map((mov) => {
        return (
          <Card
          key={mov.id}
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            m={5}
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
              alt="Caffe Latte"
            />

            <Stack>
              <CardBody>
                <Heading size="md">{mov.title}</Heading>
                <Text py="2">Release-Date: {mov.release_date}</Text>
                <Text py="2">Rating: {mov.vote_count}</Text>
                <Text py="2">{mov.overview}</Text>
              </CardBody>
            </Stack>
          </Card>
        );
      })}
    </div>
  );
}
