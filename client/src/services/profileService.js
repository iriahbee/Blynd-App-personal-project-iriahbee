// You can create all the fetches to your own APIs and externals APIs here
// This example fetch is specifically for our Profile API and is why the file is called profileService.js
import axios from "axios";
import Swal from "sweetalert2";

const getAllProfiles = async () => {
  const response = await axios.get(`/users`);
  return response.data || [];
};

const postUser = async (user) => {
  await axios
    .post("/user", user)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      if (error.response) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data,
        });
        console.log(error);
      }
    });
};

// All of the endpoints in this file can be exported below
export { getAllProfiles, postUser };
