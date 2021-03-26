import axios from "axios";
const KEY = "19837297-3c1eb29d6cccb9d5ee4225e8f";
const axiosApi = ({ search = "", page = 1 }) => {
  console.log(search, page);
  return axios
    .get(
      `https://pixabay.com/api/?key=${KEY}&q=${search}&page=${page}
      &image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data);
};
export default axiosApi;
