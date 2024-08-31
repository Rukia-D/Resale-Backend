const axios = require('axios');

const API = "https://aviral.iiita.ac.in/api";

const logUser = async (ldapCreds) => {
  try {
    const data = await axios.post(`${API}/login/`, ldapCreds);
    return data;
  } catch (e) {
    console.log(e);
    return;
  }
};

const verifyUser = async (ldapCreds) => {
  try {
    const res = await axios.post(`${API}/login/`, ldapCreds);
    return res.data.user_group ? true : false;
  } catch (e) {
    console.log(e);
    return;
  }
};

const getDashboard = async (jwt_token, session) => {
  try {
    const res = await axios.get(`${API}/student/dashboard/`, {
      headers: {
        Authorization: jwt_token,
        Session: session,
      },
    });
    return res;
  } catch (e) {
    console.log(e);
    return null;
  }
};

module.exports = {
  logUser,
  verifyUser,
  getDashboard,
};