import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=200&nat=us";

const API = {
  getPeople: function () {
    return axios.get(BASEURL);
  },
};
export default API;
